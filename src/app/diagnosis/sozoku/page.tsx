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
          bannerId: 'jikka-jfc',
          name: 'JFC（不動産担保ローン）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CI3QVU+3GA6+60OXD',
          description: '',
          badge: '金融',
          forWho: '', notFor: '',
          imageUrl: 'https://www21.a8.net/svt/bgt?aid=260521603756&wid=002&eno=01&mid=s00000016107001011000&mc=1',
          imageWidth: 250,
          imageHeight: 250,
          impUrl: 'https://www15.a8.net/0.gif?a8mat=4B3VR7+CI3QVU+3GA6+60OXD',
        },
        {
          bannerId: 'jikka-marunouchi-ams',
          name: '丸の内AMS（不動産担保ローン）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B3VR7+CGBG2I+5PBE+5Z6WX',
          description: '',
          badge: '金融',
          forWho: '', notFor: '',
          imageUrl: 'https://www27.a8.net/svt/bgt?aid=260521603753&wid=002&eno=01&mid=s00000026609001004000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www17.a8.net/0.gif?a8mat=4B3VR7+CGBG2I+5PBE+5Z6WX',
        },
        {
          bannerId: 'jikka-liferesa',
          name: 'ライフリセット（遺品整理）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1',
          description: '',
          badge: '遺品整理',
          forWho: '', notFor: '',
          imageUrl: 'https://www23.a8.net/svt/bgt?aid=260601699089&wid=001&eno=01&mid=s00000014894012006000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www10.a8.net/0.gif?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1',
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
