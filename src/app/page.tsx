import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '実家どうするナビ | 実家の売却・賃貸・相続を無料診断',
  description: '実家をどうすればいいか迷っている方へ。5つの無料診断で売却・賃貸・相続・空き家・同居のベストな選択肢がわかります。登録不要。',
}

const DIAGNOSES = [
  { id: 'katsuyo', emoji: '🏡', title: '実家活用タイプ診断', desc: '売却・賃貸・活用・同居、実家の最適な扱い方がわかる', time: '10問・約3分', color: '#92400e', href: '/diagnosis/katsuyo' },
  { id: 'baikyaku', emoji: '🏷️', title: '売却vs賃貸 判断診断', desc: '実家を売るべきか貸すべきかを判定', time: '10問・約3分', color: '#059669', href: '/diagnosis/baikyaku' },
  { id: 'akiya', emoji: '🏚️', title: '空き家リスク診断', desc: '放置するとどのくらいリスクがあるか判定', time: '10問・約3分', color: '#dc2626', href: '/diagnosis/akiya' },
  { id: 'sozoku', emoji: '⚖️', title: '相続対策チェック診断', desc: '相続トラブルになりやすいかどうかを判定', time: '10問・約3分', color: '#7c3aed', href: '/diagnosis/sozoku' },
  { id: 'dokyo', emoji: '👨‍👩‍👧', title: '二世帯・同居 適性診断', desc: '親との同居・二世帯住宅が向いているか判定', time: '10問・約3分', color: '#0284c7', href: '/diagnosis/dokyo' },
]

const COLUMNS = [
  { cat: 'hajimete', id: 1, title: '実家をどうするか迷ったらまず読む記事' },
  { cat: 'baikyaku-col', id: 1, title: '実家売却の流れと費用【完全ガイド】' },
  { cat: 'akiya-col', id: 1, title: '空き家を放置するとどうなる？リスクと対策' },
  { cat: 'sozoku-col', id: 1, title: '実家の相続でもめないための5つの準備' },
  { cat: 'chintai-col', id: 1, title: '実家を賃貸に出すメリット・デメリット' },
  { cat: 'dokyo-col', id: 1, title: '親との同居を成功させる7つのルール' },
]

export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '24px 16px 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <p style={{ fontSize: 12, color: '#92400e', fontWeight: 600, marginBottom: 8, letterSpacing: '0.05em' }}>登録不要・完全無料</p>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: '#1f2937', lineHeight: 1.4, marginBottom: 12 }}>実家、どうすればいいか<br />一緒に考えましょう</h1>
        <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>売る？貸す？空き家のまま？同居？<br />迷っているあなたへ。診断で答えが見えます。</p>
      </div>

      <h2 style={{ fontSize: 14, fontWeight: 700, color: '#374151', marginBottom: 12 }}>5つの無料診断</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
        {DIAGNOSES.map(d => (
          <Link key={d.id} href={d.href} style={{ display: 'flex', gap: 14, background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '14px 16px', textDecoration: 'none', alignItems: 'center' }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>{d.emoji}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1f2937', marginBottom: 3 }}>{d.title}</div>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{d.desc}</div>
              <div style={{ fontSize: 11, color: d.color, fontWeight: 600 }}>{d.time}</div>
            </div>
            <div style={{ fontSize: 16, color: '#d1d5db', flexShrink: 0 }}>›</div>
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: '#374151' }}>コラム</h2>
        <Link href="/column" style={{ fontSize: 12, color: '#92400e', textDecoration: 'none' }}>一覧を見る →</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
        {COLUMNS.map((c, i) => (
          <Link key={i} href={`/column/${c.cat}/${c.id}`}
            style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', textDecoration: 'none' }}>
            <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{c.title}</span>
          </Link>
        ))}
      </div>

      <div style={{ background: '#fefce8', border: '0.5px solid #fde68a', borderRadius: 12, padding: '16px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#92400e', marginBottom: 6 }}>おすすめサービス一覧</p>
        <p style={{ fontSize: 12, color: '#78716c', marginBottom: 10 }}>不動産査定・買取・相続相談をまとめました</p>
        <Link href="/recommend" style={{ display: 'inline-block', background: '#92400e', color: '#fff', borderRadius: 8, padding: '8px 20px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>見てみる</Link>
      </div>
    </main>
  )
}
