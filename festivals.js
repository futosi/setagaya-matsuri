// お祭りデータ（世田谷＋隣接エリア / 2026年 / 最終更新: 2026-07-15）
// status: "confirmed" = 出典に2026年（または固定日）の日程あり
//         "annual"    = 例年開催だが2026年の日程は未定・目安（要・最新確認）
// area   : "世田谷区" / "杉並区" / "目黒区" / "大田区" / "川崎市"（省略時は "世田谷区" 扱い）
// lat/lng は会場付近のおおよその座標（丁目・駅周辺レベル）。
// 出典: setagaya.guide / 殖産ベスト / 各神社・寺・商店街の公式/地域情報サイト
window.FESTIVALS = [
  // ---------- 夏（7〜8月） ----------
  {
    id: "hotaru-sagisou",
    name: "せたがやホタル祭りとサギ草市",
    place: "世田谷代官屋敷駐車場ほか（世田谷1丁目）",
    lat: 35.6462, lng: 139.6479,
    category: "夏祭り",
    status: "confirmed",
    dates: [ { start: "2026-07-04", end: "2026-07-05" } ],
    time: "夕方〜夜",
    desc: "ホタルの鑑賞とサギ草市でにぎわう夏の風物詩。代官屋敷周辺が会場。",
    url: "https://shokusanbest.com/setagaya/local-navi/setagaya-summer-festival/"
  },
  {
    id: "kyodo-matsuri",
    name: "経堂まつり",
    place: "経堂農大通り商店街（経堂駅周辺）",
    lat: 35.6506, lng: 139.6361,
    category: "商店街の夏祭り",
    status: "confirmed",
    dates: [ { start: "2026-07-18", end: "2026-07-19" } ],
    time: "13:30〜21:00",
    desc: "経堂・農大通り商店街の夏祭り。露店やステージでにぎわう。",
    url: "https://shokusanbest.com/setagaya/local-navi/setagaya-summer-festival/"
  },
  {
    id: "shimokita-bon",
    name: "下北沢盆踊り",
    place: "下北沢駅東口 駅前広場",
    lat: 35.6609, lng: 139.6687,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-07-25", end: "2026-07-26" } ],
    time: "13:00〜20:00",
    desc: "下北沢駅東口の駅前広場で行われる盆踊り。",
    url: "https://shokusanbest.com/setagaya/local-navi/setagaya-summer-festival/"
  },
  {
    id: "karasuyama-natsu",
    name: "からすやま夏まつり",
    place: "烏山区民センター前広場（千歳烏山駅前）",
    lat: 35.6773, lng: 139.6013,
    category: "夏祭り",
    status: "confirmed",
    dates: [ { start: "2026-07-31", end: "2026-08-01" } ],
    time: "夕方〜夜",
    desc: "千歳烏山駅前・区民センター前広場の夏まつり。",
    url: "https://shokusanbest.com/setagaya/local-navi/setagaya-summer-festival/"
  },
  {
    id: "yoga-summer",
    name: "用賀サマーフェスティバル",
    place: "用賀くすのき公園（用賀駅周辺）",
    lat: 35.6266, lng: 139.6339,
    category: "夏祭り",
    status: "confirmed",
    dates: [ { start: "2026-08-29", end: "2026-08-30" } ],
    time: "夕方〜夜",
    desc: "用賀くすのき公園を会場にした地域の夏祭り。",
    url: "https://shokusanbest.com/setagaya/local-navi/setagaya-summer-festival/"
  },
  {
    id: "meidaimae-summer",
    name: "明大前サマーフェスタ＆盆踊り",
    place: "明大前駅前ロータリー",
    lat: 35.6695, lng: 139.6484,
    category: "夏祭り・盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-08-29", end: "2026-08-30" } ],
    time: "夕方〜夜",
    desc: "明大前駅前ロータリーで開催されるサマーフェスタと盆踊り。",
    url: "https://shokusanbest.com/setagaya/local-navi/setagaya-summer-festival/"
  },
  {
    id: "sancha-sakae-awa",
    name: "三軒茶屋栄通り 阿波踊り・綱引き大会",
    place: "三軒茶屋栄通り商店街",
    lat: 35.6440, lng: 139.6699,
    category: "阿波踊り",
    status: "confirmed",
    dates: [ { start: "2026-08-30", end: "2026-08-30" } ],
    time: "夕方〜夜",
    desc: "三軒茶屋・栄通り商店街の阿波踊りと綱引き大会。",
    url: "https://shokusanbest.com/setagaya/local-navi/setagaya-summer-festival/"
  },
  {
    id: "shimokita-awaodori",
    name: "下北沢 阿波おどり",
    place: "下北沢一番街（下北沢駅周辺）",
    lat: 35.6617, lng: 139.6670,
    category: "阿波踊り",
    status: "annual",
    dates: [ { start: "2026-08-15", end: "2026-08-16" } ],
    time: "18:30〜20:30頃（例年8月中旬の土日／2026年の日程は未告知）",
    desc: "下北沢一番街を舞台にした阿波おどり。第57回(2025年)は8/16-17開催。2026年の公式日程は未告知のため、表示は例年パターンの目安。",
    url: "https://shimokita1ban.com/"
  },
  {
    id: "shimotaka-summer",
    name: "しもたかサマーフェスティバル",
    place: "下高井戸公共駐車場（ひまわり広場）",
    lat: 35.6680, lng: 139.6338,
    category: "夏祭り",
    status: "annual",
    dates: [ { start: "2026-08-29", end: "2026-08-30" } ],
    time: "16:00〜20:30頃（例年8月末の土日／2026年の日程は未告知）",
    desc: "下高井戸の夏フェス。第55回(2025年)は8/30-31開催。2026年の公式日程は未告知のため、表示は例年パターンの目安。",
    url: "https://www.shimotaka.or.jp/category_search?cat=event"
  },

  // ---------- 秋（9〜10月） ----------
  {
    id: "soshigaya-ekimae-bon",
    name: "そしがや駅前 盆踊り",
    place: "祖師ヶ谷大蔵駅前広場",
    lat: 35.6516, lng: 139.5906,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-09-05", end: "2026-09-05" } ],
    time: "夕方〜夜",
    desc: "祖師ヶ谷大蔵駅前広場で行われる盆踊り。",
    url: "https://shokusanbest.com/setagaya/local-navi/setagaya-summer-festival/"
  },
  {
    id: "hachimangu",
    name: "世田谷八幡宮 秋季大祭",
    place: "世田谷八幡宮（宮坂1-26-3）",
    lat: 35.6493, lng: 139.6486,
    category: "神社例大祭",
    status: "confirmed",
    dates: [ { start: "2026-09-19", end: "2026-09-20" } ],
    time: "19日 14:00〜奉納学生相撲／20日 12:00〜神輿宮入り・18:00〜余興",
    desc: "1091年創建。敬老の日前の土日に開催。東京農業大学による奉納学生相撲で知られる江戸三相撲の名所。",
    url: "https://setagaya.guide/events/setagaya-hachimangu-autumn-festival/"
  },
  {
    id: "rokusho",
    name: "赤堤 六所神社 例大祭",
    place: "六所神社（赤堤2-25-2）",
    lat: 35.6606, lng: 139.6351,
    category: "神社例大祭",
    status: "confirmed",
    // 秋分の日に例大祭、前日に宵宮祭（2026年の秋分の日は9/23）
    dates: [ { start: "2026-09-22", end: "2026-09-23" } ],
    time: "22日 宵宮祭／23日（秋分の日）例大祭・神輿渡御",
    desc: "毎年秋分の日に例大祭、前日に宵宮祭を行う赤堤の秋祭り。神輿渡御や奉納演芸でにぎわう。",
    url: "https://setagaya339.net/seta/maturi/a3_kitasawa/21_akatu.htm"
  },
  {
    id: "karasuyama-jinja",
    name: "烏山神社 例大祭",
    place: "烏山神社（南烏山2丁目）",
    lat: 35.6749, lng: 139.6028,
    category: "神社例大祭",
    status: "confirmed",
    dates: [ { start: "2026-09-23", end: "2026-09-24" } ],
    time: "昼〜夜",
    desc: "千歳烏山エリアの秋の例大祭。神輿や露店でにぎわう。",
    url: "https://shokusanbest.com/setagaya/local-navi/setagaya-summer-festival/"
  },
  {
    id: "yoga-jinja",
    name: "用賀神社 秋季例大祭",
    place: "用賀神社（用賀2-16-26）",
    lat: 35.6270, lng: 139.6329,
    category: "神社例大祭",
    status: "annual",
    // 2025年は10/11-12。2026年は10月上旬〜中旬の週末の目安（宮神輿渡御は日曜）。
    dates: [ { start: "2026-10-10", end: "2026-10-11" } ],
    time: "9:30〜21:30頃／宮神輿渡御は日曜（2026年の日程は未告知）",
    desc: "神輿の神霊入祭や奉納演芸が行われる秋季例大祭。例年10月上旬〜中旬の週末に開催（TEL 03-3700-7003）。2026年の公式日程は未告知のため目安。",
    url: "https://setagaya.guide/events/yoga-jinja-shunki-reidaisai/"
  },
  {
    id: "soshigaya-shinmei",
    name: "祖師谷神明社 例大祭",
    place: "祖師谷神明社（祖師谷5-1-16）",
    lat: 35.6543, lng: 139.5905,
    category: "神社例大祭",
    status: "annual",
    // 2025年は10/11-12。2026年は10月中旬の土日の目安。
    dates: [ { start: "2026-10-10", end: "2026-10-11" } ],
    time: "12:00〜20:00頃（例年10月中旬の土日／2026年の日程は未告知）",
    desc: "神輿巡行や奉納演芸、屋台でにぎわう祖師谷の秋祭り。2026年の公式日程は未告知のため、表示は例年パターンの目安。",
    url: "https://setagaya.guide/events/soshigaya-shinmeisha-reidaisai/"
  },
  {
    id: "taishido-hachiman",
    name: "太子堂八幡神社 例大祭",
    place: "太子堂八幡神社（太子堂5-23-5）",
    lat: 35.6454, lng: 139.6693,
    category: "神社例大祭",
    status: "annual",
    // 2025年は宵宮10/11(土)・本祭10/12(日)。2026年は10月第2土日の目安。
    dates: [ { start: "2026-10-10", end: "2026-10-11" } ],
    time: "宵宮（土）16:30〜／本祭（日）11:00〜（2026年の日程は未告知）",
    desc: "神輿渡御・和太鼓・奉納演芸などの神賑行事、両日とも露店あり。令和7年(2025年)は宵宮10/11・本祭10/12。2026年(令和8年)の公式日程は未告知のため目安（TEL 03-3411-0753）。",
    url: "https://www.taishido-hachiman.or.jp/reitaisai/"
  },
  {
    id: "sakurashinmachi-nebuta",
    name: "桜新町ねぶたまつり",
    place: "サザエさん通りほか（桜新町駅周辺）",
    lat: 35.6282, lng: 139.6403,
    category: "夏祭り",
    status: "annual",
    dates: [ { start: "2026-08-29", end: "2026-08-30" } ],
    time: "夕方〜夜（例年8月末の土日／2026年の日程は未告知）",
    desc: "桜新町・サザエさん通りのねぶた運行。2004年に商店街50周年を記念して開始。2026年の公式日程は未告知のため、表示は例年パターンの目安。",
    url: "https://www.sakurashinmachi.net/"
  },

  // ---------- 南部・玉川エリア（玉堤・奥沢・等々力・尾山台・瀬田ほか） ----------
  {
    id: "okusawa-jinja",
    name: "奥澤神社 例大祭（厄除大蛇お練り）",
    place: "奥澤神社（奥沢5-22-1）",
    lat: 35.6024, lng: 139.6793,
    category: "神社例大祭",
    status: "annual",
    // 例年9月第2土日。2026年の第2土日は9/12-13。
    dates: [ { start: "2026-09-12", end: "2026-09-13" } ],
    time: "大蛇お練りは土曜10:00〜12:30頃（2026年の日程は目安）",
    desc: "全長約10m・150kgの藁の大蛇を担いで街を練り歩く「厄除大蛇お練り」で知られる例大祭。例年9月第2土日。2026年の公式日程は未告知のため目安。",
    url: "https://setagaya.guide/events/okusawa-shrine-anual-festival/"
  },
  {
    id: "tamagawa-jinja",
    name: "玉川神社 例大祭",
    place: "玉川神社（等々力3-27-7／玉堤エリア）",
    lat: 35.6043, lng: 139.6513,
    category: "神社例大祭",
    status: "annual",
    // 例年9月第3週末（敬老の日の前日に例祭）。2026年の第3土日は9/19-20。
    dates: [ { start: "2026-09-19", end: "2026-09-20" } ],
    time: "昼〜夜（敬老の日の前日に例祭／2026年の日程は目安）",
    desc: "根原・宿・上原・山谷・尾山台の五図子（ごずし）の神輿が連合で宮入りする賑やかな祭礼。囃子や神楽の奉納も。2026年の公式日程は未告知のため目安。",
    url: "http://www.tokyo-jinjacho.or.jp/setagaya/5659"
  },
  {
    id: "usa-jinja",
    name: "宇佐神社 例大祭",
    place: "宇佐神社（尾山台2-11-3）",
    lat: 35.6073, lng: 139.6586,
    category: "神社例大祭",
    status: "annual",
    // 例年10月第1日曜（前日が宵宮）。2026年の第1日曜は10/4。
    dates: [ { start: "2026-10-03", end: "2026-10-04" } ],
    time: "本祭10:00〜／神輿・太鼓車12:00出発〜18:00頃（2026年の日程は目安）",
    desc: "尾山台の秋の例大祭。本祭は神輿の御霊入れのあと町内を巡幸。例年10月第1日曜。2026年の公式日程は未告知のため目安（TEL 03-3702-0875）。",
    url: "https://setagaya339.net/seta/maturi/a8_tamaga2/49_usa.htm"
  },
  {
    id: "seta-tamagawa",
    name: "瀬田玉川神社 例大祭",
    place: "瀬田玉川神社（瀬田4-11-31／二子玉川周辺巡行）",
    lat: 35.6152, lng: 139.6332,
    category: "神社例大祭",
    status: "annual",
    // 例年10月第3週末（前日が宵宮）。2026年の第3土日は10/17-18。
    dates: [ { start: "2026-10-17", end: "2026-10-18" } ],
    time: "昼〜夜（2026年の日程は目安）",
    desc: "「瀬田神輿」「玉川神輿」が二子玉川の街を渡御する例大祭。境内には瀬田囃子の奉納や50超の屋台。例年10月第3週末。2026年の公式日程は未告知のため目安。",
    url: "https://www.tamagawajinja.jp/matsuri.html"
  },
  {
    id: "noge-rokusho",
    name: "野毛六所神社 例大祭",
    place: "野毛六所神社（野毛2-14-2）",
    lat: 35.6086, lng: 139.6456,
    category: "神社例大祭",
    status: "annual",
    // 例年9月第4日曜前後。2026年の第4日曜は9/27。
    dates: [ { start: "2026-09-26", end: "2026-09-27" } ],
    time: "昼〜夜（2026年の日程は目安）",
    desc: "野毛・上野毛エリアの秋の例大祭。神輿や露店でにぎわう。例年9月第4日曜前後。2026年の公式日程は未告知のため目安。",
    url: "https://setagaya339.net/seta/maturi/maturi4.htm"
  },
  {
    id: "higashitamagawa",
    name: "東玉川神社 例大祭",
    place: "東玉川神社（東玉川1-32-9）",
    lat: 35.5962, lng: 139.6722,
    category: "神社例大祭",
    status: "annual",
    // 例年8月第3〜第4日曜前後。2026年の目安として8/22-23。
    dates: [ { start: "2026-08-22", end: "2026-08-23" } ],
    time: "昼〜夜（2026年の日程は目安）",
    desc: "東玉川エリアの夏〜初秋の例大祭。例年8月第3〜第4日曜前後。2026年の公式日程は未告知のため目安。",
    url: "https://setagaya339.net/seta/maturi/maturi4.htm"
  },

  // ---------- 夏の盆踊り・地域まつり（2026年 setagaya.guide より） ----------
  // ※町会・商店街の盆踊りは会場住所が非公開のものが多く、ピンはエリア周辺の目安です。
  {
    id: "oyako-bon-hachiman",
    name: "親子盆踊り大会（八幡小学校）",
    place: "世田谷区立八幡小学校（玉川田園調布2-17-15）",
    lat: 35.5983, lng: 139.6608,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-07-18", end: "2026-07-18" } ],
    time: "17:00〜19:20",
    desc: "八幡小学校の校庭で行われる親子向けの盆踊り大会。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "soshigaya-shoshinkai-bon",
    name: "祖師谷昇進会 盆踊り大会",
    place: "祖師谷神明社（祖師谷5-1-16）",
    lat: 35.6543, lng: 139.5905,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-07-17", end: "2026-07-18" } ],
    time: "19:00〜21:00",
    desc: "祖師谷神明社の境内で行われる盆踊り大会。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "sancha-mizukake",
    name: "三茶 水かけ祭り",
    place: "こどものひろば公園（三軒茶屋・太子堂）",
    lat: 35.6452, lng: 139.6693,
    category: "夏祭り",
    status: "confirmed",
    dates: [ { start: "2026-07-18", end: "2026-07-18" } ],
    time: "10:00〜13:00",
    desc: "三軒茶屋のこどものひろば公園で水を掛け合って夏の暑さを吹き飛ばす、子ども向けの水かけ祭り。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "kinuta-nouryou",
    name: "砧町町会 納涼夏祭り大会",
    place: "砧エリア（会場周辺の目安）",
    lat: 35.6298, lng: 139.6000,
    category: "夏祭り",
    status: "confirmed",
    dates: [ { start: "2026-07-18", end: "2026-07-19" } ],
    time: "15:00〜20:00",
    desc: "砧町町会の納涼夏祭り。ピンは砧エリア周辺の目安。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "akatsutsumi-fureai",
    name: "赤堤商店街ふれあいまつり 盆踊り",
    place: "赤堤商店街（会場周辺の目安）",
    lat: 35.6588, lng: 139.6362,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-07-18", end: "2026-07-19" } ],
    time: "15:00〜21:00",
    desc: "赤堤商店街のふれあいまつりと盆踊り。ピンは赤堤商店街周辺の目安。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "seijo-bon",
    name: "成城 納涼盆踊り",
    place: "成城エリア（会場周辺の目安）",
    lat: 35.6408, lng: 139.5988,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-07-18", end: "2026-07-19" } ],
    time: "17:30〜22:00",
    desc: "成城の納涼盆踊り。ピンは成城学園前駅周辺の目安。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "chitosefunabashi-bon",
    name: "納涼盆踊り大会（千歳船橋 参商会）",
    place: "千歳船橋 参商会商店街（会場周辺の目安）",
    lat: 35.6556, lng: 139.6203,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-07-18", end: "2026-07-19" } ],
    time: "19:00〜",
    desc: "千歳船橋・参商会商店街振興組合による納涼盆踊り大会。ピンは千歳船橋駅周辺の目安。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "yoga-natsu",
    name: "ようが夏まつり",
    place: "用賀エリア（会場周辺の目安）",
    lat: 35.6262, lng: 139.6335,
    category: "夏祭り",
    status: "confirmed",
    dates: [ { start: "2026-07-22", end: "2026-07-23" } ],
    time: "17:00〜21:00",
    desc: "用賀の夏まつり。ピンは用賀駅周辺の目安。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "sazaesan-ennichi",
    name: "サザエさん縁日",
    place: "桜新町 サザエさん通り周辺",
    lat: 35.6270, lng: 139.6415,
    category: "縁日",
    status: "confirmed",
    dates: [ { start: "2026-07-23", end: "2026-07-23" } ],
    time: "16:00〜20:00",
    desc: "桜新町・サザエさん通り周辺で行われる縁日。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "rokakoen-bon",
    name: "芦花公園 納涼盆踊り大会",
    place: "蘆花恒春園（芦花公園）",
    lat: 35.6636, lng: 139.5952,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-07-24", end: "2026-07-24" } ],
    time: "16:00〜20:30",
    desc: "芦花公園（蘆花恒春園）の納涼盆踊り大会。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "tamagawa-chokai-bon",
    name: "玉川町会 盆踊り",
    place: "玉川エリア（等々力・玉堤方面の目安）",
    lat: 35.6095, lng: 139.6295,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-07-24", end: "2026-07-25" } ],
    time: "19:00〜21:00",
    desc: "玉川町会の盆踊り。ピンは玉川エリア（等々力・玉堤方面）の目安。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "higashifukasawa-natsu",
    name: "東深沢町会 夏まつり",
    place: "深沢エリア（会場周辺の目安）",
    lat: 35.6255, lng: 139.6598,
    category: "夏祭り",
    status: "confirmed",
    dates: [ { start: "2026-07-25", end: "2026-07-25" } ],
    time: "17:00〜20:30",
    desc: "東深沢町会の夏まつり。ピンは深沢エリア周辺の目安。",
    url: "https://setagaya.guide/events/categories/festival/"
  },
  {
    id: "kitami-bon",
    name: "喜多見 盆踊り大会",
    place: "喜多見エリア（会場周辺の目安）",
    lat: 35.6385, lng: 139.5878,
    category: "盆踊り",
    status: "confirmed",
    dates: [ { start: "2026-07-25", end: "2026-07-26" } ],
    time: "16:00〜20:30",
    desc: "喜多見の盆踊り大会。ピンは喜多見駅周辺の目安。",
    url: "https://setagaya.guide/events/categories/festival/"
  },

  // ---------- 冬（12〜1月） ----------
  {
    id: "boroichi",
    name: "世田谷のボロ市",
    place: "ボロ市通り（世田谷線 上町駅・世田谷駅周辺）",
    lat: 35.6462, lng: 139.6478,
    category: "市・フリーマーケット",
    status: "confirmed",
    // 毎年12月15・16日、1月15・16日の固定開催
    dates: [
      { start: "2026-12-15", end: "2026-12-16" },
      { start: "2027-01-15", end: "2027-01-16" }
    ],
    time: "9:00〜20:00",
    desc: "1578年の楽市に始まる伝統行事。700店以上の露店が並び各日20万人が訪れる、日本最大級のフリーマーケット。毎年12/15・16と1/15・16の固定開催。",
    url: "https://setagaya.guide/events/setagaya-boroichi/"
  },

  // ======================================================================
  //  隣接エリア（杉並区・目黒区・大田区）＋ 神奈川県川崎市
  // ======================================================================

  // ---------- 杉並区 ----------
  {
    id: "koenji-awaodori",
    name: "東京高円寺阿波おどり",
    area: "杉並区",
    place: "高円寺駅周辺（パル商店街・ルック商店街ほか）",
    lat: 35.7053, lng: 139.6497,
    category: "阿波踊り",
    status: "confirmed",
    dates: [ { start: "2026-08-29", end: "2026-08-30" } ],
    time: "夕方〜夜",
    desc: "約1万人の踊り手が参加する都内最大級の阿波おどり。高円寺の街全体が舞台。",
    url: "https://www.chuo-besthome.co.jp/local/suginamiku-nakano-summer-festival/"
  },
  {
    id: "asagaya-tanabata",
    name: "阿佐谷七夕まつり",
    area: "杉並区",
    place: "阿佐ケ谷駅〜阿佐谷パールセンター商店街",
    lat: 35.7047, lng: 139.6362,
    category: "夏祭り",
    status: "confirmed",
    dates: [ { start: "2026-08-07", end: "2026-08-11" } ],
    time: "日中〜夜",
    desc: "アーケードに手作りの張りぼて飾りが並ぶ、70回超の歴史ある七夕まつり。",
    url: "https://www.chuosen-rr.com/event/"
  },
  {
    id: "omiya-hachiman",
    name: "大宮八幡宮 例大祭",
    area: "杉並区",
    place: "大宮八幡宮（大宮2-3-1）",
    lat: 35.6800, lng: 139.6358,
    category: "神社例大祭",
    status: "confirmed",
    dates: [ { start: "2026-09-18", end: "2026-09-21" } ],
    time: "日中〜夜",
    desc: "「東京のへそ」大宮八幡宮の秋の例大祭。神輿・奉納行事でにぎわう。",
    url: "https://kotokoto-sasazuka.com/omiya-matsuri/"
  },

  // ---------- 目黒区 ----------
  {
    id: "meguro-sanma-kumin",
    name: "目黒のさんま祭り（目黒区民まつり）",
    area: "目黒区",
    place: "田道広場公園ほか（目黒1丁目）",
    lat: 35.6320, lng: 139.7098,
    category: "夏祭り",
    status: "annual",
    dates: [ { start: "2026-09-27", end: "2026-09-27" } ],
    time: "日中（例年9月下旬）",
    desc: "落語「目黒のさんま」にちなみ、気仙沼直送のさんまを焼いて振る舞う区民まつり。2026年の日程は目安。",
    url: "https://www.city.meguro.tokyo.jp/bunkasports/kankou/event-matsuri/index.html"
  },
  {
    id: "meguro-otori",
    name: "目黒 大鳥神社 例大祭",
    area: "目黒区",
    place: "大鳥神社（下目黒3-1-2）",
    lat: 35.6333, lng: 139.7078,
    category: "神社例大祭",
    status: "annual",
    dates: [ { start: "2026-09-05", end: "2026-09-06" } ],
    time: "日中〜夜（例年9月上旬）",
    desc: "目黒区最古の神社の例大祭。隔年で町神輿の連合宮入、露店も多数。2026年の日程は目安。",
    url: "https://www.enjoytokyo.jp/event/664206/"
  },
  {
    id: "jiyugaoka-megami",
    name: "自由が丘女神まつり",
    area: "目黒区",
    place: "自由が丘駅前一帯",
    lat: 35.6073, lng: 139.6688,
    category: "夏祭り",
    status: "annual",
    dates: [ { start: "2026-10-10", end: "2026-10-11" } ],
    time: "日中〜夜（例年10月）",
    desc: "駅前の「女神像」にちなむ自由が丘最大のまつり。2026年の日程は目安。",
    url: "https://meguro-kanko.or.jp/event/index.php"
  },

  // ---------- 大田区 ----------
  {
    id: "haneda-matsuri",
    name: "羽田神社 夏季例大祭（羽田まつり）",
    area: "大田区",
    place: "羽田神社（本羽田3-9-12）",
    lat: 35.5487, lng: 139.7477,
    category: "神社例大祭",
    status: "confirmed",
    dates: [ { start: "2026-07-24", end: "2026-07-26" } ],
    time: "26日 本社神輿渡御・町内神輿連合渡御15:00〜18:00ほか",
    desc: "神輿を左右に大きく傾ける独特の担ぎ方「ヨコタ」で知られる、担ぎ手3千人の大祭。",
    url: "https://www.o-2.jp/event/hanedajinjareitaisai2026/"
  },
  {
    id: "ikegami-oeshiki",
    name: "池上本門寺 お会式",
    area: "大田区",
    place: "池上本門寺（池上1-1-1）",
    lat: 35.5772, lng: 139.7009,
    category: "例大祭",
    status: "confirmed",
    dates: [ { start: "2026-10-11", end: "2026-10-13" } ],
    time: "12日夜が万灯練供養のクライマックス",
    desc: "日蓮聖人の命日に営まれる法要。12日夜は万灯と纏を掲げた数万人の練供養で沿道が埋まる。毎年10/11〜13。",
    url: "https://honmonji.jp/news/schedule.html"
  },
  {
    id: "rokugo-jinja",
    name: "六郷神社 例大祭",
    area: "大田区",
    place: "六郷神社（東六郷3-10-18）",
    lat: 35.5405, lng: 139.7118,
    category: "神社例大祭",
    status: "annual",
    dates: [ { start: "2026-06-06", end: "2026-06-07" } ],
    time: "日中〜夜（例年6月上旬）",
    desc: "多摩川近く・六郷エリアの古社の例大祭。神輿渡御でにぎわう。2026年の日程は目安。",
    url: "https://www.o-2.jp/eventinfo/event-list/"
  },

  // ---------- 神奈川県 川崎市 ----------
  {
    id: "kawasaki-sanno",
    name: "川崎山王祭（稲毛神社）",
    area: "川崎市",
    place: "稲毛神社（川崎区宮本町7-7）",
    lat: 35.5312, lng: 139.7018,
    category: "神社例大祭",
    status: "confirmed",
    dates: [ { start: "2026-06-19", end: "2026-06-21" } ],
    time: "20日 町内神輿連合渡御／21日 神幸祭「山王ふぇすてぃばる」",
    desc: "川崎最大の夏祭り。孔雀・玉座の二基の大神輿の渡御で知られる。2026年から6月開催に変更。",
    url: "https://www.takemikatsuchi.net/schedulelist/sannousai/"
  },
  {
    id: "kawasaki-fuurin",
    name: "川崎大師 風鈴市",
    area: "川崎市",
    place: "川崎大師 平間寺 境内（大師町4-48）",
    lat: 35.5347, lng: 139.7305,
    category: "市・縁日",
    status: "confirmed",
    dates: [ { start: "2026-07-17", end: "2026-07-21" } ],
    time: "10:00〜17:00（20日のみ19:00まで）",
    desc: "全国から800種を超える風鈴が集まる夏の風物詩。涼やかな音色と屋台でにぎわう。",
    url: "https://www.fuurinichi.com/"
  },
  {
    id: "mizonokuchi-jinja",
    name: "溝口神社 例大祭",
    area: "川崎市",
    place: "溝口神社（高津区溝口2-25-1）",
    lat: 35.5998, lng: 139.6103,
    category: "神社例大祭",
    status: "annual",
    dates: [ { start: "2026-09-26", end: "2026-09-27" } ],
    time: "日中〜夜（例年9月下旬）",
    desc: "多摩川対岸・高津区溝口の鎮守の例大祭。神輿・露店でにぎわう。2026年の日程は目安。",
    url: "http://www7b.biglobe.ne.jp/~yumaka/walk2.html"
  }
];
