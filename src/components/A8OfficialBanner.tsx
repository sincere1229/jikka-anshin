'use client'

import { A8_OFFICIAL_BANNERS } from '@/data/a8OfficialBanners'

type Props = {
  /** src/data/a8OfficialBanners.ts のキー */
  id: string
  /** バナーの外側に表示する説明文（A8コード内部には含めない） */
  description?: string
}

/**
 * A8公式バナーコードを無改変で描画するコンポーネント。
 *
 * 【禁止事項（実装時に厳守）】
 * - officialHtmlの中身（クリックURL・画像URL・width/height/alt・
 *   1×1インプレッションタグ・a8matパラメータ）を分解・変更・再構築しない
 * - officialHtmlの外側で画像を引き伸ばしたり変形させない
 * - officialHtmlの中にclassName/style/loading属性を追加しない
 * - Next.js Imageコンポーネントへ変換しない
 * - 外部入力・CMSからHTMLを受け取らない（このコンポーネントは
 *   src/data/a8OfficialBanners.ts の信頼済みローカル定数のみを参照する）
 *
 * 外側のラッパーで行ってよいこと：中央寄せ・上下余白・「広告・PR」表示・
 * 説明文・スマホ幅を超えた場合の横スクロール許容（overflow-x: auto）。
 */
export default function A8OfficialBanner({ id, description }: Props) {
  const banner = A8_OFFICIAL_BANNERS[id]

  // 未設定・未取得の場合は本番では何も描画しない
  if (!banner || !banner.officialHtml || banner.status === 'unplaced') {
    if (process.env.NODE_ENV === 'development') {
      return (
        <div style={{ border: '1px dashed #ccc', padding: 8, fontSize: 11, color: '#999', textAlign: 'center' }}>
          [A8公式バナー未設定: {id}]
        </div>
      )
    }
    return null
  }

  return (
    <div style={{ margin: '12px 0', textAlign: 'center' }}>
      <span style={{ display: 'block', fontSize: 10, color: '#9ca3af', marginBottom: 4 }}>
        広告・PR
      </span>
      {description && (
        <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 8px', lineHeight: 1.5 }}>
          {description}
        </p>
      )}
      {/*
        officialHtmlはA8管理画面から取得したコード全文をそのまま描画する。
        overflow-x: auto はラッパー側のみに適用し、画像自体のサイズは変更しない。
      */}
      <div style={{ display: 'inline-block', maxWidth: '100%', overflowX: 'auto' }}>
        <div dangerouslySetInnerHTML={{ __html: banner.officialHtml }} />
      </div>
    </div>
  )
}
