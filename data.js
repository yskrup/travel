// ╔══════════════════════════════════════════════════════════════╗
// ║  data.js — YOUR TRAVEL DATA                                  ║
// ║  This is the only file you edit to add new destinations.     ║
// ╚══════════════════════════════════════════════════════════════╝
//
// НОВЫЕ ПОЛЯ по сравнению с прошлой версией:
//   • flag     — флаг страны (эмодзи), добавляется один раз на страну
//   • dateFrom — дата начала поездки в формате "ГГГГ-ММ-ДД" (для сортировки)
//   • dateTo   — дата конца поездки в формате "ГГГГ-ММ-ДД" (можно не заполнять)
//
// Список показывается от самого нового (dateFrom) к самому старому.
// Если dateFrom не заполнен — город окажется в конце списка.
//
// КАК НАЙТИ ФЛАГ: просто скопируй эмодзи из этого списка:
//   🇦🇿 🇦🇲 🇧🇾 🇧🇪 🇧🇦 🇧🇬 🇨🇿 🇩🇰 🇪🇪 🇫🇮 🇫🇷 🇩🇪 🇬🇷 🇭🇺
//   🇮🇸 🇮🇪 🇮🇹 🇯🇵 🇰🇿 🇱🇻 🇱🇹 🇱🇺 🇳🇱 🇳🇴 🇵🇱 🇵🇹 🇷🇴
//   🇷🇺 🇷🇸 🇸🇰 🇸🇮 🇪🇸 🇸🇪 🇨🇭 🇹🇷 🇺🇦 🇬🇧 🇺🇸 🇺🇿 🇬🇪
//   🇦🇱 🇦🇹 🇭🇷 🇨🇾 🇲🇪 🇲🇰 🇲🇹 🇲🇩 🇲🇦 🇹🇳 🇪🇬 🇮🇱 🇯🇴
//   🇹🇭 🇻🇳 🇮🇩 🇸🇬 🇲🇾 🇨🇳 🇰🇷 🇮🇳 🇿🇦 🇰🇪 🇹🇿 🇲🇽 🇧🇷
//   🇦🇷 🇨🇴 🇵🇪 🇨🇱 🇨🇺 🇦🇺 🇳🇿 🇨🇦 🇮🇸


const TRAVEL_DATA = [


  // ════════════════════
  // JAPAN 🇯🇵
  // ════════════════════
  {
    country: "Japan",
    flag: "🇯🇵",
    cities: [

      {
        name: "Tokyo",
        lat: 35.6762,
        lng: 139.6503,
        dateFrom: "2023-03-10",
        dateTo:   "2023-03-17",
        visited:  "March 2023",
        notes: "Tokyo completely exceeded my expectations. The city is enormous but somehow feels navigable — every neighbourhood has its own personality. Shibuya is chaotic and electric, Yanaka feels like stepping back 100 years, and Shinjuku at night is science fiction made real.\n\nBest meal: a tiny ramen shop with a queue out the door at 11pm. Totally worth it.\n\nTip: get a Suica card on day one.",
        photos: [
          { url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&auto=format&fit=crop", caption: "Shibuya crossing at night" },
          { url: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=900&auto=format&fit=crop", caption: "Senso-ji temple, Asakusa" },
          { url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=900&auto=format&fit=crop", caption: "Shinjuku at dusk" }
        ]
      },

      {
        name: "Kyoto",
        lat: 35.0116,
        lng: 135.7681,
        dateFrom: "2023-03-17",
        dateTo:   "2023-03-21",
        visited:  "March 2023",
        notes: "Kyoto is what Tokyo isn't — quiet, ancient, contemplative. Go to Fushimi Inari at dusk when the light turns the torii gates orange. The path up the mountain takes about 2 hours — most tourists only do the first 20 minutes, so keep going.",
        photos: [
          { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&auto=format&fit=crop", caption: "Fushimi Inari at dusk" },
          { url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&auto=format&fit=crop", caption: "Bamboo grove, Arashiyama" }
        ]
      }

    ]
  },


  // ════════════════════
  // PORTUGAL 🇵🇹
  // ════════════════════
  {
    country: "Portugal",
    flag: "🇵🇹",
    cities: [

      {
        name: "Lisbon",
        lat: 38.7169,
        lng: -9.1395,
        dateFrom: "2022-09-05",
        dateTo:   "2022-09-10",
        visited:  "September 2022",
        notes: "Lisbon is a city for wandering. I got happily lost in Alfama every day — the tangle of narrow streets feels almost medieval, and you keep stumbling onto tiny viewpoints (miradouros) with sweeping views over the terracotta rooftops.\n\nThe pastéis de nata at Pastéis de Belém were the best thing I ate that year.",
        photos: [
          { url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&auto=format&fit=crop", caption: "Rooftops of Alfama" },
          { url: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=900&auto=format&fit=crop", caption: "Miradouro da Graça" }
        ]
      },

      {
        name: "Porto",
        lat: 41.1579,
        lng: -8.6291,
        dateFrom: "2022-09-10",
        dateTo:   "2022-09-13",
        visited:  "September 2022",
        notes: "Porto feels grittier and more lived-in than Lisbon. The azulejo tile facades are extraordinary — even the São Bento train station interior is one of the most beautiful rooms I've ever been in.\n\nDrank too much port at Sandeman. No regrets.",
        photos: [
          { url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&auto=format&fit=crop", caption: "Dom Luís bridge over the Douro" }
        ]
      }

    ]
  },


  // ════════════════════
  // ICELAND 🇮🇸
  // ════════════════════
  {
    country: "Iceland",
    flag: "🇮🇸",
    cities: [

      {
        name: "Reykjavík",
        lat: 64.1466,
        lng: -21.9426,
        dateFrom: "2024-01-08",
        dateTo:   "2024-01-14",
        visited:  "January 2024",
        notes: "Came for the Northern Lights. They showed up on night two — the most disorienting and beautiful thing I've ever seen. No photograph fully captures it. The sky moves.\n\nRented a car for the Golden Circle. Geysir, Gullfoss, and Þingvellir in one day. The landscape is genuinely lunar.",
        photos: [
          { url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&auto=format&fit=crop", caption: "Northern Lights over Iceland" },
          { url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=900&auto=format&fit=crop", caption: "Hallgrímskirkja in winter" }
        ]
      }

    ]
  }

];


// ╔══════════════════════════════════════════════════════════════╗
// ║  ✂️  ШАБЛОН — скопируй это чтобы добавить новое место       ║
// ║  Не забудь поставить запятую после } предыдущей страны      ║
// ╚══════════════════════════════════════════════════════════════╝

/*

  {
    country: "НАЗВАНИЕ СТРАНЫ",
    flag: "🏳️",           // замени на нужный флаг из списка выше

    cities: [
      {
        name: "НАЗВАНИЕ ГОРОДА",

        // Координаты: Google Maps → правая кнопка мыши → скопировать цифры
        lat: 00.0000,
        lng: 00.0000,

        // Даты для сортировки (формат: ГГГГ-ММ-ДД)
        dateFrom: "2024-06-01",
        dateTo:   "2024-06-07",

        // Текст для отображения в панели
        visited: "Июнь 2024",

        notes: "Твои заметки о поездке.\n\nНовый абзац — два символа \\n\\n.",

        photos: [
          { url: "ВСТАВЬ_ССЫЛКУ_СЮДА", caption: "Подпись к фото" },
          { url: "ВСТАВЬ_ССЫЛКУ_СЮДА", caption: "Ещё одно фото" }
        ]
      }
    ]
  },

*/
