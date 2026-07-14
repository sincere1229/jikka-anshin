import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '実家コラム一覧 | 実家どうするナビ',
  description: '実家の売却・賃貸・空き家・相続・同居について50記事以上の無料コラムを公開しています。',
}

const COLUMNS: { id: string; label: string; articles: { id: number; title: string }[] }[] = [
  { id: 'hajimete', label: "🏡 実家どうする？基礎知識", articles: [{"id": 1, "title": "実家をどうするか迷ったらまず読む記事"}, {"id": 2, "title": "親が高齢になったら考えること"}, {"id": 3, "title": "実家の名義・権利関係を確認する方法"}, {"id": 4, "title": "実家の固定資産税を確認する方法"}, {"id": 5, "title": "実家を将来どうするか家族会議の進め方"}, {"id": 6, "title": "実家の片付け・生前整理の進め方"}, {"id": 7, "title": "実家に関わる法律の基礎知識"}, {"id": 8, "title": "実家問題を専門家に相談するには"}, {"id": 9, "title": "実家に関する補助金・支援制度まとめ"}, {"id": 10, "title": "実家問題でよくある後悔と防ぎ方"}] },
  { id: 'baikyaku-col', label: "🏷️ 売却・買取", articles: [{"id": 1, "title": "実家売却の流れと費用【完全ガイド】"}, {"id": 2, "title": "不動産一括査定サービスの比較と使い方"}, {"id": 3, "title": "実家売却で損しないための注意点"}, {"id": 4, "title": "実家が売れない場合の対処法"}, {"id": 5, "title": "築古・訳あり物件の売却方法"}, {"id": 6, "title": "実家売却の税金と確定申告"}, {"id": 7, "title": "リースバックとは？仕組みと注意点"}, {"id": 8, "title": "不動産買取と仲介の違い"}, {"id": 9, "title": "共有名義の実家を売却する方法"}, {"id": 10, "title": "実家売却後の引っ越しと残置物処理"}, {"id": 11, "title": "築古・空き家でも売れる？訳あり物件買取サービス「ワケガイ」を活用する前に知っておきたいこと"}, {"id": 12, "title": "空き家を放置していませんか？現状渡しOKの買取サービスで手放すまでの流れを解説"}] },
  { id: 'akiya-col', label: "🏚️ 空き家対策", articles: [{"id": 1, "title": "空き家を放置するとどうなる？リスクと対策"}, {"id": 2, "title": "特定空き家に指定されないための対策"}, {"id": 3, "title": "空き家の管理方法と管理サービス"}, {"id": 4, "title": "空き家バンクへの登録方法"}, {"id": 5, "title": "空き家のリフォーム・リノベーション費用"}, {"id": 6, "title": "空き家の解体費用と補助金"}, {"id": 7, "title": "空き家を民泊・シェアハウスにする方法"}, {"id": 8, "title": "相続した空き家の売却と税金"}, {"id": 9, "title": "田舎の空き家をどうするか"}, {"id": 10, "title": "空き家になる前にできる予防策"}, {"id": 11, "title": "親の遺品整理、自分たちだけでは無理？プロに頼む前に知っておきたいこと"}] },
  { id: 'sozoku-col', label: "⚖️ 相続・名義", articles: [{"id": 1, "title": "実家の相続でもめないための5つの準備"}, {"id": 2, "title": "相続登記の義務化と手続き方法"}, {"id": 3, "title": "実家を誰が相続するか決める方法"}, {"id": 4, "title": "実家の相続税の計算方法"}, {"id": 5, "title": "遺産分割協議書の書き方"}, {"id": 6, "title": "相続放棄の手続きと注意点"}, {"id": 7, "title": "生前贈与で実家を子供に渡す方法"}, {"id": 8, "title": "家族信託で実家を管理する方法"}, {"id": 9, "title": "実家の相続でよくあるトラブルと解決法"}, {"id": 10, "title": "税理士・司法書士・弁護士の選び方"}, {"id": 11, "title": "相続手続きは何から始める？専門家チームに丸ごと任せる「相続アシスト」とは"}] },
  { id: 'chintai-col', label: "🏠 賃貸・活用", articles: [{"id": 1, "title": "実家を賃貸に出すメリット・デメリット"}, {"id": 2, "title": "賃貸管理会社の選び方と手数料"}, {"id": 3, "title": "サブリース契約の仕組みと注意点"}, {"id": 4, "title": "実家をリフォームして賃貸に出す費用"}, {"id": 5, "title": "実家の賃貸収入の確定申告方法"}, {"id": 6, "title": "実家を民泊で活用する方法"}, {"id": 7, "title": "農地付きの実家の活用方法"}, {"id": 8, "title": "実家を事務所・店舗として使う方法"}, {"id": 9, "title": "空き家を活用した地域貢献の方法"}, {"id": 10, "title": "実家の賃貸と売却、どちらが得かシミュレーション"}] },
  { id: 'dokyo-col', label: "👨‍👩‍👧 同居・二世帯", articles: [{"id": 1, "title": "親との同居を成功させる7つのルール"}, {"id": 2, "title": "二世帯住宅のメリット・デメリット"}, {"id": 3, "title": "同居前に決めておくべきお金のルール"}, {"id": 4, "title": "義親との同居を成功させるポイント"}, {"id": 5, "title": "親との近居のメリットと補助金"}, {"id": 6, "title": "二世帯住宅リフォームの費用相場"}, {"id": 7, "title": "同居解消・別居の進め方"}, {"id": 8, "title": "介護が必要になったときの同居対応"}, {"id": 9, "title": "二世帯住宅の相続税節税効果"}, {"id": 10, "title": "実家への引っ越し準備チェックリスト"}, {"id": 11, "title": "実家のリフォーム業者はどう選ぶ？一括見積もりサービスで比較する前に知っておきたいこと"}] }
]

export default function ColumnIndex() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>実家コラム一覧</h1>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>全50記事・無料でお読みいただけます</p>
      {COLUMNS.map(cat => (
        <div key={cat.id} style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#374151', marginBottom: 10, paddingBottom: 6, borderBottom: '0.5px solid #e5e7eb' }}>{cat.label}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {cat.articles.map(a => (
              <Link key={a.id} href={`/column/${cat.id}/${a.id}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '11px 14px', textDecoration: 'none' }}>
                <span style={{ fontSize: 11, color: '#9ca3af', flexShrink: 0, minWidth: 20 }}>{a.id}</span>
                <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{a.title}</span>
                <span style={{ fontSize: 12, color: '#d1d5db', marginLeft: 'auto', flexShrink: 0 }}>›</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
