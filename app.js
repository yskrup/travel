// app.js — routing, map, list, city detail pages
// You never need to edit this file. Edit data.js only.

// ── FLAT CITY LIST ───────────────────────────
// Combine all cities into one flat array, each knowing its country + flag
const allCities = [];
TRAVEL_DATA.forEach(countryEntry => {
  (countryEntry.cities || []).forEach(city => {
    allCities.push({ ...city, country: countryEntry.country, flag: countryEntry.flag || '' });
  });
});

// Sort newest → oldest by dateFrom
allCities.sort((a, b) => {
  const da = a.dateFrom ? new Date(a.dateFrom) : new Date(0);
  const db = b.dateFrom ? new Date(b.dateFrom) : new Date(0);
  return db - da;
});

// Build a lookup map: "country-slug/city-slug" → city object
// Used to find a city from the URL hash
const cityLookup = {};
allCities.forEach(city => {
  const key = makeSlug(city.country) + '/' + makeSlug(city.name);
  cityLookup[key] = city;
});

function makeSlug(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}


// ── MAIN MAP ─────────────────────────────────
const map = L.map('map', {
  center: [25, 15], zoom: 2,
  zoomControl: true, scrollWheelZoom: true,
  minZoom: 2, maxZoom: 18,
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd', maxZoom: 19,
}).addTo(map);

const clusterGroup = L.markerClusterGroup({
  maxClusterRadius: 40, showCoverageOnHover: false, spiderfyOnMaxZoom: true,
  iconCreateFunction(cluster) {
    return L.divIcon({
      html: `<div class="custom-cluster"><span>${cluster.getChildCount()}</span></div>`,
      className: '', iconSize: [32, 32], iconAnchor: [16, 16],
    });
  },
});

allCities.forEach(city => {
  if (city.lat == null || city.lng == null) return;
  const icon = L.divIcon({ className: '', html: '<div class="city-dot"></div>', iconSize: [10,10], iconAnchor: [5,5] });
  const marker = L.marker([city.lat, city.lng], { icon });
  marker.bindTooltip(city.name, { permanent: false, direction: 'top', offset: [0,-8], className: 'city-tooltip' });
  marker.on('click', e => {
    L.DomEvent.stopPropagation(e);
    navigateTo(city);
  });
  clusterGroup.addLayer(marker);
});
map.addLayer(clusterGroup);


// ── FILTER BAR ───────────────────────────────
const filterBar = document.getElementById('filter-bar');

const seenCountries = [];
allCities.forEach(c => {
  if (!seenCountries.find(x => x.country === c.country)) {
    seenCountries.push({ country: c.country, flag: c.flag });
  }
});

seenCountries.forEach(({ country, flag }) => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn';
  btn.dataset.country = country;
  btn.innerHTML = `<span class="filter-flag">${flag}</span><span class="filter-label">${country}</span>`;
  filterBar.appendChild(btn);
});

let activeFilter = 'all';
filterBar.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  activeFilter = btn.dataset.country;
  filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderList(activeFilter);
});


// ── CITY LIST ────────────────────────────────
const cityListEl = document.getElementById('city-list');

function formatDateRange(city) {
  if (city.dateFrom && city.dateTo) return fmtDate(city.dateFrom) + ' – ' + fmtDate(city.dateTo);
  if (city.dateFrom) return fmtDate(city.dateFrom);
  return city.visited || '';
}

function fmtDate(iso) {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderList(filter) {
  const cities = filter === 'all' ? allCities : allCities.filter(c => c.country === filter);
  cityListEl.innerHTML = '';

  if (!cities.length) {
    cityListEl.innerHTML = '<p style="padding:24px 0;color:var(--color-muted);font-size:14px;">Nothing yet.</p>';
    return;
  }

  cities.forEach(city => {
    const row = document.createElement('div');
    row.className = 'city-row';

    const dateEl = document.createElement('div');
    dateEl.className = 'city-row-date';
    dateEl.textContent = formatDateRange(city);

    const nameEl = document.createElement('div');
    nameEl.className = 'city-row-name';
    nameEl.appendChild(document.createTextNode(city.name + ' '));
    const flagEl = document.createElement('span');
    flagEl.className = 'city-row-flag';
    flagEl.textContent = city.flag;
    nameEl.appendChild(flagEl);

    row.appendChild(dateEl);
    row.appendChild(nameEl);
    row.addEventListener('click', () => navigateTo(city));
    cityListEl.appendChild(row);
  });
}


// ── HEADER STATS ─────────────────────────────
document.getElementById('stat-countries').textContent =
  `${TRAVEL_DATA.length} ${TRAVEL_DATA.length === 1 ? 'country' : 'countries'}`;
document.getElementById('stat-cities').textContent =
  `${allCities.length} ${allCities.length === 1 ? 'city' : 'cities'}`;


// ══════════════════════════════════════════════
// ROUTING — switching between main and city views
// ══════════════════════════════════════════════

const viewMain = document.getElementById('view-main');
const viewCity = document.getElementById('view-city');

// Navigate to a city's detail page
function navigateTo(city) {
  const slug = makeSlug(city.country) + '/' + makeSlug(city.name);
  window.location.hash = slug;
}

// Go back to main view
function goBack() {
  window.location.hash = '';
}

// Read the URL hash and show the right view
function handleRoute() {
  const hash = window.location.hash.replace('#', '');

  if (hash && cityLookup[hash]) {
    showCityPage(cityLookup[hash]);
  } else {
    showMainView();
  }
}

function showMainView() {
  viewCity.classList.add('hidden');
  viewMain.classList.remove('hidden');
  document.title = 'My Travel Map'; // ✏️ Change to your site name
  // Re-invalidate map size in case browser resized
  setTimeout(() => map.invalidateSize(), 50);
}

// ── CITY DETAIL PAGE ─────────────────────────
let cityMapInstance = null;  // Holds the Leaflet map for the city page

function showCityPage(city) {
  viewMain.classList.add('hidden');
  viewCity.classList.remove('hidden');

  // Update browser tab title
  document.title = `${city.name} — My Travel Map`; // ✏️ Change suffix

  // Header
  document.getElementById('city-header-name').textContent = city.name;

  // City name + dates
  const nameEl = document.getElementById('city-page-name');
  nameEl.textContent = '';
  nameEl.appendChild(document.createTextNode(city.name + ' '));
  const flagEl = document.createElement('span');
  flagEl.textContent = city.flag || '';
  nameEl.appendChild(flagEl);

  document.getElementById('city-page-dates').textContent = formatDateRange(city);

  // Notes
  const notesBlock = document.getElementById('city-notes-block');
  const notesEl    = document.getElementById('city-notes');
  if (city.notes && city.notes.trim()) {
    notesEl.textContent = city.notes;
    notesBlock.style.display = '';
  } else {
    notesBlock.style.display = 'none';
  }

  // Photos
  currentPhotos = city.photos || [];
  const photosEl = document.getElementById('city-photos');
  photosEl.innerHTML = '';

  currentPhotos.forEach((photo, index) => {
    const wrap = document.createElement('div');
    wrap.className = 'city-photo-item';

    const img = document.createElement('img');
    img.src     = photo.url;
    img.alt     = photo.caption || city.name;
    img.loading = 'lazy';
    img.addEventListener('click', () => openLightbox(index));

    wrap.appendChild(img);

    if (photo.caption) {
      const cap = document.createElement('p');
      cap.className = 'city-photo-cap';
      cap.textContent = photo.caption;
      wrap.appendChild(cap);
    }

    photosEl.appendChild(wrap);
  });

  // Scroll page to top
  window.scrollTo(0, 0);

  // Small city map — destroy previous instance first
  if (cityMapInstance) {
    cityMapInstance.remove();
    cityMapInstance = null;
  }

  // Small delay to let the div become visible before Leaflet measures it
  setTimeout(() => {
    cityMapInstance = L.map('city-map', {
      center: [city.lat, city.lng],
      zoom: 11,
      zoomControl: true,
      scrollWheelZoom: false,   // Don't hijack page scroll
      dragging: true,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd', maxZoom: 19,
    }).addTo(cityMapInstance);

    // Single marker on this city
    const icon = L.divIcon({ className: '', html: '<div class="city-dot"></div>', iconSize:[10,10], iconAnchor:[5,5] });
    L.marker([city.lat, city.lng], { icon }).addTo(cityMapInstance);
  }, 60);
}


// ── LIGHTBOX ─────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');
const lbCap    = document.getElementById('lb-caption');
const lbCount  = document.getElementById('lb-counter');
const lbPrev   = document.getElementById('lb-prev');
const lbNext   = document.getElementById('lb-next');
let lbIndex = 0;
let currentPhotos = [];

function openLightbox(index) {
  if (!currentPhotos.length) return;
  lbIndex = index;
  renderLb();
  lightbox.classList.remove('lightbox-hidden');
}

function renderLb() {
  const p = currentPhotos[lbIndex];
  lbImg.src = p.url; lbImg.alt = p.caption || '';
  lbCap.textContent   = p.caption || '';
  lbCount.textContent = currentPhotos.length > 1 ? `${lbIndex + 1} / ${currentPhotos.length}` : '';
  lbPrev.classList.toggle('lb-dim', lbIndex === 0);
  lbNext.classList.toggle('lb-dim', lbIndex === currentPhotos.length - 1);
}

lbPrev.addEventListener('click', e => { e.stopPropagation(); if (lbIndex > 0) { lbIndex--; renderLb(); } });
lbNext.addEventListener('click', e => { e.stopPropagation(); if (lbIndex < currentPhotos.length - 1) { lbIndex++; renderLb(); } });
document.getElementById('lb-close').addEventListener('click', () => lightbox.classList.add('lightbox-hidden'));
document.getElementById('lb-backdrop').addEventListener('click', () => lightbox.classList.add('lightbox-hidden'));

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('lightbox-hidden')) {
    if (e.key === 'ArrowRight' && lbIndex < currentPhotos.length - 1) { lbIndex++; renderLb(); }
    if (e.key === 'ArrowLeft'  && lbIndex > 0)                        { lbIndex--; renderLb(); }
    if (e.key === 'Escape') lightbox.classList.add('lightbox-hidden');
  }
});

let tsX = null;
lightbox.addEventListener('touchstart', e => { tsX = e.touches[0].clientX; });
lightbox.addEventListener('touchend', e => {
  if (tsX === null) return;
  const d = tsX - e.changedTouches[0].clientX;
  if (Math.abs(d) > 50) {
    if (d > 0 && lbIndex < currentPhotos.length - 1) { lbIndex++; renderLb(); }
    if (d < 0 && lbIndex > 0)                        { lbIndex--; renderLb(); }
  }
  tsX = null;
});


// ── INIT ─────────────────────────────────────
renderList('all');
handleRoute();

// Listen for browser back/forward button
window.addEventListener('hashchange', handleRoute);
