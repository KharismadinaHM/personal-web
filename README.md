# Personal Portfolio Website — Kharismadina Hijra M

Website portofolio profesional dan modern untuk **Kharismadina Hijra M** (*Data & Machine Learning Engineer*). Dibangun dengan arsitektur statis murni (**Vanilla HTML5, CSS3, dan JavaScript ES6**) yang sangat cepat, bersih (*clean minimalist*), 100% responsif di semua ukuran layar, serta siap di-deploy secara instan ke **GitHub Pages**.

---

## 🌟 Fitur Utama Website

1. **Desain Minimalis & Profesional**: Mengadopsi palet warna hangat *warm off-white* (`#FAFAF8`) dipadukan dengan aksen *deep teal* (`#1E5F5A`), border tipis elegan, dan tipografi modern (*Inter* & *Space Grotesk*).
2. **Bilingual Support (ID & EN)**: Dilengkapi tombol pengalih bahasa (`[ ID | EN ]`) instan di header navigasi desktop maupun mobile. Versi bahasa Inggris disusun langsung dari CV asli dengan terminologi industri yang akurat. Preferensi bahasa tersimpan otomatis di browser (`localStorage`).
3. **Single-Page Scroll + Halaman Detail Khusus**:
   - `index.html`: Berisi Hero, Quick Metrics, About/Summary, Experience Summary Cards, Categorized Skills, Education & Certifications, dan Kontak.
   - `experience-smartnet.html`: Detail 15 inisiatif & arsitektur proyek di PT Smartnet Magna Global (GenAI Multi-Agent, 1TB+ ETL, ClickHouse, Airflow + dbt, Cloud Bigtable).
   - `experience-scm.html`: Detail proyek di PT Surya Citra Media (Event-driven fuzzy ML matching Gen21/Nielsen, streaming pipeline Kafka/Spark, optimasi DAG Airflow).
   - `project-deepfake-detection.html`: Riset akademik deteksi deepfake (CNN & Inception ResNet V2, akurasi 90%, false positive -80%).
4. **Interaktivitas Ringan & Aksesibel**:
   - Menu navigasi responsif dengan tombol hamburger untuk mobile.
   - *Smooth scrolling* antar-bagian halaman dengan *active scroll spy*.
   - Efek kemunculan halus (*fade-in on scroll*) memanfaatkan browser-native `IntersectionObserver`.
   - Tombol interaktif untuk menyalin email ke clipboard dilengkapi notifikasi *toast*.
5. **Tanpa Ketergantungan Berat**: Tidak memerlukan proses *compile/build step* (Webpack/Vite/Tailwind) yang rumit. Dapat dibuka langsung di browser atau di-hosting di layanan web statis mana pun tanpa biaya.

---

## 📁 Struktur Direktori

```text
personal-web/
├── index.html                        # Halaman portofolio utama (Single-page scroll)
├── experience-smartnet.html          # Halaman detail PT Smartnet Magna Global
├── experience-scm.html               # Halaman detail PT Surya Citra Media
├── project-deepfake-detection.html   # Halaman detail Riset ML Deepfake Gunadarma
├── css/
│   └── style.css                     # Design system terpusat (tokens, layout, responsif)
├── js/
│   ├── main.js                       # Logika navigasi, smooth scroll, observer, copy email
│   └── translations.js               # Kamus bilingual lengkap (ID & EN)
├── assets/
│   └── avatar.svg                    # Ilustrasi avatar profesional vektor
├── plan.md                           # Dokumen rancangan spesifikasi awal
├── claude.md                         # Instruksi & panduan kerja
└── README.md                         # Panduan penggunaan & deployment ke GitHub Pages
```

---

## 🚀 Panduan Lengkap Deploy ke GitHub Pages

Ikuti langkah-langkah mudah berikut untuk mempublikasikan website ini ke internet menggunakan **GitHub Pages**:

### Langkah 1: Buat Repository Baru di GitHub
1. Masuk ke akun GitHub Anda di [github.com](https://github.com).
2. Klik tombol **New** (atau ikon **+** di pojok kanan atas) untuk membuat repository baru.
3. Beri nama repository, misalnya: `personal-web` (atau `portfolio`).
4. Pastikan repository disetel sebagai **Public**.
5. Jangan centang "Add a README file" (karena repository lokal sudah memiliki README).
6. Klik **Create repository**.

---

### Langkah 2: Inisialisasi & Push dari Komputer Anda
Buka terminal Anda di folder proyek ini (`/Users/kharismadinahijram/personal-web`), lalu jalankan perintah berikut:

```bash
# 1. Inisialisasi git (jika belum pernah)
git init

# 2. Tambahkan semua file ke staging
git add .

# 3. Buat commit pertama
git commit -m "feat: initial commit personal portfolio website"

# 4. Ubah nama branch utama menjadi main
git branch -M main

# 5. Hubungkan ke remote repository GitHub Anda (misal nama repo: personal-web)
git remote add origin https://github.com/KharismadinaHM/personal-web.git

# 6. Push kode ke GitHub
git push -u origin main
```

> **Catatan**: Jika ini pertama kali push, GitHub akan meminta autentikasi (Personal Access Token atau browser login).

---

### Langkah 3: Aktifkan GitHub Pages
Setelah kode berhasil di-push:
1. Buka repository Anda di browser: `https://github.com/KharismadinaHM/personal-web`.
2. Klik tab **Settings** (di menu atas repository).
3. Pada panel samping kiri, pilih menu **Pages** (di bawah bagian *Code and automation*).
4. Di bagian **Build and deployment**:
   - **Source**: Pilih **Deploy from a branch**.
   - **Branch**: Pilih `main` dan folder `/(root)`.
5. Klik tombol **Save**.

---

### Langkah 4: Website Anda Sudah Live! 🎉
1. Tunggu sekitar 1 hingga 2 menit agar GitHub Actions memproses deployment.
2. Refresh halaman Settings > Pages. Anda akan melihat pesan:
   > *"Your site is live at https://kharismadinahm.github.io/personal-web/"*
3. Klik tautan tersebut untuk membuka website portofolio Anda di internet.

---

## 💡 Kustomisasi & Personalisasi

- **Menambahkan Berkas PDF CV**:
  Simpan file CV PDF Anda di folder `assets/` dengan nama `CV_KharismadinaHM.pdf`. Anda kemudian dapat mengubah link di `index.html` (tombol *Request CV*) menjadi:
  ```html
  <a href="assets/CV_KharismadinaHM.pdf" download class="btn btn-outline">
    Download CV
  </a>
  ```
- **Mengganti Foto Profil**:
  Jika Anda ingin menggunakan foto profil asli, simpan file foto Anda (misal `profile.jpg`) ke dalam folder `assets/` lalu ganti tag `<img>` di `index.html`:
  ```html
  <img src="assets/profile.jpg" alt="Kharismadina Hijra M" class="avatar-img">
  ```
- **Menambahkan Tautan LinkedIn & GitHub**:
  Di bagian Kontak atau Footer, Anda dapat menyematkan tautan profil GitHub dan LinkedIn Anda sesuai kebutuhan.

---

## 💻 Menjalankan Secara Lokal (Testing)

Untuk melihat tampilan website di komputer lokal Anda sebelum push:

### Opsi A: Menggunakan Python (Sudah tersedia di macOS)
Jalankan perintah berikut di terminal:
```bash
python3 -m http.server 8000
```
Buka browser dan akses: `http://localhost:8000`.

### Opsi B: Menggunakan VS Code / Extension
- Buka folder di Visual Studio Code.
- Install ekstensi **Live Server** (oleh Ritwick Dey).
- Klik tombol **Go Live** di pojok kanan bawah editor.

---

## 📄 Lisensi
Hak Cipta © 2026 **Kharismadina Hijra M**. Seluruh hak dilindungi undang-undang.
