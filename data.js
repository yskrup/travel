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
  // SWITZERLAND 🇨🇭
  // ════════════════════
  {
    country: "Switzerland",
    flag: "🇨🇭",
    cities: [

      {
        name: "Interlaken",
        lat: 46.683,
        lng: 7.850,
        dateFrom: "2025-10-13",
        dateTo:   "2023-10-20",
        visited:  "October 2025",
        notes: "It was a random city on the map near the mountains with the cheapest accomodation for the upcoming days where I could go right away after unexpectedly earlier finished vipassana. At the end I fell in love with this place. It's surrounded by breathtaking mountains, there are 2 lakes, numerous sports facilities.\n\nTip: Get to know the locals and follow non-touristic paths.",
        photos: [
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776774904/IMG_2937_pf0arh.jpg", caption: "Höhematte Park" },
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776774924/IMG_3170_rrdrdb.jpg", caption: "Aare river" },
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776774910/IMG_3063_rnt6go.jpg", caption: "Balmers Hostel is Switzerland's oldest hostel" }
        ]
      },

      {
        name: "Kandersteg",
        lat: 46.4958,
        lng: 7.6732,
        dateFrom: "2025-10-14",
        dateTo:   "2025-10-14",
        visited:  "October 2025",
        notes: "Amazing hike to the lake Oeschinensee. The fog there lives its own live. We were lucky to see the lake when the fog went for a walk",
        photos: [
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776054/IMG_0137_mi3xex.jpg", caption: "Everyone wanted a picture with the beautiful flag of Switzerland" },
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776119/IMG_1358_kwbcol.jpg", caption: "Our hiking team except the photographer" }
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776119/IMG_1358_kwbcol.jpg", caption: "Our hiking team except the photographer" }
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776137/IMG_2741_pdk5sk.jpg", caption: "Crystal clean and extremely cold water " }
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776141/IMG_2813_vbj1mt.jpg", caption: "Seeing such a beautiful nature the next day after the vipassana was such a intense immersion back to life" }
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776143/IMG_2838_unexcc.jpg", caption: "I want this bench and the view back at home" }
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776144/IMG_2878_zilvfu.jpg", caption: "Australian soulmate" }
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776140/IMG_2757_gljask.jpg", caption: "The fog is coming" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776146/IMG_2898_j0fvur.jpg", caption: "More fog is coming" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776134/IMG_2737_2_ncvipq.jpg", caption: "My future dream in 50 years" }
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
