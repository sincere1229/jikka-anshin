import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '売却vs賃貸 判断診断 | 実家どうするナビ',
  description: '10問・約3分 | 売る？貸す？最適な選択肢がわかります',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="baikyaku"
      title="売却vs賃貸 判断診断"
      subtitle="10問・約3分 | 売る？貸す？最適な選択肢がわかります"
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
                "name": "ワケガイ（訳あり物件買取）",
                "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX",
                "description": "訳あり・築古・空き家も買取。最短2週間で現金化。",
                "forWho": "",
                "notFor": "",
                "badge": "買取"
        },
        {
                "name": "ラクウル（不動産買取）",
                "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX",
                "description": "不動産の買取専門。最短3日で査定結果。",
                "forWho": "",
                "notFor": "",
                "badge": "買取"
        },
        {
                "name": "ミライアス（リースバック）",
                "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX",
                "description": "自宅を売却後もそのまま住み続けられるリースバック。",
                "forWho": "",
                "notFor": "",
                "badge": "リースバック"
        }
]}
    />
  )
}
