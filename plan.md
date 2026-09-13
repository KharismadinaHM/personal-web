# PLAN.md — Personal Website: Kharismadina Hijra M

## 1. Tujuan
Membangun personal website (portfolio) berbasis data dari CV, dengan gaya **minimalis & clean** (banyak whitespace), sebagai **single-page** untuk halaman utama, namun setiap pengalaman kerja/proyek ditampilkan sebagai **ringkasan (summary card)** yang bisa diklik untuk membuka **halaman detail terpisah**.

## 2. Teknologi
- HTML5, CSS3 (vanilla, tanpa framework CSS berat), JavaScript vanilla (ES6).
- Statis penuh — mudah di-deploy ke GitHub Pages / Netlify / Vercel (static hosting).
- Tidak ada build step, tidak ada dependency npm wajib (opsional: font dari Google Fonts via CDN).
- Struktur data proyek/pengalaman disimpan di file `data.js` (array of objects) agar mudah di-generate ke summary card & detail page tanpa duplikasi konten.

## 3. Struktur Halaman

### 3.1 Halaman Utama (`index.html`) — single page, scroll-based
Section (top to bottom):
1. **Hero** — Nama, title ("Data & Machine Learning Engineer"), tagline singkat dari summary CV, CTA (email/CV download), foto/placeholder avatar.
2. **About / Summary** — Ringkasan dari bagian SUMMARY di CV.
3. **Experience** — Ringkasan tiap pengalaman kerja (PT Smartnet Magna Global, PT Surya Citra Media) ditampilkan sebagai card ringkas (jabatan, perusahaan, durasi, 1-2 highlight). Tombol "Lihat detail →" membuka halaman detail proyek/experience terkait.
4. **Skills** — Grid/tag list technical & soft skills, dikelompokkan (Data Engineering, Cloud, ML/AI, Databases, Soft Skills).
5. **Education & Certifications** — Ringkas: gelar, universitas, achievement, list sertifikasi (2024–2026, Google Cloud).
6. **Contact / Footer** — Email, nomor telepon, lokasi (Serpong, Tangerang), link sosial (opsional: LinkedIn/GitHub jika ada).

### 3.2 Halaman Detail (per pengalaman/proyek)
Contoh file:
- `experience-smartnet.html` — detail lengkap role di PT Smartnet Magna Global, breakdown per proyek (Looker dashboards, ETL Firebase→BigQuery, Airflow automation, ClickHouse POC, multi-agent GenAI system, dsb).
- `experience-scm.html` — detail role di PT Surya Citra Media (data matching Gen21/Nielsen, streaming pipeline Kafka/Spark, Airflow DAG troubleshooting).
- (Opsional) `project-deepfake-detection.html` — detail proyek skripsi/akademik (CNN + Inception ResNet V2).

Setiap halaman detail punya:
- Navbar kecil dengan tombol "← Kembali ke Home".
- Judul role/proyek + perusahaan + durasi.
- Deskripsi lengkap (semua bullet point dari CV untuk entry tersebut).
- Tech stack yang dipakai (tags).
- (Opsional) area untuk screenshot/diagram jika user ingin menambahkan nanti.

## 4. Desain / Style Guide

> Referensi desain ditentukan bebas mengikuti rekomendasi berikut (bukan mengikuti repo GitHub tertentu).

- **Palet warna**:
  - Background utama: `#FAFAF8` (off-white hangat, bukan putih pucat).
  - Teks utama: `#1A1A1A` (hampir hitam, bukan hitam pekat agar lebih lembut).
  - Teks sekunder/muted: `#6B6B6B`.
  - Aksen: `#1E5F5A` (teal gelap/deep teal) — dipakai untuk link, tombol, border highlight, dan garis pemisah tipis. Pilihan teal dipakai karena terasa profesional-tapi-tidak-kaku, cocok untuk profil data/tech tanpa terasa terlalu korporat-biru-generik.
  - Border/divider: `#E5E3DE`.
- **Tipografi**:
  - Heading: `"Inter"` atau `"Space Grotesk"` (via Google Fonts), weight 600–700, sedikit tight letter-spacing untuk kesan modern.
  - Body: `"Inter"`, weight 400, line-height ~1.7 agar nyaman dibaca.
  - Skala: H1 ~48–56px (desktop) / ~32px (mobile), H2 ~32px, body ~17px.
- **Layout & Whitespace**:
  - Max-width konten: 1080px, centered, padding horizontal 24px (mobile) / 0 (desktop, karena sudah di-center).
  - Padding vertikal antar section: 100–140px desktop, 60–80px mobile.
  - Gunakan garis tipis (`1px solid var(--border)`) sebagai pemisah antar section, bukan background block warna-warni — menjaga kesan clean & minim.
- **Komponen**:
  - **Hero**: teks besar rata kiri (bukan center) — nama sebagai H1, role sebagai subheading dengan warna aksen, tagline 1-2 kalimat, lalu tombol kecil "Download CV" (outline, aksen teal) dan "Hubungi Saya" (solid teal).
  - **Experience card**: tanpa shadow berat — cukup border tipis `1px solid var(--border)`, radius 8px, padding lega (24–32px). Saat hover: border berubah ke warna aksen + sedikit translate-y (-2px), transisi 0.2s.
  - **Skill tags**: pill shape, background `#F0EFEA`, teks `#1A1A1A`, saat hover background jadi aksen teal + teks putih.
  - **Tombol**: sudut agak membulat (6px), tanpa gradient, dua varian — solid (aksen) dan outline (border aksen, teks aksen, background transparan).
  - **Timeline visual (opsional)** untuk section Experience: garis vertikal tipis di kiri card sebagai penanda kronologi, dengan titik kecil (dot) di tiap entry — memberi kesan "jejak karier" tanpa perlu ilustrasi rumit.
- **Responsif**: mobile-first, breakpoint utama di 768px; hero berubah dari 2 kolom (teks + placeholder avatar) menjadi 1 kolom di mobile.
- **Animasi**: subtle fade-in + translate-y kecil saat section masuk viewport (IntersectionObserver), durasi 0.4–0.6s, jangan pakai easing yang terlalu "bouncy" — pakai `ease-out` agar tetap terasa tenang/profesional.
- **Ikon**: gunakan set ikon garis tipis (line icons) seperti Lucide/Feather (via inline SVG, tanpa perlu library JS) untuk kontak, skill category, dan tombol panah "lihat detail →".

## 5. Struktur File
```
/
├── index.html
├── experience-smartnet.html
├── experience-scm.html
├── project-deepfake-detection.html (opsional)
├── /css
│   └── style.css
├── /js
│   ├── main.js        (interaksi index: smooth scroll, fade-in, nav toggle mobile)
│   └── data.js         (opsional: data terpusat jika ingin generate card via JS)
├── /assets
│   ├── /images         (foto profil, favicon, dsb — placeholder dulu)
│   └── CV_KharismadinaHM.pdf   (opsional, untuk tombol "Download CV")
└── README.md
```

## 6. Konten Sumber (dari CV)
Semua teks di web diambil & disesuaikan (bukan copy mentah semua bullet) dari:
- SUMMARY
- EXPERIENCE (PT Smartnet Magna Global — Aug 2023–Present; PT Surya Citra Media — Jan 2022–Jul 2023)
- EDUCATION (Gunadarma University, Bachelor of Computer Science, Aug 2023, Best Student top 0.1%)
- SKILLS (Technical & Soft Skills)
- CERTIFICATIONS (2024–2026, Google Cloud: Data Engineer, ML Engineer, Database Engineer, Generative AI Leader)
- Kontak: Serpong, Tangerang, Indonesia | kharismadinahijram@gmail.com | +6285891218000

## 7. Tahapan Pengerjaan
1. Setup struktur folder & file kosong sesuai poin 5.
2. Bangun `style.css` dasar: reset, variabel warna/tipografi, layout grid/flex utama.
3. Bangun `index.html` section by section (Hero → About → Experience summary cards → Skills → Education/Certs → Contact).
4. Bangun halaman detail per experience (link dari card summary).
5. Tambahkan interaktivitas ringan di `main.js` (nav mobile toggle, smooth scroll, fade-in on scroll).
6. Uji responsivitas (mobile, tablet, desktop).
7. Review konten vs CV asli (pastikan tidak ada typo/data yang salah).
8. (Opsional) Siapkan untuk deploy ke GitHub Pages/Netlify.

## 8. Catatan
- Desain **tidak lagi mengacu ke repo GitHub `mysite-wix`** (atas keputusan user) — style guide di atas adalah rekomendasi desain minimalis-modern dengan aksen deep teal, dan bisa disesuaikan lebih lanjut sesuai selera saat implementasi berjalan.
