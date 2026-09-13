# CLAUDE.md — Instruksi Proyek: Personal Website Kharismadina Hijra M

Dokumen ini adalah panduan kerja untuk Claude (atau Claude Code) saat mengerjakan/melanjutkan proyek personal website ini. Baca `plan.md` terlebih dahulu untuk konteks lengkap rencana & struktur.

## Ringkasan Proyek
Personal portfolio website untuk Kharismadina Hijra M (Data & Machine Learning Engineer), dibangun dengan **HTML/CSS/JS statis**, gaya **minimalis & clean**. Halaman utama (`index.html`) adalah **single-page scroll**, sementara setiap pengalaman kerja ditampilkan sebagai **summary card** yang tautannya membuka **halaman detail terpisah** (multi-page untuk detail saja).

## Aturan Kerja
1. **Jangan gunakan framework berat** (React/Vue/Tailwind build step, dsb) kecuali diminta ulang oleh user — proyek ini harus tetap vanilla HTML/CSS/JS agar mudah di-host statis.
2. **Konsistensi desain**: semua halaman (index + detail) harus memakai `css/style.css` yang sama agar identitas visual konsisten (warna, tipografi, spacing).
3. **Sumber konten**: semua data (pengalaman, skill, sertifikasi, kontak) harus berasal dari CV asli user (lihat ringkasan di `plan.md` bagian 6). Jangan mengarang data/pengalaman yang tidak ada di CV.
4. **Bahasa konten**: gunakan Bahasa Indonesia untuk UI/label umum (mis. "Lihat detail", "Kembali ke Home") kecuali user memberi instruksi lain, karena permintaan awal user dalam Bahasa Indonesia. Judul jabatan/skill teknis boleh tetap dalam Bahasa Inggris sesuai istilah industri.
5. **Navigasi**: setiap halaman detail wajib punya tombol/link jelas untuk kembali ke `index.html` (idealnya ke section Experience, gunakan anchor `#experience`).
6. **Responsif wajib**: uji di lebar viewport mobile (~375px), tablet (~768px), desktop (~1200px+).
7. **Aksesibilitas dasar**: gunakan tag semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), alt text pada gambar, kontras warna cukup.
8. **Performa**: hindari asset besar tanpa optimasi; gunakan CSS murni untuk animasi ringan (hindari library animasi berat).
9. **Placeholder yang diperbolehkan**: foto profil, link sosial media (LinkedIn/GitHub jika belum diberikan user) — beri komentar `<!-- TODO: ganti dengan link/foto asli -->` di kode agar mudah ditemukan user nanti.

## Alur Pengembangan (mengikuti `plan.md` bagian 7)
Kerjakan secara bertahap dan tunjukkan hasil tiap tahap jika memungkinkan:
1. Setup struktur folder (`css/`, `js/`, `assets/`) + file kosong.
2. `style.css`: variabel desain (warna, font, spacing) + reset dasar.
3. `index.html`: bangun section demi section sesuai `plan.md` §3.1.
4. Halaman detail experience (`experience-smartnet.html`, `experience-scm.html`).
5. `main.js`: interaksi ringan (mobile nav toggle, smooth scroll ke anchor, fade-in on scroll via IntersectionObserver — opsional, jangan berlebihan).
6. Review lintas-perangkat & lintas-halaman.
7. Rapikan & finalisasi, siap untuk deploy statis.

## Yang Harus Dihindari
- Jangan menambahkan section/konten yang tidak berdasar dari CV (misal testimoni palsu, statistik yang tidak ada).
- Jangan membuat desain terlalu ramai (bertentangan dengan preferensi "minimalis & clean").
- Jangan memecah terlalu banyak halaman detail jika tidak perlu — cukup satu halaman detail per employer/pengalaman utama, bukan per bullet point.

## Referensi Desain
Desain **tidak mengacu ke repo GitHub manapun** — ikuti style guide rekomendasi di `plan.md` §4 (palet warna off-white + deep teal `#1E5F5A`, tipografi Inter/Space Grotesk, komponen minimalis dengan border tipis, timeline vertikal untuk experience, animasi fade-in halus). Style guide ini bisa disesuaikan lebih lanjut selama proses build jika user memberi masukan baru.

## Referensi File Terkait
- `plan.md` — rencana detail struktur, konten, dan style guide.
- CV sumber: `CV_KharismadinaHM_Aug_2026.pdf` (diberikan user di awal percakapan).
