// 世田谷区のお祭りデータ（2026年 精査版 / 最終更新: 2026-07-15）
// status: "confirmed" = 出典に2026年（または固定日）の日程あり
//         "annual"    = 例年開催だが2026年の日程は未定・目安（要・最新確認）
// lat/lng は会場付近のおおよその座標（丁目・駅周辺レベル）。
// 出典: setagaya.guide / 殖産ベスト世田谷 / 各神社公式・地域情報サイト
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
    time: "昼〜夜",
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
    time: "夕方〜夜",
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
  }
];
