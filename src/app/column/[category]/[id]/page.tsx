import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const COLUMNS: Record<string, Record<number, { title: string; body: string; a8: { name: string; url: string; desc: string }[] }>> = {
  'hajimete': {
    1: { title: "実家をどうするか迷ったらまず読む記事", body: "売却・賃貸・空き家・同居の4つの選択肢を整理して、判断基準をわかりやすく解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
    2: { title: "親が高齢になったら考えること", body: "親が70代・80代になったときに話し合っておくべき実家・介護・相続の3テーマを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
    3: { title: "実家の名義・権利関係を確認する方法", body: "実家が誰の名義か・共有名義かどうかを確認する方法と、共有名義のリスクを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
    4: { title: "実家の固定資産税を確認する方法", body: "固定資産税の確認方法・計算の仕組み・空き家になったときの税額変化を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
    5: { title: "実家を将来どうするか家族会議の進め方", body: "感情的にならずに実家の方針を決める家族会議の進め方と、事前準備のポイントを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
    6: { title: "実家の片付け・生前整理の進め方", body: "実家の荷物を片付ける順番・業者への依頼方法・遺品整理との違いを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
    7: { title: "実家に関わる法律の基礎知識", body: "相続登記の義務化・空き家法・借地権など、実家に関わる法律の基礎をわかりやすく解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
    8: { title: "実家問題を専門家に相談するには", body: "不動産会社・税理士・司法書士・FP・弁護士の違いと、誰に何を相談すべきかを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
    9: { title: "実家に関する補助金・支援制度まとめ", body: "売却・賃貸・リフォーム・解体・近居に使える国・自治体の補助金制度をまとめます。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
    10: { title: "実家問題でよくある後悔と防ぎ方", body: "実家の処分・売却・同居で後悔しやすいケースと、事前に防ぐための対策を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。最短2週間で現金化。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}] },
  },
  'baikyaku-col': {
    1: { title: "実家売却の流れと費用【完全ガイド】", body: "査定依頼から引き渡しまでの全ステップと、かかる費用（仲介手数料・譲渡税）を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
    2: { title: "不動産一括査定サービスの比較と使い方", body: "一括査定サービスの仕組み・注意点・複数社に依頼する理由をわかりやすく解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
    3: { title: "実家売却で損しないための注意点", body: "相場より安く売ってしまうケース・契約不適合責任の注意点を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
    4: { title: "実家が売れない場合の対処法", body: "売れない理由（価格・立地・築古）と、それぞれの対処法・代替策を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
    5: { title: "築古・訳あり物件の売却方法", body: "旧耐震・事故物件・農地など売りにくい物件を売却する方法と専門業者を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
    6: { title: "実家売却の税金と確定申告", body: "譲渡所得税の計算方法・3000万円特別控除の条件・確定申告の手順を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
    7: { title: "リースバックとは？仕組みと注意点", body: "売却後もそのまま住み続けられるリースバックの仕組み・メリット・デメリットを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
    8: { title: "不動産買取と仲介の違い", body: "仲介と買取専門業者の違い・それぞれが向いているケース・価格差を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
    9: { title: "共有名義の実家を売却する方法", body: "兄弟・親族との共有名義物件を売るための手続きと、同意が得られない場合の対処法を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
    10: { title: "実家売却後の引っ越しと残置物処理", body: "売却前に片付けるべき物・残置物の処理業者・引き渡し前のトラブルを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "訳あり・築古・空き家も買取。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "不動産買取専門。最短3日で査定。"}] },
  },
  'akiya-col': {
    1: { title: "空き家を放置するとどうなる？リスクと対策", body: "固定資産税6倍・強制解体・近隣トラブルなど空き家放置のリスクと対策を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
    2: { title: "特定空き家に指定されないための対策", body: "特定空き家の指定基準・固定資産税の優遇消滅・行政代執行のリスクを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
    3: { title: "空き家の管理方法と管理サービス", body: "自分で管理する方法と、空き家管理サービスの費用・内容・業者選びを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
    4: { title: "空き家バンクへの登録方法", body: "市区町村の空き家バンクへの登録手順・注意点・成約までの期間を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
    5: { title: "空き家のリフォーム・リノベーション費用", body: "空き家を賃貸・売却可能な状態にするリフォームの費用相場と補助金を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
    6: { title: "空き家の解体費用と補助金", body: "木造・鉄骨別の解体費用の相場と、自治体の解体補助金の申請方法を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
    7: { title: "空き家を民泊・シェアハウスにする方法", body: "空き家を民泊・シェアハウスとして活用する手続き・費用・収益を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
    8: { title: "相続した空き家の売却と税金", body: "相続空き家の3000万円特別控除の条件と手続きを解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
    9: { title: "田舎の空き家をどうするか", body: "過疎地・農村の空き家特有の問題と対処法を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
    10: { title: "空き家になる前にできる予防策", body: "親が元気なうちにやっておくべき実家の整理・契約・名義確認を解説します。", a8: [{"name": "ワケガイ（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+WAKEGAI+XXXXXX", "desc": "空き家・訳あり物件の買取専門。"}, {"name": "ラクウル（買取）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+RAKUURU+XXXXXX", "desc": "最短2週間で現金化できます。"}] },
  },
  'sozoku-col': {
    1: { title: "実家の相続でもめないための5つの準備", body: "争族を防ぐための遺言書・家族会議・財産把握・専門家活用・記録化を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
    2: { title: "相続登記の義務化と手続き方法", body: "2024年4月から義務化された相続登記の手続き・期限・費用を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
    3: { title: "実家を誰が相続するか決める方法", body: "法定相続分・遺産分割協議・代償分割・換価分割の違いと選び方を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
    4: { title: "実家の相続税の計算方法", body: "基礎控除・小規模宅地等の特例・路線価の調べ方など相続税の仕組みを解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
    5: { title: "遺産分割協議書の書き方", body: "実家を含む遺産分割協議書の書き方・必要書類・司法書士への依頼を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
    6: { title: "相続放棄の手続きと注意点", body: "相続放棄の申請方法・期限・不動産を放棄した後の管理責任を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
    7: { title: "生前贈与で実家を子供に渡す方法", body: "相続時精算課税・暦年贈与・住宅取得等資金贈与の違いとメリットを解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
    8: { title: "家族信託で実家を管理する方法", body: "認知症対策として有効な家族信託の仕組み・費用・活用事例を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
    9: { title: "実家の相続でよくあるトラブルと解決法", body: "不動産評価の不一致・寄与分・特別受益など相続トラブルの解決策を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
    10: { title: "税理士・司法書士・弁護士の選び方", body: "相続で使う専門家の役割の違いと、費用相場・選び方のポイントを解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "相続・不動産をFPに無料相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売っても住み続けられます。"}] },
  },
  'chintai-col': {
    1: { title: "実家を賃貸に出すメリット・デメリット", body: "実家を賃貸に出すときの収益・リスク・管理の手間・税金を整理して解説します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
    2: { title: "賃貸管理会社の選び方と手数料", body: "賃貸管理会社の種類・管理手数料の相場・選び方のポイントを解説します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
    3: { title: "サブリース契約の仕組みと注意点", body: "空室でも家賃が入るサブリースの仕組み・メリット・デメリット・解約条件を解説します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
    4: { title: "実家をリフォームして賃貸に出す費用", body: "賃貸用にリフォームする際の費用相場・DIYとの比較・補助金の活用を解説します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
    5: { title: "実家の賃貸収入の確定申告方法", body: "不動産所得の計算方法・経費計上できるもの・青色申告のメリットを解説します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
    6: { title: "実家を民泊で活用する方法", body: "民泊新法の届出・収益シミュレーション・清掃管理の方法を解説します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
    7: { title: "農地付きの実家の活用方法", body: "農地の売却・転用・貸し農園・農家民宿としての活用方法を解説します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
    8: { title: "実家を事務所・店舗として使う方法", body: "自宅兼事務所の税務処理・用途変更の手続き・店舗改装費用を解説します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
    9: { title: "空き家を活用した地域貢献の方法", body: "コミュニティスペース・子ども食堂・移住者支援拠点としての活用事例を紹介します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
    10: { title: "実家の賃貸と売却、どちらが得かシミュレーション", body: "10年間の収支を試算して売却と賃貸どちらが有利かを具体例で解説します。", a8: [{"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "自宅を売却後もそのまま住めるリースバック。"}, {"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "賃貸活用・節税をFPに相談。"}] },
  },
  'dokyo-col': {
    1: { title: "親との同居を成功させる7つのルール", body: "費用分担・家事・プライバシー・食事・来客など実践的なルールを解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
    2: { title: "二世帯住宅のメリット・デメリット", body: "完全分離・部分共有・同居型それぞれのメリットとデメリットを比較します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
    3: { title: "同居前に決めておくべきお金のルール", body: "光熱費・食費・修繕費・介護費用など同居後のお金トラブルを防ぐルール作りを解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
    4: { title: "義親との同居を成功させるポイント", body: "配偶者の親との同居で気をつけるべきことと、パートナーとの連携方法を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
    5: { title: "親との近居のメリットと補助金", body: "同居と近居の違い・近居のメリット・自治体の近居支援補助金を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
    6: { title: "二世帯住宅リフォームの費用相場", body: "完全分離型・部分共有型のリフォーム費用・工期・業者選びを解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
    7: { title: "同居解消・別居の進め方", body: "同居がうまくいかなくなったときの円満な別居の進め方を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
    8: { title: "介護が必要になったときの同居対応", body: "親の要介護度が上がったときに整えるバリアフリーリフォームを解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
    9: { title: "二世帯住宅の相続税節税効果", body: "二世帯住宅に住むことで受けられる小規模宅地等の特例の適用条件を解説します。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
    10: { title: "実家への引っ越し準備チェックリスト", body: "実家に引っ越す前にやっておくべき手続き・荷物整理・近隣挨拶をまとめます。", a8: [{"name": "FP無料相談", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+FPSOUDAN+XXXXXX", "desc": "同居・二世帯住宅の費用・補助金をFPに相談。"}, {"name": "ミライアス（リースバック）", "url": "https://px.a8.net/svt/ejp?a8mat=XXXXXX+MIRAIAS+XXXXXX", "desc": "実家を現金化して近居費用に充てる選択肢も。"}] },
  },
}

const CAT_LABEL: Record<string, string> = {
  hajimete: '実家どうする？基礎知識',
  'baikyaku-col': '売却・買取',
  'akiya-col': '空き家対策',
  'sozoku-col': '相続・名義',
  'chintai-col': '賃貸・活用',
  'dokyo-col': '同居・二世帯',
}

export async function generateStaticParams() {
  const params = []
  for (const cat of Object.keys(COLUMNS)) {
    for (const id of Object.keys(COLUMNS[cat])) {
      params.push({ category: cat, id })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: { category: string; id: string } }): Promise<Metadata> {
  const col = COLUMNS[params.category]?.[Number(params.id)]
  if (!col) return {}
  return { title: `${col.title} | 実家どうするナビ`, description: col.body.slice(0, 80) + '...' }
}

export default function ColumnPage({ params }: { params: { category: string; id: string } }) {
  const col = COLUMNS[params.category]?.[Number(params.id)]
  if (!col) notFound()
  const catLabel = CAT_LABEL[params.category] || ''
  const idNum = Number(params.id)
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <div style={{ marginBottom: 16 }}>
        <Link href="/column" style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none' }}>← コラム一覧</Link>
        <p style={{ fontSize: 11, color: '#92400e', fontWeight: 600, margin: '8px 0 4px' }}>{catLabel}</p>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', lineHeight: 1.5 }}>{col.title}</h1>
      </div>
      <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 16 }}>
        <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.8 }}>{col.body}</p>
      </div>
      {col.a8.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 8 }}>※ 広告・PR</p>
          {col.a8.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="nofollow noopener noreferrer"
              style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', marginBottom: 8, textDecoration: 'none' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1f2937', marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: 12, color: '#6b7280' }}>{s.desc}</div>
            </a>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        {idNum > 1 && <Link href={`/column/${params.category}/${idNum - 1}`} style={{ flex: 1, display: 'block', textAlign: 'center', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '10px', fontSize: 13, color: '#374151', textDecoration: 'none' }}>← 前の記事</Link>}
        {idNum < 10 && <Link href={`/column/${params.category}/${idNum + 1}`} style={{ flex: 1, display: 'block', textAlign: 'center', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '10px', fontSize: 13, color: '#374151', textDecoration: 'none' }}>次の記事 →</Link>}
      </div>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <Link href="/" style={{ fontSize: 13, color: '#92400e', textDecoration: 'none' }}>診断を受ける →</Link>
      </div>
    </main>
  )
}
