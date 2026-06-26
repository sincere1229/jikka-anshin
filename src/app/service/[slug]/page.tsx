// ============================================================
// ASP提携申請用 固定紹介ページ
// URL例: /service/wakegai / /service/rakuuru-sozoku
// 導線: コラム → このページ → アフィリエイトリンク
// ============================================================
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const SERVICES: Record<string, {
  name: string; tagline: string; overview: string
  features: string[]; forWho: string[]; notFor: string[]
  caution: string[]; steps: string[]
  faq: { q: string; a: string }[]
  ctaText: string; affiliateUrl: string
  imgUrl?: string; imgWidth?: number; imgHeight?: number; impUrl?: string
  asp: string; category: string
  relatedColumns: { cat: string; id: number; title: string }[]
}> = {
  'wakegai': {
    name: 'ワケガイ（訳あり物件買取）',
    tagline: '訳あり・築古・空き家も買取。最短2週間で現金化。',
    overview: '訳あり・築古・空き家など通常の売却が難しい物件を専門に買取るサービスです。仲介不要で直接買取るため、最短2週間で現金化が可能です。全国対応・現状渡しOK。',
    features: ['訳あり・築古・空き家でも買取可能', '最短2週間で現金化', '仲介手数料ゼロ（直接買取）', '現状渡しOK（片付け不要）', '全国対応', '無料査定あり'],
    forWho: ['急いで実家・空き家を処分したい方', '築古・訳ありで仲介が難しい物件をお持ちの方', '遠方で管理できない空き家をお持ちの方', '相続した不動産を早期に売却したい方'],
    notFor: ['できるだけ高値で売却したい方（仲介の方が有利な場合あり）', '売却を急いでいない方'],
    caution: ['買取価格は仲介売却より低くなる場合があります', '査定結果は物件の状態・立地により異なります', '詳細条件は公式サイトでご確認ください'],
    steps: ['無料査定を申し込む（1〜2分）', '担当者が物件を確認・査定価格を提示', '条件に合意したら売買契約を締結', '決済・引き渡し（最短2週間）'],
    faq: [
      { q: 'どんな物件でも買取ってもらえますか？', a: '築古・空き家・訳あり物件を専門としていますが、物件の状態・立地により対応できない場合もあります。まず無料査定でご相談ください。' },
      { q: '査定費用はかかりますか？', a: '無料で査定を受けられます。査定後に売却するかどうかを決めていただければ問題ありません。' },
      { q: '仲介との違いは何ですか？', a: '仲介は買主を探して売却するため時間がかかりますが、買取は業者が直接購入するため早期現金化が可能です。その分、価格は仲介より低くなる場合があります。' },
    ],
    ctaText: 'まずは無料査定を申し込む',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+BH6VDM+5J56+5Z6WX',
    imgUrl: 'https://www28.a8.net/svt/bgt?aid=260521603694&wid=002&eno=01&mid=s00000025809001004000&mc=1',
    imgWidth: 100, imgHeight: 60,
    impUrl: 'https://www10.a8.net/0.gif?a8mat=4B3VR7+BH6VDM+5J56+5Z6WX',
    asp: 'A8', category: '不動産買取',
    relatedColumns: [
      { cat: 'baikyaku-col', id: 5, title: '築古・訳あり物件の売却方法' },
      { cat: 'baikyaku-col', id: 8, title: '不動産買取と仲介の違い' },
      { cat: 'akiya-col', id: 1, title: '空き家を放置するとどうなる？' },
    ],
  },
  'rakuuru-sozoku': {
    name: 'ラクウル（相続不動産売却）',
    tagline: '相続した不動産の売却なら。最短3日で査定結果。',
    overview: 'ラクウルは相続した不動産の売却を専門とするサービスです。複雑な相続手続きと並行して、スピーディーに不動産を売却できます。最短3日で査定結果が出ます。',
    features: ['相続不動産の売却を専門サポート', '最短3日で査定結果', '相続手続きと並行して進められる', '全国対応'],
    forWho: ['相続した不動産を売却したい方', '相続手続きと並行して不動産を処分したい方', '遠方の相続不動産を管理できない方'],
    notFor: ['急いで売却する必要がない方', 'できるだけ高値を目指したい方'],
    caution: ['査定価格は保証ではありません', '相続登記が完了していない場合、別途手続きが必要です'],
    steps: ['物件情報を入力して査定依頼', '3日以内に査定結果を提示', '売却条件に合意したら契約', '代金受領・引き渡し'],
    faq: [
      { q: '相続登記が済んでいなくても相談できますか？', a: 'はい、相談は可能です。登記手続きと並行して進める方法についてもアドバイスします。' },
      { q: '相続人が複数人いても対応できますか？', a: '対応可能です。ただし売却には相続人全員の合意が必要となります。' },
    ],
    ctaText: '無料で査定を依頼する',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+C8KT7E+56AO+BY641',
    imgUrl: 'https://www20.a8.net/svt/bgt?aid=260521603740&wid=002&eno=01&mid=s00000024144002007000&mc=1',
    imgWidth: 300, imgHeight: 250,
    impUrl: 'https://www10.a8.net/0.gif?a8mat=4B3VR7+C8KT7E+56AO+BY641',
    asp: 'A8', category: '不動産買取',
    relatedColumns: [
      { cat: 'sozoku-col', id: 1, title: '実家の相続でもめないための5つの準備' },
      { cat: 'baikyaku-col', id: 1, title: '実家売却の流れと費用【完全ガイド】' },
    ],
  },
  'rakuuru-akiya': {
    name: 'ラクウル（空き家・中古戸建買取）',
    tagline: '空き家・中古戸建て買取専門。現状のままで査定OK。',
    overview: '空き家・中古戸建て買取に特化したサービスです。片付けや修繕をしなくても現状のまま査定・買取が可能です。',
    features: ['空き家・中古戸建て買取に特化', '現状渡しOK（片付け・修繕不要）', '最短3日で査定結果', '固定資産税・維持費の負担がなくなる'],
    forWho: ['空き家の管理に困っている方', '遠方で管理できない空き家をお持ちの方', '古い家で売却が難しいと思っている方'],
    notFor: ['高値での売却を優先したい方'],
    caution: ['買取価格は仲介売却より低くなる場合があります', '物件状況により対応できないケースもあります'],
    steps: ['物件情報を入力して査定申込', '最短3日で査定結果を回答', '合意したら売買契約', '現金受領・引き渡し'],
    faq: [
      { q: '荷物が残っていても査定できますか？', a: 'はい、現状のままで査定します。' },
      { q: '築年数が古くても大丈夫ですか？', a: '築古物件も対象です。まずご相談ください。' },
    ],
    ctaText: '無料で空き家査定を申し込む',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+C968T6+56AO+HW2Q9',
    imgUrl: 'https://www22.a8.net/svt/bgt?aid=260521603741&wid=002&eno=01&mid=s00000024144003005000&mc=1',
    imgWidth: 468, imgHeight: 120,
    impUrl: 'https://www15.a8.net/0.gif?a8mat=4B3VR7+C968T6+56AO+HW2Q9',
    asp: 'A8', category: '不動産買取',
    relatedColumns: [
      { cat: 'akiya-col', id: 1, title: '空き家を放置するとどうなる？リスクと対策' },
      { cat: 'akiya-col', id: 2, title: '特定空き家に指定されないための対策' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = SERVICES[params.slug]
  if (!s) return { title: 'サービス紹介 | 実家どうするナビ' }
  return { title: `${s.name} | 実家どうするナビ`, description: s.tagline }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = SERVICES[params.slug]
  if (!s) notFound()

  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <div style={{ marginBottom: 14 }}>
        <Link href="/" style={{ fontSize: 11, color: '#6b7280', textDecoration: 'none' }}>← 実家どうするナビ</Link>
        <span style={{ fontSize: 11, color: '#9ca3af', margin: '0 4px' }}>/</span>
        <span style={{ fontSize: 11, color: '#9ca3af' }}>サービス紹介</span>
      </div>
      <p style={{ fontSize: 11, color: '#9ca3af', marginBottom: 12 }}>※本ページにはアフィリエイト広告が含まれます（{s.asp}）</p>

      {s.imgUrl && (
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <a href={s.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer">
            <img src={s.imgUrl} alt={s.name} width={Math.min(s.imgWidth ?? 300, 300)} style={{ maxWidth: '100%', maxHeight: 200, objectFit: 'contain', borderRadius: 8 }} />
          </a>
          {s.impUrl && <img src={s.impUrl} width={1} height={1} style={{ border: 'none', display: 'block', margin: '0 auto' }} loading="lazy" alt="" />}
        </div>
      )}

      <div style={{ background: 'linear-gradient(135deg, #f0faf0, #e8f5e8)', border: '1.5px solid #90c890', borderRadius: 14, padding: '16px', marginBottom: 16, textAlign: 'center' }}>
        <p style={{ fontSize: 11, color: '#2d6a2d', fontWeight: 700, marginBottom: 6 }}>{s.category}</p>
        <h1 style={{ fontSize: 18, fontWeight: 800, color: '#1a2d1a', marginBottom: 8, lineHeight: 1.4 }}>{s.name}</h1>
        <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, margin: 0 }}>{s.tagline}</p>
      </div>

      {[
        { title: 'サービス概要', content: <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{s.overview}</p> },
        { title: '主な特徴', content: s.features.map((f, i) => <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}><span style={{ color: '#2d6a2d', fontWeight: 700 }}>✓</span><span style={{ fontSize: 13, color: '#374151' }}>{f}</span></div>) },
      ].map((sec, idx) => (
        <div key={idx} style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '14px', marginBottom: 14 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, color: '#1a2d1a', marginBottom: 10, borderLeft: '3px solid #2d6a2d', paddingLeft: 8 }}>{sec.title}</h2>
          {sec.content}
        </div>
      ))}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
        <div style={{ background: '#f0faf0', border: '1px solid #b8ddb8', borderRadius: 10, padding: '12px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#1a5a1a', marginBottom: 8 }}>✓ 向いている人</p>
          {s.forWho.map((f, i) => <p key={i} style={{ fontSize: 11, color: '#374151', lineHeight: 1.5, marginBottom: 4 }}>・{f}</p>)}
        </div>
        <div style={{ background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: 10, padding: '12px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', marginBottom: 8 }}>✗ 向いていない人</p>
          {s.notFor.map((f, i) => <p key={i} style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.5, marginBottom: 4 }}>・{f}</p>)}
        </div>
      </div>

      <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '14px', marginBottom: 14 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: '#1a2d1a', marginBottom: 10, borderLeft: '3px solid #2d6a2d', paddingLeft: 8 }}>ご利用の流れ</h2>
        {s.steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#2d6a2d', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
            <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{step}</span>
          </div>
        ))}
      </div>

      <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 10, padding: '12px', marginBottom: 14 }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#92400e', marginBottom: 6 }}>⚠ ご利用前にご確認ください</p>
        {s.caution.map((c, i) => <p key={i} style={{ fontSize: 11, color: '#78350f', lineHeight: 1.5, marginBottom: 3 }}>・{c}</p>)}
      </div>

      <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '14px', marginBottom: 14 }}>
        <h2 style={{ fontSize: 13, fontWeight: 700, color: '#1a2d1a', marginBottom: 10, borderLeft: '3px solid #2d6a2d', paddingLeft: 8 }}>よくある質問</h2>
        {s.faq.map((f, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>Q. {f.q}</p>
            <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>A. {f.a}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'linear-gradient(135deg, #f0faf0, #e8f5e8)', border: '1.5px solid #90c890', borderRadius: 14, padding: '16px', textAlign: 'center', marginBottom: 16 }}>
        <p style={{ fontSize: 12, color: '#3d6a3d', marginBottom: 10, lineHeight: 1.6 }}>公式サイトでサービスの詳細をご確認ください</p>
        <a href={s.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer"
          style={{ display: 'block', background: 'linear-gradient(135deg, #2d6a2d, #1a5a1a)', color: '#fff', borderRadius: 10, padding: '14px', fontSize: 14, fontWeight: 800, textDecoration: 'none', marginBottom: 8 }}>
          {s.ctaText}
        </a>
        <p style={{ fontSize: 10, color: '#9ca3af', margin: 0 }}>※外部サービスへ移動します</p>
      </div>

      {s.relatedColumns.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', marginBottom: 8 }}>関連コラム</p>
          {s.relatedColumns.map((col, i) => (
            <Link key={i} href={`/column/${col.cat}/${col.id}`}
              style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '10px 12px', marginBottom: 6, textDecoration: 'none', fontSize: 13, color: '#374151' }}>
              📄 {col.title} →
            </Link>
          ))}
        </div>
      )}

      <Link href="/diagnosis/katsuyo"
        style={{ display: 'block', textAlign: 'center', background: '#1a3d1a', color: '#b8ddb8', borderRadius: 8, padding: '12px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
        📋 実家の状況を無料診断する →
      </Link>
    </main>
  )
}
