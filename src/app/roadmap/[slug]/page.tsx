import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const dynamicParams = false

const ROADMAPS: Record<string, {
  title: string; diagnosisLabel: string; diagnosisHref: string;
  phase1Title: string; phase1: string;
  phase2Title: string; phase2: string;
  phase3Title: string; phase3: string;
}> = {
  'katsuyo-baikyaku': {
    title: '実家売却 90日ロードマップ',
    diagnosisLabel: '🏷️ 売却タイプ',
    diagnosisHref: '/diagnosis/katsuyo',
    phase1Title: '1〜30日目',
    phase1: '不動産一括査定サービスで3社以上に査定依頼。現在の相場を把握する。家族全員に売却方針を伝えて合意を取る。',
    phase2Title: '31〜60日目',
    phase2: '仲介を依頼する不動産会社を1社に絞る。媒介契約を結び売却活動を開始。内覧対応の準備をする。',
    phase3Title: '61〜90日目',
    phase3: '買い手と価格交渉をして売買契約を締結。決済・引き渡し・確定申告（譲渡所得税）の準備を進める。',
  },
  'katsuyo-chintai': {
    title: '実家賃貸活用 90日ロードマップ',
    diagnosisLabel: '🏠 賃貸活用タイプ',
    diagnosisHref: '/diagnosis/katsuyo',
    phase1Title: '1〜30日目',
    phase1: '賃貸管理会社2〜3社に賃料査定を依頼。サブリースと通常管理の違いを把握する。',
    phase2Title: '31〜60日目',
    phase2: '必要なリフォーム（クリーニング・設備交換）の見積もりを取る。管理会社を1社に絞って管理委託契約を締結。',
    phase3Title: '61〜90日目',
    phase3: '入居者募集を開始。入居審査・契約を経て賃貸開始。確定申告（不動産所得）の準備をする。',
  },
  'katsuyo-kentou': {
    title: '活用方法検討 90日ロードマップ',
    diagnosisLabel: '🔍 活用方法検討タイプ',
    diagnosisHref: '/diagnosis/katsuyo',
    phase1Title: '1〜30日目',
    phase1: '不動産会社・FP・税理士に「無料相談」を申し込む。売却・賃貸・活用それぞれの試算を出してもらう。',
    phase2Title: '31〜60日目',
    phase2: '家族全員で「実家をどうするか会議」を開く。10年収支シミュレーションで比較する。',
    phase3Title: '61〜90日目',
    phase3: '方針を1つに絞って専門家と一緒に具体的な手続きを開始する。',
  },
  'katsuyo-daikibo': {
    title: '実家課題解決 90日ロードマップ',
    diagnosisLabel: '🏗️ 大規模検討タイプ',
    diagnosisHref: '/diagnosis/katsuyo',
    phase1Title: '1〜30日目',
    phase1: '市区町村の「空き家相談窓口」に連絡して使える補助金・支援制度を確認する。',
    phase2Title: '31〜60日目',
    phase2: '家族全員で実家の方針（売却・解体・活用）を話し合う場を設ける。行政書士・弁護士に相談する。',
    phase3Title: '61〜90日目',
    phase3: '方針に基づいて具体的な手続き（空き家バンク登録・解体申請・売却）を開始する。',
  },
  'baikyaku-sell': {
    title: '売却実行 90日ロードマップ',
    diagnosisLabel: '🏷️ 売却タイプ',
    diagnosisHref: '/diagnosis/baikyaku',
    phase1Title: '1〜30日目',
    phase1: '不動産一括査定で3社以上から査定を取り相場を把握する。仲介と買取の違いを確認する。',
    phase2Title: '31〜60日目',
    phase2: '仲介会社を1社に絞って媒介契約を締結。内覧受け入れ準備・価格設定を行う。',
    phase3Title: '61〜90日目',
    phase3: '買い手との価格交渉・売買契約・決済・引き渡しを完了する。譲渡所得税の申告準備をする。',
  },
  'baikyaku-rent': {
    title: '賃貸開始 90日ロードマップ',
    diagnosisLabel: '🏠 賃貸タイプ',
    diagnosisHref: '/diagnosis/baikyaku',
    phase1Title: '1〜30日目',
    phase1: '賃貸管理会社に査定依頼。サブリース・通常管理・自主管理を比較する。',
    phase2Title: '31〜60日目',
    phase2: 'リフォーム（クリーニング・壁紙・設備）の見積もりを取り施工する。',
    phase3Title: '61〜90日目',
    phase3: '管理会社と契約して入居者募集を開始。入居審査・契約・賃貸開始。',
  },
  'baikyaku-ryoho': {
    title: '売却・賃貸比較 90日ロードマップ',
    diagnosisLabel: '⚖️ 比較検討タイプ',
    diagnosisHref: '/diagnosis/baikyaku',
    phase1Title: '1〜30日目',
    phase1: '不動産会社に「売却査定と賃料査定の両方」を依頼する。',
    phase2Title: '31〜60日目',
    phase2: '10年間の収支シミュレーション（売却益vs賃貸収入）を作成して比較する。',
    phase3Title: '61〜90日目',
    phase3: 'FP・税理士に税務面（譲渡所得税・不動産所得税）を確認して最終判断する。',
  },
  'baikyaku-kaitori': {
    title: '買取専門業者売却 90日ロードマップ',
    diagnosisLabel: '🏢 買取タイプ',
    diagnosisHref: '/diagnosis/baikyaku',
    phase1Title: '1〜30日目',
    phase1: '複数の買取専門業者（ワケガイ・ラクウルなど）に一括査定を依頼する。',
    phase2Title: '31〜60日目',
    phase2: '査定額・契約条件・引き渡し時期を比較して最も条件の良い業者を選ぶ。',
    phase3Title: '61〜90日目',
    phase3: '売買契約・決済・引き渡しを完了する（最短1〜3ヶ月で完結）。',
  },
  'akiya-low': {
    title: '空き家管理強化 90日ロードマップ',
    diagnosisLabel: '✅ リスク低タイプ',
    diagnosisHref: '/diagnosis/akiya',
    phase1Title: '1〜30日目',
    phase1: '年間の管理スケジュール（換気・通水・草刈り・確認）を作成する。',
    phase2Title: '31〜60日目',
    phase2: '実家をどうするか家族会議を開く。不動産査定を取って選択肢を把握する。',
    phase3Title: '61〜90日目',
    phase3: '方針（売却・賃貸・保有継続）を決めて具体的なアクションを開始する。',
  },
  'akiya-chuu': {
    title: '空き家リスク対策 90日ロードマップ',
    diagnosisLabel: '⚠️ 注意段階',
    diagnosisHref: '/diagnosis/akiya',
    phase1Title: '1〜30日目',
    phase1: '市区町村の空き家相談窓口に相談して使える補助金・支援制度を確認する。空き家管理サービスを検討する。',
    phase2Title: '31〜60日目',
    phase2: '建物の損傷状況を業者に点検してもらい修繕の優先度を確認する。',
    phase3Title: '61〜90日目',
    phase3: '方針（売却・賃貸・空き家バンク・保有）を家族で決めて手続きを開始する。',
  },
  'akiya-kiken': {
    title: '空き家緊急対応 90日ロードマップ',
    diagnosisLabel: '🚨 緊急対応タイプ',
    diagnosisHref: '/diagnosis/akiya',
    phase1Title: '1〜30日目',
    phase1: '今日中に市区町村の空き家相談窓口に連絡する。行政指導への回答方法を確認する。',
    phase2Title: '31〜60日目',
    phase2: '建物の安全性を確認して危険な場合は立入禁止措置を取る。解体補助金の申請を検討する。',
    phase3Title: '61〜90日目',
    phase3: '売却・解体・空き家バンク登録のいずれかで問題を根本解決する。',
  },
  'akiya-bank': {
    title: '空き家バンク活用 90日ロードマップ',
    diagnosisLabel: '🏘️ 空き家バンクタイプ',
    diagnosisHref: '/diagnosis/akiya',
    phase1Title: '1〜30日目',
    phase1: '市区町村の空き家バンクに登録申請する。国土交通省「全国版空き家バンク」も確認する。',
    phase2Title: '31〜60日目',
    phase2: '登録した物件の情報（写真・状態・希望価格）を整える。',
    phase3Title: '61〜90日目',
    phase3: '問い合わせがあれば対応して売買・賃貸の交渉を進める。並行して買取業者にも査定依頼する。',
  },
  'sozoku-ok': {
    title: '相続対策メンテナンス 90日ロードマップ',
    diagnosisLabel: '✅ 対策整備タイプ',
    diagnosisHref: '/diagnosis/sozoku',
    phase1Title: '1〜30日目',
    phase1: '遺言書・財産一覧の内容を確認して変更が必要な箇所を更新する。',
    phase2Title: '31〜60日目',
    phase2: '相続税の試算を税理士に依頼して節税対策に変更がないか確認する。',
    phase3Title: '61〜90日目',
    phase3: '保管場所を相続人全員が把握しているか確認する。年1回の見直しを習慣化する。',
  },
  'sozoku-chui': {
    title: '相続対策強化 90日ロードマップ',
    diagnosisLabel: '⚠️ 要注意タイプ',
    diagnosisHref: '/diagnosis/sozoku',
    phase1Title: '1〜30日目',
    phase1: '税理士・司法書士に「相続対策の無料相談」を申し込む。問題点を整理する。',
    phase2Title: '31〜60日目',
    phase2: '遺言書の作成（公正証書遺言を推奨）に着手する。財産一覧を作成する。',
    phase3Title: '61〜90日目',
    phase3: '相続税の試算・節税対策（生前贈与など）を専門家と一緒に進める。',
  },
  'sozoku-kiken': {
    title: '相続トラブル予防 緊急90日ロードマップ',
    diagnosisLabel: '🚨 緊急対応タイプ',
    diagnosisHref: '/diagnosis/sozoku',
    phase1Title: '1〜30日目',
    phase1: '今すぐ弁護士か税理士に相談する。問題の核心（遺言なし・不動産比率高・相続人多）を整理する。',
    phase2Title: '31〜60日目',
    phase2: '親が元気なうちに公正証書遺言の作成を進める。家族全員での話し合いの場を設ける。',
    phase3Title: '61〜90日目',
    phase3: '生前贈与・家族信託など高度な対策を専門家と一緒に実行する。',
  },
  'sozoku-fudosan': {
    title: '不動産相続対策 90日ロードマップ',
    diagnosisLabel: '🏠 不動産相続タイプ',
    diagnosisHref: '/diagnosis/sozoku',
    phase1Title: '1〜30日目',
    phase1: '税理士に「小規模宅地等の特例」の適用可否と相続税額を試算してもらう。',
    phase2Title: '31〜60日目',
    phase2: '誰が実家を相続するか家族全員で話し合う。代償分割（1人が相続して他に現金を渡す）の金額を試算する。',
    phase3Title: '61〜90日目',
    phase3: '遺言書に不動産の取り扱いを明記する。生前贈与・売却による現金化も検討する。',
  },
  'dokyo-nisetai': {
    title: '完全二世帯住宅リフォーム 90日ロードマップ',
    diagnosisLabel: '🏘️ 完全二世帯タイプ',
    diagnosisHref: '/diagnosis/dokyo',
    phase1Title: '1〜30日目',
    phase1: 'ハウスメーカー・工務店3社にリフォーム見積もりを依頼する。補助金（長期優良住宅リフォーム等）を確認する。',
    phase2Title: '31〜60日目',
    phase2: 'プランを決めて施工会社を1社に絞る。生活ルール（費用分担・プライバシー）を家族で決める。',
    phase3Title: '61〜90日目',
    phase3: '着工・完成・引っ越しを完了する。同居後のルール確認会議を1ヶ月後に設定する。',
  },
  'dokyo-bubun': {
    title: '部分共有型二世帯 90日ロードマップ',
    diagnosisLabel: '🏠 部分共有タイプ',
    diagnosisHref: '/diagnosis/dokyo',
    phase1Title: '1〜30日目',
    phase1: 'どの部分を共有・分離するかを家族全員で決める。工務店に見積もりを依頼する。',
    phase2Title: '31〜60日目',
    phase2: '費用分担・家事分担・ルールを書面で決める。施工開始。',
    phase3Title: '61〜90日目',
    phase3: '引っ越し・同居開始。1ヶ月後にルールの見直し会議を行う。',
  },
  'dokyo-futu': {
    title: '通常同居スタート 90日ロードマップ',
    diagnosisLabel: '👨‍👩‍👧 通常同居タイプ',
    diagnosisHref: '/diagnosis/dokyo',
    phase1Title: '1〜30日目',
    phase1: '生活ルール（費用・家事・プライバシー・来客）を書き出して家族全員で合意する。',
    phase2Title: '31〜60日目',
    phase2: '必要なリフォーム（バリアフリー・収納増設）を最小限で行う。',
    phase3Title: '61〜90日目',
    phase3: '同居開始。1ヶ月後にルールの見直し確認をする。問題があれば早めに話し合う。',
  },
  'dokyo-kinkyori': {
    title: '近居実現 90日ロードマップ',
    diagnosisLabel: '🏡 近居タイプ',
    diagnosisHref: '/diagnosis/dokyo',
    phase1Title: '1〜30日目',
    phase1: '市区町村に「近居支援補助金」があるか確認する。親の家から徒歩・自転車圏内の物件を探す。',
    phase2Title: '31〜60日目',
    phase2: '候補物件を2〜3件内覧して親との距離・利便性を確認する。',
    phase3Title: '61〜90日目',
    phase3: '物件を決定して引っ越す。緊急時の連絡体制・訪問ルーティンを決める。',
  },
}

export async function generateStaticParams() {
  return Object.keys(ROADMAPS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const r = ROADMAPS[slug]
  if (!r) return {}
  return { title: `${r.title} | 実家どうするナビ`, description: `${r.diagnosisLabel}の方向け90日ロードマップ。` }
}

export default async function RoadmapPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const r = ROADMAPS[slug]
  if (!r) notFound()
  const phases = [
    { title: r.phase1Title, content: r.phase1 },
    { title: r.phase2Title, content: r.phase2 },
    { title: r.phase3Title, content: r.phase3 },
  ]
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <div style={{ marginBottom: 20 }}>
        <Link href={r.diagnosisHref} style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none' }}>← 診断に戻る</Link>
        <p style={{ fontSize: 11, color: '#92400e', fontWeight: 600, margin: '8px 0 4px' }}>{r.diagnosisLabel}</p>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', lineHeight: 1.4 }}>{r.title}</h1>
      </div>
      {phases.map((ph, i) => (
        <div key={i} style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ background: '#92400e', color: '#fff', borderRadius: 6, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#1f2937' }}>{ph.title}</span>
          </div>
          <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{ph.content}</p>
        </div>
      ))}
      <div style={{ background: '#fefce8', border: '0.5px solid #fde68a', borderRadius: 12, padding: '16px', textAlign: 'center', marginTop: 8 }}>
        <Link href="/" style={{ display: 'inline-block', background: '#92400e', color: '#fff', borderRadius: 8, padding: '10px 20px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>診断トップに戻る</Link>
      </div>
    </main>
  )
}
