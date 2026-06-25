import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'

export const metadata: Metadata = {
  title: '二世帯・同居適性診断 | 実家どうするナビ',
  description: '親との同居・二世帯住宅があなたに向いているか診断します',
}

export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="dokyo"
      title="二世帯・同居適性診断"
      subtitle="親との同居・二世帯住宅があなたに向いているか診断します"
      questionsCsvPath="/data/csv/questions_dokyo.csv"
      resultsCsvPath="/data/csv/result_dokyo.csv"
      nextDiagnoses={[
        { name: '実家活用タイプ診断', href: '/diagnosis/katsuyo' },
        { name: '売却vs賃貸判断診断', href: '/diagnosis/baikyaku' },
        { name: '空き家リスク診断', href: '/diagnosis/akiya' },
        { name: '相続対策チェック診断', href: '/diagnosis/sozoku' },
      ]}
      recommendServices={[
        {
          name: '相続アシスト',
          url: 'https://af.moshimo.com/af/c/click?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
          description: '同居前に相続の整理も大切。相続の手間も不安も、まるごとゼロに。',
          badge: '相続',
          forWho: '',
          notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/3982/000000093281.png',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
        },
        {
          name: 'ラクウル（不動産買取）',
          url: 'https://af.moshimo.com/af/c/click?a_id=5646096&p_id=5870&pc_id=16301&pl_id=75329',
          description: '同居にあたり実家を売るなら。相続不動産の買取専門。',
          badge: '買取',
          forWho: '',
          notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/1052/000000075329.png',
          imageWidth: 504,
          imageHeight: 504,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5646096&p_id=5870&pc_id=16301&pl_id=75329',
        },
      ]}
    />
  )
}
