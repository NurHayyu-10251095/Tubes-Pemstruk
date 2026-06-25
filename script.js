/* ============================================================
   KalimTrip — script.js
   ============================================================ */

let currentLang = "id";
let activeCity = "Semua";
let activeCat = "Semua";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initLanguage();
  applyTranslations();
  initFilters();
  renderDestinations();
  initScrollReveal();
});

/* ============================================================
   NAVBAR SCROLL
============================================================ */

function initNavbar() {
  const navbar = document.getElementById("navbar");

  function handleScroll() {
    navbar.classList.toggle("solid", window.scrollY > 60);
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });
}

/* ============================================================
   LANGUAGE
============================================================ */

function initLanguage() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const lang = btn.dataset.lang;

      if (lang === currentLang) return;

      currentLang = lang;

      document.querySelectorAll(".lang-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.lang === lang);
      });

      applyTranslations();
      initFilters();
      renderDestinations();
    });
  });
}

function applyTranslations() {
  const t = translations[currentLang];

  // Text biasa
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Text yang mengandung HTML
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;

    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
}

  /* Text yang mengandung HTML */
  document.querySelectorAll("[data-i18n-html]").forEach(el => {

    const key = el.dataset.i18nHtml;

    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }

  });


/* ============================================================
   FILTERS
============================================================ */

function initFilters() {

  if (
    typeof cities === "undefined" ||
    typeof categories === "undefined"
  ) return;

  const t = translations[currentLang];

  /* CITY */
  const cityContainer = document.getElementById("city-pills");

  if (cityContainer) {

    cityContainer.innerHTML = "";

    cities.forEach(city => {

      const label =
        city === "Semua"
          ? t.allCities
          : city;

      const btn = document.createElement("button");

      btn.className =
        "pill" +
        (city === activeCity ? " active" : "");

      btn.textContent = label;
      btn.dataset.city = city;

      btn.addEventListener("click", () => {

        activeCity = city;

        cityContainer
          .querySelectorAll(".pill")
          .forEach(p => {
            p.classList.toggle(
              "active",
              p.dataset.city === city
            );
          });

        renderDestinations();
      });

      cityContainer.appendChild(btn);
    });
  }

  /* CATEGORY */
  const catContainer = document.getElementById("cat-pills");

  if (catContainer) {

    catContainer.innerHTML = "";

    categories.forEach(cat => {

      const label =
        cat === "Semua"
          ? t.allCats
          : cat;

      const btn = document.createElement("button");

      btn.className =
        "pill" +
        (cat === activeCat ? " active" : "");

      btn.textContent = label;
      btn.dataset.cat = cat;

      btn.addEventListener("click", () => {

        activeCat = cat;

        catContainer
          .querySelectorAll(".pill")
          .forEach(p => {
            p.classList.toggle(
              "active",
              p.dataset.cat === cat
            );
          });

        renderDestinations();
      });

      catContainer.appendChild(btn);
    });
  }
}

/* ============================================================
   DESTINATIONS
============================================================ */

function renderDestinations() {
  const t = translations[currentLang];
  const grid = document.getElementById("dest-grid");

  if (!grid) return;

  const categoryEN = {
    Bahari: "Marine",
    Alam: "Nature",
    Margasatwa: "Wildlife",
    Ekowisata: "Ecotourism",
    Budaya: "Culture"
  };

  const filtered = destinations.filter(dest => {
    const cityMatch =
      activeCity === "Semua" ||
      dest.city === activeCity;

    const catMatch =
      activeCat === "Semua" ||
      dest.category === activeCat;

    return cityMatch && catMatch;
  });

  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="dest-empty" data-reveal>
        ${t.noResult}
      </div>
    `;
    initScrollReveal();
    return;
  }

  filtered.forEach(dest => {

    const category =
      currentLang === "en"
        ? (categoryEN[dest.category] || dest.category)
        : dest.category;

    const card = document.createElement("div");

    card.className = "dest-card";
    card.setAttribute("data-reveal", "");

    card.innerHTML = `
      <div class="dest-img-wrap">
        <img
          src="${dest.image}"
          alt="${dest.name}"
          loading="lazy"
        >
        <span class="dest-cat-badge">
          ${category}
        </span>
      </div>

      <div class="dest-body">

        <div class="dest-city">
          📍 ${dest.city}
        </div>

        <h3>${dest.name}</h3>

        <p>${dest.description[currentLang]}</p>

        <div class="dest-meta">

          <div class="dest-meta-row">
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z"/>
            </svg>

            <span>
              <strong>${t.ticketLabel}:</strong>
              ${dest.ticket[currentLang]}
            </span>
          </div>

          <div class="dest-meta-row">
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>

            <span>
              <strong>${t.hoursLabel}:</strong>
              ${dest.hours[currentLang]}
            </span>
          </div>

        </div>

        <a
          class="dest-link"
          href="${dest.website}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${t.websiteLabel}

          <svg xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>

      </div>
    `;

    grid.appendChild(card);
  });

  setTimeout(initScrollReveal, 50);
}

/* ============================================================
   SCROLL REVEAL
============================================================ */

function initScrollReveal() {

  const elements =
    document.querySelectorAll(
      "[data-reveal]:not(.is-visible)"
    );

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "is-visible"
          );

          observer.unobserve(entry.target);
        }
      });

    },
    {
      threshold: 0.12,
    }
  );

  elements.forEach(el => observer.observe(el));
}
