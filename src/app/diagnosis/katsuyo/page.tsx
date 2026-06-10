import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '実家活用タイプ診断 | 実家どうするナビ',
  description: '10問・約3分 | 実家の最適な扱い方がわかります',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="katsuyo"
      title="実家活用タイプ診断"
      subtitle="10問・約3分 | 実家の最適な扱い方がわかります"
      questionsCsvPath="/data/csv/questions_katsuyo.csv"
      resultsCsvPath="/data/csv/result_katsuyo.csv"
      nextDiagnoses={[
        { name: '売却vs賃貸判断診断', href: '/diagnosis/baikyaku' },
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
                "name": "ミライアス（リースバック）",
                "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX",
                "description": "自宅を売却後もそのまま住み続けられるリースバック。",
                "forWho": "",
                "notFor": "",
                "badge": "リースバック"
        },
        {
                "name": "FP無料相談（保険チャンネル）",
                "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX",
                "description": "相続・不動産・老後資金をFPに無料相談できます。",
                "forWho": "",
                "notFor": "",
                "badge": "無料相談"
        }
]}
    />
  )
}
