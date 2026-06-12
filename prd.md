# Product Requirements Document (PRD): Redesign Portofolio Sam Thomas Design

**Dokumen Info**
- **Proyek:** Redesign Website Portofolio Sam Thomas Design
- **Status:** Draft / Proposal
- **Tanggal:** 11 Juni 2026
- **Objektif Utama:** Meningkatkan tingkat konversi klien potensial dan memperbaiki User Experience (UX) serta Aksesibilitas melalui modernisasi antarmuka (UI) dengan tetap mempertahankan identitas *vintage* industri musik.

---

## 1. Executive Summary
Website portofolio saat ini berfungsi sebagai titik kontak utama untuk "Sam Thomas", seorang desainer grafis *freelance* di industri musik Inggris yang berspesialisasi dalam *merchandise* bergaya *vintage*. Meskipun *value proposition* sudah kuat dan *niche* sangat jelas, antarmuka saat ini memerlukan peningkatan pada struktur penyajian karya (Information Architecture), responsivitas *mobile*, dan aksesibilitas untuk memaksimalkan retensi pengunjung dan konversi (*leads*). Proyek redesign ini bertujuan untuk mengubah portofolio dari sekadar "galeri gambar" menjadi alat penjualan (sales tool) yang efektif.

## 2. Problem Statement (Identifikasi Masalah Berdasarkan Audit)
1. **Kurangnya Konteks Karya:** Menampilkan desain grafis hanya dalam bentuk grid gambar (*image dump*) tidak menjelaskan proses pemikiran desainer atau masalah klien yang diselesaikan.
2. **Keterbatasan Pengalaman Mobile:** Mengingat banyaknya pengguna yang mengakses dari ponsel, desain grid yang statis dan ketergantungan pada *hover effect* mengurangi kelancaran pengalaman pengguna (*seamless experience*).
3. **Risiko Aksesibilitas:** Estetika *vintage* sering kali mengorbankan kontras warna (teks abu-abu di atas latar krem) yang gagal memenuhi standar aksesibilitas dasar (WCAG).
4. **Visibilitas Call-to-Action (CTA) Lemah:** Ajakan bertindak ("Contact" atau "Hire Me") kurang menonjol, sehingga pengunjung yang sudah tertarik berpotensi pergi tanpa meninggalkan pesan.

## 3. Target Audience
- Manajer Band / Manajer Artis.
- Label Rekaman Independen (Indie) maupun Mayor.
- Musisi dan Artis yang mencari identitas visual untuk tur atau peluncuran album.
- *Art Director* yang mencari kolaborator desain bergaya *vintage*.

## 4. Design Strategy & Visual Direction
- **Tema Utama:** "Modern Retro" atau "Clean Vintage".
- **Pendekatan Visual:** 
  - Menggunakan *background* dengan tekstur *grain* atau *noise* yang halus.
  - Tipografi perpaduan antara *Serif/Display* klasik tebal (untuk Heading) dan *Sans-serif* modern dan bersih seperti Inter (untuk Body Text/Paragraf).
  - *Whitespace* yang lega untuk memberikan fokus utama pada gambar desain *merchandise*.

## 5. Functional Requirements (Kebutuhan Fungsional)

### 5.1. Restrukturisasi "Case Studies"
- **Fitur:** Halaman Detail Proyek.
- **Deskripsi:** Pengguna dapat mengklik sebuah karya dan diarahkan ke detail proyek yang berisi:
  - Nama Klien/Band.
  - Tantangan / *Brief*.
  - Proses Desain / Sketsa (Opsional).
  - Hasil Akhir (*High-quality mockups* produk/merchandise).
- **Prioritas:** P0 (Tinggi).

### 5.2. Sticky / Prominent Call-to-Action (CTA)
- **Fitur:** Tombol *"Start a Project"* atau *"Let's Work Together"*.
- **Deskripsi:** 
  - Di *Desktop*: Tombol dengan warna aksen yang kontras di sudut kanan atas menu navigasi utama.
  - Di *Mobile*: Navigasi bawah (*bottom bar*) atau tombol melayang (*floating action button*) yang tetap terlihat meski layar digulir (*sticky*).
- **Prioritas:** P0 (Tinggi).

### 5.3. Navigasi dan Filter Karya (Portfolio Filtering)
- **Fitur:** Kategori Portofolio.
- **Deskripsi:** Menambahkan filter sederhana (misal: *All, T-Shirts, Posters, Branding*) di atas grid portofolio untuk memudahkan audiens mencari referensi spesifik tanpa harus berpindah halaman.
- **Prioritas:** P1 (Menengah).

## 6. Non-Functional Requirements (Kebutuhan Non-Fungsional)

### 6.1. Mobile Responsiveness & Interaksi
- **Persyaratan:** Situs harus 100% fungsional dan estetis di perangkat sentuh.
- **Tindakan:** Menghapus atau mengganti semua *hover effect* krusial (yang menyembunyikan informasi penting) dengan elemen yang selalu terlihat (*always-visible*) atau muncul saat di-*scroll* (Scroll-triggered animations).

### 6.2. Aksesibilitas (Accessibility)
- **Persyaratan:** Mematuhi pedoman WCAG AA minimal.
- **Tindakan:** 
  - Memastikan rasio kontras teks terhadap latar belakang minimal 4.5:1.
  - Menambahkan deskripsi *alt-text* pada semua gambar *merchandise* (Sangat penting untuk SEO dan *screen-readers*).

### 6.3. Performa (Loading Speed)
- **Persyaratan:** Memuat gambar beresolusi tinggi tanpa *lag*.
- **Tindakan:** Implementasi *Lazy Loading* (memuat gambar hanya saat masuk ke layar) dan format gambar modern (seperti WebP atau pengoptimalan via *Content Delivery Network*/CDN bawaan Framer).

## 7. Technology Stack (Tech Stack)
- **Frontend Framework:** React (Vite atau Next.js) untuk membangun antarmuka pengguna yang modular dan performa tinggi.
- **Styling:** Tailwind CSS v3 untuk *utility-first styling*. Mengoptimalkan kecepatan pengembangan UI secara konsisten namun tetap memberikan fleksibilitas untuk penyesuaian khusus (seperti estetika *vintage*).
- **Animation (Opsional):** Framer Motion untuk transisi halaman dan interaksi *scroll* yang halus.
- **Manajemen Konten (Data):** File lokal statis (JSON/MDX) atau Headless CMS jika klien ingin mengupdate karya secara mandiri.
- **Hosting/Deployment:** Vercel atau Netlify.

## 8. Success Metrics (Metrik Keberhasilan)
Proyek redesign ini dianggap berhasil apabila memenuhi kriteria berikut setelah peluncuran:
1. **Peningkatan Click-Through Rate (CTR) pada tombol Kontak/CTA:** Meningkat sebesar 20-30%.
2. **Penurunan Bounce Rate di Halaman Portofolio:** Pengguna menghabiskan waktu lebih lama membaca *Case Studies* dibandingkan sekadar scroll galeri.
3. **Skor Performa & Aksesibilitas (Google Lighthouse):** Mencapai skor > 90 untuk SEO, Accessibility, dan Performance.
