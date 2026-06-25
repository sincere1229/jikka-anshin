import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'

export const metadata: Metadata = {
  title: '空き家リスク診断 | 実家どうするナビ',
  description: '放置リスクと対策をチェック。あなたの空き家の状況を診断します',
}

export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="akiya"
      title="空き家リスク診断"
      subtitle="放置リスクと対策をチェック。あなたの空き家の状況を診断します"
      questionsCsvPath="/data/csv/questions_akiya.csv"
      resultsCsvPath="/data/csv/result_akiya.csv"
      nextDiagnoses={[
        { name: '実家活用タイプ診断', href: '/diagnosis/katsuyo' },
        { name: '売却vs賃貸判断診断', href: '/diagnosis/baikyaku' },
        { name: '相続対策チェック診断', href: '/diagnosis/sozoku' },
        { name: '二世帯・同居適性診断', href: '/diagnosis/dokyo' },
      ]}
      recommendServices={[
        {
          name: 'ワケガイ（訳あり物件買取）',
          url: 'https://af.moshimo.com/af/c/click?a_id=5646964&p_id=3406&pc_id=8115&pl_id=48291',
          description: '空き家・築古・訳あり物件も買取。特定空き家になる前に。',
          badge: '買取',
          forWho: '',
          notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/2819/000000048291.gif',
          imageWidth: 280,
          imageHeight: 336,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5646964&p_id=3406&pc_id=8115&pl_id=48291',
        },
        {
          name: 'ラクウル（空き家・中古戸建買取）',
          url: 'https://af.moshimo.com/af/c/click?a_id=5646096&p_id=5870&pc_id=16301&pl_id=75329',
          description: '空き家・中古戸建て買取専門。現状のままで査定OK。',
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
          description: '空き家の相続手続きも丸ごとお任せ。専門家チームが対応。',
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
