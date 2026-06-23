import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '実家どうするナビ | 実家の売却・賃貸・相続を無料診断',
  description: '実家をどうすればいいか迷っている方へ。相談ナビゲーターみのりが、5つの無料診断で売却・賃貸・相続・空き家・同居のベストな選択肢をご提案します。登録不要。',
}

const SITUATIONS = [
  { id: 'katsuyo',  emoji: '🏡', label: '売る・貸す・活用、何が最適か知りたい', desc: '実家活用タイプ診断',     href: '/diagnosis/katsuyo' },
  { id: 'baikyaku', emoji: '🏷️', label: '売却か賃貸か迷っている',               desc: '売却vs賃貸 判断診断',   href: '/diagnosis/baikyaku' },
  { id: 'akiya',    emoji: '🏚️', label: '空き家のリスクが心配',                 desc: '空き家リスク診断',      href: '/diagnosis/akiya' },
  { id: 'sozoku',   emoji: '⚖️', label: '相続・兄弟間のトラブルが不安',         desc: '相続対策チェック診断',  href: '/diagnosis/sozoku' },
  { id: 'dokyo',    emoji: '👨‍👩‍👧', label: '親との同居・二世帯住宅を考えている', desc: '二世帯・同居 適性診断', href: '/diagnosis/dokyo' },
]

const COLUMNS = [
  { cat: 'hajimete',    id: 1, title: '実家をどうするか迷ったらまず読む記事' },
  { cat: 'baikyaku-col', id: 1, title: '実家売却の流れと費用【完全ガイド】' },
  { cat: 'akiya-col',   id: 1, title: '空き家を放置するとどうなる？リスクと対策' },
  { cat: 'sozoku-col',  id: 1, title: '実家の相続でもめないための5つの準備' },
  { cat: 'chintai-col', id: 1, title: '実家を賃貸に出すメリット・デメリット' },
  { cat: 'dokyo-col',   id: 1, title: '親との同居を成功させる7つのルール' },
]

export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '0 0 60px' }}>

      {/* ヒーローエリア */}
      <div style={{
        background: 'linear-gradient(160deg, #f0faf0 0%, #e8f5e8 60%, #dff0df 100%)',
        padding: '32px 20px 0', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 11, color: '#2d6a2d', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 4 }}>
            🍀 実家どうするナビ
          </p>
          <p style={{ fontSize: 12, color: '#5a8a5a', margin: 0 }}>登録不要・完全無料</p>
        </div>

        {/* みのりの吹き出し */}
        <div style={{
          background: '#fff', borderRadius: 16, padding: '14px 18px', marginBottom: 20,
          boxShadow: '0 2px 12px rgba(45,106,45,0.12)', position: 'relative', textAlign: 'left',
        }}>
          <div style={{
            position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '10px solid #fff',
          }} />
          <p style={{ fontSize: 15, fontWeight: 700, color: '#1a3d1a', lineHeight: 1.6, margin: '0 0 4px' }}>
            一緒に、実家の未来を考えてみませんか？
          </p>
          <p style={{ fontSize: 13, color: '#3d6a3d', lineHeight: 1.6, margin: 0 }}>
            今どんな状況か教えていただけますか？<br />
            あなたに合った情報をご案内します。
          </p>
        </div>

        {/* みのり画像 */}
        <div style={{ position: 'relative', height: 260, marginBottom: -10 }}>
          <Image src="/images/characters/minori-main.png" alt="相談ナビゲーター みのり"
            fill style={{ objectFit: 'contain', objectPosition: 'bottom center' }} priority />
        </div>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,255,255,0.85)', borderRadius: 20, padding: '4px 14px', marginBottom: 24,
        }}>
          <span style={{ fontSize: 11, color: '#2d6a2d' }}>実家相談ナビゲーター</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#1a5a1a' }}>みのり</span>
        </div>
      </div>

      {/* 状況選択 */}
      <div style={{ padding: '24px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid #b8ddb8', position: 'relative' }}>
            <Image src="/images/characters/minori-smile.png" alt="みのり" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ background: '#f0faf0', borderRadius: '0 12px 12px 12px', padding: '10px 14px', flex: 1 }}>
            <p style={{ fontSize: 13, color: '#1a4a1a', fontWeight: 600, margin: 0 }}>今のご状況を教えてください</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {SITUATIONS.map(s => (
            <Link key={s.id} href={s.href} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: '#fff', border: '1.5px solid #b8ddb8', borderRadius: 14,
              padding: '14px 16px', textDecoration: 'none',
              boxShadow: '0 1px 4px rgba(45,106,45,0.08)',
            }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{s.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1a2d1a', marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: '#2d6a2d', fontWeight: 600 }}>→ {s.desc}</div>
              </div>
              <span style={{ fontSize: 18, color: '#90c890', flexShrink: 0 }}>›</span>
            </Link>
          ))}
        </div>

        {/* みのりのひとこと */}
        <div style={{
          background: 'linear-gradient(135deg, #f5faf5, #eaf5ea)',
          border: '1px solid #b8ddb8', borderRadius: 14, padding: '16px',
          marginBottom: 28, display: 'flex', gap: 12, alignItems: 'flex-start',
        }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid #90c890', position: 'relative' }}>
            <Image src="/images/characters/minori-care.png" alt="みのり" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: 11, color: '#2d6a2d', fontWeight: 700, margin: '0 0 4px' }}>みのりより</p>
            <p style={{ fontSize: 13, color: '#1a4a1a', lineHeight: 1.7, margin: 0 }}>
              実家のことは、家族みんなの問題です。一人で悩まず、まず診断で現状を整理しましょう。
            </p>
          </div>
        </div>

        {/* コラム */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: '#1a2d1a', margin: 0 }}>📖 お役立ちコラム</h2>
          <Link href="/column" style={{ fontSize: 12, color: '#2d6a2d', textDecoration: 'none' }}>一覧を見る →</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {COLUMNS.map((c, i) => (
            <Link key={i} href={`/column/${c.cat}/${c.id}`}
              style={{ display: 'block', background: '#fff', border: '0.5px solid #b8ddb8', borderRadius: 10, padding: '12px 14px', textDecoration: 'none' }}>
              <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{c.title}</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: '#1a3d1a', borderRadius: 14, padding: '18px 16px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#b8ddb8', marginBottom: 4 }}>みのりがえらんだ信頼できるサービス</p>
          <p style={{ fontSize: 11, color: '#6a9a6a', marginBottom: 12 }}>不動産買取・査定・相続・リフォームをまとめました</p>
          <Link href="/recommend" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #2d6a2d, #1a5a1a)',
            color: '#fff', borderRadius: 8, padding: '10px 24px',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>
            サービスを見てみる →
          </Link>
        </div>
      </div>
    </main>
  )
}
