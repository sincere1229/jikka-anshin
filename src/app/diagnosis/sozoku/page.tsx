import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'

export const metadata: Metadata = {
  title: '相続対策チェック診断 | 実家どうするナビ',
  description: '相続トラブルのリスクをチェック。今すぐできる対策がわかります',
}

export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="sozoku"
      title="相続対策チェック診断"
      subtitle="相続トラブルのリスクをチェック。今すぐできる対策がわかります"
      questionsCsvPath="/data/csv/questions_sozoku.csv"
      resultsCsvPath="/data/csv/result_sozoku.csv"
      nextDiagnoses={[
        { name: '実家活用タイプ診断', href: '/diagnosis/katsuyo' },
        { name: '売却vs賃貸判断診断', href: '/diagnosis/baikyaku' },
        { name: '空き家リスク診断', href: '/diagnosis/akiya' },
        { name: '二世帯・同居適性診断', href: '/diagnosis/dokyo' },
      ]}
      recommendServices={[
        {
          name: '相続アシスト',
          url: 'https://af.moshimo.com/af/c/click?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
          description: '相続の手間も不安も、まるごとゼロに。ゼロタッチ相続税申告。専門家チームが丸ごとサポート。',
          badge: '相続',
          forWho: '',
          notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/3982/000000093281.png',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
        },
        {
          name: '税理士紹介エージェント',
          url: 'https://af.moshimo.com/af/c/click?a_id=5646963&p_id=5475&pc_id=14990&pl_id=71540',
          description: '税理士選びのプロが、何度でも優良税理士をご紹介。相続税申告に強い税理士を無料紹介。',
          badge: '税理士',
          forWho: '',
          notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/3108/000000071540.png',
          imageWidth: 120,
          imageHeight: 60,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5646963&p_id=5475&pc_id=14990&pl_id=71540',
        },
        {
          name: 'ワケガイ（相続不動産買取）',
          url: 'https://af.moshimo.com/af/c/click?a_id=5646964&p_id=3406&pc_id=8115&pl_id=48291',
          description: '相続した訳あり・築古物件も買取。トラブルになる前に現金化。',
          badge: '買取',
          forWho: '',
          notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/2819/000000048291.gif',
          imageWidth: 280,
          imageHeight: 336,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5646964&p_id=3406&pc_id=8115&pl_id=48291',
        },
      ]}
    />
  )
}
