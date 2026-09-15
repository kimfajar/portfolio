/* ============================
   DATA
============================ */
const projects = [
  {n:"01",img:"images/IMG-20251024-WA0012.jpg",imgAlt:"WMS Dashboard",title:"Warehouse Management System",year:"2026",status:"In progress",role:"Ketua kelompok / Data Master module",tech:"React, TypeScript, Vite, Tailwind CSS",story:"Saya bikin sistem stock opname & operasional gudang buat brand Fotosnaps dan Kripik Bujangan, selama Kerja Praktik di Kantor Jawara.",problem:"Pencatatan stok dan operasional gudang masih terpisah-pisah, perlu disatukan dalam satu sistem.",process:"Mulai dari perencanaan, setup, bikin fitur, testing, UAT, sampai dokumentasi bareng tim.",result:"Sistem WMS terintegrasi untuk mendukung pengelolaan inventory, operasional gudang, dan stock opname.",lesson:"Software yang bagus itu yang bener-bener jawab kebutuhan penggunanya, bukan cuma jalan doang."},
  {n:"02",img:"images/IMG-20251210-WA0011.jpg",imgAlt:"PANCARONA App",title:"PANCARONA",year:"2025",status:"Lolos Internal Selection PKM-KI",role:"Anggota tim",tech:"Hybrid Recommender System, MCDM Nudge",story:"Konsep mobile career navigation buat bantu mahasiswa nentuin arah karier.",problem:"Banyak mahasiswa masih bingung soal arah karier.",process:"Nyusun masalah, metode, dan target yang jelas buat proposal PKM-KI.",result:"Lolos Internal Selection.",lesson:"Bikin ide itu beda sama bikin proyek — butuh masalah yang jelas dan metode yang kuat."},
  {n:"03",img:"images/IMG-20260213-WA0037.jpg",imgAlt:"DailyUse App",title:"DailyUse",year:"2024",status:"Selesai",role:"Developer",tech:"React, Tailwind, Laravel, MySQL, Midtrans API",story:"Sistem toko pakaian yang saya bikin, lengkap sama integrasi pembayaran.",problem:"Pengguna butuh alur belanja dari melihat katalog hingga checkout pembayaran yang terstruktur.",process:"Membangun frontend dengan React dan Tailwind, backend dengan Laravel, serta integrasi Emsifa, RajaOngkir, dan Midtrans.",result:"Prototype e-commerce dengan alur belanja dan proses pembayaran yang lengkap.",lesson:"Frontend, backend, database, API, dan payment system harus bisa bekerja sebagai satu kesatuan dengan alur yang masuk akal."},
  {n:"04",img:"images/IMG-20260302-WA0002.jpg",imgAlt:"Moodify App",title:"Moodify",year:"2025",status:"Selesai",role:"Anggota tim",tech:"React, Frontend Modern",story:"Proyek yang saya kerjain bareng tim, lengkap sama laporan manajemen proyek (EVM, S-curve, CPM/RACI).",problem:"Bagaimana sebuah aplikasi dapat membantu pengguna memahami mood mereka melalui interaksi digital yang ringan.",process:"Pendekatan Waterfall dari requirement, analisis, desain, hingga implementasi berfokus pada visualisasi mood.",result:"Web application sederhana dan personal untuk pencatatan dan visualisasi mood.",lesson:"Aplikasi yang baik bukan yang punya fitur sebanyak mungkin, tapi yang bisa menyajikan informasi relevan secara sederhana."},
  {n:"05",img:"images/dji_mimo_20250727_015754_0_1753556473683_photo.jpg",imgAlt:"Dashboard Wisatawan",title:"Analisis Statistik Wisatawan Nusantara 2024",year:"2024",status:"Selesai",role:"Developer",tech:"Python, Streamlit",story:"Analisis data BPS soal wisatawan nusantara yang saya kerjain.",problem:"Data statistik jumlah besar sulit dipahami jika hanya disajikan dalam bentuk tabel.",process:"Memproses data BPS lalu menemukan pola dan memvisualisasikan hasilnya secara interaktif menggunakan Streamlit.",result:"Dashboard interaktif yang membantu eksplorasi dan pemahaman informasi perjalanan wisatawan nusantara.",lesson:"Data mentah tidak otomatis menjadi informasi. Butuh proses cleaning, analisis, dan visualisasi untuk menerjemahkannya jadi cerita."},
  {n:"06",img:"images/dji_mimo_20260210_101426_0_1770693811731_photo.jpg",imgAlt:"WeatherAUS ML",title:"Prediksi Cuaca — WeatherAUS",year:"2024/2025",status:"Selesai",role:"Developer",tech:"Machine Learning, Python",story:"Saya bikin model prediksi pakai dataset WeatherAUS.",problem:"Cuaca merupakan kondisi dinamis yang dipengaruhi banyak faktor, menuntut prediksi dari data historis.",process:"Membagi dataset menjadi 70% train, 15% val, 15% test, lalu menggunakan KNN dengan K=21.",result:"Model prediksi dengan performa terbaik pada akurasi sekitar 85,32%.",lesson:"Model dengan akurasi tinggi belum tentu sempurna. Precision dan recall juga penting untuk memahami konteks masalah."},
  {n:"07",img:"images/dji_mimo_20260331_154046_0_1774996259541_photo.jpg",imgAlt:"Academic Projects",title:"Academic & Multimedia Projects",year:"2024 — 2026",status:"Beragam",role:"Beragam",tech:"Text Mining, Sentiment Analysis, Java Swing, Android",story:"Ada Text Mining (IndoSUM), analisis sentimen tweet KAI, manuskrip Rekayasa Fitur, aplikasi kriptografi Java Swing, sampai aplikasi Android.",problem:"Tidak semua project harus berbentuk sistem atau aplikasi besar.",process:"Mengeksplorasi cara penyampaian informasi lewat multimedia, desain, presentasi, pengolahan data, hingga materi visual.",result:"Kumpulan archive dari tugas akademik hingga desain interface kecil di sepanjang perjalanan kuliah.",lesson:"Kemampuan berkembang bukan cuma dari satu project besar, tetapi dari banyak project kecil yang dikerjakan konsisten."},
];

const research = {
  melo:{eyebrow:"THESIS / SKRIPSI RESEARCH",title:"MELO-SENSE",meta:"Edge AI · Smart Glove",question:"Bisa nggak sih kematangan semangka dideteksi tanpa harus dibelah, pakai alat yang dipakai di tangan?",problem:"Cara ngecek kematangan semangka yang biasa dipakai masih manual dan hasilnya nggak konsisten.",idea:"Smart glove berbasis Edge AI buat deteksi kematangan buah.",experiment:"Rancangan penelitian smart glove menggunakan analisis suara (MFCC dan 1D-CNN) dari semangka.",result:"Proposal dan rancangan sistem untuk penelitian smart glove berbasis Edge AI dan analisis karakteristik suara semangka.",lesson:"Ide yang berharga harus bisa diterjemahkan menjadi metode penelitian yang dapat diuji."},
  helmet:{eyebrow:"RESEARCH PROJECT",title:"Helmet Classification",meta:"YOLO + HOG + SVM",question:"Gimana caranya mengklasifikasikan pemakaian helm secara otomatis dari gambar?",problem:"Awalnya salah — model dilatih pakai crop kepala, tapi pas inferensi malah pakai bounding box seluruh badan.",idea:"Gabungan deteksi objek (YOLO) sama ekstraksi fitur HOG dan klasifikasi SVM.",experiment:"Mengeksplorasi tahapan machine learning berbasis gambar dari dataset, preprocessing, training hingga interpretasi hasil.",result:"Model/prototype klasifikasi gambar untuk membedakan kondisi penggunaan helm.",lesson:"Machine learning bukan hanya data tabular, tetapi juga meluas ke pemrosesan dan pengolahan data visual."},
  pancarona:{eyebrow:"PKM-KI",title:"PANCARONA",meta:"Hybrid Recommender + MCDM Nudge",question:"Gimana caranya bantu mahasiswa lebih terarah nentuin karier?",problem:"Banyak mahasiswa masih bingung soal arah karier.",idea:"Aplikasi mobile career navigation dengan sistem rekomendasi hybrid dan nudge berbasis MCDM.",experiment:"Nyusun proposal dan metodologi buat PKM-KI.",result:"Lolos Internal Selection.",lesson:"Sebuah ide butuh masalah yang jelas, metode yang bisa dipertanggungjawabkan, dan target yang terukur."}
};

const achievements = [
  {id:"001",cat:"SD",img:"images/dji_mimo_20260603_212132_0_1780497126570_photo.jpg",imgAlt:"Piagam Juara 1 Kelas",title:"Juara 1 Kelas",year:"2017",desc:"Dari sering dapat juara 3, akhirnya saya naik jadi juara 1 di kelas 6. Pencapaian ini terasa seperti bukti awal bahwa hasil bisa berubah ketika usaha ditingkatkan."},
  {id:"002",cat:"MTs",img:"images/dji_mimo_20260911_152526_0_1789148532402_photo.jpg",imgAlt:"Piagam LCC IPA",title:"LCC IPA — Juara 3",year:"2020",desc:"Kompetisi cerdas cermat IPA. Bukan hanya tentang mengingat materi, tetapi juga tentang berpikir cepat dan tetap tenang saat menjawab di bawah tekanan."},
  {id:"003",cat:"MTs",img:"images/1000093325 (1).jpeg",imgAlt:"Piagam Lomba Kimia",title:"Lomba Kimia — Juara 2",year:"2020",desc:"Kompetisi ini memperkuat ketertarikan terhadap problem solving dan ilmu eksakta yang terus muncul di perjalanan akademik selanjutnya."},
  {id:"004",cat:"SMA",img:"images/IMG-20241103-WA0007.jpg",imgAlt:"Piagam KSM Fisika",title:"KSM Fisika — Juara 3 Harapan",year:"2023",desc:"Pengalaman penting tentang bagaimana menghadapi kompetisi dengan level yang lebih tinggi, bukan hanya sekadar menang."},
];

const memoryCaptions = [
  "2022 · HIGH SCHOOL — \"The people who were there.\"",
  "2023 · UNIKOM — \"A new chapter, a new place.\"",
  "2024 · TEAMWORK — \"One ordinary day.\"",
  "2025 · RESEARCH — \"Late nights, small progress.\"",
  "2026 · KANTOR JAWARA — \"Learning how systems meet the real world.\"",
  "— · RUNNING — \"Some progress can't be measured by grades.\""
];

/* ============================
   LOADER
============================ */
const loadItems = ["MEMORIES","PROJECTS","ACHIEVEMENTS","EXPERIENCE","FAILURES","STILL LEARNING"];
const loadLinesEl = document.getElementById('load-lines');
loadItems.forEach(t => {
  const row = document.createElement('div');
  row.className = 'load-row';
  row.innerHTML = `<span>${t}</span><span class="pct">100%</span>`;
  loadLinesEl.appendChild(row);
});
const rows = [...document.querySelectorAll('.load-row')];
let loadIdx = 0;
function step() {
  if (loadIdx < rows.length) {
    rows[loadIdx].classList.add('done');
    loadIdx++;
    setTimeout(step, 200);
  } else {
    document.getElementById('welcome').classList.add('show');
    setTimeout(() => document.getElementById('loader').classList.add('hide'), 900);
  }
}
setTimeout(step, 400);
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.getElementById('loader').classList.add('hide');
}

/* ============================
   NAV
============================ */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

document.getElementById('hamburger').onclick = () =>
  document.getElementById('mobile-menu').classList.add('open');
document.getElementById('close-menu').onclick = () =>
  document.getElementById('mobile-menu').classList.remove('open');
document.querySelectorAll('#mobile-menu a').forEach(a =>
  a.onclick = () => document.getElementById('mobile-menu').classList.remove('open')
);

/* chapter progress + active nav */
const chapters = [...document.querySelectorAll('[data-chapter]')];
const navA = [...document.querySelectorAll('#navlinks a')];
const progressLabel = document.getElementById('progress-label');
const chObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const num = e.target.dataset.chapter, label = e.target.dataset.label;
      progressLabel.textContent = num + ' / 12';
      progressLabel.nextElementSibling.textContent = label;
      navA.forEach(a => a.classList.toggle('active', a.dataset.sec === e.target.id));
    }
  });
}, { threshold: 0.35 });
chapters.forEach(c => chObserver.observe(c));

/* ============================
   SCROLL REVEAL — smooth stagger
============================ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // Find position within siblings for stagger
      const siblings = [...e.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(e.target);
      const delay = Math.min(idx * 80, 400);
      setTimeout(() => e.target.classList.add('in'), delay);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

/* reveal-stagger groups */
const staggerObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      staggerObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-stagger').forEach(el => staggerObserver.observe(el));

/* ============================
   INTRO cinematic — word by word
============================ */
const introObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const siblings = [...document.querySelectorAll('#intro .intro-line')];
      const idx = siblings.indexOf(e.target);
      setTimeout(() => e.target.classList.add('on'), idx * 200);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('#intro .intro-line').forEach(el => introObserver.observe(el));

// Final tag
const introFinalObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.5 });
document.querySelectorAll('.intro-final').forEach(el => introFinalObserver.observe(el));

/* ============================
   YEAR TABS
============================ */
document.querySelectorAll('.year-tab').forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll('.year-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.year-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.year).classList.add('active');
  };
});

/* ============================
   RENDER PROJECTS — visual card grid
============================ */
const projectList = document.getElementById('project-list');
projects.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'proj-card reveal';
  card.style.transitionDelay = `${i * 60}ms`;
  card.innerHTML = `
    <div class="proj-card-cover">
      <img src="${p.img}" alt="${p.imgAlt}" class="proj-card-img" onerror="this.parentElement.classList.add('no-img')">
      <div class="proj-card-cover-fallback ph" style="--ar:16/9;"></div>
      <div class="proj-card-num mono">${p.n}</div>
      <div class="proj-card-status">${p.status}</div>
    </div>
    <div class="proj-card-body">
      <div class="proj-card-meta mono">${p.year} · ${p.tech.split(',')[0].trim()}</div>
      <h3 class="proj-card-title">${p.title}</h3>
      <p class="proj-card-desc">${p.story}</p>
      <div class="proj-card-footer">
        <span class="proj-card-role mono">${p.role}</span>
        <span class="proj-card-arrow">→</span>
      </div>
    </div>`;
  card.onclick = () => openModal(`
    <div class="m-eyebrow">PROJECT ${p.n}</div>
    <h3>${p.title}</h3>
    <div class="m-meta">${p.year} · ${p.status} · ${p.role}</div>
    <div class="m-block"><b>TECH STACK</b><p>${p.tech}</p></div>
    <div class="m-block"><b>STORY</b><p>${p.story}</p></div>
    <div class="m-block"><b>PROBLEM</b><p>${p.problem}</p></div>
    <div class="m-block"><b>PROCESS</b><p>${p.process}</p></div>
    <div class="m-block"><b>RESULT</b><p>${p.result}</p></div>
    <div class="m-block"><b>WHAT I LEARNED</b><p>${p.lesson}</p></div>
  `);
  projectList.appendChild(card);
  revealObserver.observe(card);
});

/* ============================
   RESEARCH MODALS
============================ */
document.querySelectorAll('[data-research]').forEach(card => {
  card.onclick = () => {
    const r = research[card.dataset.research];
    openModal(`
      <div class="m-eyebrow">${r.eyebrow}</div>
      <h3>${r.title}</h3>
      <div class="m-meta">${r.meta}</div>
      <div class="m-block"><b>QUESTION</b><p>${r.question}</p></div>
      <div class="m-block"><b>PROBLEM</b><p>${r.problem}</p></div>
      <div class="m-block"><b>IDEA</b><p>${r.idea}</p></div>
      <div class="m-block"><b>EXPERIMENT / ITERATION</b><p>${r.experiment}</p></div>
      <div class="m-block"><b>RESULT</b><p>${r.result}</p></div>
      <div class="m-block"><b>LESSON</b><p>${r.lesson}</p></div>
    `);
  };
});

/* ============================
   ACHIEVEMENTS — with photos
============================ */
const achGrid = document.getElementById('ach-grid');
function renderAch(filter) {
  achGrid.innerHTML = '';
  achievements.filter(a => filter === 'ALL' || a.cat === filter).forEach((a, i) => {
    const c = document.createElement('div');
    c.className = 'ach-card-v2';
    c.style.transitionDelay = `${i * 60}ms`;
    c.innerHTML = `
      <div class="ach-card-photo">
        <img src="${a.img}" alt="${a.imgAlt}" class="ach-card-img" onerror="this.parentElement.classList.add('no-img')">
        <div class="ach-card-photo-fallback ph" style="--ar:4/3;"></div>
        <div class="ach-card-cat-badge">${a.cat}</div>
      </div>
      <div class="ach-card-info">
        <div class="ach-id mono">ACHIEVEMENT ${a.id}</div>
        <h4>${a.title}</h4>
        <div class="ach-year mono">${a.year}</div>
        <p class="ach-desc">${a.desc}</p>
      </div>`;
    c.onclick = () => openModal(`
      <div class="m-eyebrow">ACHIEVEMENT ${a.id} · ${a.cat}</div>
      <h3>${a.title}</h3>
      <div class="m-meta">${a.year}</div>
      <div class="m-block"><b>STORY</b><p>${a.desc}</p></div>
      <div class="m-block"><b>CERTIFICATE / PHOTO</b><p><img src="${a.img}" alt="${a.imgAlt}" style="width:100%;border-radius:8px;margin-top:6px;" onerror="this.style.display='none'"></p></div>
    `);
    achGrid.appendChild(c);
  });
}
renderAch('ALL');
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderAch(btn.dataset.cat);
  };
});
document.querySelectorAll('[data-achievement]').forEach(el => {
  const map = {mts1:'002',mts2:'003',sma1:'004'};
  el.onclick = () => {
    const a = achievements.find(x => x.id === map[el.dataset.achievement]);
    if (a) openModal(`
      <div class="m-eyebrow">ACHIEVEMENT ${a.id} · ${a.cat}</div>
      <h3>${a.title}</h3><div class="m-meta">${a.year}</div>
      <div class="m-block"><b>STORY</b><p>${a.desc}</p></div>
      <div class="m-block"><b>CERTIFICATE / PHOTO</b><p><img src="${a.img}" alt="${a.imgAlt}" style="width:100%;border-radius:8px;margin-top:6px;" onerror="this.style.display='none'"></p></div>
    `);
  };
});

/* ============================
   MEMORY WALL + LIGHTBOX
============================ */
const wall = document.getElementById('memory-wall');
const ratios = ['3/4','1/1','4/5','16/10','3/4','1/1'];
const memoryImages = [
  'images/IMG-20260719-WA0043.jpg',
  'images/1000033885.jpg',
  'images/1000058673.jpg',
  'images/1000062668.jpg',
  'images/IMG-20240914-WA0016.jpg',
  'images/IMG-20241202-WA0010.jpg'
];
memoryCaptions.forEach((cap, idx) => {
  const d = document.createElement('div');
  d.className = 'ph';
  d.style.setProperty('--ar', ratios[idx % ratios.length]);
  d.style.padding = '0';
  d.style.border = 'none';
  d.innerHTML = '<img src="' + memoryImages[idx] + '" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" onerror="this.style.display=\'none\'">';
  d.dataset.idx = idx;
  d.onclick = () => openLightbox(idx);
  wall.appendChild(d);
});

let lbIndex = 0;
function openLightbox(idx) {
  lbIndex = idx;
  document.getElementById('lb-cap').textContent = memoryCaptions[idx];
  document.getElementById('lb-img').innerHTML = '<img src="' + memoryImages[idx] + '" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" onerror="this.style.display=\'none\'">';
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lb-close').onclick = closeLightbox;
document.getElementById('lb-prev').onclick = () =>
  openLightbox((lbIndex - 1 + memoryCaptions.length) % memoryCaptions.length);
document.getElementById('lb-next').onclick = () =>
  openLightbox((lbIndex + 1) % memoryCaptions.length);

/* ============================
   MODAL
============================ */
const modalBg = document.getElementById('modal-bg');
function openModal(html) {
  document.getElementById('modal-content').innerHTML = html;
  modalBg.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalBg.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modal-close').onclick = closeModal;
modalBg.addEventListener('click', e => { if (e.target === modalBg) closeModal(); });

/* ============================
   KEYBOARD
============================ */
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (lb.classList.contains('open')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.getElementById('lb-prev').click();
    if (e.key === 'ArrowRight') document.getElementById('lb-next').click();
  }
  if (e.key === 'Escape') closeModal();
});

/* ============================
   SMOOTH IN-PAGE NAV
============================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const id = this.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }
  });
});

/* ============================
   PARALLAX — subtle hero bg
============================ */
const heroBg = document.querySelector('#hero::before');
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  if (rect.bottom > 0) {
    const progress = -rect.top / rect.height;
    hero.style.setProperty('--parallax', `${progress * 30}px`);
  }
}, { passive: true });

/* ============================
   TERMINAL DOTS (add if missing)
============================ */
const terminal = document.querySelector('.terminal');
if (terminal && !terminal.querySelector('.terminal-bar')) {
  const bar = document.createElement('div');
  bar.className = 'terminal-bar';
  bar.innerHTML = '<div class="terminal-dot"></div><div class="terminal-dot"></div><div class="terminal-dot"></div>';
  terminal.prepend(bar);
}
