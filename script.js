const sources = {
  cambodiaVisa: "https://www.evisa.gov.kh/?vcode=85If",
  cambodiaArrival: "https://arrival.gov.kh/",
  thailandTdac: "https://tdac.immigration.go.th/",
  thailandMfaChina: "https://www.mfa.go.th/en/content/thcn280124?cate=5d5bcb4e15e39c306000683e",
  laosEvisa: "https://laoevisa.gov.la/info/",
  chinaCustoms: "https://english.customs.gov.cn/statics/88707c1e-aa4e-40ca-a968-bdbdbb565e4f.html",
  baiyunT3: "https://www.eguangzhou.gov.cn/gzlatest/content/post_43024.html",
  techo: "https://www.techoairport.com.kh/",
  techoAbout: "https://www.techoairport.com.kh/about-us",
  giantIbisBranches: "https://giantibis.com/branch",
  royalPalacePhnomPenh: "https://royalpalacephnompenh.com/en/",
  nationalMuseumCambodia: "https://www.nmc.gov.kh/index.php/fr/visite/museum-admission-fr",
  tuolSleng: "https://tuolsleng.gov.kh/en/category/events-news/",
  choeungEk: "https://choeungekkillingfield.com/faq/",
  siemReapGuide: "https://www.siemreap.net/guides/travel/siem-reap-angkor-international-airport/",
  donMueang: "https://www.donmueangairport.com/photo-gallery/",
  flightCanKti: "https://www.flightconnections.com/flights-from-can-to-kti",
  flightSaiDmk: "https://www.airportia.com/route/siem-reap-bangkok-flights-sai-dmk/",
  flightDmkLpq: "https://www.flight.info/FD1030",
  flightLpqKmg: "https://www.flightconnections.com/flights-from-lpq-to-kmg",
  flightKmgCan: "https://www.flightconnections.com/flights-from-kmg-to-can",
  angkorTickets: "https://www.angkorenterprise.gov.kh/en/available-tickets",
  angkorTicketPortal: "https://ticket.angkorenterprise.gov.kh/",
  angkorCode: "https://www.angkorenterprise.gov.kh/en/visitor-code-of-conduct",
  wmoSiemReap: "https://worldweather.wmo.int/en/city.html?cityId=347",
  weatherSparkSiemReap: "https://weatherspark.com/m/114683/8/Average-Weather-in-August-in-Siem-Reap-Cambodia",
  siemReapSun: "https://www.timeanddate.com/sun/cambodia/siem-reap?month=8",
  kampongPhluk: "https://www.traveldojo.com/kompong-phluk/",
  kampongPhlukRoute: "https://www.rome2rio.com/s/Kampong-Phluk/Siem-Reap",
  saiBus: "https://siemreapairportbus.com/",
  saiTransport: "https://helloangkor.com/attractions/siem-reap-angkor-international-airport/",
  leeTukTuk: "https://www.leetuktuk.com/price/",
  homeIndochine: "https://home.indochinegroup.com/",
  homeIndochineBooking: "https://www.booking.com/hotel/kh/angkor-spirit-boutique.html",
  homeIndochineTrip: "https://www.trip.com/hotels/siem-reap-hotel-detail-4373166/home-indochine-d-angkor/",
  howwBooking: "https://www.booking.com/hotel/th/3howwhostel-sukhumvit21.html",
  howwTrip: "https://www.trip.com/hotels/bangkok-hotel-detail-1340785/3howw-hostel-sukhumvit-21/",
  nirasimBooking: "https://www.booking.com/hotel/la/villa-nirasim.html",
  nirasimTrip: "https://www.trip.com/hotels/luang-prabang-hotel-detail-122428446/nirasim-villa/",
  lpNightMarket: "https://tourismluangprabang.org/things-to-do/arts-and-shopping/night-market/",
  lpKuangSi: "https://tourismluangprabang.org/things-to-do/nature/kuang-si-waterfall/",
  lpAlms: "https://tourismluangprabang.org/things-to-do/buddhism/morning-alms-sai-bat/",
  lpWatXiengThong: "https://tourismluangprabang.org/things-to-do/buddhism/wat-xiengthong/",
  lpPhouSi: "https://tourismluangprabang.org/things-to-do/nature/phou-si-mountain/",
  lpTaec: "https://tourismluangprabang.org/?p=3220",
  lpAccess: "https://tourismluangprabang.org/travel-guide/access/",
  lakCny: "https://www.worldforexrates.com/lak/cny/100000-exchange-rate/",
};

const angkorGuide = [
  {
    title: "行程定位",
    rows: [
      ["人群", "中国大学生，预算有限，重文化景观，不想过度暴走"],
      ["核心策略", "8.7 夜巴后市区恢复 + 洞里萨湖日落，8.8 小圈精华，8.9 女王宫 + 圣剑寺精选，8.10 大圈短线收尾后去机场"],
      ["执行原则", "8.7 不用吴哥票；三日票留给 8.8-8.10。每天只抓 2-4 个重点，中午留 2-3 小时吃饭/午睡，离开日必须保守"],
      ["票种", "吴哥三日票，官方价 US$62（约¥422，按 1 美元≈¥6.8 估算），7 天内任选 3 天使用"],
      ["购票", "优先官网/官方 App，3 日票需要本人照片；只认官方票务入口，避免假网站"],
    ],
    links: [
      { label: "Angkor Enterprise", url: sources.angkorTickets },
      { label: "官方购票入口", url: sources.angkorTicketPortal },
    ],
  },
  {
    title: "8 月暹粒天气",
    rows: [
      ["温度", "历年均值约 25-32°C，体感闷热"],
      ["降雨", "雨季，8 月平均雨量约 170mm，雨日多；常见午后/傍晚阵雨或雷雨"],
      ["日出日落", "8 月上旬日出约 05:50-05:53，日落约 18:20-18:30"],
      ["行程原则", "早出、午休、下午看雨势；不要把最重要寺庙压到傍晚"],
      ["必备", "轻薄雨衣/折叠伞、防水袋、速干衣、防滑鞋、防晒、驱蚊、补盐饮料"],
    ],
    links: [
      { label: "WMO 暹粒气候", url: sources.wmoSiemReap },
      { label: "WeatherSpark 8 月天气", url: sources.weatherSparkSiemReap },
      { label: "日出日落", url: sources.siemReapSun },
    ],
  },
  {
    title: "推荐总路线",
    rows: [
      ["8.7 暹粒恢复日", "早到后酒店寄存、Wat Bo/河边/老市场轻松逛；下午 Kampong Phluk 洞里萨湖日落"],
      ["8.8 三日票 Day 1", "吴哥寺日出 + 通王城南门 + 巴戎 + 斗象台；午休后塔布茏，班黛喀蒂可选"],
      ["8.9 三日票 Day 2", "女王宫 + 班提色玛可选；午休后圣剑寺 + 龙蟠水池"],
      ["8.10 三日票 Day 3", "塔逊 + 东梅奔 + 比粒寺半日收尾，11:30 前回酒店，13:30 去 SAI 机场"],
    ],
    links: [],
  },
  {
    title: "交通预算",
    rows: [
      ["吴哥三日票", "US$62/人（约¥422/人）"],
      ["8.7 洞里萨湖半日团/包车", "建议酒店订 Kampong Phluk sunset tour，确认酒店接送、船票和等日落"],
      ["8.8 小圈日出 tuk-tuk", "约 US$20-25/车（约¥136-170/车）"],
      ["8.9 女王宫 + 圣剑寺", "更建议包车；tuk-tuk 也可但更晒更颠"],
      ["8.10 大圈短线 tuk-tuk", "半日路线，务必 11:30 前回酒店"],
      ["机场巴士", "US$8/人（约¥54/人）"],
      ["讲解员", "可只在 Day 2 请一天，约 US$45/天/团（约¥306/天/团）；预算紧可用离线资料替代"],
    ],
    links: [{ label: "Lee Tuk Tuk 2026 rates", url: sources.leeTukTuk }],
  },
  {
    title: "交易与防坑",
    rows: [
      ["现金", "柬埔寨美元和瑞尔并用，常用粗算 1 USD（1 美元，约¥6.8）= 4000 KHR"],
      ["美元纸币", "破损、污渍、折角严重的美元可能被拒收；尽量带新版 1/5/10 美元（约¥7/34/68）"],
      ["打车", "市区短途优先 Grab / PassApp；包车提前确认路线、日出、冷水、酒店接送、是否含机场"],
      ["买票", "只走 Angkor Enterprise 官方渠道；不要点社媒低价票链接"],
      ["寺庙摊贩", "买水/椰子先问价；不要给儿童糖果或钱"],
      ["小费", "非强制；司机服务好可每天 US$1-3/人（约¥7-20/人）或按团队给"],
    ],
    links: [{ label: "官方行为准则", url: sources.angkorCode }],
  },
  {
    title: "着装与每日随身",
    rows: [
      ["肩膀和膝盖", "必须遮住，尤其吴哥寺中央塔、巴戎、女王宫等"],
      ["鞋", "防滑、能走石阶；雨后砂岩很滑"],
      ["禁忌", "不摸浮雕、不爬禁区、不坐遗迹石块、不大声喧哗"],
      ["拍僧侣", "先征得同意；女生不要触碰或靠太近"],
      ["每日包内", "护照备份、吴哥票截图、雨衣、防水袋、防晒、驱蚊、水、电解质、充电宝、小额美元和瑞尔"],
    ],
    links: [{ label: "Angkor Visitor Code of Conduct", url: sources.angkorCode }],
  },
  {
    title: "最小精华版",
    rows: [
      ["第一优先", "吴哥寺、巴戎寺、塔布茏寺、女王宫、圣剑寺"],
      ["第二优先", "Kampong Phluk 洞里萨湖日落、龙蟠水池、塔逊寺、比粒寺"],
      ["可删项目", "班黛喀蒂、班提色玛、东梅奔"],
      ["不建议加入", "崩密列、荔枝山、一天双日出；会明显超负荷"],
    ],
    links: [],
  },
  {
    title: "雨季准备",
    rows: [
      ["午后阵雨", "上午看重点，下午景点保持可删"],
      ["石阶湿滑", "穿防滑鞋，不穿拖鞋爬高台"],
      ["闷热补水", "每人每天至少 1.5-2L 水，带电解质"],
      ["拍照防水", "手机防水袋、轻便雨衣比伞更实用"],
      ["体力安排", "每天中午必须休息，不要连续暴晒 6 小时"],
    ],
    links: [],
  },
];

const appGuide = [
  {
    title: "柬埔寨",
    rows: [
      ["叫车", "Grab、PassApp；Grab 可叫车和外卖，PassApp 是柬埔寨本地常用叫车 App，覆盖金边、暹粒等城市"],
      ["地图翻译", "Google Maps、Google Translate"],
      ["外卖日用", "foodpanda"],
      ["联系", "WhatsApp / Telegram"],
      ["出发前", "在国内先装好并注册，抵达后先确认网络可用"],
    ],
    links: [],
  },
  {
    title: "泰国",
    rows: [
      ["叫车", "Grab、Bolt；曼谷市内可同时比价，Bolt 在曼谷有 Economy、Taxi、Motor 等车型"],
      ["联系", "LINE；泰国商家、客服、餐厅很常用"],
      ["地图翻译", "Google Maps、Google Translate"],
      ["轨道交通", "THE SKYTRAINs / BEM MRT，用来查 BTS 和 MRT 线路"],
      ["外卖", "foodpanda"],
    ],
    links: [],
  },
  {
    title: "老挝",
    rows: [
      ["叫车", "LOCA 最实用，覆盖琅勃拉邦，支持国际手机号、现金/银行卡/LOCA Pay"],
      ["备选", "KOKKOK Move，可作为老挝叫车备选"],
      ["地图翻译", "Google Maps、Google Translate"],
      ["联系", "WhatsApp"],
      ["补充", "LOCA 还可用于 eSIM 和部分本地 QR 支付"],
    ],
    links: [],
  },
  {
    title: "网络优先级",
    rows: [
      ["第一步", "出发前装好 Grab、PassApp、LOCA、Google Maps、Google Translate，并完成注册"],
      ["抵达后", "先保证网络可用：开通漫游、买 eSIM，或落地买当地 SIM"],
      ["离线准备", "Google Maps 离线地图、酒店地址截图、机票和入境资料截图都放进相册"],
    ],
    links: [],
  },
];

const luangPrabangGuide = [
  {
    title: "核心策略",
    rows: [
      ["住宿位置", "Villa Nirasim 在 Khem Kong Road，靠近湄公河、夜市和寺庙区，适合省交通费"],
      ["玩法", "每天只安排一个主体验，留时间发呆、逛市场、喝咖啡、看河"],
      ["交通", "老城步行；远一点用突突车；不建议第一次出国租摩托"],
      ["汇率粗算", "100,000 kip≈¥30，10,000 kip≈¥3；实际以换汇/支付时汇率为准"],
    ],
    links: [{ label: "LAK/CNY 汇率参考", url: sources.lakCny }],
  },
  {
    title: "机场到酒店",
    rows: [
      ["时间", "琅勃拉邦机场到城区大约 15-25 分钟"],
      ["方式", "机场打车/拼车去 Villa Nirasim；官方旅游站写机场有到酒店/城区的定价出租车柜台"],
      ["注意", "突突车不能进机场接游客；你们三个人优先一起坐一辆，别分开"],
      ["预算", "近期攻略常见约 80,000-100,000 kip/车或人（约¥24-30）"],
    ],
    links: [{ label: "官方机场交通说明", url: sources.lpAccess }],
  },
  {
    title: "预算粗算",
    rows: [
      ["普通吃饭", "80,000-160,000 kip/人/天（约¥24-48）"],
      ["机场交通", "三人分摊约 30,000-100,000 kip/人（约¥9-30），看车型"],
      ["关西瀑布", "共享车 60,000 + 门票 60,000，约 120,000 kip/人（约¥36）"],
      ["寺庙/博物馆", "每个 25,000-30,000 kip（约¥8-9）"],
      ["三天总预算", "保守玩法约 500,000-900,000 kip/人（约¥150-270），不含住宿和机票"],
    ],
    links: [],
  },
  {
    title: "三人特别注意",
    rows: [
      ["现金", "现金为主，机场先换少量，城区再换；保留小面额"],
      ["礼仪", "寺庙、托钵、瀑布都不要大声喧哗，穿着尽量盖肩过膝"],
      ["安全", "晚上别单独走偏路，三个人一起行动"],
      ["雨季", "8 月包里常备雨衣/伞、防水袋、拖鞋或快干鞋；关西瀑布当天别塞满"],
    ],
    links: [],
  },
];

const itinerary = [
  {
    date: "8.6",
    weekday: "周四",
    city: "广州 / 金边",
    label: "出境中国 · 入境柬埔寨",
    open: true,
    events: [
      { time: "5:00", text: "广州白云 T3 飞往金边德崇国际机场" },
      { time: "6:50", text: "抵达金边，办理柬埔寨入境、取行李、换少量现金/电话卡" },
      { time: "07:00-09:30", text: "从 KTI 进城到 Riverside / Night Market / 夜巴点附近，先寄存行李" },
      { time: "09:30-13:30", text: "早餐、放空、强制休息；优先找咖啡馆、酒店寄存或 day-use" },
      { time: "14:00-15:30", text: "Royal Palace 王宫 + Silver Pagoda 银塔寺，下午开放时段更顺" },
      { time: "15:30-16:45", text: "National Museum 柬埔寨国家博物馆，可帮助理解后面吴哥文物" },
      { time: "17:00-18:00", text: "Wat Phnom 或河边坐着休息；如果困到不行就直接删" },
      { time: "18:00-20:00", text: "Night Market / Riverside 晚餐，买水、湿巾、零食，提前确认夜巴上车点" },
      { time: "23:58", text: "金边乘坐 Larryta Bus 卧铺夜巴前往暹粒" },
    ],
    panels: [
      {
        title: "航班信息",
        items: [
          "已购航班：柬埔寨国家航空 K60611，经济舱，有小食。",
          "同程订单时刻：广州白云国际机场 T3 05:00 → 达克茂/金边德崇国际机场 06:50。",
          "出发前仍以航司 App、同程订单和机场大屏为准。",
        ],
        links: [{ label: "CAN-KTI 航班来源", url: sources.flightCanKti }],
      },
      {
        title: "广州白云 T3 出发流程",
        items: [
          "建议 02:00 前后到达 T3，第一次出国宁可多留时间。",
          "国际及港澳台航班主要在 G、H、K 值机岛办理，先看大屏找 Air Cambodia。",
          "流程：值机/托运 → 中国边检出境 → 安检 → 找登机口。",
          "充电宝随身带，外壳容量标识要清楚；值机时可能会查下一程/返程机票和住宿订单。",
        ],
        links: [
          { label: "白云 T3 图文指引", url: sources.baiyunT3 },
          { label: "中国海关通关指南", url: sources.chinaCustoms },
        ],
      },
      {
        title: "金边德崇机场入境事项",
        items: [
          "跟随 Arrivals / Immigration 标识走，排 Foreign Passport 或对应外国旅客通道。",
          "2026 年按 Techo International Airport / KTI 规划；机场官网写明它在金边南侧约 20km，进城通常按 40-60 分钟预留。",
          "如果航司或订单仍显示 PNH，一定提前核对实际到达机场，不要按旧机场距离安排当天交通。",
          "中国普通护照在 2026.6.15-10.15 期间旅游停留 14 天内临时免签，但仍须完成 Cambodia e-Arrival。",
          "准备护照、e-Arrival QR、离境机票（8.10 暹粒飞曼谷）、住宿订单。",
          "可能被问：来做什么、住哪里、什么时候离开。可答 Tourism / Siem Reap / Fly to Bangkok on Aug 10。",
        ],
        links: [
          { label: "柬埔寨 eVisa 官方公告", url: sources.cambodiaVisa },
          { label: "Cambodia e-Arrival", url: sources.cambodiaArrival },
          { label: "德崇机场位置与信息", url: sources.techoAbout },
        ],
      },
      {
        title: "金边低体力半日路线",
        items: [
          "当天按“低体力、高价值、靠近夜巴点”执行：KTI → Night Market / 夜巴点寄存行李 → 早餐休息 → 14:00 王宫银塔寺 → 国家博物馆 → 河边 / Wat Phnom → 晚餐 → 夜巴。",
          "上午不要硬刷景点。09:30-13:30 是强制休息窗口，可以咖啡馆放空、付费寄存、day-use 或正规按摩。",
          "王宫常见开放时间为 08:00-11:00、14:00-17:00，中午关闭；下午 14:00 后去更适合你们落地后的体力。",
          "国家博物馆在王宫旁边，开放到 17:00，最后售票约 16:30；如果体力只够一个景点，就选王宫。",
          "Wat Phnom 离 Night Market / 河边一带近，适合低体力收尾；困到不行就删掉，直接河边坐着。",
        ],
        links: [
          { label: "Giant Ibis 金边站点", url: sources.giantIbisBranches },
          { label: "王宫开放时间", url: sources.royalPalacePhnomPenh },
          { label: "国家博物馆开放时间", url: sources.nationalMuseumCambodia },
        ],
      },
      {
        title: "这天不建议硬加",
        items: [
          "Choeung Ek 杀戮场很有历史价值，但在金边南侧，往返耗时且内容沉重；缺觉状态不适合再接夜巴。",
          "S-21 / Tuol Sleng 更近，也很重要，但情绪冲击强。除非你们都明确想看近现代史，否则这天先不安排。",
          "当天真正任务是安全入境、恢复体力、看一个高价值核心景点，并舒服地上夜巴。",
        ],
        links: [
          { label: "Tuol Sleng 官方信息", url: sources.tuolSleng },
          { label: "Choeung Ek FAQ", url: sources.choeungEk },
        ],
      },
      {
        title: "夜巴事项",
        items: [
          "Larryta Bus 订单截图、上车点地址、车牌/柜台信息放手机相册置顶；如果实际改成 Giant Ibis，它的金边站在 Road 106 / Night Market 一带。",
          "护照、钱包、手机、充电宝随身不离身；大件行李拍照后再放行李舱。",
          "18:00-20:00 在 Night Market / Riverside 附近吃晚饭，买水、湿巾、面包/零食；提前 45-60 分钟到车站/办公室确认座位、行李牌和上车点。",
          "夜巴前不要吃太撑，也别喝酒；金边夜间移动优先用正规打车 App 或酒店/车站协助叫车。",
        ],
        links: [{ label: "Giant Ibis branches", url: sources.giantIbisBranches }],
      },
    ],
  },
  {
    date: "8.7",
    weekday: "周五",
    city: "暹粒",
    label: "暹粒市区恢复 · 洞里萨湖日落",
    open: true,
    events: [
      { time: "05:58", text: "抵达暹粒 Larryta 夜巴终点" },
      { time: "06:30-09:30", text: "到 Home Indochine d'Angkor 寄存行李，早餐、洗漱、补觉，问 early check-in" },
      { time: "10:00-11:30", text: "Wat Bo / 暹粒河边 / Old Market 老市场轻松逛" },
      { time: "11:30-14:00", text: "午饭 + 酒店午休，换衣服，带雨具、防蚊和防水袋" },
      { time: "14:00", text: "酒店出发去 Kampong Phluk 码头，建议包车或酒店半日团" },
      { time: "15:00-17:30", text: "上船看空邦鲁浮村、高脚屋、水道和湖面" },
      { time: "17:45-18:30", text: "洞里萨湖日落，8 月上旬日落约 18:28-18:30" },
      { time: "18:30-19:30", text: "码头返回暹粒市区，晚饭后早点休息" },
    ],
    panels: [
      {
        title: "当天策略",
        items: [
          "这天不使用吴哥三日票，核心是恢复体力、熟悉市区、下午看洞里萨湖日落。",
          "上午只走酒店 → Wat Bo 附近咖啡馆 → 暹粒河边 → Old Market / Pub Street → 酒店，不要再塞博物馆。",
          "如果 early check-in 不成功，至少在酒店公共区休整、洗漱、充电；下午出湖前一定留午休。",
        ],
        links: [],
      },
      {
        title: "洞里萨湖交通",
        items: [
          "建议选择 Kampong Phluk 空邦鲁浮村，比 Chong Kneas 更有高脚屋、浮村和雨季水面感。",
          "酒店到码头车程约 45-60 分钟，雨季返程天黑，优先包车或让酒店订 Kampong Phluk sunset tour。",
          "提前确认是否包含酒店接送、船票、等日落和返程等待时间；不建议完全临时到码头再谈。",
        ],
        links: [
          { label: "Kampong Phluk 介绍", url: sources.kampongPhluk },
          { label: "暹粒到 Kampong Phluk 路程", url: sources.kampongPhlukRoute },
        ],
      },
      {
        title: "酒店入住提醒",
        items: [
          "Home Indochine d'Angkor Hotel：Street 27 / Street27, Wat Bo Village, Siem Reap, Cambodia。",
          "电话：+855 92 660 288；邮箱：info@home.indochinegroup.com。",
          "入住 14:00 后，退房 12:00 前；前台 24 小时。可提前问 early check-in、寄存行李或洗澡。",
          "Larryta 暹粒站在 National Road 6，可打 Grab/PassApp/tuk-tuk 去酒店。",
        ],
        links: [
          { label: "酒店官网", url: sources.homeIndochine },
          { label: "Booking", url: sources.homeIndochineBooking },
          { label: "Trip.com", url: sources.homeIndochineTrip },
        ],
      },
    ],
  },
  {
    date: "8.8",
    weekday: "周六",
    city: "暹粒",
    label: "吴哥 Day 1 · 小圈精华日",
    open: true,
    events: [
      { time: "04:30", text: "酒店出发" },
      { time: "05:00-06:15", text: "Angkor Wat 吴哥寺日出" },
      { time: "06:15-08:30", text: "吴哥寺内部：回廊浮雕、乳海翻腾、中央塔" },
      { time: "08:30-09:20", text: "早餐/咖啡，休息" },
      { time: "09:30-11:30", text: "Angkor Thom 吴哥通王城：南门、巴戎寺、斗象台、癞王台" },
      { time: "11:30-14:30", text: "午餐 + 回酒店午休" },
      { time: "14:45-16:15", text: "Ta Prohm 塔布茏寺" },
      { time: "16:30-17:15", text: "Banteay Kdei 班黛喀蒂 或 Srah Srang 皇家浴池短停" },
      { time: "17:45", text: "回酒店，继续住 Home Indochine d'Angkor" },
    ],
    panels: [
      {
        title: "当天策略",
        items: [
          "这天使用吴哥三日票第 1 天，是全程最重要的一天；真正必须保留的是吴哥寺、巴戎寺、塔布茏寺。",
          "中午 11:30-14:30 尽量回酒店或找阴凉处休息，雨季和闷热天气不要硬扛。",
          "如果下午下大雨或太累，班黛喀蒂/皇家浴池可以直接删掉。",
        ],
        links: [],
      },
      {
        title: "学习与看点",
        items: [
          "吴哥寺重点看第一回廊浮雕、乳海翻腾和中央塔空间。",
          "巴戎寺重点看四面佛与通王城格局；塔布茏重点看树根与建筑共生。",
          "预算允许可只在这天请一天讲解员，参考 US$45/天/团（约¥306/天/团）。",
        ],
        links: [{ label: "官方行为准则", url: sources.angkorCode }],
      },
      {
        title: "天气与装备",
        items: [
          "8 月暹粒闷热且雨日多，尽量早出、午休，下午看雨势。",
          "带雨衣/折叠伞、防水袋、速干衣、防滑鞋、防晒、驱蚊和电解质。",
          "肩膀和膝盖要遮住，尤其吴哥寺中央塔、巴戎等区域。",
        ],
        links: [
          { label: "WMO 暹粒气候", url: sources.wmoSiemReap },
          { label: "日出日落", url: sources.siemReapSun },
        ],
      },
    ],
  },
  {
    date: "8.9",
    weekday: "周日",
    city: "暹粒",
    label: "吴哥 Day 2 · 女王宫 + 圣剑寺精选",
    open: true,
    events: [
      { time: "07:30", text: "酒店出发去 Banteay Srei 女王宫，建议包车优先" },
      { time: "08:30-09:45", text: "女王宫：红砂岩雕刻精华，慢看门楣和山墙" },
      { time: "10:40-11:20", text: "Banteay Samre 班提色玛，可选；累了直接删" },
      { time: "12:15-14:45", text: "午饭 + 回酒店午休，这段必须留" },
      { time: "14:45", text: "酒店出发去 Preah Khan 圣剑寺" },
      { time: "15:20-16:40", text: "圣剑寺西门进、东门出，让司机去东门接" },
      { time: "16:55-17:30", text: "Neak Pean 龙蟠水池：木栈道 + 中央水池，雨季氛围好" },
      { time: "17:45", text: "回酒店，继续住 Home Indochine d'Angkor" },
    ],
    panels: [
      {
        title: "当天策略",
        items: [
          "这天使用吴哥三日票第 2 天。女王宫较远，更建议包车；tuk-tuk 也可以但会更晒更颠。",
          "上午抓女王宫，班提色玛只是加分项；下午抓圣剑寺，龙蟠水池也是加分项。",
          "必看只保留两个：女王宫、圣剑寺。中午回酒店午休，不要连续暴晒。",
        ],
        links: [],
      },
      {
        title: "司机与删减",
        items: [
          "路线关键词：酒店 → 女王宫 → 班提色玛可选 → 午休 → 圣剑寺 → 龙蟠水池 → 酒店。",
          "跟司机说清楚圣剑寺西门进、东门出，请他到东门接，避免走回头路。",
          "累了优先删班提色玛和龙蟠水池，不删女王宫和圣剑寺。",
        ],
        links: [{ label: "tuk-tuk 价格参考", url: sources.leeTukTuk }],
      },
      {
        title: "最小精华版",
        items: [
          "第一优先：吴哥寺、巴戎寺、塔布茏寺、女王宫、圣剑寺。",
          "第二优先：龙蟠水池、塔逊寺、比粒寺。",
          "不建议加入：一天双日出、崩密列、荔枝山、洞里萨湖。",
        ],
        links: [],
      },
    ],
  },
  {
    date: "8.10",
    weekday: "周一",
    city: "暹粒 / 曼谷",
    label: "吴哥 Day 3 · 大圈短线收尾 + 机场",
    open: true,
    events: [
      { time: "07:30", text: "酒店出发去 Ta Som 塔逊，上午只走短线" },
      { time: "08:15-08:55", text: "塔逊：西门进，重点走到东门树门" },
      { time: "09:10-09:45", text: "East Mebon 东梅奔：看砖塔和象雕，不久留" },
      { time: "10:00-10:40", text: "Pre Rup 比粒寺：最后一座金字塔式寺庙，别爬太猛" },
      { time: "11:30-12:30", text: "回酒店洗澡、收拾、退房/寄存" },
      { time: "12:30-13:20", text: "酒店附近午饭，别跑远" },
      { time: "13:30", text: "最晚出发去暹粒吴哥国际机场 SAI" },
      { time: "15:00 左右", text: "抵达机场，衔接 16:55 航班" },
      { time: "16:55", text: "泰国亚航 FD0615：暹粒吴哥国际机场飞往曼谷廊曼 T1" },
      { time: "18:05", text: "抵达曼谷廊曼 T1，办理泰国入境" },
      { time: "晚", text: "入住 3 Howw Hostel at Sukhumvit 21" },
    ],
    panels: [
      {
        title: "离开日策略",
        items: [
          "这天使用吴哥三日票第 3 天，但只能走上午短线，16:55 从 SAI 飞走，必须保守。",
          "路线关键词：酒店 → 塔逊 → 东梅奔 → 比粒寺 → 酒店 → 机场。",
          "如果 08:30 才出门，删东梅奔只走塔逊 + 比粒寺；09:30 后才出门就不进景区，直接市区吃饭休息去机场。",
        ],
        links: [],
      },
      {
        title: "机场交通衔接",
        items: [
          "SAI 新机场离市区约 45-50 km，至少预留 60-80 分钟路程。",
          "官方机场巴士参考 US$8/人（约¥54/人），市区到机场常见班次含 13:30。",
          "私车常见约 US$25-35+（约¥170-238+）/车，3 人同行更省心。",
        ],
        links: [
          { label: "Siem Reap Airport Bus", url: sources.saiBus },
          { label: "SAI 机场交通指南", url: sources.saiTransport },
        ],
      },
      {
        title: "航班信息",
        items: [
          "已购航班：泰国亚航 FD0615，经济舱。",
          "同程订单时刻：暹粒吴哥国际机场 16:55 → 曼谷廊曼国际机场 T1 18:05。",
          "廉航通常严格查随身行李尺寸和重量，提前确认托运行李额度。",
        ],
        links: [{ label: "SAI-DMK 航班来源", url: sources.flightSaiDmk }],
      },
      {
        title: "暹粒吴哥机场 SAI 出发流程",
        items: [
          "国际旅客去国际出发区域；流程为值机 → 柬埔寨移民出境 → 安检 → 登机口。",
          "到机场后先看电子屏确认 FD0615 的值机柜台和登机口，手机保存登机牌/行程单。",
          "机场指南有国际出发大厅真实照片和出发楼层动线图，出发前可先看一遍。",
        ],
        links: [{ label: "SAI 机场真实图片与指引", url: sources.siemReapGuide }],
      },
      {
        title: "曼谷廊曼 T1 入境事项",
        items: [
          "中泰普通护照互免签：单次停留不超过 30 天，任意 180 天累计不超过 90 天。",
          "泰国 TDAC 需在抵达前 3 天内提交。你 8.10 抵达，建议 8.7-8.10 之间完成。",
          "入境准备：护照、TDAC 截图/邮件、8.12 离境机票、曼谷住宿信息。",
          "下机后跟 Immigration / Foreign Passport 标识走；入境章页面拍照保存。",
        ],
        links: [
          { label: "泰国 TDAC 官方系统", url: sources.thailandTdac },
          { label: "中泰互免签说明", url: sources.thailandMfaChina },
          { label: "廊曼机场真实图片", url: sources.donMueang },
        ],
      },
      {
        title: "曼谷酒店入住提醒",
        items: [
          "3Howw Hostel @ Sukhumvit 21：32/9 Sukhumvit 21 Rd, Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand。",
          "电话：+66 999 096 997；邮箱：3howw.sukhumvit21@gmail.com。",
          "入住 14:00-24:00，退房 12:00 前；18 岁以上可办理入住，前台 24 小时。",
          "Booking 显示到店可能收 THB 1,000 押金，约人民币 200 多，信用卡收取并退回。",
          "距 MRT Sukhumvit 约 0.38 km，BTS Asok / Terminal 21 步行可达；Trip.com 页面显示无机场接送。",
        ],
        links: [
          { label: "Booking", url: sources.howwBooking },
          { label: "Trip.com", url: sources.howwTrip },
        ],
      },
    ],
  },
  {
    date: "8.11",
    weekday: "周二",
    city: "曼谷 / 大城",
    label: "大城遗址",
    events: [
      { time: "早", text: "曼谷，3 Howw Hostel at Sukhumvit 21" },
      { time: "白天", text: "曼谷出发游览大城遗址" },
      { time: "晚", text: "返回曼谷 3 Howw Hostel at Sukhumvit 21" },
    ],
    panels: [
      {
        title: "当天提醒",
        items: [
          "护照原件建议锁在住宿处，外出带护照首页和入境章照片。",
          "大城遗址日晒强，带水、防晒、帽子；进入寺庙注意着装。",
        ],
        links: [],
      },
    ],
  },
  {
    date: "8.12",
    weekday: "周三",
    city: "曼谷 / 琅勃拉邦",
    label: "出境泰国 · 入境老挝",
    open: true,
    events: [
      { time: "早", text: "曼谷退房，前往廊曼 T1 国际出发" },
      { time: "13:25", text: "曼谷廊曼 T1 飞往琅勃拉邦机场" },
      { time: "14:50", text: "抵达琅勃拉邦机场，办理老挝入境" },
      { time: "15:30-16:30", text: "机场打车/拼车去 Villa Nirasim，入住或寄存行李" },
      { time: "17:00-22:00", text: "逛 Sisavangvong Road 一带夜市，轻松吃第一顿老挝晚餐" },
      { time: "晚", text: "沿 Khem Kong Road 湄公河边散步，早点休息，第二天早起看托钵" },
    ],
    panels: [
      {
        title: "航班信息",
        items: [
          "已购航班：泰国亚航 FD1030，经济舱。",
          "同程订单时刻：曼谷廊曼国际机场 T1 13:25 → 琅勃拉邦/朗勃拉邦国际机场 14:50。",
          "起飞前再次确认 TDAC 离境信息、登机口和随身行李额。",
        ],
        links: [{ label: "DMK-LPQ 航班来源", url: sources.flightDmkLpq }],
      },
      {
        title: "廊曼 T1 出发流程",
        items: [
          "流程：国际值机 → 泰国移民出境 → 安检 → 登机口。",
          "如果使用 AirAsia，自助值机后仍要看是否需要到柜台验护照/签证材料。",
          "机场内换汇、餐饮和排队时间波动大，建议至少提前 2.5-3 小时到。",
        ],
        links: [{ label: "廊曼机场图片库", url: sources.donMueang }],
      },
      {
        title: "老挝入境事项",
        items: [
          "建议提前办理 Lao eVisa；官方信息显示琅勃拉邦机场 LPQ 是 eVisa 可入境口岸。",
          "eVisa 通常 3 个工作日处理，需要护照资料页和 4x6 cm 近照。",
          "抵达后走 eVisa 通道，出示护照和 eVisa Approval Letter。若落地签，准备照片和美元现金。",
          "住宿填 Villa Nirasim，下一目的地填 China / Guangzhou，返程日期 8.15。",
        ],
        links: [{ label: "老挝 eVisa 官方信息", url: sources.laosEvisa }],
      },
      {
        title: "琅勃拉邦酒店入住提醒",
        items: [
          "Nirasim Villa / Villa Nirasim：Khem Kong Road, 06000 Luang Prabang, Laos；当地名：ເຮືອນພັກ ນີລະສິມ。",
          "电话：+856 20 2969 5277；邮箱：nirasimvilla@gmail.com。",
          "入住 14:00 后，退房 11:30 前；前台 24 小时。Trip.com 提示入住前可用电话/邮箱联系酒店。",
          "设施含免费 Wi-Fi、空调、早餐、行李/旅游服务、换汇、叫车、租车、机场/火车站接送可付费安排；无泳池，不允许宠物。",
          "支持语言包括英语、中文、越南语、泰语、老挝语；离琅勃拉邦机场约 5.3 km，车程约 14 分钟。",
        ],
        links: [
          { label: "Booking", url: sources.nirasimBooking },
          { label: "Trip.com", url: sources.nirasimTrip },
        ],
      },
      {
        title: "机场到酒店交通",
        items: [
          "琅勃拉邦机场到城区约 15-25 分钟，直接在机场打车/拼车去 Villa Nirasim。",
          "官方旅游站写机场有到酒店/城区的定价出租车柜台；突突车不能进机场接游客。",
          "近期攻略常见价格约 80,000-100,000 kip/车或人（约¥24-30），三个人优先一起坐一辆，别分开。",
          "到酒店后这几天大部分地方都能走路；老城步行，远一点再用突突车，不建议第一次出国租摩托。",
        ],
        links: [{ label: "官方机场交通说明", url: sources.lpAccess }],
      },
      {
        title: "抵达夜市慢逛",
        items: [
          "官方信息：琅勃拉邦夜市每天约 17:00 到 22:00，在 Sisavangvong Road 一带。",
          "第一晚不急着跑景点，先买水果 shake、椰子饼、烤肉串、糯米饭、法棍三明治，轻松吃夜市。",
          "纪念品先看不买，后两晚再比价和砍价。",
        ],
        links: [{ label: "琅勃拉邦夜市官方介绍", url: sources.lpNightMarket }],
      },
    ],
  },
  {
    date: "8.13",
    weekday: "周四",
    city: "琅勃拉邦",
    label: "托钵 · 早市 · 寺庙 · 河边",
    open: true,
    events: [
      { time: "05:10", text: "起床，换遮肩过膝衣服，安静去看托钵" },
      { time: "05:30-06:30", text: "只观察托钵，不参与；站远、不闪光、不堵路" },
      { time: "06:30-08:00", text: "逛早市 Talad Sao，看蔬菜、鱼、草药、糯米、香蕉、河苔" },
      { time: "09:00-11:00", text: "回酒店休息/补觉，雨季早起后保留午前缓冲" },
      { time: "15:30-17:00", text: "香通寺 Wat Xieng Thong，外国人门票约 30,000 kip（约¥9）" },
      { time: "17:15-18:30", text: "登普西山看城景，外国人门票约 30,000 kip（约¥9），328 级台阶" },
      { time: "晚", text: "夜市或湄公河边餐馆，住宿 Villa Nirasim" },
    ],
    panels: [
      {
        title: "托钵礼仪",
        items: [
          "官方提示 3-10 月托钵约 05:30-06:30；这不是表演，是当地人的宗教生活。",
          "建议只观察，不参与；站远一点，不用闪光灯，不堵路。",
          "穿过膝裤/裙和盖肩上衣；女生不要触碰僧侣或靠太近。",
        ],
        links: [{ label: "托钵礼仪官方说明", url: sources.lpAlms }],
      },
      {
        title: "早市与白天节奏",
        items: [
          "早市 Talad Sao 在旅游办公室后面一带，官方写约 6:00 开、10:30 前结束。",
          "这里适合看当地生活：蔬菜、鱼、草药、糯米、香蕉、河苔。",
          "拍照前看摊主反应，别怼脸拍；早起后 09:00-11:00 回酒店补觉很重要。",
        ],
        links: [],
      },
      {
        title: "香通寺与普西山",
        items: [
          "香通寺 Wat Xieng Thong 每天约 08:00-17:00，外国人门票约 30,000 kip（约¥9）。",
          "进寺庙脱帽脱鞋，衣着遮肩遮膝，不摸佛像和壁画。",
          "普西山约 06:00-18:00，外国人门票约 30,000 kip（约¥9），夕阳人会多；讨厌拥挤就 16:45 上去，18:00 前下来。",
        ],
        links: [
          { label: "香通寺官方介绍", url: sources.lpWatXiengThong },
          { label: "普西山官方介绍", url: sources.lpPhouSi },
        ],
      },
      {
        title: "晚餐建议",
        items: [
          "想省钱就继续夜市解决。",
          "想体验当地菜，可点 laap、khao soi 老挝版、糯米饭、烤鱼，三个人分着吃。",
        ],
        links: [{ label: "夜市官方介绍", url: sources.lpNightMarket }],
      },
    ],
  },
  {
    date: "8.14",
    weekday: "周五",
    city: "琅勃拉邦",
    label: "关西瀑布半日 · 传统文化",
    open: true,
    events: [
      { time: "08:00", text: "出发去关西瀑布 Kuang Si，避开人潮" },
      { time: "09:00-12:00", text: "关西瀑布：熊救助中心、瀑布、浅水区泡脚或游泳" },
      { time: "14:00-16:00", text: "回城休息" },
      { time: "16:00-17:30", text: "去 UXO Visitor Centre；若赶不上，改 TAEC 民族艺术中心" },
      { time: "18:30", text: "可选 Phralak Phralam 老挝传统舞蹈；预算紧则夜市和河边散步" },
      { time: "晚", text: "住宿 Villa Nirasim" },
    ],
    panels: [
      {
        title: "关西瀑布交通与门票",
        items: [
          "官方信息：关西瀑布约 08:00-17:30，外国人门票 60,000 kip（约¥18）。",
          "距离琅勃拉邦约 30 km，突突/面包车约 40-60 分钟。",
          "共享 minivan 约 60,000 kip/人往返（约¥18/人），通常酒店或旅行社可订，省心。",
          "包突突官方参考约 250,000 kip/车/组（约¥75/车/组），你们三人平摊更自由。",
        ],
        links: [{ label: "关西瀑布官方介绍", url: sources.lpKuangSi }],
      },
      {
        title: "瀑布游玩注意",
        items: [
          "可以看熊救助中心、瀑布、浅水区泡脚或游泳。",
          "穿不太暴露的泳衣/外衣，别只穿比基尼在园区走。",
          "8 月雨季路上可能下雨，带雨衣、防水袋、快干鞋；当天不要塞太满。",
        ],
        links: [{ label: "关西瀑布官方介绍", url: sources.lpKuangSi }],
      },
      {
        title: "下午文化选择",
        items: [
          "UXO Visitor Centre 免费入场、鼓励捐赠，开放时间以现场为准；它能帮助理解老挝战争遗留问题。",
          "若赶不上 UXO，改去 TAEC 民族艺术中心，周二到周日约 09:00-18:00，门票 25,000 kip（约¥8）。",
          "周五 18:30 可看 Phralak Phralam 老挝传统舞蹈，3-9 月官方写 18:30 开演，票价 150,000 kip 起（约¥45 起）。预算紧可跳过。",
        ],
        links: [{ label: "TAEC 官方信息", url: sources.lpTaec }],
      },
    ],
  },
  {
    date: "8.15",
    weekday: "周六",
    city: "琅勃拉邦 / 昆明 / 广州",
    label: "出境老挝 · 入境中国 · 国内转机",
    open: true,
    events: [
      { time: "06:30-08:00", text: "再逛一次早市或沿湄公河散步" },
      { time: "08:30-10:00", text: "吃早餐、买最后纪念品：老挝咖啡、茶、手工纸明信片、小织物" },
      { time: "10:30-11:00", text: "退房，让酒店帮叫车去机场，三个人同车最省心" },
      { time: "13:30", text: "琅勃拉邦飞昆明，东方航空 MU9644，经济舱，无餐食" },
      { time: "15:55", text: "抵达昆明，完成中国入境与中转手续" },
      { time: "19:00", text: "昆明长水飞广州白云，东方航空 MU5739，经济舱，无餐食；已由 18:55 调整为 19:00 起飞" },
      { time: "21:10", text: "抵达广州白云机场" },
    ],
    panels: [
      {
        title: "最后一个早晨",
        items: [
          "如果 13:30 是航班起飞时间，建议 10:30-11:00 从酒店出发去机场。",
          "上午只安排早市、湄公河散步、早餐、最后纪念品，不要赶远景点。",
          "可以买老挝咖啡、茶、手工纸明信片、小织物；别买古董、佛像类敏感物品。",
        ],
        links: [],
      },
      {
        title: "航班信息",
        items: [
          "已购联程航班第一段：东方航空 MU9644，经济舱，无餐食；朗勃拉邦国际机场 13:30 → 昆明长水国际机场 15:55。",
          "已购联程航班第二段：东方航空 MU5739，经济舱，无餐食；原订单昆明长水 18:55 → 广州白云 T3 21:10。",
          "东航后续短信通知：MU5739 已调整为昆明长水 19:00 起飞，抵达广州白云仍为 21:10。",
          "这是同一订单的联程航班，但因第一段为国际入境中国，仍要在琅勃拉邦柜台主动确认行李是否直挂广州：Is my baggage checked through to Guangzhou?",
          "东航提醒：若有前后衔接行程，务必确认更改后的航班符合衔接要求；可通过东方航空 App/微信公众号航班动态复核。",
        ],
        links: [
          { label: "LPQ-KMG 航班来源", url: sources.flightLpqKmg },
          { label: "KMG-CAN 航班来源", url: sources.flightKmgCan },
        ],
      },
      {
        title: "琅勃拉邦机场返程流程",
        items: [
          "机场较小但国际出境排队速度不一定快，建议提前 2.5-3 小时到。",
          "流程：东航值机/托运 → 老挝移民出境 → 安检 → 登机。",
          "保留老挝签证/入境章照片，值机时准备好昆明-广州下一段订单。",
        ],
        links: [{ label: "老挝 eVisa 与 LPQ 口岸信息", url: sources.laosEvisa }],
      },
      {
        title: "昆明入境与中转事项",
        items: [
          "LPQ 到 KMG 是国际入境中国，通常先完成中国边检入境和海关，再转国内段。",
          "如果行李未直挂，需要在昆明提取行李后重新托运到广州。",
          "如现场或系统要求填写海关健康申明卡，按提示如实填报。",
          "转机时间约 3 小时 20 分钟，若前段延误，第一时间找东航中转柜台。",
        ],
        links: [{ label: "中国海关旅客通关指南", url: sources.chinaCustoms }],
      },
    ],
  },
];

const transit = [
  { title: "广州白云 T3 → 金边德崇机场", meta: ["8.6", "柬埔寨国家航空 K60611 已购", "05:00 - 06:50"] },
  { title: "金边 → 暹粒", meta: ["8.6 - 8.7", "Larryta Bus 卧铺夜巴", "23:58 - 05:58"] },
  { title: "暹粒吴哥机场 → 曼谷廊曼 T1", meta: ["8.10", "泰国亚航 FD0615 已购", "16:55 - 18:05"] },
  { title: "曼谷廊曼 T1 → 琅勃拉邦机场", meta: ["8.12", "泰国亚航 FD1030 已购", "13:25 - 14:50"] },
  { title: "琅勃拉邦 → 昆明 → 广州", meta: ["8.15", "东方航空 MU9644 + MU5739 已购联程", "13:30 - 21:10"] },
];

const stays = [
  {
    title: "Home Indochine d'Angkor Hotel",
    meta: ["暹粒", "8.7 晚 - 8.10 早", "3 晚"],
    details: [
      "地址：Street 27 / Street27, Wat Bo Village, Siem Reap, Cambodia。",
      "电话：+855 92 660 288；邮箱：info@home.indochinegroup.com。",
      "入住 14:00 后，退房 12:00 前；前台 24 小时。",
      "免费 Wi-Fi、室外盐水泳池、餐厅/酒吧、行李寄存、旅游订票、洗衣、机场接送可付费安排。",
      "距 Pub Street / Old Market / Angkor Night Market 约 1 km，去吴哥窟约 8.2 km；暹粒吴哥国际机场约 45 km，车程约 54-60 分钟。",
    ],
    links: [
      { label: "官网", url: sources.homeIndochine },
      { label: "Booking", url: sources.homeIndochineBooking },
      { label: "Trip.com", url: sources.homeIndochineTrip },
    ],
  },
  {
    title: "3Howw Hostel @ Sukhumvit 21",
    meta: ["曼谷", "8.10 晚 - 8.12 早", "2 晚"],
    details: [
      "地址：32/9 Sukhumvit 21 Rd, Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand。",
      "电话：+66 999 096 997；邮箱：3howw.sukhumvit21@gmail.com。",
      "入住 14:00-24:00，退房 12:00 前；18 岁以上可办理入住；前台 24 小时。",
      "免费 Wi-Fi、空调、电梯、洗衣、行李寄存、露台、每日清洁；无泳池，Trip.com 页面显示无机场接送。",
      "Booking 显示到店可能收 THB 1,000 押金，信用卡收取并退回。",
      "距 MRT Sukhumvit 约 0.38 km，BTS Asok / Terminal 21 步行可达；廊曼机场约 24 km，车程约 32 分钟。",
    ],
    links: [
      { label: "Booking", url: sources.howwBooking },
      { label: "Trip.com", url: sources.howwTrip },
    ],
  },
  {
    title: "Nirasim Villa / Villa Nirasim",
    meta: ["琅勃拉邦", "8.12 晚 - 8.15 早", "3 晚"],
    details: [
      "地址：Khem Kong Road, 06000 Luang Prabang, Laos；当地名：ເຮືອນພັກ ນີລະສິມ。",
      "电话：+856 20 2969 5277；邮箱：nirasimvilla@gmail.com。",
      "入住 14:00 后，退房 11:30 前；前台 24 小时；入住前可用电话/邮箱联系酒店。",
      "免费 Wi-Fi、空调、早餐、行李/旅游服务、换汇、叫车、租车、机场接送/火车站接送可付费安排。",
      "无泳池，不允许宠物；支持英语、中文、越南语、泰语、老挝语。",
      "离琅勃拉邦机场约 5.3 km，车程约 14 分钟。",
    ],
    links: [
      { label: "Booking", url: sources.nirasimBooking },
      { label: "Trip.com", url: sources.nirasimTrip },
    ],
  },
];

function renderPanel(panel, index) {
  const links = panel.links.length
    ? `<div class="link-row">${panel.links
        .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
        .join("")}</div>`
    : "";

  return `
    <details class="nested-detail" ${index === 0 ? "open" : ""}>
      <summary>${panel.title}</summary>
      <ul>${panel.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      ${links}
    </details>
  `;
}

function renderAngkorGuide() {
  document.querySelector("#angkorGuide").innerHTML = angkorGuide
    .map((block) => {
      const links = block.links.length
        ? `<div class="link-row guide-links">${block.links
            .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
            .join("")}</div>`
        : "";

      return `
        <article class="guide-card">
          <h3>${block.title}</h3>
          <div class="guide-table">
            ${block.rows
              .map((row) => `<div><strong>${row[0]}</strong><span>${row[1]}</span></div>`)
              .join("")}
          </div>
          ${links}
        </article>
      `;
    })
    .join("");
}

function renderGuideCards(selector, items) {
  document.querySelector(selector).innerHTML = items
    .map((block) => {
      const links = block.links.length
        ? `<div class="link-row guide-links">${block.links
            .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
            .join("")}</div>`
        : "";

      return `
        <article class="guide-card">
          <h3>${block.title}</h3>
          <div class="guide-table">
            ${block.rows
              .map((row) => `<div><strong>${row[0]}</strong><span>${row[1]}</span></div>`)
              .join("")}
          </div>
          ${links}
        </article>
      `;
    })
    .join("");
}

function renderTimeline() {
  document.querySelector("#timelineList").innerHTML = itinerary
    .map(
      (day) => `
        <details class="day-card accordion-day" ${day.open ? "open" : ""}>
          <summary class="day-summary">
            <span class="day-date"><strong>${day.date}</strong><span>${day.weekday}</span></span>
            <span class="summary-main">
              <span class="city-row"><h3>${day.city}</h3><span class="tag">${day.label}</span></span>
              <span class="summary-hint">点击展开当天航班、机场、过关事项和来源链接</span>
            </span>
          </summary>
          <div class="day-content">
            <ul class="event-list">
              ${day.events.map((event) => `<li><time>${event.time}</time><span>${event.text}</span></li>`).join("")}
            </ul>
            <div class="detail-stack">
              ${day.panels.map(renderPanel).join("")}
            </div>
          </div>
        </details>
      `,
    )
    .join("");
}

function renderCards(selector, items) {
  document.querySelector(selector).innerHTML = items
    .map(
      (item) => `
        <article class="info-card">
          <h3>${item.title}</h3>
          <div class="meta">${item.meta.map((value) => `<span>${value}</span>`).join("")}</div>
          ${item.details ? `<ul class="card-detail-list">${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>` : ""}
          ${
            item.links
              ? `<div class="link-row stay-links">${item.links
                  .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
                  .join("")}</div>`
              : ""
          }
        </article>
      `,
    )
    .join("");
}

renderAngkorGuide();
renderGuideCards("#luangPrabangGuide", luangPrabangGuide);
renderGuideCards("#appGuide", appGuide);
renderTimeline();
renderCards("#transitList", transit);
renderCards("#stayList", stays);
