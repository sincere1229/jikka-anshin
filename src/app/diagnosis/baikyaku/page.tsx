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
          bannerId: 'jikka-wakegai',
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
          bannerId: 'jikka-rakuuru-sozoku',
          name: 'ラクウル（相続不動産売却）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+C8KT7E+56AO+BY641',
          description: '',
          badge: '不動産買取',
          forWho: '', notFor: '',
          imageUrl: 'https://www20.a8.net/svt/bgt?aid=260521603740&wid=002&eno=01&mid=s00000024144002007000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www10.a8.net/0.gif?a8mat=4B3VR7+C8KT7E+56AO+BY641',
        },
        {
          bannerId: 'jikka-rakuuru-akiya',
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
          bannerId: 'jikka-miraias',
          name: 'ミライアス（不動産スマート仲介）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+BMJRTM+4I6M+65ME9',
          description: '',
          badge: '不動産',
          forWho: '', notFor: '',
          imageUrl: 'https://www23.a8.net/svt/bgt?aid=260521603703&wid=002&eno=01&mid=s00000021019001034000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www12.a8.net/0.gif?a8mat=4B3VR7+BMJRTM+4I6M+65ME9',
        },
        {
          bannerId: 'jikka-crosshouse',
          name: 'クロスハウス（サブリース）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+B72I3E+4EZ2+NTZCH',
          description: '',
          badge: '不動産',
          forWho: '', notFor: '',
          imageUrl: 'https://www20.a8.net/svt/bgt?aid=260521603677&wid=002&eno=01&mid=s00000020603004003000&mc=1',
          imageWidth: 300,
          imageHeight: 77,
          impUrl: 'https://www13.a8.net/0.gif?a8mat=4B3VR7+B72I3E+4EZ2+NTZCH',
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
