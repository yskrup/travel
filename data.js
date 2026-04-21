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
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776776134/IMG_2737_2_ncvipq.jpg", caption: "Hopefully my future in 50 years" }
        ]
      }

    ]
  },


  // ════════════════════
  // FRANCE 🇫🇷
  // ════════════════════
  {
    country: "France",
    flag: "🇫🇷",
    cities: [

      {
        name: "Montpellier",
        lat: 43.6119,
        lng: 3.8772,
        dateFrom: "2025-10-06",
        dateTo:   "2025-10-76",
        visited:  "October 2025",
        notes: "Initially Montpellier was just a transfer location on my way to Switzerland. At the end it was a charming city where I enjoyed the morning sun, spoke French, got compliments in French and could enjoy the style of people and town especially after Spain :D",
        photos: [
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777780/IMG_1935_zd6syp.jpg", caption: "The city greeted me with colourful trams" },
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777786/IMG_1952_wu6qg9.jpg", caption: "Nice buildings" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777764/IMG_1960_xlagby.jpg", caption: "And more nice buildings" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777785/IMG_1937_xru6er.jpg", caption: "And colourful art hotel" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777769/IMG_1986_ggplna.jpg", caption: "Sunrise from the hotel" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777801/IMG_2069_lsj5jc.jpg", caption: "Sunrise in the city" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777797/IMG_2006_bi0ny0.jpg", caption: "Happy me on empty streets" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777767/IMG_2013_pcnd21.jpg", caption: "Streets of Montpellier" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777765/IMG_2062_mamw2t.jpg", caption: "Old ruins" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777782/IMG_2116_csspg9.jpg", caption: "The song my heart" }
           { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777776/IMG_2138_xgfjmk.jpg", caption: "I was thinking of buying it for my apartment but understood that nobody would understand" }
            { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776777772/IMG_2095_scbxct.jpg", caption: "I love these trams" }
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
        dateFrom: "2017-08-15",
        dateTo:   "2017-08-28",
        visited:  "August 2017",
        notes: "Came to Iceland to volunteer and spent the 1st day on my own exploring the capital city on foot.\n\n I remember the cleanness of the streets, golf clubs, residential ares and the views. Unfortunalety, I don't remember where are all the photos and found only these.",
        photos: [
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776778642/IMG_3484_ehosrf.jpg", caption: "Volunteering" },
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776778638/IMG_3483_goj4xo.jpg", caption: "Hiking around" }
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776778637/IMG_2744_b0sggj.jpg", caption: "First northern lights in my life" }
          { url: "https://res.cloudinary.com/dpdd7tzw8/image/upload/v1776778634/IMG_3171_zrowc2.jpg", caption: "I met a wonderful friend from Germany during this volunterring camp. Later on she visited me, we also travelled in the Baltic States together with our parents. We still keep in touch sending postcards!" }
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
