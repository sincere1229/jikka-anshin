import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'

export const metadata: Metadata = {
  title: '売却vs賃貸 判断診断 | 実家どうするナビ',
  description: '実家を売るべきか貸すべきか、あなたの状況から診断',
}

export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="baikyaku"
      title="売却vs賃貸 判断診断"
      subtitle="実家を売るべきか貸すべきか、あなたの状況から診断"
      questionsCsvPath="/data/csv/questions_baikyaku.csv"
      resultsCsvPath="/data/csv/result_baikyaku.csv"
      nextDiagnoses={[
        { name: '実家活用タイプ診断', href: '/diagnosis/katsuyo' },
        { name: '空き家リスク診断', href: '/diagnosis/akiya' },
        { name: '相続対策チェック診断', href: '/diagnosis/sozoku' },
        { name: '二世帯・同居適性診断', href: '/diagnosis/dokyo' },
      ]}
      recommendServices={[
        {
          name: 'ワケガイ（訳あり物件買取）',
          url: 'https://af.moshimo.com/af/c/click?a_id=5646964&p_id=3406&pc_id=8115&pl_id=48291',
          description: '訳あり・築古・空き家も買取。最短2週間で現金化。',
          badge: '買取',
          forWho: '',
          notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/2819/000000048291.gif',
          imageWidth: 280,
          imageHeight: 336,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5646964&p_id=3406&pc_id=8115&pl_id=48291',
        },
        {
          name: 'ラクウル（不動産買取）',
          url: 'https://af.moshimo.com/af/c/click?a_id=5646096&p_id=5870&pc_id=16301&pl_id=75329',
          description: '不動産の買取専門。最短3日で査定結果。空き家・中古対応。',
          badge: '買取',
          forWho: '',
          notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/1052/000000075329.png',
          imageWidth: 504,
          imageHeight: 504,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5646096&p_id=5870&pc_id=16301&pl_id=75329',
        },
        {
          name: '相続アシスト',
          url: 'https://af.moshimo.com/af/c/click?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
          description: '相続の手間も不安も、まるごとゼロに。ゼロタッチ相続税申告。',
          badge: '相続',
          forWho: '',
          notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/3982/000000093281.png',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
        },
      ]}
    />
  )
}
