import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'おすすめサービス一覧 | 実家どうするナビ' }
const SERVICES = [
  { category: '🏷️ 不動産買取・査定', items: [
    { name: 'ワケガイ（訳あり物件買取）', desc: '訳あり・築古・空き家も買取。最短2週間で現金化。', badge: '買取', url: 'https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX' },
    { name: 'ラクウル（不動産買取）', desc: '不動産の買取専門。最短3日で査定結果。', badge: '買取', url: 'https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX' },
    { name: 'ミライアス（リースバック）', desc: '自宅を売却後もそのまま住み続けられるリースバック。', badge: 'リースバック', url: 'https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX' },
  ]},
  { category: '💼 相談・FP', items: [
    { name: 'FP無料相談（保険チャンネル）', desc: '相続・不動産・老後資金をFPに無料相談できます。', badge: '無料相談', url: 'https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX' },
  ]},
]
export default function RecommendPage() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>おすすめサービス一覧</h1>
      <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 20 }}>※ 本ページはアフィリエイト広告を含みます</p>
      {SERVICES.map((sec, i) => (
        <div key={i} style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: '#374151', marginBottom: 10 }}>{sec.category}</h2>
          {sec.items.map((item, j) => (
            <a key={j} href={item.url} target="_blank" rel="nofollow noopener noreferrer"
              style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', marginBottom: 8, textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#1f2937' }}>{item.name}</span>
                <span style={{ fontSize: 10, background: '#fefce8', color: '#92400e', borderRadius: 4, padding: '2px 6px' }}>{item.badge}</span>
              </div>
              <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>{item.desc}</p>
            </a>
          ))}
        </div>
      ))}
    </main>
  )
}
