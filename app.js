// app.js — Map, filter bar, and city list logic
// You don't need to edit this file. Edit data.js only.


// ── 1. MAP ──────────────────────────────────
const map = L.map('map', {
  center: [25, 15],
  zoom: 2,
  zoomControl: true,
  scrollWheelZoom: true,
  minZoom: 2,
  maxZoom: 18,
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19,
}).addTo(map);

const clusterGroup = L.markerClusterGroup({
  maxClusterRadius: 40,
  showCoverageOnHover: false,
  spiderfyOnMaxZoom: true,
  iconCreateFunction(cluster) {
    return L.divIcon({
      html: `<div class="custom-cluster"><span>${cluster.getChildCount()}</span></div>`,
      className: '',
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });
  },
});


// ── 2. PANEL ────────────────────────────────
const panel        = document.getElementById('panel');
const panelInner   = document.getElementById('panel-inner');
const panelClose   = document.getElementById('panel-close');
const panelOverlay = document.getElementById('panel-overlay');

let currentPhotos = [];

function openPanel(city, countryName, flag) {
  currentPhotos = city.photos || [];

  const notesHTML = city.notes
    ? `<div class="panel-section">
         <p class="section-label">Notes</p>
         <p class="panel-notes">${esc(city.notes)}</p>
       </div>`
    : '';

  let photosHTML = '';
  if (currentPhotos.length > 0) {
    const items = currentPhotos.map((p, i) => `
      <div class="photo-item" onclick="openLightbox(${i})" tabindex="0"
           onkeydown="if(event.key==='Enter')openLightbox(${i})">
        <img src="${esc(p.url)}" alt="${esc(p.caption || city.name)}" loading="lazy" />
        ${p.caption ? `<div class="photo-cap">${esc(p.caption)}</div>` : ''}
      </div>`).join('');
    photosHTML = `<div class="panel-section">
      <p class="section-label">Photos <span style="opacity:.45;font-size:10px;">(${currentPhotos.length})</span></p>
      <div class="photo-grid">${items}</div>
    </div>`;
  } else {
    photosHTML = `<div class="panel-section">
      <p class="section-label">Photos</p>
      <p class="no-content">No photos yet.</p>
    </div>`;
  }

  panelInner.innerHTML = `
    <h2 class="panel-city-name">${esc(city.name)} ${flag || ''}</h2>
    <div class="panel-meta">
      <span>${esc(countryName)}</span>
      ${city.visited ? `<span class="panel-meta-dot"></span><span>${esc(city.visited)}</span>` : ''}
    </div>
    ${notesHTML}
    ${photosHTML}
  `;

  panel.classList.remove('panel-hidden');
  panelOverlay.classList.add('visible');
  panel.scrollTop = 0;
}

function closePanel() {
  panel.classList.add('panel-hidden');
  panelOverlay.classList.remove('visible');
}

panelClose.addEventListener('click', closePanel);
panelOverlay.addEventListener('click', closePanel);


// ── 3. LIGHTBOX ─────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');
const lbCap    = document.getElementById('lb-caption');
const lbCount  = document.getElementById('lb-counter');
const lbPrev   = document.getElementById('lb-prev');
const lbNext   = document.getElementById('lb-next');
let lbIndex    = 0;

function openLightbox(index) {
  if (!currentPhotos.length) return;
  lbIndex = index;
  renderLb();
  lightbox.classList.remove('lightbox-hidden');
}

function renderLb() {
  const p = currentPhotos[lbIndex];
  lbImg.src = p.url;
  lbImg.alt = p.caption || '';
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
    return;
  }
  if (e.key === 'Escape') closePanel();
});

// Swipe on mobile
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


// ── 4. BUILD FLAT CITY LIST & ADD MARKERS ───
// Flatten all cities into one array, each with a reference to its country
const allCities = [];

TRAVEL_DATA.forEach(countryEntry => {
  (countryEntry.cities || []).forEach(city => {
    allCities.push({
      ...city,
      country: countryEntry.country,
      flag:    countryEntry.flag || '',
    });
  });
});

// Sort newest → oldest using the dateFrom field (falls back to 0 if missing)
allCities.sort((a, b) => {
  const da = a.dateFrom ? new Date(a.dateFrom) : new Date(0);
  const db = b.dateFrom ? new Date(b.dateFrom) : new Date(0);
  return db - da;
});

// Add map markers
allCities.forEach(city => {
  if (city.lat == null || city.lng == null) return;

  const icon = L.divIcon({
    className: '',
    html: '<div class="city-dot"></div>',
    iconSize:   [10, 10],
    iconAnchor: [5, 5],
  });

  const marker = L.marker([city.lat, city.lng], { icon });
  marker.bindTooltip(city.name, { permanent: false, direction: 'top', offset: [0, -8], className: 'city-tooltip' });
  marker.on('click', e => {
    L.DomEvent.stopPropagation(e);
    openPanel(city, city.country, city.flag);
  });
  clusterGroup.addLayer(marker);
});

map.addLayer(clusterGroup);


// ── 5. COUNTRY FILTER BAR ───────────────────
const filterBar = document.getElementById('filter-bar');

// Get unique countries in the order they appear (after date sort)
const seenCountries = [];
const countryOrder  = [];
allCities.forEach(c => {
  if (!seenCountries.includes(c.country)) {
    seenCountries.push(c.country);
    countryOrder.push({ country: c.country, flag: c.flag });
  }
});

countryOrder.forEach(({ country, flag }) => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn';
  btn.dataset.country = country;
  btn.innerHTML = `<span class="filter-flag">${flag}</span><span class="filter-label">${country}</span>`;
  filterBar.appendChild(btn);
});

// Filter click handler
let activeFilter = 'all';

filterBar.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  activeFilter = btn.dataset.country;
  filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCityList(activeFilter);
});


// ── 6. CITY LIST ────────────────────────────
const cityListEl = document.getElementById('city-list');

function formatDateRange(city) {
  if (city.dateFrom && city.dateTo) {
    return formatDate(city.dateFrom) + ' – ' + formatDate(city.dateTo);
  }
  if (city.dateFrom) return formatDate(city.dateFrom);
  return city.visited || '';
}

function formatDate(iso) {
  // "2023-03-15" → "15 Mar 2023"
  const d = new Date(iso + 'T12:00:00'); // noon to avoid timezone issues
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderCityList(filter) {
  const cities = filter === 'all'
    ? allCities
    : allCities.filter(c => c.country === filter);

  if (!cities.length) {
    cityListEl.innerHTML = '<p style="padding:24px 0;color:var(--color-muted);font-size:14px;">No cities yet.</p>';
    return;
  }

  cityListEl.innerHTML = cities.map(city => `
    <div class="city-row"
         onclick="openPanel(${JSON.stringify(city).replace(/"/g, '&quot;')}, ${JSON.stringify(city.country).replace(/"/g, '&quot;')}, '${city.flag || ''}')">
      <div class="city-row-date">${esc(formatDateRange(city))}</div>
      <div class="city-row-name">
        ${esc(city.name)}
        <span class="city-row-flag">${city.flag || ''}</span>
      </div>
    </div>
  `).join('');
}

// Safer approach — attach click listeners properly to avoid HTML injection issues
function renderCityListSafe(filter) {
  const cities = filter === 'all'
    ? allCities
    : allCities.filter(c => c.country === filter);

  cityListEl.innerHTML = '';

  if (!cities.length) {
    cityListEl.innerHTML = '<p style="padding:24px 0;color:var(--color-muted);font-size:14px;">No cities yet.</p>';
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

    const nameText = document.createTextNode(city.name + ' ');
    const flagEl   = document.createElement('span');
    flagEl.className = 'city-row-flag';
    flagEl.textContent = city.flag || '';

    nameEl.appendChild(nameText);
    nameEl.appendChild(flagEl);

    row.appendChild(dateEl);
    row.appendChild(nameEl);

    row.addEventListener('click', () => openPanel(city, city.country, city.flag));
    cityListEl.appendChild(row);
  });
}

// Use the safe version
filterBar.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  activeFilter = btn.dataset.country;
  filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCityListSafe(activeFilter);
});

// Initial render
renderCityListSafe('all');


// ── 7. HEADER STATS ─────────────────────────
const totalCountries = TRAVEL_DATA.length;
const totalCities    = allCities.length;

document.getElementById('stat-countries').textContent =
  `${totalCountries} ${totalCountries === 1 ? 'country' : 'countries'}`;
document.getElementById('stat-cities').textContent =
  `${totalCities} ${totalCities === 1 ? 'city' : 'cities'}`;


// ── UTILITY ─────────────────────────────────
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}
