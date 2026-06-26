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
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+BH6VDM+5J56+5Z6WX',
          description: '',
          badge: '不動産買取',
          forWho: '', notFor: '',
          imageUrl: 'https://www28.a8.net/svt/bgt?aid=260521603694&wid=002&eno=01&mid=s00000025809001004000&mc=1',
          imageWidth: 100,
          imageHeight: 60,
          impUrl: 'https://www10.a8.net/0.gif?a8mat=4B3VR7+BH6VDM+5J56+5Z6WX',
        },
        {
          name: 'ラクウル（空き家・中古買取）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+C968T6+56AO+HW2Q9',
          description: '',
          badge: '不動産買取',
          forWho: '', notFor: '',
          imageUrl: 'https://www22.a8.net/svt/bgt?aid=260521603741&wid=002&eno=01&mid=s00000024144003005000&mc=1',
          imageWidth: 300,
          imageHeight: 77,
          impUrl: 'https://www15.a8.net/0.gif?a8mat=4B3VR7+C968T6+56AO+HW2Q9',
        },
        {
          name: '訳あり物件買取センター（借地権）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+BG0062+5TF6+5ZEMP',
          description: '',
          badge: '不動産買取',
          forWho: '', notFor: '',
          imageUrl: 'https://www21.a8.net/svt/bgt?aid=260521603692&wid=002&eno=01&mid=s00000027141001005000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www16.a8.net/0.gif?a8mat=4B3VR7+BG0062+5TF6+5ZEMP',
        },
        {
          name: '借地権 無料相談ドットコム',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+ATYYSA+5TEW+5YZ75',
          description: '',
          badge: '不動産相談',
          forWho: '', notFor: '',
          imageUrl: 'https://www26.a8.net/svt/bgt?aid=260521603655&wid=002&eno=01&mid=s00000027140001003000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www11.a8.net/0.gif?a8mat=4B3VR7+ATYYSA+5TEW+5YZ75',
        },
        {
          name: 'Re:est（リフォーム見積もり）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+BLCWM2+5UT6+5ZMCH',
          description: '',
          badge: 'リフォーム',
          forWho: '', notFor: '',
          imageUrl: 'https://www29.a8.net/svt/bgt?aid=260521603701&wid=002&eno=01&mid=s00000027321001006000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www13.a8.net/0.gif?a8mat=4B3VR7+BLCWM2+5UT6+5ZMCH',
        },
        {
          name: '相続アシスト',
          url: 'https://af.moshimo.com/af/c/click?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
          description: '相続の手間も不安も、まるごとゼロに。専門家チームによるゼロタッチ相続税申告。',
          badge: '相続',
          forWho: '', notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/3982/000000093281.png',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
        },
      ]}
    />
  )
}
