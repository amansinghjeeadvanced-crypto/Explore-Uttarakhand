/**
 * Explore Uttarakhand — Main JavaScript
 * Handles Navigation, Search & Category Filters, Reusable Destination Details, and Form Validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initDestinationFilters();
  initReusableDetail();
  initContactForm();
});

/**
 * 1. Mobile Navigation Toggle with ARIA Attributes
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('is-active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains('is-active')) {
      navMenu.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
      navMenu.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }
  });
}

/**
 * 2. Sticky Header Elevation on Scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Destination Search and Category Filtering (destinations.html)
 */
function initDestinationFilters() {
  const searchInput = document.getElementById('destinationSearch');
  const filterChips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.destination-card');
  const resultsCount = document.getElementById('resultsCount');
  const noResults = document.getElementById('noResults');

  if (!cards.length) return;

  // Helper to normalize strings for comparison (removes '&', replaces with 'and', strips non-alphanumeric, lowercases)
  function normalizeStr(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]/g, '');
  }

  let currentCategory = 'all'; // 'all' or normalized category string

  function filterCards() {
    let visibleCount = 0;
    // Clean and normalize search query: trim, lowercase, collapse multiple spaces
    const rawSearch = searchInput ? searchInput.value : '';
    const cleanSearch = rawSearch.trim().toLowerCase();
    // Split into individual search keywords to handle multiple words and extra spaces
    const searchTokens = cleanSearch ? cleanSearch.split(/\s+/).filter(Boolean) : [];

    cards.forEach((card) => {
      // 1. Category extraction:
      // Supports data-categories, data-category, and data-tags
      const rawCategoriesAttr = card.getAttribute('data-categories') || card.getAttribute('data-category') || '';
      // Parse individual categories split by comma
      const assignedCategories = rawCategoriesAttr
        .split(',')
        .map((cat) => cat.trim())
        .filter(Boolean);

      const normalizedAssignedCategories = assignedCategories.map(normalizeStr);

      // Check category match:
      const matchesCategory =
        currentCategory === 'all' ||
        normalizedAssignedCategories.includes(currentCategory);

      // 2. Search match:
      // Search across card title, location, description, badges, and assigned categories
      const cardTitle = card.querySelector('.destination-title')?.textContent.toLowerCase() || '';
      const cardLoc = card.querySelector('.destination-location')?.textContent.toLowerCase() || '';
      const cardDesc = card.querySelector('.destination-desc')?.textContent.toLowerCase() || '';
      const cardBadges = card.querySelector('.destination-badge')?.textContent.toLowerCase() || '';
      const cardRegion = card.querySelector('.destination-region')?.textContent.toLowerCase() || '';
      const cardMeta = card.querySelector('.destination-meta-box')?.textContent.toLowerCase() || '';

      const fullSearchCorpus = `${cardTitle} ${cardLoc} ${cardDesc} ${cardBadges} ${cardRegion} ${cardMeta} ${assignedCategories.join(' ')}`.toLowerCase();

      // Case-insensitive, handles extra spaces: all tokens must match
      const matchesSearch =
        searchTokens.length === 0 ||
        searchTokens.every((token) => fullSearchCorpus.includes(token));

      // Combined match
      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update results counter
    if (resultsCount) {
      resultsCount.textContent = `Showing ${visibleCount} of ${cards.length} destinations`;
    }

    // Toggle "No destinations found" message
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  // Handle URL query parameters if present (e.g., destinations.html?category=Adventure or ?search=Rishikesh)
  const urlParams = new URLSearchParams(window.location.search);
  const initialCatParam = urlParams.get('category');
  const initialSearchParam = urlParams.get('search');

  if (initialSearchParam && searchInput) {
    searchInput.value = initialSearchParam;
  }

  if (initialCatParam) {
    const normParam = normalizeStr(initialCatParam);
    filterChips.forEach((chip) => {
      const chipCat = chip.getAttribute('data-category') || '';
      if (normalizeStr(chipCat) === normParam) {
        filterChips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        currentCategory = normParam === 'all' ? 'all' : normParam;
      }
    });
  }

  // Search input listener (triggers in real time)
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterCards();
    });
  }

  // Filter chips click listener
  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const rawCat = chip.getAttribute('data-category') || 'All';
      const normCat = normalizeStr(rawCat);
      currentCategory = (normCat === 'all') ? 'all' : normCat;
      filterCards();
    });
  });

  // Reset filter button inside the no-results message
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentCategory = 'all';
      filterChips.forEach((c) => {
        const cat = normalizeStr(c.getAttribute('data-category') || '');
        c.classList.toggle('active', cat === 'all');
      });
      filterCards();
      if (searchInput) searchInput.focus();
    });
  }

  // Initial filter run to set correct count on page load
  filterCards();
}

/**
 * 4. Reusable Destination Details Loader (destination-details.html)
 * Dynamically renders destination details if accessed via query parameter (e.g. ?id=auli).
 */
const destinationCatalog = {
  auli: {
    name: "Auli",
    region: "Chamoli District, Garhwal",
    category: "Hill Stations, Adventure, Trekking",
    altitude: "2,800 to 3,050 meters (9,186 to 10,000 ft)",
    bestTime: "Late December to March (for skiing & snow); April to June (for alpine greenery)",
    nearestStation: "Rishikesh Railway Station (approx. 250 km)",
    nearestAirport: "Jolly Grant Airport, Dehradun (approx. 270 km)",
    heroImg: "images/hero-detail-auli.jpg",
    heroAvifSrcset: "images/hero-detail-auli-600w.avif 600w, images/hero-detail-auli-1200w.avif 1200w, images/hero-detail-auli.avif 2400w",
    heroSrcset: "images/hero-detail-auli-600w.jpg 600w, images/hero-detail-auli-1200w.jpg 1200w, images/hero-detail-auli.jpg 2400w",
    heroAlt: "Snow-covered ski slopes of Auli with majestic Nanda Devi Himalayan peak in background",
    overview: "Auli is India's premier high-altitude ski resort nestled in the Chamoli district of Uttarakhand. Flanked by pristine coniferous and oak forests, Auli offers breathtaking 360-degree panoramic vistas of the Himalayan giants including Nanda Devi (India's second highest peak), Kamet, Mana Parvat, and Dunagiri.",
    attractions: [
      { name: "Auli Artificial Lake", desc: "One of the world's highest man-made lakes, created to feed snow guns for the ski slopes during early winter." },
      { name: "Joshimath-Auli Ropeway", desc: "A 4-kilometer long cable car journey offering sweeping views of the Alaknanda River gorge and snowy ridges." },
      { name: "Gorson Bugyal", desc: "An expansive alpine meadow situated 3 km beyond Auli, ideal for beginner day treks amidst alpine flora." },
      { name: "Chattrakund Lake", desc: "A tranquil small sweet-water lake hidden within dense oak and pine woods near Gorson Bugyal." }
    ],
    activities: [
      "Skiing and Snowboarding lessons under certified instructors (Jan - Mar)",
      "High-altitude cable car ride over pine valleys and oak forests",
      "Scenic high-altitude photography of Nanda Devi and Trishul peaks",
      "Day trekking to Gorson Bugyal and Chattrakund alpine lake"
    ],
    travelTips: "Winter temperatures can plunge below -8°C. Carry multi-layered thermal wear, polarized sunglasses, and snow boots. During peak snowfall, vehicles without snow chains may be restricted at Joshimath, requiring travelers to take the cable car up to Auli.",
    ecoTips: [
      "Keep the delicate alpine bugyals free of plastics, bottles, and snack wrappers.",
      "Hire local certified ski instructors and homestay hosts from Joshimath to support the mountain community.",
      "Stay strictly on marked trails to prevent soil erosion on delicate alpine slopes."
    ]
  },
  kedarnath: {
    name: "Kedarnath",
    region: "Rudraprayag District, Garhwal",
    category: "Spiritual & Pilgrimage, Trekking",
    altitude: "3,583 meters (11,755 ft)",
    bestTime: "May to June and September to October (temple opens on Akshaya Tritiya and closes after Diwali)",
    nearestStation: "Rishikesh Railway Station (approx. 215 km to Gaurikund base)",
    nearestAirport: "Jolly Grant Airport, Dehradun (approx. 235 km to Gaurikund)",
    heroImg: "images/hero-detail-kedarnath.jpg",
    heroAvifSrcset: "images/hero-detail-kedarnath-600w.avif 600w, images/hero-detail-kedarnath-1200w.avif 1200w, images/hero-detail-kedarnath.avif 2400w",
    heroSrcset: "images/hero-detail-kedarnath-600w.jpg 600w, images/hero-detail-kedarnath-1200w.jpg 1200w, images/hero-detail-kedarnath.jpg 2400w",
    heroAlt: "Ancient Kedarnath stone temple with towering snow-clad Himalayan mountain peaks behind",
    overview: "Kedarnath is one of the twelve sacred Jyotirlingas of Lord Shiva and the most revered shrine of the Chota Char Dham circuit. Built with large, heavy grey stone slabs, the ancient eighth-century temple stands resolutely at the foot of the snow-cloaked Kedarnath Mountain along the holy Mandakini River.",
    attractions: [
      { name: "Kedarnath Temple", desc: "The sanctum sanctorum dedicated to Lord Shiva, featuring an irregular conical Shiva Lingam carved from natural rock." },
      { name: "Bhairavnath Temple", desc: "Perched on a nearby ridge overlooking the valley; considered the guardian deity of the Kedarnath shrine." },
      { name: "Gandhi Sarovar (Chorabari Tal)", desc: "A pristine high-altitude glacial lake located 4 km north of the temple at the base of the Chorabari glacier." },
      { name: "Vasuki Tal", desc: "An emerald alpine lake situated at 4,135 meters surrounded by snow-covered peaks, accessed via a steep trek." }
    ],
    activities: [
      "Darshan and spiritual prayer ceremonies at Kedarnath Jyotirlinga",
      "16-kilometer mountain pilgrimage trek from Gaurikund base",
      "Morning Aarti witnessing golden sunrise illuminating the Kedarnath Peak",
      "High-altitude photography of the Mandakini river valley"
    ],
    travelTips: "Mandatory Char Dham registration is required prior to travel. Medical fitness screening is conducted at Gaurikund. Acclimatization is essential due to high altitude. Pack waterproof thermal jackets, sturdy trekking shoes, and carry a basic first-aid kit.",
    ecoTips: [
      "Uttarakhand strictly bans single-use plastics along the Char Dham trek route.",
      "Treat pack animals (mules/horses) with compassion and report animal mistreatment to authorities.",
      "Preserve the sanctity and cleanliness of the sacred Mandakini riverbanks."
    ]
  },
  chopta: {
    name: "Chopta",
    region: "Rudraprayag District, Garhwal",
    category: "Adventure, Trekking, Wildlife & Nature",
    altitude: "2,680 meters (8,790 ft)",
    bestTime: "April to June (pleasant weather, blooming rhododendrons) and October to December (clear mountain views)",
    nearestStation: "Haridwar / Rishikesh (approx. 220 km)",
    nearestAirport: "Jolly Grant Airport, Dehradun (approx. 225 km)",
    heroImg: "images/hero-detail-chopta.jpg",
    heroAvifSrcset: "images/hero-detail-chopta-600w.avif 600w, images/hero-detail-chopta-1200w.avif 1200w, images/hero-detail-chopta.avif 2400w",
    heroSrcset: "images/hero-detail-chopta-600w.jpg 600w, images/hero-detail-chopta-1200w.jpg 1200w, images/hero-detail-chopta.jpg 2400w",
    heroAlt: "Chopta lush green bugyal alpine meadow with scarlet rhododendrons and snowy Himalayan peaks",
    overview: "Affectionately called the 'Mini Switzerland of India', Chopta is an untouched hamlet nestled inside the Kedarnath Wildlife Sanctuary. Surrounded by dense deodar, pine, and rhododendron forests, it serves as the base for the rewarding trek to Tungnath—the highest Shiva temple in the world—and the Chandrashila summit.",
    attractions: [
      { name: "Tungnath Temple", desc: "The highest of the Panch Kedar temples, perched dramatically at an elevation of 3,680 meters." },
      { name: "Chandrashila Peak", desc: "Situated at 4,000 meters above sea level, offering a 360-degree panorama of Nanda Devi, Trishul, and Chaukhamba." },
      { name: "Deoria Tal", desc: "A serene lake famous for the crystal-clear reflection of the Chaukhamba peaks in its calm waters." },
      { name: "Kedarnath Wildlife Sanctuary", desc: "Home to the rare Himalayan musk deer, monal pheasant, leopard, and diverse alpine birds." }
    ],
    activities: [
      "Trekking to Tungnath Temple and Chandrashila Summit",
      "Camping under clear starlit Himalayan night skies",
      "Birdwatching for Himalayan Monal and cheer pheasants",
      "Photography of spring crimson rhododendron blossoms"
    ],
    travelTips: "Electricity in Chopta is limited and primarily solar-powered. Carry portable power banks, warm layers even in summer, and cash, as ATMs are unavailable in Chopta itself (last reliable ATM is in Ukhimath).",
    ecoTips: [
      "Pitch tents only in designated camping zones to preserve the fragile bugyal grassland.",
      "Avoid campfires on open alpine meadows; use camp stoves instead.",
      "Carry all food wrappers, energy bar foils, and bottles back to base towns."
    ]
  },
  "valley-of-flowers": {
    name: "Valley of Flowers",
    region: "Chamoli District, Garhwal",
    category: "Trekking, Wildlife & Nature",
    altitude: "3,352 to 3,658 meters (11,000 to 12,000 ft)",
    bestTime: "Mid-July to mid-September (valley opens only from June to October)",
    nearestStation: "Rishikesh Railway Station (approx. 273 km to Govindghat)",
    nearestAirport: "Jolly Grant Airport, Dehradun (approx. 290 km)",
    heroImg: "images/hero-detail-valley-of-flowers.jpg",
    heroAvifSrcset: "images/hero-detail-valley-of-flowers-600w.avif 600w, images/hero-detail-valley-of-flowers-1200w.avif 1200w, images/hero-detail-valley-of-flowers.avif 2400w",
    heroSrcset: "images/hero-detail-valley-of-flowers-600w.jpg 600w, images/hero-detail-valley-of-flowers-1200w.jpg 1200w, images/hero-detail-valley-of-flowers.jpg 2400w",
    heroAlt: "Valley of Flowers National Park carpeted with vibrant alpine wildflowers and snow peaks",
    overview: "A UNESCO World Heritage Site, the Valley of Flowers National Park is an extraordinary high-altitude Himalayan valley nestled in the Pushpawati river basin. Every monsoon, over 500 species of wild Himalayan flowers bloom into an explosion of color against dramatic glaciated peaks.",
    attractions: [
      { name: "Pushpawati River", desc: "The fast-flowing glacial torrent that carves through the heart of the floral valley." },
      { name: "Joan Margaret Legge Memorial", desc: "The historic grave of English botanist Joan Margaret Legge who studied the flora here in 1939." },
      { name: "Hemkund Sahib", desc: "A revered high-altitude Sikh pilgrimage shrine and glacial lake situated 6 km from Ghangaria base." },
      { name: "Bhyundar Valley", desc: "The scenic forested gorge leading up from Govindghat to the floral sanctuary." }
    ],
    activities: [
      "Botanical exploration of rare orchids, poppies, primulas, and anemones",
      "Day trek from Ghangaria base camp into the protected national park",
      "Spiritual trek to Hemkund Sahib high-altitude lake",
      "Macro and landscape nature photography"
    ],
    travelTips: "Overnight stays inside the national park are strictly prohibited by the Forest Department. All visitors must return to Ghangaria base camp by 5:00 PM. High-grip waterproof hiking boots and rain ponchos are essential during the monsoon season.",
    ecoTips: [
      "Strictly do not pluck, step on, or remove any wildflower or plant specimen.",
      "Carry zero non-biodegradable waste into the national park.",
      "Maintain quietness to avoid disturbing endangered wildlife like snow leopards and blue sheep."
    ]
  },
  haridwar: {
    name: "Haridwar",
    region: "Haridwar District, Lower Shivalik",
    category: "Spiritual & Pilgrimage",
    altitude: "314 meters (1,030 ft)",
    bestTime: "October to April (pleasant weather for temple visits and ghat exploration)",
    nearestStation: "Haridwar Junction (connected to major Indian cities)",
    nearestAirport: "Jolly Grant Airport, Dehradun (approx. 38 km)",
    heroImg: "images/hero-detail-haridwar.jpg",
    heroAvifSrcset: "images/hero-detail-haridwar-600w.avif 600w, images/hero-detail-haridwar-1200w.avif 1200w, images/hero-detail-haridwar.avif 2400w",
    heroSrcset: "images/hero-detail-haridwar-600w.jpg 600w, images/hero-detail-haridwar-1200w.jpg 1200w, images/hero-detail-haridwar.jpg 2400w",
    heroAlt: "Har Ki Pauri ghat in Haridwar illuminated during sacred evening Ganga Aarti with floating lamps",
    overview: "Haridwar, literally meaning 'Gateway to God', is one of the seven holiest places in Hinduism. It is here that the sacred River Ganga descends from the rugged Himalayas and enters the Indo-Gangetic plains. Haridwar is celebrated for its spiritual ghats, ancient temples, and the mesmerizing evening Ganga Aarti.",
    attractions: [
      { name: "Har Ki Pauri", desc: "The most sacred ghat built by King Vikramaditya, home to the footprint of Lord Vishnu embedded in a stone wall." },
      { name: "Mansa Devi Temple", desc: "Perched atop the Bilwa Parvat; devotees visit by foot or ropeway to tie holy threads for wish fulfillment." },
      { name: "Chandi Devi Temple", desc: "Located on Neel Parvat across the Ganga, commanding panoramic views of Haridwar town and river islands." },
      { name: "Maya Devi Temple", desc: "One of the Siddhapitha shrines where the heart and navel of Goddess Sati are believed to have fallen." }
    ],
    activities: [
      "Witnessing the spellbinding evening Ganga Aarti with thousands of floating diyas",
      "Holy dip in the clean currents of the Brahmakund at Har Ki Pauri",
      "Ropeway ride (Udan Khatola) to Mansa Devi and Chandi Devi hilltops",
      "Tasting heritage culinary dishes like kachoris and jalebis in the old town bazaars"
    ],
    travelTips: "Haridwar is fully vegetarian and alcohol-free by municipal law. The ghats can become crowded during religious festivals like Kumbh Mela and Somvati Amavasya; keep belongings secure.",
    ecoTips: [
      "Do not throw plastic wrappers, polythene bags, or clothes into the holy Ganga river.",
      "Use eco-friendly leaf and flower diyas without plastic or chemical paints.",
      "Respect sacred traditions and remove footwear before stepping onto the bathing ghats."
    ]
  },
  "jim-corbett": {
    name: "Jim Corbett National Park",
    region: "Nainital & Pauri Garhwal Districts, Kumaon",
    category: "Wildlife & Nature",
    altitude: "400 to 1,220 meters (1,312 to 4,000 ft)",
    bestTime: "November 15 to June 15 (Dhikala zone opens Nov 15; Jhirna open year-round)",
    nearestStation: "Ramnagar Railway Station (RMR, approx. 1-3 km)",
    nearestAirport: "Pantnagar Airport (approx. 80 km) / IGI Airport Delhi (approx. 260 km)",
    heroImg: "images/hero-detail-corbett.jpg",
    heroAvifSrcset: "images/hero-detail-corbett-600w.avif 600w, images/hero-detail-corbett-1200w.avif 1200w, images/hero-detail-corbett.avif 2400w",
    heroSrcset: "images/hero-detail-corbett-600w.jpg 600w, images/hero-detail-corbett-1200w.jpg 1200w, images/hero-detail-corbett.jpg 2400w",
    heroAlt: "Majestic Royal Bengal Tiger roaming freely through the Sal forest in Jim Corbett National Park",
    overview: "Jim Corbett National Park is India's pioneer national park and premier tiger reserve, located in the Shivalik foothills along the Ramganga River. Established in 1936 as Hailey National Park, it was the historic birthplace of Project Tiger in 1973.",
    attractions: [
      { name: "Dhikala Ecotourism Zone", desc: "The premier core zone overlooking Patli Dun valley, famed for wild elephants and tiger tracking." },
      { name: "Bijrani Zone", desc: "Picturesque mix of Sal forest and grasslands renowned for diverse birdwatching and wildlife safaris." },
      { name: "Corbett Waterfall", desc: "A tranquil 20-meter freshwater cascade surrounded by dense teak wood canopies near Kaladhungi." },
      { name: "Garjiya Devi Temple", desc: "A sacred Shakti shrine perched atop a huge rock amidst the foaming currents of the Kosi River." }
    ],
    activities: [
      "Open-top 4x4 registered Gypsy safaris across Bijrani, Jhirna, and Dhela zones",
      "Official government Canter safari expeditions through the core Dhikala zone",
      "Birdwatching to spot over 580 resident and migratory Himalayan avian species",
      "Visiting the historic Jim Corbett Heritage Museum at Kaladhungi"
    ],
    travelTips: "Book safari permits at least 30 to 45 days in advance through the official Uttarakhand Forest Department portal. Sightings are natural and never guaranteed. Carry government photo ID matching your safari permit.",
    ecoTips: [
      "Strictly remain inside your safari vehicle at all times inside the tiger reserve.",
      "Maintain complete silence and do not play music or use camera flash.",
      "Carry all plastic wrappers and water bottles out of the national park."
    ]
  }
};

// Aliases for alternate slug parameters
destinationCatalog["corbett"] = destinationCatalog["jim-corbett"];

function initReusableDetail() {
  const container = document.getElementById('dynamicDetailContainer');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get('id');

  // If a dedicated page exists for this destination, redirect smoothly
  if (rawId === 'nainital') { window.location.replace('nainital.html'); return; }
  if (rawId === 'mussoorie') { window.location.replace('mussoorie.html'); return; }
  if (rawId === 'rishikesh') { window.location.replace('rishikesh.html'); return; }
  if (rawId === 'corbett' || rawId === 'jim-corbett') { window.location.replace('jim-corbett.html'); return; }

  const destId = rawId || 'auli';
  const data = destinationCatalog[destId] || destinationCatalog['auli'];

  // Update document title for template page
  document.title = `${data.name} Travel Guide | Explore Uttarakhand`;

  // Populate hero
  const heroImg = document.getElementById('dynHeroImg');
  const heroSourceAvif = document.getElementById('dynHeroSourceAvif');
  const heroSourceJpg = document.getElementById('dynHeroSourceJpg');
  const heroTitle = document.getElementById('dynTitle');
  const heroRegion = document.getElementById('dynRegion');
  const heroCategory = document.getElementById('dynCategory');
  const heroBreadcrumb = document.getElementById('dynBreadcrumb');

  if (heroSourceAvif && data.heroAvifSrcset) {
    heroSourceAvif.srcset = data.heroAvifSrcset;
  }
  if (heroSourceJpg && data.heroSrcset) {
    heroSourceJpg.srcset = data.heroSrcset;
  }
  if (heroImg) {
    heroImg.src = data.heroImg;
    if (data.heroSrcset) {
      heroImg.srcset = data.heroSrcset;
      heroImg.sizes = "100vw";
    } else {
      heroImg.removeAttribute('srcset');
      heroImg.removeAttribute('sizes');
    }
    heroImg.alt = data.heroAlt;
    heroImg.width = 2400;
    heroImg.height = 1340;
  }
  if (heroTitle) heroTitle.textContent = data.name;
  if (heroRegion) heroRegion.textContent = data.region;
  if (heroCategory) heroCategory.textContent = data.category;
  if (heroBreadcrumb) heroBreadcrumb.textContent = data.name;

  // Overview
  const overviewEl = document.getElementById('dynOverview');
  if (overviewEl) overviewEl.textContent = data.overview;

  // Fast Facts
  const altitudeEl = document.getElementById('dynAltitude');
  const bestTimeEl = document.getElementById('dynBestTime');
  const stationEl = document.getElementById('dynStation');
  const airportEl = document.getElementById('dynAirport');

  if (altitudeEl) altitudeEl.textContent = data.altitude;
  if (bestTimeEl) bestTimeEl.textContent = data.bestTime;
  if (stationEl) stationEl.textContent = data.nearestStation;
  if (airportEl) airportEl.textContent = data.nearestAirport;

  // Attractions
  const attractionsList = document.getElementById('dynAttractions');
  if (attractionsList) {
    attractionsList.innerHTML = data.attractions.map(attr => `
      <div class="attraction-card">
        <h3>${attr.name}</h3>
        <p>${attr.desc}</p>
      </div>
    `).join('');
  }

  // Activities
  const activitiesList = document.getElementById('dynActivities');
  if (activitiesList) {
    activitiesList.innerHTML = data.activities.map(act => `
      <li class="activity-item">
        <svg class="activity-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${act}</span>
      </li>
    `).join('');
  }

  // Travel Tips
  const tipsEl = document.getElementById('dynTips');
  if (tipsEl) tipsEl.textContent = data.travelTips;

  // Eco Tips
  const ecoList = document.getElementById('dynEcoTips');
  if (ecoList) {
    ecoList.innerHTML = data.ecoTips.map(tip => `<li>${tip}</li>`).join('');
  }
}

/**
 * 5. Frontend Contact Form Validation (about.html)
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successAlert = document.getElementById('formSuccessAlert');

  // Input elements
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const interestSelect = document.getElementById('contactInterest');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');

  function validateField(input, condition, errorMsgId, message) {
    const errorEl = document.getElementById(errorMsgId);
    if (!condition) {
      input.classList.add('input-error');
      if (errorEl) errorEl.textContent = message;
      return false;
    } else {
      input.classList.remove('input-error');
      if (errorEl) errorEl.textContent = '';
      return true;
    }
  }

  // Email format regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(
      nameInput,
      nameInput.value.trim().length >= 2,
      'nameError',
      'Please enter your full name (minimum 2 characters).'
    );

    const isEmailValid = validateField(
      emailInput,
      emailRegex.test(emailInput.value.trim()),
      'emailError',
      'Please enter a valid email address (e.g., student@iiitn.ac.in).'
    );

    const isInterestValid = validateField(
      interestSelect,
      interestSelect.value !== '',
      'interestError',
      'Please select your travel interest category.'
    );

    const isSubjectValid = validateField(
      subjectInput,
      subjectInput.value.trim().length >= 3,
      'subjectError',
      'Please provide an inquiry subject (minimum 3 characters).'
    );

    const isMessageValid = validateField(
      messageInput,
      messageInput.value.trim().length >= 15,
      'messageError',
      'Please write your message or travel inquiry (minimum 15 characters).'
    );

    if (isNameValid && isEmailValid && isInterestValid && isSubjectValid && isMessageValid) {
      if (successAlert) {
        successAlert.classList.add('show-success');
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    }
  });

  // Real-time error clearance on user typing
  [nameInput, emailInput, interestSelect, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('input-error');
      const errEl = input.parentElement.querySelector('.error-msg');
      if (errEl) errEl.textContent = '';
    });
  });
}
