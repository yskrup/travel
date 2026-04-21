// ╔══════════════════════════════════════════════════════════════╗
// ║  data.js — YOUR TRAVEL DATA                                  ║
// ║                                                              ║
// ║  THIS IS THE ONLY FILE YOU NEED TO EDIT to add new places.  ║
// ║  The website reads this file automatically.                  ║
// ╚══════════════════════════════════════════════════════════════╝
//
// STRUCTURE OVERVIEW:
//   Each "country" block contains a list of cities.
//   Each "city" block contains:
//     • name     — city name (text in quotes)
//     • lat/lng  — GPS coordinates (find at: maps.google.com → right-click a spot)
//     • visited  — when you went, free-form text (e.g. "March 2023")
//     • notes    — your travel diary / tips. Use \n\n for paragraph breaks.
//     • photos   — list of images, each with a url and optional caption
//
// PHOTO URL OPTIONS:
//   Option A: Cloudinary (recommended for lots of photos — free tier)
//             Upload photo → copy the URL → paste here
//   Option B: GitHub (for smaller photo sets)
//             Upload photo to your repo's /photos/ folder
//             URL format: "photos/japan/tokyo-1.jpg"
//   Option C: Any direct image URL from the web
//
// ──────────────────────────────────────────────────────────────
// ✂️ COPY-PASTE TEMPLATE (at the bottom of this file)
// ──────────────────────────────────────────────────────────────


const TRAVEL_DATA = [


  // ════════════════════════════════════════
  // JAPAN
  // ════════════════════════════════════════
  {
    country: "Japan",
    cities: [

      {
        name: "Tokyo",
        lat: 35.6762,
        lng: 139.6503,
        visited: "March 2023",
        notes: "Tokyo completely exceeded my expectations. The city is enormous but somehow feels navigable — every neighbourhood has its own personality. Shibuya is chaotic and electric, Yanaka feels like stepping back 100 years, and Shinjuku at night is science fiction made real.\n\nBest meal: a tiny ramen shop with a queue out the door at 11pm. Totally worth the wait.\n\nPractical tip: Get a Suica card (IC transit card) on day one and charge it at any station. Convenience stores here are genuinely excellent for meals.",
        photos: [
          {
            url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&auto=format&fit=crop",
            caption: "Shibuya crossing at night"
          },
          {
            url: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=900&auto=format&fit=crop",
            caption: "Senso-ji temple, Asakusa"
          },
          {
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=900&auto=format&fit=crop",
            caption: "Shinjuku at dusk"
          },
          {
            url: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=900&auto=format&fit=crop",
            caption: "Ramen at midnight"
          }
        ]
      },

      {
        name: "Kyoto",
        lat: 35.0116,
        lng: 135.7681,
        visited: "March 2023",
        notes: "Kyoto is what Tokyo isn't — quiet, ancient, contemplative. The bamboo grove in Arashiyama is genuinely magical if you get there before 8am before the crowds arrive.\n\nFushimi Inari: go at dusk when the light turns the torii gates orange. The path up the mountain takes about 2 hours. Most tourists only do the first 20 minutes — keep going.\n\nStayed at a small guesthouse in Gion. Woke up to temple bells every morning.",
        photos: [
          {
            url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&auto=format&fit=crop",
            caption: "Fushimi Inari torii gates at dusk"
          },
          {
            url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&auto=format&fit=crop",
            caption: "Bamboo grove, Arashiyama"
          }
        ]
      }

    ]
  },


  // ════════════════════════════════════════
  // PORTUGAL
  // ════════════════════════════════════════
  {
    country: "Portugal",
    cities: [

      {
        name: "Lisbon",
        lat: 38.7169,
        lng: -9.1395,
        visited: "September 2022",
        notes: "Lisbon is a city for wandering. I got happily lost in Alfama every day — the tangle of narrow streets feels almost medieval, and you keep stumbling onto tiny viewpoints (miradouros) with sweeping views over terracotta rooftops and the Tagus river.\n\nThe pastéis de nata at Pastéis de Belém (open since 1837) were the best thing I ate that year. Queue outside, sit inside, order coffee, eat immediately.\n\nThe 28 tram exists mostly for tourists now, but riding it through the steep streets of Alfama is still worth doing once — hold on tight.",
        photos: [
          {
            url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&auto=format&fit=crop",
            caption: "Rooftops of Alfama"
          },
          {
            url: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=900&auto=format&fit=crop",
            caption: "Miradouro da Graça"
          }
        ]
      },

      {
        name: "Porto",
        lat: 41.1579,
        lng: -8.6291,
        visited: "September 2022",
        notes: "Porto feels grittier and more lived-in than Lisbon. The azulejo (blue tile) facades on the old buildings are everywhere and extraordinary — even on the São Bento train station interior, which is one of the most beautiful rooms I've ever been in.\n\nCrossed the Dom Luís bridge on foot. The upper pedestrian deck is slightly terrifying. The view is worth every step.\n\nDrank too much port wine at Sandeman across the river in Vila Nova de Gaia. No regrets whatsoever.",
        photos: [
          {
            url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&auto=format&fit=crop",
            caption: "Dom Luís bridge over the Douro"
          }
        ]
      }

    ]
  },


  // ════════════════════════════════════════
  // ICELAND
  // ════════════════════════════════════════
  {
    country: "Iceland",
    cities: [

      {
        name: "Reykjavík",
        lat: 64.1466,
        lng: -21.9426,
        visited: "January 2024",
        notes: "Came for the Northern Lights. They showed up on night two — the most disorienting and beautiful thing I've ever seen. No photograph fully captures it. The sky moves.\n\nThe city itself is tiny and very walkable. Hallgrímskirkja church looks like it came from another planet, especially in the snow. The lamb soup (kjötsúpa) served at Café Loki is simple, warming, and perfect.\n\nRented a car for two days and drove the Golden Circle (Geysir, Gullfoss waterfall, and Þingvellir National Park). Do it. The landscape is genuinely lunar.",
        photos: [
          {
            url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&auto=format&fit=crop",
            caption: "Northern Lights over Iceland"
          },
          {
            url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=900&auto=format&fit=crop",
            caption: "Hallgrímskirkja in winter"
          }
        ]
      }

    ]
  }


  // Add more countries below — copy the template at the bottom!

];


// ╔══════════════════════════════════════════════════════════════╗
// ║  ✂️  TEMPLATE — Copy this to add a new destination          ║
// ║                                                              ║
// ║  BEFORE PASTING: add a comma after the last } above         ║
// ╚══════════════════════════════════════════════════════════════╝

/*

  {
    country: "COUNTRY NAME",
    cities: [

      {
        name: "CITY NAME",

        // Find coordinates: go to maps.google.com, right-click your city, click the numbers
        lat: 00.0000,     // Positive = North, Negative = South
        lng: 00.0000,     // Positive = East, Negative = West

        visited: "Month Year",   // Free text, e.g. "July 2024" or "Summer 2024"

        notes: "Your travel notes here.\n\nStart a new paragraph with \\n\\n like this.\n\nWrite as much or as little as you want.",

        photos: [
          {
            url: "PASTE_YOUR_IMAGE_URL_HERE",
            caption: "Optional: a short caption for this photo"
          },
          {
            url: "PASTE_YOUR_IMAGE_URL_HERE",
            caption: "Another photo"
          }
          // Add more photos by copying the block above.
          // Delete the photos: [] section entirely if you have no photos yet.
        ]
      },

      // To add a second city in the same country, copy the block above and paste here.

    ]
  },

*/
