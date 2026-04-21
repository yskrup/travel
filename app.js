// ╔══════════════════════════════════════════════════════════════╗
// ║  app.js — Map Logic                                          ║
// ║                                                              ║
// ║  You do NOT need to edit this file.                          ║
// ║  All your travel content lives in data.js                    ║
// ╚══════════════════════════════════════════════════════════════╝


// ──────────────────────────────────────────
// 1. MAP SETUP
// ──────────────────────────────────────────

// Create the Leaflet map inside the #map div
const map = L.map('map', {
  center: [25, 15],         // Starting view: roughly centered on the world
  zoom: 2,                   // 2 = see the whole world
  zoomControl: true,
  scrollWheelZoom: true,
  minZoom: 2,
  maxZoom: 18,
  // Prevent panning beyond the world bounds
  maxBounds: [[-90, -200], [90, 200]],
  maxBoundsViscosity: 0.8,
});

// Map tiles: CartoDB Positron — clean, minimal, perfect for a travel site
// (Free to use, powered by OpenStreetMap data)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19,
}).addTo(map);


// ──────────────────────────────────────────
// 2. MARKER CLUSTER GROUP
// ──────────────────────────────────────────

// MarkerClusterGroup groups nearby pins when zoomed out.
// As you zoom in, they split apart into individual city dots.
const clusterGroup = L.markerClusterGroup({
  maxClusterRadius: 45,        // How close (pixels) pins need to be to merge
  showCoverageOnHover: false,  // Don't draw a polygon on cluster hover
  spiderfyOnMaxZoom: true,     // Spread overlapping pins at max zoom
  // Custom cluster icon (matches our dark dot aesthetic)
  iconCreateFunction: function(cluster) {
    const count = cluster.getChildCount();
    return L.divIcon({
      html: `<div class="custom-cluster"><span>${count}</span></div>`,
      className: '',
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });
  },
});


// ──────────────────────────────────────────
// 3. SIDE PANEL
// ──────────────────────────────────────────

const panel      = document.getElementById('panel');
const panelInner = document.getElementById('panel-inner');
const panelClose = document.getElementById('panel-close');

// Tracks which photos are in the currently-open panel (for the lightbox)
let currentPhotos = [];

// Opens the side panel and fills it with a city's data
function openPanel(city, countryName) {
  currentPhotos = city.photos || [];

  // Build the notes section HTML
  let notesSection = '';
  if (city.notes && city.notes.trim()) {
    notesSection = `
      <div class="panel-section">
        <p class="section-label">Notes</p>
        <p class="panel-notes">${escapeHtml(city.notes)}</p>
      </div>
    `;
  }

  // Build the photos section HTML
  let photosSection = '';
  if (currentPhotos.length > 0) {
    const photoItems = currentPhotos.map((photo, index) => `
      <div class="photo-item" onclick="openLightbox(${index})" role="button" tabindex="0"
           aria-label="View photo: ${escapeHtml(photo.caption || city.name)}"
           onkeydown="if(event.key==='Enter'||event.key===' ') openLightbox(${index})">
        <img src="${escapeHtml(photo.url)}"
             alt="${escapeHtml(photo.caption || city.name)}"
             loading="lazy" />
        ${photo.caption
          ? `<div class="photo-caption-overlay">${escapeHtml(photo.caption)}</div>`
          : ''}
      </div>
    `).join('');

    photosSection = `
      <div class="panel-section">
        <p class="section-label">Photos <span style="opacity:0.5;font-size:10px;">(${currentPhotos.length})</span></p>
        <div class="photo-grid">${photoItems}</div>
      </div>
    `;
  } else {
    photosSection = `
      <div class="panel-section">
        <p class="section-label">Photos</p>
        <p class="no-content">No photos added yet.</p>
      </div>
    `;
  }

  // Inject all content into the panel
  panelInner.innerHTML = `
    <h2 class="panel-city-name">${escapeHtml(city.name)}</h2>
    <div class="panel-meta">
      <span class="panel-country">${escapeHtml(countryName)}</span>
      ${city.visited ? `
        <span class="panel-meta-sep"></span>
        <span class="panel-dates">${escapeHtml(city.visited)}</span>
      ` : ''}
    </div>
    ${notesSection}
    ${photosSection}
  `;

  // Show the panel (removes the hidden class → CSS transition plays)
  panel.classList.remove('panel-hidden');

  // Scroll panel back to top in case it was previously scrolled
  panel.scrollTop = 0;
}

// Hides the side panel
function closePanel() {
  panel.classList.add('panel-hidden');
}

// Wire up the close button
panelClose.addEventListener('click', closePanel);

// Clicking the map also closes the panel
map.on('click', closePanel);


// ──────────────────────────────────────────
// 4. LIGHTBOX (full-screen photo viewer)
// ──────────────────────────────────────────

const lightbox       = document.getElementById('lightbox');
const lightboxImg    = document.getElementById('lightbox-img');
const lightboxCap    = document.getElementById('lightbox-caption');
const lightboxCount  = document.getElementById('lightbox-counter');
const lightboxPrev   = document.getElementById('lightbox-prev');
const lightboxNext   = document.getElementById('lightbox-next');

let lightboxIndex = 0;   // Which photo is currently shown

// Opens the lightbox at a specific photo index
function openLightbox(index) {
  if (!currentPhotos.length) return;
  lightboxIndex = index;
  renderLightboxPhoto();
  lightbox.classList.remove('lightbox-hidden');
}

// Updates the lightbox with the current photo
function renderLightboxPhoto() {
  const photo = currentPhotos[lightboxIndex];
  lightboxImg.src   = photo.url;
  lightboxImg.alt   = photo.caption || '';
  lightboxCap.textContent   = photo.caption || '';
  lightboxCount.textContent = currentPhotos.length > 1
    ? `${lightboxIndex + 1} / ${currentPhotos.length}`
    : '';

  // Dim navigation buttons at the edges
  lightboxPrev.classList.toggle('lb-btn-hidden', lightboxIndex === 0);
  lightboxNext.classList.toggle('lb-btn-hidden', lightboxIndex === currentPhotos.length - 1);
}

// Navigation
lightboxPrev.addEventListener('click', (e) => {
  e.stopPropagation();
  if (lightboxIndex > 0) { lightboxIndex--; renderLightboxPhoto(); }
});

lightboxNext.addEventListener('click', (e) => {
  e.stopPropagation();
  if (lightboxIndex < currentPhotos.length - 1) { lightboxIndex++; renderLightboxPhoto(); }
});

// Close lightbox
document.getElementById('lightbox-close').addEventListener('click', () => {
  lightbox.classList.add('lightbox-hidden');
});

// Click backdrop to close
document.getElementById('lightbox-backdrop').addEventListener('click', () => {
  lightbox.classList.add('lightbox-hidden');
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  // Lightbox is open
  if (!lightbox.classList.contains('lightbox-hidden')) {
    if (e.key === 'ArrowRight' && lightboxIndex < currentPhotos.length - 1) {
      lightboxIndex++; renderLightboxPhoto();
    }
    if (e.key === 'ArrowLeft' && lightboxIndex > 0) {
      lightboxIndex--; renderLightboxPhoto();
    }
    if (e.key === 'Escape') {
      lightbox.classList.add('lightbox-hidden');
    }
    return;
  }
  // Panel is open
  if (!panel.classList.contains('panel-hidden')) {
    if (e.key === 'Escape') closePanel();
  }
});

// Touch/swipe support for lightbox on mobile
let touchStartX = null;
lightbox.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
lightbox.addEventListener('touchend', (e) => {
  if (touchStartX === null) return;
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {   // Minimum swipe distance
    if (diff > 0 && lightboxIndex < currentPhotos.length - 1) { lightboxIndex++; renderLightboxPhoto(); }
    if (diff < 0 && lightboxIndex > 0)                         { lightboxIndex--; renderLightboxPhoto(); }
  }
  touchStartX = null;
});


// ──────────────────────────────────────────
// 5. ADD MARKERS FROM DATA
// ──────────────────────────────────────────

// Walk through every country and city in data.js and place a dot on the map
TRAVEL_DATA.forEach(countryEntry => {
  if (!countryEntry.cities || !countryEntry.cities.length) return;

  countryEntry.cities.forEach(city => {
    // Validate coordinates exist
    if (city.lat == null || city.lng == null) {
      console.warn(`Missing coordinates for: ${city.name}`);
      return;
    }

    // Create a small custom dot icon
    const icon = L.divIcon({
      className: '',   // Suppress Leaflet's default white box
      html: '<div class="city-dot"></div>',
      iconSize:   [10, 10],
      iconAnchor: [5, 5],    // Center the icon on the coordinate
    });

    // Create and configure the marker
    const marker = L.marker([city.lat, city.lng], {
      icon: icon,
      title: city.name,     // Accessibility / browser tooltip
    });

    // Tooltip on hover (the little label that appears above the dot)
    marker.bindTooltip(city.name, {
      permanent:  false,
      direction:  'top',
      offset:     [0, -8],
      className:  'city-tooltip',
    });

    // When the marker is clicked, open the panel
    marker.on('click', (e) => {
      L.DomEvent.stopPropagation(e);   // Prevent this also triggering map click (= close panel)
      openPanel(city, countryEntry.country);
    });

    clusterGroup.addLayer(marker);
  });
});

// Add all markers to the map
map.addLayer(clusterGroup);


// ──────────────────────────────────────────
// 6. HEADER STATS
// ──────────────────────────────────────────

// Count countries and cities from the data, display in the header
const totalCountries = TRAVEL_DATA.length;
const totalCities    = TRAVEL_DATA.reduce((sum, c) => sum + (c.cities ? c.cities.length : 0), 0);

document.getElementById('stat-countries').textContent =
  `${totalCountries} ${totalCountries === 1 ? 'country' : 'countries'}`;

document.getElementById('stat-cities').textContent =
  `${totalCities} ${totalCities === 1 ? 'city' : 'cities'}`;


// ──────────────────────────────────────────
// 7. UTILITIES
// ──────────────────────────────────────────

// Escapes special HTML characters to prevent broken layouts
// (in case your notes contain < > & " ' characters)
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
