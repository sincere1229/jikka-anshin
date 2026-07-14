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
          bannerId: 'jikka-reest',
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
          name: 'ハウジングバザール（工務店紹介）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CEJ596+2ISC+I0KRL',
          description: '',
          badge: 'リフォーム',
          forWho: '', notFor: '',
          imageUrl: 'https://www22.a8.net/svt/bgt?aid=260521603750&wid=002&eno=01&mid=s00000011766003026000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www12.a8.net/0.gif?a8mat=4B3VR7+CEJ596+2ISC+I0KRL',
        },
        {
          bannerId: 'jikka-reform-hikaku',
          name: 'リフォーム比較プロ',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CC5EU2+46CI+609HT',
          description: '',
          badge: 'リフォーム',
          forWho: '', notFor: '',
          imageUrl: 'https://www25.a8.net/svt/bgt?aid=260521603746&wid=002&eno=01&mid=s00000019485001009000&mc=1',
          imageWidth: 300,
          imageHeight: 137,
          impUrl: 'https://www16.a8.net/0.gif?a8mat=4B3VR7+CC5EU2+46CI+609HT',
        },
        {
          name: 'リノベる（リノベーション）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CKHHAY+303O+BXQOH',
          description: '',
          badge: 'リフォーム',
          forWho: '', notFor: '',
          imageUrl: 'https://www20.a8.net/svt/bgt?aid=260521603760&wid=002&eno=01&mid=s00000014010002005000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www19.a8.net/0.gif?a8mat=4B3VR7+CKHHAY+303O+BXQOH',
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
