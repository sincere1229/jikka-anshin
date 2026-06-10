import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '実家どうするナビ | 実家の売却・賃貸・相続を無料診断',
  description: '実家をどうすればいいか迷っている方へ。登録不要・無料の5つの診断で、売却・賃貸・相続・空き家・同居のベストな選択肢がわかります。',
  openGraph: {
    title: '実家どうするナビ',
    description: '実家の売却・賃貸・相続・空き家・同居を無料診断。',
    url: 'https://jikka-navi.net',
    siteName: '実家どうするナビ',
    locale: 'ja_JP',
    type: 'website',
  },
}

const FOOTER_LINKS = [
  { href: '/about', label: '運営者情報' },
  { href: '/privacy', label: 'プライバシーポリシー' },
  { href: '/column', label: 'コラム一覧' },
  { href: '/recommend', label: 'おすすめサービス' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header style={{ background: '#fff', borderBottom: '0.5px solid #e5e7eb', padding: '12px 16px', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 480, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ fontSize: 16, fontWeight: 700, color: '#92400e', textDecoration: 'none' }}>🏡 実家どうするナビ</a>
            <a href="/column" style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none' }}>コラム</a>
          </div>
        </header>
        {children}
        <footer style={{ background: '#fff', borderTop: '0.5px solid #e5e7eb', padding: '24px 16px', marginTop: 40 }}>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', marginBottom: 12, justifyContent: 'center' }}>
              {FOOTER_LINKS.map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none' }}>{l.label}</a>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: 11, color: '#9ca3af' }}>© 2025 実家どうするナビ · 本サイトはアフィリエイト広告を含みます</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
