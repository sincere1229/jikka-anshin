import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import A8OfficialBanner from '@/components/A8OfficialBanner'

export const metadata: Metadata = {
  title: 'みのりがえらんだサービス | 実家どうするナビ',
  description: '実家相談ナビゲーターみのりが厳選した、不動産買取・査定・相続・リフォームサービス一覧。',
}

type RecommendItem = {
  name: string; badge: string; badgeColor: string; desc: string; point: string; url: string
  bannerId?: string; hidden?: boolean
}

const SERVICES: { category: string; emoji: string; color: string; bgColor: string; borderColor: string; minoriComment: string; items: RecommendItem[] }[] = [
  {
    category: '不動産買取・売却', emoji: '🏷️',
    color: '#1a5a1a', bgColor: '#f0faf0', borderColor: '#b8ddb8',
    minoriComment: '売ることを決めたら、まず複数社に査定を依頼して比較しましょう。',
    items: [
      { name: 'ラクウル（空き家・中古戸建買取）', badge: '5%以上クリック', badgeColor: '#1a5a1a',
        desc: '空き家・中古戸建ての買取専門。最短3日で査定結果。', point: '✓ 訳あり物件・築古もOK',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+C968T6+56AO+HV7V6' , bannerId: 'jikka-rakuuru-akiya' },
      { name: '持ち家売却（一括査定）', badge: '5%以上クリック', badgeColor: '#1a5a1a',
        desc: '不動産会社への一括査定依頼。複数社を比較して最高値で売却。', point: '✓ 無料で複数社に一括依頼',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+AWCP7E+53AC+1BN3TU' , bannerId: 'jikka-mochiie-ikkatsu' },
      { name: 'リノべる。（売却サポート）', badge: '売却', badgeColor: '#1a5a1a',
        desc: 'リノべる。があなたの売却をサポート。リノベ済物件として高値売却も。', point: '✓ リノベ後の高値売却が可能',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CKHHAY+303O+BWVTE' , bannerId: 'jikka-renoveru' },
    ],
  },
  {
    category: '訳あり・特殊物件の買取', emoji: '🏚️',
    color: '#7a3a1a', bgColor: '#fdf5f0', borderColor: '#e8c8a8',
    minoriComment: '空き家・借地権・訳あり物件でも買い取ってもらえる専門業者があります。',
    items: [
      { name: 'ワケダイ（訳あり不動産買取）', badge: '買取専門', badgeColor: '#7a3a1a',
        desc: '訳あり・築古・空き家も買取。査定料・手数料すべて0円。最短7日で現金化。', point: '✓ どんな物件でも相談可',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+BH6VDM+5J56+5Z6WX' , bannerId: 'jikka-wakegai' },
      { name: '訳あり物件買取センター', badge: '借地権対応', badgeColor: '#7a3a1a',
        desc: '借地権の買取〜売却まで対応。相談料・出張査定費・手数料すべて0円。', point: '✓ 最短7日で現金化',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+BG0062+5TF6+5YJRM' , bannerId: 'jikka-wakeari-center' },
      { name: 'ビタットハウス秋葉原北店', badge: '高額買取', badgeColor: '#7a3a1a',
        desc: '借地権の専門業者だからどんな借地権でも今すぐ高額買取。', point: '✓ 相談料・出張査定費0円',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+ATYYSA+5TEW+5YZ75' , bannerId: 'jikka-shakuchiken' },
      { name: 'ウリエル（出張買取）', badge: 'TV広告', badgeColor: '#7a3a1a',
        desc: 'テレビCMで話題。出張買取なら「ウリエル」へおまかせ。', point: '✓ 全国対応・出張無料',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CF4KUY+5O4W+2N9KIA' , bannerId: 'jikka-uriel' },
    ],
  },
  {
    category: 'リースバック', emoji: '🔄',
    color: '#1a3d6a', bgColor: '#f0f5fa', borderColor: '#a8c8e8',
    minoriComment: '売却後も住み続けたい方に。リースバックという選択肢があります。',
    items: [
      { name: 'ミライアス（リースバック）', badge: '3.13%クリック', badgeColor: '#1a3d6a',
        desc: '自宅を売却後もそのまま住み続けられるリースバック専門サービス。', point: '✓ 売却後も賃貸として継続居住',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+BMJRTM+4I6M+5YJRM' },
      { name: '総合マネージメント（リースバック）', badge: 'リースバック', badgeColor: '#1a3d6a',
        desc: '総合マネージメントサービスのリースバック。資金調達しながら住み続ける。', point: '✓ まとまった資金を確保できる',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CL2WWQ+1DEC+HV7V6' , bannerId: 'jikka-sogo-management' },
    ],
  },
  {
    category: '相続・法律相談', emoji: '⚖️',
    color: '#4a1a6a', bgColor: '#f8f0fa', borderColor: '#d0a8e8',
    minoriComment: '相続は早めに専門家に相談することで、家族のもめごとを防げます。',
    items: [
      { name: '相続の窓口', badge: 'ワンストップ', badgeColor: '#4a1a6a',
        desc: '相続の面倒ごとをワンストップで解決。税理士・司法書士・弁護士が連携。', point: '✓ 必要最低限の手間で完結',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+C8KT7E+56AO+BWVTE', hidden: true },
    ],
  },
  {
    category: '不動産担保ローン', emoji: '🏦',
    color: '#3a3a1a', bgColor: '#fafaf0', borderColor: '#d8d8a8',
    minoriComment: '実家を担保に資金調達することで、売却せずに活用できる場合もあります。',
    items: [
      { name: '不動産担保ローン', badge: 'EPC50以上', badgeColor: '#3a3a1a',
        desc: '不動産を担保にした融資。まとまった資金が必要な方に。', point: '✓ 不動産を手放さずに資金調達',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CI3QVU+3GA6+5YRHE' },
      { name: '丸の内AMS（不動産担保ローン）', badge: '最短当日審査', badgeColor: '#3a3a1a',
        desc: '審査は最短当日。丸の内AMSの不動産担保ローン。', point: '✓ スピーディーな資金調達',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CGBG2I+5PBE+5YJRM' , bannerId: 'jikka-marunouchi-ams' },
    ],
  },
  {
    category: '空き家活用・リフォーム', emoji: '🔨',
    color: '#6a4a1a', bgColor: '#fdf8f0', borderColor: '#e8d0a8',
    minoriComment: '売却・賃貸前のリフォームで価値が上がる場合も。まず見積もりを。',
    items: [
      { name: 'クロスハウス（空き家収益化）', badge: '5%以上クリック', badgeColor: '#6a4a1a',
        desc: '築古・空き家の収益最大化！運用管理はクロスハウスにお任せ。', point: '✓ 空き家をそのまま収益物件に',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+B72I3E+4EZ2+NTJWY' , bannerId: 'jikka-crosshouse' },
      { name: 'リフォーム比較プロ', badge: '一括見積り', badgeColor: '#6a4a1a',
        desc: '全国で実績多数のリフォーム見積もりサイト。複数社を無料で比較。', point: '✓ 相見積もりでコスト削減',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CC5EU2+46CI+5YZ77' , bannerId: 'jikka-reform-hikaku' },
      { name: 'リフォーム会社紹介サービス', badge: '地域密着', badgeColor: '#6a4a1a',
        desc: 'あなたの地域の厳選工務店が対応。簡単・無料でリフォームのお悩み解決。', point: '✓ 地元の優良業者を紹介',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CEJ596+2ISC+HVNAP' , bannerId: 'jikka-reform-shokai' },
      { name: '防水工事セレクト', badge: '一括見積り', badgeColor: '#6a4a1a',
        desc: '全国の優良防水工事会社から一括見積もりが無料でできる。', point: '✓ 雨漏り・外壁防水に対応',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+C5LN6I+46CI+NU729' , bannerId: 'jikka-bousui-select' },
    ],
  },
  {
    category: '引越し', emoji: '🚛',
    color: '#1a4a6a', bgColor: '#f0f8fa', borderColor: '#a8d0e8',
    minoriComment: '実家の片付けや引越しもまとめてプロに相談できます。',
    items: [
      { name: 'トレファク引越', badge: 'リユース型', badgeColor: '#1a4a6a',
        desc: 'リユース企業が仕掛ける進化した引越し。不用品の買取と引越しを同時に。', point: '✓ 不用品買取で引越し費用を節約',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CLOCII+1PO0+ZW829' , bannerId: 'jikka-trefac' },
    ],
  },
]

export default function RecommendPage() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '0 0 60px' }}>
      <div style={{ background: 'linear-gradient(160deg, #f0faf0, #e8f5e8)', padding: '24px 16px 20px' }}>
        <Link href="/" style={{ fontSize: 12, color: '#2d6a2d', textDecoration: 'none', display: 'block', marginBottom: 12 }}>
          ← 実家どうするナビ
        </Link>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid #90c890', position: 'relative' }}>
            <Image src="/images/characters/minori-smile.png" alt="みのり" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: 11, color: '#2d6a2d', fontWeight: 700, margin: '0 0 2px' }}>みのりがえらんだサービス</p>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: '#1a2d1a', margin: 0, lineHeight: 1.3 }}>信頼できる不動産・相続サービス</h1>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: '12px 14px', marginTop: 14, boxShadow: '0 1px 6px rgba(45,106,45,0.1)' }}>
          <p style={{ fontSize: 13, color: '#1a4a1a', lineHeight: 1.6, margin: 0 }}>
            私が実際に調べて、安心してご紹介できるサービスだけを集めました。
          </p>
        </div>
        <p style={{ fontSize: 10, color: '#8aaa8a', margin: '10px 0 0' }}>※ 本ページはアフィリエイト広告を含みます</p>
      </div>

      <div style={{ padding: '20px 16px 0' }}>
        {SERVICES.map((sec, i) => {
          const visibleItems = sec.items.filter((item) => !item.hidden)
          if (visibleItems.length === 0) return null
          return (
          <div key={i} style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 18 }}>{sec.emoji}</span>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: '#1a2d1a', margin: 0 }}>{sec.category}</h2>
            </div>
            <div style={{ background: sec.bgColor, border: `1px solid ${sec.borderColor}`, borderRadius: '0 12px 12px 12px', padding: '10px 12px', marginBottom: 10, marginLeft: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                <Image src="/images/characters/minori-care.png" alt="みのり" fill style={{ objectFit: 'cover' }} />
              </div>
              <p style={{ fontSize: 12, color: sec.color, lineHeight: 1.5, margin: 0 }}>{sec.minoriComment}</p>
            </div>
            {visibleItems.map((item, j) => (
              item.bannerId ? (
                // A8公式バナー方式：officialHtml自体が唯一の外部リンクとなるため、
                // カード全体を旧クリックURL(item.url)へのリンクにはしない
                <div key={j} style={{ background: '#fff', border: `1.5px solid ${sec.borderColor}`, borderRadius: 14, padding: '14px 16px', marginBottom: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1f2937', flex: 1 }}>{item.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, background: sec.bgColor, color: item.badgeColor, borderRadius: 6, padding: '3px 8px', flexShrink: 0, marginLeft: 8, border: `1px solid ${sec.borderColor}` }}>{item.badge}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: '0 0 8px' }}>{item.desc}</p>
                  <p style={{ fontSize: 12, color: sec.color, fontWeight: 600, margin: '0 0 10px' }}>{item.point}</p>
                  <A8OfficialBanner id={item.bannerId} />
                </div>
              ) : (
                <a key={j} href={item.url} target="_blank" rel="nofollow noopener noreferrer"
                  style={{ display: 'block', background: '#fff', border: `1.5px solid ${sec.borderColor}`, borderRadius: 14, padding: '14px 16px', marginBottom: 10, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1f2937', flex: 1 }}>{item.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, background: sec.bgColor, color: item.badgeColor, borderRadius: 6, padding: '3px 8px', flexShrink: 0, marginLeft: 8, border: `1px solid ${sec.borderColor}` }}>{item.badge}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: '0 0 8px' }}>{item.desc}</p>
                  <p style={{ fontSize: 12, color: sec.color, fontWeight: 600, margin: '0 0 10px' }}>{item.point}</p>
                  <div style={{ background: sec.color, color: '#fff', borderRadius: 8, padding: '9px', textAlign: 'center', fontSize: 13, fontWeight: 700 }}>
                    詳しく見てみる →
                  </div>
                </a>
              )
            ))}
          </div>
          )
        })}

        <div style={{ background: 'linear-gradient(135deg, #f0faf0, #e8f5e8)', border: '1px solid #b8ddb8', borderRadius: 14, padding: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#1a2d1a', marginBottom: 4 }}>あなたに合ったサービスを診断で絞り込む</p>
          <p style={{ fontSize: 12, color: '#3d6a3d', marginBottom: 12 }}>状況別の無料診断で最適なサービスが見つかります</p>
          <Link href="/" style={{ display: 'inline-block', background: '#1a5a1a', color: '#fff', borderRadius: 8, padding: '10px 24px', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
            診断を受けてみる →
          </Link>
        </div>
      </div>
    </main>
  )
}
