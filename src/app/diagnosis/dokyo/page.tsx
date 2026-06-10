import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '二世帯・同居 適性診断 | 実家どうするナビ',
  description: '10問・約3分 | 同居・二世帯・近居どれが向いているかわかります',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="dokyo"
      title="二世帯・同居 適性診断"
      subtitle="10問・約3分 | 同居・二世帯・近居どれが向いているかわかります"
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
                "name": "FP無料相談（保険チャンネル）",
                "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX",
                "description": "相続・不動産・老後資金をFPに無料相談できます。",
                "forWho": "",
                "notFor": "",
                "badge": "無料相談"
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
