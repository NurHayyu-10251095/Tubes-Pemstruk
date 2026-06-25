const destinations = [
  {
    id: 1,
    name: "Pulau Derawan",
    city: "Berau",
    category: "Bahari",
    description: {
      id: "Surga bahari dengan kejernihan air yang memukau. Derawan dikenal sebagai habitat penyu hijau dan penyu sisik, serta titik selam kelas dunia dengan keanekaragaman biota laut yang luar biasa.",
      en: "A marine paradise with breathtaking water clarity. Derawan is known as the habitat of green and hawksbill turtles, as well as a world-class diving spot with extraordinary marine biodiversity."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXenegGNUHCFSBmga6ma2fyHIn9Oy1aQ_GrPqtDL-LYQ&s=10",
    lat: 2.2833,
    lng: 118.2333,
    ticket: {
      id: "Rp 25.000",
      en: "IDR 25,000"
    },
    hours: {
      id: "06.00 – 18.00 WITA",
      en: "06:00 – 18:00 WITA"
    },
    website: "https://www.indonesia.travel/gb/en/destinations/kalimantan/derawan-islands",
  },
  {
    id: 2,
    name: "Hutan Lindung Sungai Wain",
    city: "Balikpapan",
    category: "Margasatwa",
    description: {
      id: "Kawasan konservasi dengan hutan tropis primer seluas 10.025 ha. Tempat rehabilitasi orang utan Kalimantan dan berbagai satwa endemik lainnya.",
      en: "A conservation area with 10,025 ha of primary tropical forest. Home to Bornean orangutan rehabilitation and various other endemic wildlife."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtglx9cT-Dr5lnzfvhdhC-xkTJW410Ug8ig42Zq39Hw&s=10",
    lat: -1.1556,
    lng: 116.8372,
    ticket: {
      id: "Rp 15.000",
      en: "IDR 15,000"
    },
    hours: {
      id: "08.00 – 16.00 WITA",
      en: "08:00 – 16:00 WITA"
    },
    website: "https://balikpapan.go.id",
  },
  {
    id: 3,
    name: "Danau Labuan Cermin",
    city: "Berau",
    category: "Alam",
    description: {
      id: "Danau dua lapisan yang memikat: permukaan berair tawar, dasar berair asin. Kejernihan airnya menjadi cermin sempurna yang memantulkan kanopi hutan tropis di sekelilingnya.",
      en: "A captivating two-layered lake: freshwater on the surface, saltwater at the bottom. Its crystal clarity acts as a perfect mirror reflecting the surrounding tropical forest canopy."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEyKg4U0n9tsnajiMgWJm396s7lNcj541_XCMndCpnA&s=10",
    lat: 2.4167,
    lng: 118.5333,
    ticket: {
      id: "Rp 20.000",
      en: "IDR 20,000"
    },
    hours: {
      id: "07.00 – 17.00 WITA",
      en: "07:00 – 17:00 WITA"
    },
    website: "https://www.indonesia.travel/gb/en/destinations/kalimantan/berau",
  },
  {
    id: 4,
    name: "Pantai Manggar Segara Sari",
    city: "Balikpapan",
    category: "Bahari",
    description: {
      id: "Pantai berpasir putih kecokelatan dengan ombak tenang, diapit perkebunan kelapa. Spot favorit untuk piknik keluarga, bermain layang-layang, dan menikmati senja di pesisir Selat Makassar.",
      en: "A brownish-white sandy beach with calm waves, flanked by coconut plantations. A favorite spot for family picnics, kite flying, and enjoying sunsets along the Makassar Strait."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-chu5BpyG6mDskz4HVe4bdE5xRf7qSUmNg6-eEa6VEw&s=10",
    lat: -1.3025,
    lng: 116.9694,
    ticket: {
      id: "Rp 10.000",
      en: "IDR 10,000"
    },
    hours: {
      id: "06.00 – 18.00 WITA",
      en: "06:00 – 18:00 WITA"
    },
    website: "https://balikpapan.go.id",
  },
  {
    id: 5,
    name: "Bukit Bangkirai",
    city: "Balikpapan",
    category: "Ekowisata",
    description: {
      id: "Destinasi ekowisata di tengah hutan dipterocarp dataran rendah. Nikmati sensasi canopy bridge setinggi 30 meter yang menghubungkan pucuk pohon-pohon bangkirai berusia ratusan tahun.",
      en: "An ecotourism destination in the heart of lowland dipterocarp forest. Experience the thrill of a 30-meter-high canopy bridge connecting the crowns of centuries-old bangkirai trees."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkJxnnFtC9s5VS-x_V29ei6eMO--Cxoob-AHMANB_rA&s=10",
    lat: -1.1667,
    lng: 117.1167,
    ticket: {
      id: "Rp 35.000",
      en: "IDR 35,000"
    },
    hours: {
      id: "08.00 – 17.00 WITA",
      en: "08:00 – 17:00 WITA"
    },
    website: "https://bukitbangkirai.com",
  },
  {
    id: 6,
    name: "Kepulauan Maratua",
    city: "Berau",
    category: "Bahari",
    description: {
      id: "Atol berbentuk tapal kuda dengan laguna biru kehijauan yang tenang. Maratua adalah surga selam dengan visibilitas hingga 30 meter, dihuni hiu karang, barracuda, dan kawanan penyu.",
      en: "A horseshoe-shaped atoll with calm blue-green lagoons. Maratua is a diving paradise with visibility up to 30 meters, home to reef sharks, barracuda, and schools of sea turtles."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMa2jFvdbaJa0wwwP7RqJKvabtgkrC_QYOl29hyL1DQ&s=10",
    lat: 2.1833,
    lng: 118.6167,
    ticket: {
      id: "Rp 30.000",
      en: "IDR 30,000"
    },
    hours: {
      id: "Sepanjang hari",
      en: "All day"
    },
    website: "https://www.indonesia.travel/gb/en/destinations/kalimantan/maratua",
  },
  {
    id: 7,
    name: "Kebun Raya Unmul Samarinda",
    city: "Samarinda",
    category: "Ekowisata",
    description: {
      id: "Kebun raya seluas 300 ha di jantung kota Samarinda. Koleksi ribuan spesies flora Kalimantan, danau buatan, dan pusat penelitian botani yang juga menjadi paru-paru kota.",
      en: "A 300-hectare botanical garden in the heart of Samarinda. Home to thousands of Bornean plant species, an artificial lake, and a botanical research center that serves as the city's green lung."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPcaPQK9v-95iFPfPZ8GVQXiAVfo-cpgC_rb5PmDmaw&s=10",
    lat: -0.4689,
    lng: 117.1114,
    ticket: {
      id: "Rp 10.000",
      en: "IDR 10,000"
    },
    hours: {
      id: "07.00 – 17.00 WITA",
      en: "07:00 – 17:00 WITA"
    },
    website: "https://samarinda.go.id",
  },
  {
    id: 8,
    name: "Museum Mulawarman",
    city: "Tenggarong",
    category: "Budaya",
    description: {
      id: "Bekas istana Kesultanan Kutai Kartanegara yang kini menjadi museum. Menyimpan koleksi artefak kerajaan tertua di Nusantara, termasuk prasasti Yupa berusia 1.500 tahun.",
      en: "The former palace of the Kutai Kartanegara Sultanate, now transformed into a museum. It houses artifacts from the oldest kingdom in the archipelago, including 1,500-year-old Yupa stone inscriptions."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4bTDmHJEzwK0rWuj43WZjFzrQB7uZOsqWWQDJEssOA&s=10",
    lat: -0.4461,
    lng: 117.1319,
    ticket: {
      id: "Rp 15.000",
      en: "IDR 15,000"
    },
    hours: {
      id: "08.00 – 16.00 WITA",
      en: "08:00 – 16:00 WITA"
    },
    website: "https://kukar.go.id",
  },
  {
    id: 9,
    name: "Sungai Mahakam",
    city: "Samarinda",
    category: "Budaya",
    description: {
      id: "Arteri kehidupan Kalimantan Timur yang membelah Samarinda. Jelajahi kampung-kampung Dayak, pasar terapung, dan habitat pesut Mahakam—lumba-lumba air tawar yang langka dan endemik.",
      en: "The lifeline of East Kalimantan that cuts through Samarinda. Explore Dayak villages, floating markets, and the habitat of the Mahakam dolphin — a rare and endemic freshwater dolphin."
    },
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJp_5hE5JW0AyobAVTUwxIn1KF-SIN4r6t0eHdgNKyzA&s=10",
    lat: -0.5022,
    lng: 117.1536,
    ticket: {
      id: "Gratis",
      en: "Free"
    },
    hours: {
      id: "Sepanjang hari",
      en: "All day"
    },
    website: "https://samarinda.go.id",
  },
  {
    id: 10,
    name: "Air Terjun Tanah Merah",
    city: "Samarinda",
    category: "Alam",
    description: {
      id: "Air terjun bertingkat di sela hutan hijau sekitar Samarinda. Dinamai dari tanah liat merah di sekitarnya yang menciptakan kontras warna dramatis dengan debit air yang deras.",
      en: "A tiered waterfall nestled within the green forests surrounding Samarinda. Named after the red clay soil that creates a dramatic color contrast against its rushing waters."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREr9yvP4O6O_pP9hlgnDM2tcryDt3BXbI_T-nT7meJYw&s=10",
    lat: -0.5833,
    lng: 117.2167,
    ticket: {
      id: "Rp 10.000",
      en: "IDR 10,000"
    },
    hours: {
      id: "08.00 – 17.00 WITA",
      en: "08:00 – 17:00 WITA"
    },
    website: "https://samarinda.go.id",
  },
  {
    id: 11,
    name: "Gunung Beratus",
    city: "Kutai Barat",
    category: "Alam",
    description: {
      id: "Puncak tertinggi di Kalimantan Timur yang menawarkan trekking menantang menembus hutan primer. Di puncak, hamparan awan dan lanskap Kalimantan yang tak terbatas menjadi hadiah perjalanan.",
      en: "The highest peak in East Kalimantan, offering a challenging trek through primary forest. At the summit, a sea of clouds and the boundless Bornean landscape await as the ultimate reward."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcr6MKtArWOti2kpESeFkoBuw4Z46UgD0UChEjXeRdgg&s=10",
    lat: -0.6333,
    lng: 115.9167,
    ticket: {
      id: "Rp 20.000",
      en: "IDR 20,000"
    },
    hours: {
      id: "24 jam (pendakian terencana)",
      en: "24 hours (planned ascent only)"
    },
    website: "https://kutaibarat.go.id",
  },
  {
    id: 12,
    name: "Taman Nasional Kutai",
    city: "Kutai Timur",
    category: "Margasatwa",
    description: {
      id: "Kawasan konservasi seluas 198.629 ha yang menjadi benteng terakhir hutan hujan tropis Borneo. Rumah bagi orang utan, bekantan, dan lebih dari 300 spesies burung.",
      en: "A 198,629-hectare conservation area that stands as the last stronghold of Borneo's tropical rainforest. Home to orangutans, proboscis monkeys, and over 300 bird species."
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkkqtDFJjt9LWKVYJaU36PZq7oXZTItUnv9d6wAF59A&s=10",
    lat: 0.55,
    lng: 117.55,
    ticket: {
      id: "Rp 25.000",
      en: "IDR 25,000"
    },
    hours: {
      id: "08.00 – 16.00 WITA",
      en: "08:00 – 16:00 WITA"
    },
    website: "https://tnkutai.menlhk.go.id",
  },
];

const cities = ["Semua", "Balikpapan", "Samarinda", "Berau", "Tenggarong", "Kutai Barat", "Kutai Timur"];

const categories = ["Semua", "Bahari", "Alam", "Margasatwa", "Ekowisata", "Budaya"];

const translations = {
  id: {
    navDest: "Destinasi",
    navAbout: "Tentang",
    heroEyebrow: "Provinsi Kalimantan Timur",
    heroTitle: "Temukan Sisi Borneo yang Jarang Terlihat",
    heroSubtitle:
      "KaltimTrip merangkum destinasi terbaik di Kalimantan Timur — dari laut Derawan sampai rimba Bukit Bangkirai.",
    heroBtn: "Jelajahi Destinasi ↓",
    destTitle: "Destinasi Unggulan",
    destSubtitle:
      "Pilih destinasi yang sesuai dengan semangat petualanganmu — dari belantara hutan hingga keindahan bawah laut.",
    filterCity: "Filter Kota:",
    filterCat: "Kategori:",
    ticketLabel: "Tiket Masuk",
    hoursLabel: "Jam Operasional",
    websiteLabel: "Kunjungi Website",
    footerTagline:
      "Sebagai platform wisatawan, aku merekomendasikan tempat-tempat terbaik untuk menjelajahi destinasi di Kalimantan Timur.",
    footerContact: "Kontak Kami",
    footerConnect: "Koneksi",
    footerEmail: "Email",
    footerPhone: "Tlp",
    footerWhatsapp: "WA",
    footerCopyright: "© 2026 Hak Milik Mahasiswa Jurusan Sistem Informasi ITK. All rights reserved.",
    noResult: "Tidak ada destinasi yang ditemukan.",
    allCities: "Semua",
    allCats: "Semua",
  },
  en: {
    navDest: "Destinations",
    navAbout: "About",
    heroEyebrow: "East Kalimantan Province",
    heroTitle: "Discover the Side of Borneo Rarely Seen",
    heroSubtitle:
      "KaltimTrip curates the best destinations in East Kalimantan — from Derawan's seas to the jungles of Bukit Bangkirai.",
    heroBtn: "Explore Destinations ↓",
    destTitle: "Featured Destinations",
    destSubtitle:
      "Choose a destination that matches your adventurous spirit — from deep wilderness to spectacular underwater worlds.",
    filterCity: "Filter City:",
    filterCat: "Category:",
    hoursLabel: "Opening Hours",
    websiteLabel: "Visit Website",
    footerTagline:
      "As a tourism platform, we recommend the best places to explore destinations across East Kalimantan.",
    footerContact: "Contact Us",
    footerConnect: "Connect",
    footerEmail: "Email",
    footerPhone: "Phone",
    footerWhatsapp: "WA",
    footerCopyright: "© 2026 Property of Information Systems Students ITK. All rights reserved.",
    noResult: "No destinations found.",
    allCities: "All",
    allCats: "All",
  },
};
