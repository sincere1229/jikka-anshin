// A8公式バナーコード レジストリ（jikka-anshin.net専用）
// ここに保存するofficialHtmlはA8管理画面「素材をコピー」で取得したコード全文です。
// 【重要】このファイル内のofficialHtmlは無改変で保管してください。
// クリックURL・画像URL・width/height/alt・1x1インプレッションタグ・a8matパラメータ等を
// 分解・変更・再構築することは禁止されています（A8公式バナー方式移行方針より）。

export type A8OfficialBannerEntry = {
  id: string
  programName: string
  domain: string
  officialHtml: string
  status: "active" | "unplaced"  // unplaced = 正式コードは取得済みだが掲載先未確定
}

export const A8_OFFICIAL_BANNERS: Record<string, A8OfficialBannerEntry> = {
  'jikka-rakuuru-akiya': {
    id: 'jikka-rakuuru-akiya',
    programName: "ラクウル（空き家・中古戸建買取）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+C968T6+56AO+HY069" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260521603741&wid=002&eno=01&mid=s00000024144003014000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4B3VR7+C968T6+56AO+HY069" alt="">`,
  },
  'jikka-wakegai': {
    id: 'jikka-wakegai',
    programName: "ワケガイ（訳あり物件買取）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+BH6VDM+5J56+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260521603694&wid=002&eno=01&mid=s00000025809001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B3VR7+BH6VDM+5J56+5YZ75" alt="">`,
  },
  'jikka-rakuuru-sozoku': {
    id: 'jikka-rakuuru-sozoku',
    programName: "ラクウル（相続不動産売却）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+C8KT7E+56AO+BY641" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=260521603740&wid=002&eno=01&mid=s00000024144002007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4B3VR7+C8KT7E+56AO+BY641" alt="">`,
  },
  'jikka-reest': {
    id: 'jikka-reest',
    programName: "Re:est（リフォーム見積もり）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+BLCWM2+5UT6+60H7L" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=260521603701&wid=002&eno=01&mid=s00000027321001010000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4B3VR7+BLCWM2+5UT6+60H7L" alt="">`,
  },
  'jikka-retry': {
    id: 'jikka-retry',
    programName: "住宅ローン返済にお困りなら【リトライ】",
    domain: 'jikka-anshin.net',
    status: 'unplaced',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+C9ROEY+56AO+NU729" rel="nofollow">
<img border="0" width="240" height="120" alt="" src="https://www24.a8.net/svt/bgt?aid=260521603742&wid=002&eno=01&mid=s00000024144004004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4B3VR7+C9ROEY+56AO+NU729" alt="">`,
  },
  'jikka-liferesa': {
    id: 'jikka-liferesa',
    programName: "ライフリセット（遺品整理）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=260601699089&wid=001&eno=01&mid=s00000014894012006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1" alt="">`,
  },
  'jikka-miraias': {
    id: 'jikka-miraias',
    programName: "ミライアス（不動産スマート仲介）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+BMJRTM+4I6M+65ME9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=260521603703&wid=002&eno=01&mid=s00000021019001034000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4B3VR7+BMJRTM+4I6M+65ME9" alt="">`,
  },
  'jikka-shakuchiken': {
    id: 'jikka-shakuchiken',
    programName: "借地権 無料相談ドットコム／ビタットハウス秋葉原北店",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+ATYYSA+5TEW+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260521603655&wid=002&eno=01&mid=s00000027140001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4B3VR7+ATYYSA+5TEW+5YZ75" alt="">`,
  },
  'jikka-crosshouse': {
    id: 'jikka-crosshouse',
    programName: "クロスハウス（サブリース／空き家収益化）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+B72I3E+4EZ2+NX735" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260521603677&wid=002&eno=01&mid=s00000020603004018000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4B3VR7+B72I3E+4EZ2+NX735" alt="">`,
  },
  'jikka-jfc': {
    id: 'jikka-jfc',
    programName: "JFC（不動産担保ローン）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+CI3QVU+3GA6+60OXD" rel="nofollow">
<img border="0" width="250" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260521603756&wid=002&eno=01&mid=s00000016107001011000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4B3VR7+CI3QVU+3GA6+60OXD" alt="">`,
  },
  'jikka-marunouchi-ams': {
    id: 'jikka-marunouchi-ams',
    programName: "丸の内AMS（不動産担保ローン）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+CGBG2I+5PBE+5Z6WX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=260521603753&wid=002&eno=01&mid=s00000026609001004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4B3VR7+CGBG2I+5PBE+5Z6WX" alt="">`,
  },
  'jikka-reform-hikaku': {
    id: 'jikka-reform-hikaku',
    programName: "リフォーム比較プロ",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+CC5EU2+46CI+5ZMCH" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=260521603746&wid=002&eno=01&mid=s00000019485001006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4B3VR7+CC5EU2+46CI+5ZMCH" alt="">`,
  },
  'jikka-mochiie-baikyaku': {
    id: 'jikka-mochiie-baikyaku',
    programName: "持ち家売却",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+AWCP7E+53AC+1BNQZ5" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260521603659&wid=002&eno=01&mid=s00000023754008005000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4B3VR7+AWCP7E+53AC+1BNQZ5" alt="">`,
  },
  'jikka-wakeari-center': {
    id: 'jikka-wakeari-center',
    programName: "訳あり物件買取センター",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+BG0062+5TF6+5ZEMP" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=260521603692&wid=002&eno=01&mid=s00000027141001005000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4B3VR7+BG0062+5TF6+5ZEMP" alt="">`,
  },
  'jikka-mochiie-ikkatsu': {
    id: 'jikka-mochiie-ikkatsu',
    programName: "持ち家売却（一括査定）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+AWCP7E+53AC+1BOLU9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260521603659&wid=002&eno=01&mid=s00000023754008009000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4B3VR7+AWCP7E+53AC+1BOLU9" alt="">`,
  },
  'jikka-renoveru': {
    id: 'jikka-renoveru',
    programName: "リノべる。（売却サポート）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+CKHHAY+303O+BXQOH" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=260521603760&wid=002&eno=01&mid=s00000014010002005000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4B3VR7+CKHHAY+303O+BXQOH" alt="">`,
  },
  'jikka-uriel': {
    id: 'jikka-uriel',
    programName: "ウリエル（出張買取）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+CF4KUY+5O4W+2N9ZXT" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=260521603751&wid=002&eno=01&mid=s00000026456016003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4B3VR7+CF4KUY+5O4W+2N9ZXT" alt="">`,
  },
  'jikka-sogo-management': {
    id: 'jikka-sogo-management',
    programName: "総合マネージメント（リースバック）",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+CL2WWQ+1DEC+HWI5T" rel="nofollow">
<img border="0" width="125" height="125" alt="" src="https://www23.a8.net/svt/bgt?aid=260521603761&wid=002&eno=01&mid=s00000006402003007000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B3VR7+CL2WWQ+1DEC+HWI5T" alt="">`,
  },
  'jikka-reform-shokai': {
    id: 'jikka-reform-shokai',
    programName: "リフォーム会社紹介サービス",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+CEJ596+2ISC+HVNAP" rel="nofollow">
<img border="0" width="125" height="125" alt="" src="https://www23.a8.net/svt/bgt?aid=260521603750&wid=002&eno=01&mid=s00000011766003003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B3VR7+CEJ596+2ISC+HVNAP" alt="">`,
  },
  'jikka-bousui-select': {
    id: 'jikka-bousui-select',
    programName: "防水工事セレクト",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+C5LN6I+46CI+NUMHT" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=260521603735&wid=002&eno=01&mid=s00000019485004006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4B3VR7+C5LN6I+46CI+NUMHT" alt="">`,
  },
  'jikka-trefac': {
    id: 'jikka-trefac',
    programName: "トレファク引越",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B3VR7+CLOCII+1PO0+ZUXRL" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260521603762&wid=002&eno=01&mid=s00000007992006023000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4B3VR7+CLOCII+1PO0+ZUXRL" alt="">`,
  },
  'jikka-ecoclean': {
    id: 'jikka-ecoclean',
    programName: "不用品のことなら【ECOクリーン】",
    domain: 'jikka-anshin.net',
    status: 'active',
    officialHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4B7SGZ+1NJGCY+36X8+15P77L" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260703971100&wid=005&eno=01&mid=s00000014894007004000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4B7SGZ+1NJGCY+36X8+15P77L" alt="">`,
  },
}