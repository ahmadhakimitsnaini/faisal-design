# Implementation Plan: UI/UX Redesign (Sam Thomas Design)

**Tech Stack:** React (Vite), Tailwind CSS v3, Framer Motion (Opsional untuk animasi).

Berikut adalah panduan bertahap (step-by-step) untuk mengimplementasikan antarmuka UI/UX berdasarkan *Product Requirements Document* (PRD).

---

## Fase 1: Project Setup & Foundation (Pondasi Proyek)
Fase ini berfokus pada inisialisasi lingkungan kerja dan sistem desain global.

1. **Inisialisasi Proyek Vite + React:**
   - Jalankan `npm create vite@latest . -- --template react` di dalam folder proyek.
   - Bersihkan file bawaan (boilerplate) yang tidak diperlukan.

2. **Instalasi dan Konfigurasi Tailwind CSS v3:**
   - Instal Tailwind: `npm install -D tailwindcss postcss autoprefixer`.
   - Inisialisasi: `npx tailwindcss init -p`.
   - Konfigurasi `tailwind.config.js`:
     - Tambahkan palet warna *vintage* (misal: `vintage-cream`, `faded-black`, `muted-red`).
     - Konfigurasi jenis huruf (*font family*): Tambahkan *Serif* klasik untuk *Heading* dan *Inter* untuk *Body Text*.
     - Buat utilitas kustom jika diperlukan untuk efek tekstur *noise/grain*.

3. **Pengaturan Layout Dasar & Routing:**
   - Instal React Router: `npm install react-router-dom`.
   - Buat struktur kerangka halaman utama (Main Layout) yang mencakup komponen `Header/Navbar` dan `Footer`.

---

## Fase 2: Design System & Core Components (Komponen Inti)
Membangun elemen UI mandiri yang dapat digunakan ulang sebelum merakit seluruh halaman.

1. **Global Styles & Vintage Textures:**
   - Di `index.css`, terapkan tekstur *noise* halus pada tag `body` (bisa menggunakan *SVG filter* atau gambar PNG transparan berulang) agar nuansa *vintage* terasa di seluruh situs tanpa membebani performa.

2. **Pengembangan Komponen Dasar (Atomic Design):**
   - **Buttons:** Buat komponen `<Button />` dengan varian utama (Primary) dan sekunder (Secondary). Pastikan memiliki area sentuh yang cukup besar untuk versi *mobile*.
   - **Typography Components:** Buat `<Heading />` dan `<Text />` agar ukuran font konsisten secara responsif.
   - **Tags/Badges:** Komponen kecil untuk menampilkan kategori desain (misal: "Merch", "Poster").

3. **Komponen Portofolio (Portfolio Card):**
   - Buat komponen `<ProjectCard />` untuk menampilkan desain di grid.
   - Hapus ketergantungan pada *hover effect* murni. Pastikan judul proyek dan CTA mini tetap terlihat, atau muncul dengan mulus saat layar di-*scroll* pada perangkat seluler.

---

## Fase 3: Page Implementation (Perakitan Halaman)
Merakit komponen-komponen inti menjadi halaman yang utuh.

1. **Halaman Utama (Homepage):**
   - **Hero Section:** Teks pernyataan (*Value Proposition*) tebal yang mendominasi area "Above the Fold", disertai satu gambar pahlawan (*hero image*) animasi halus atau *showreel*.
   - **Featured Work Grid:** Grid responsif (1 kolom di mobile, 2-3 kolom di desktop) untuk menampilkan karya pilihan.

2. **Halaman Detail Proyek (Case Study Page):**
   - Halaman dinamis (misal: `/work/:id`) yang tidak hanya menampilkan gambar.
   - Struktur: 
     - **Header Proyek:** Nama Klien & Kategori.
     - **Deskripsi:** Kolom teks untuk *Brief* dan Tantangan.
     - **Galeri:** Gambar *mockup high-resolution* penuh (*full-width*) ke bawah.

3. **Halaman Kontak & Sticky CTA:**
   - **Floating/Sticky CTA:** Buat tombol "Let's Work Together" yang "menempel" (*fixed/sticky*) di bagian bawah layar khusus untuk tampilan *mobile*, memastikan tombol ini selalu terlihat tanpa harus scroll ke atas.

---

## Fase 4: Animation & Micro-Interactions (Fase "Wow" Factor)
Menghidupkan desain agar tidak terasa statis, dengan tetap menjaga performa.

1. **Instalasi Framer Motion:** `npm install framer-motion`.
2. **Page Transitions:** Tambahkan animasi *fade-in* yang sangat halus dan elegan saat berpindah dari *Homepage* ke *Case Study*.
3. **Scroll-Triggered Animations:** Gunakan `whileInView` pada Framer Motion di komponen `<ProjectCard />` agar karya seolah-olah "muncul" atau terangkat ke atas (*fade up*) saat pengguna menggulir halaman ke bawah.
4. **Interactive Buttons:** Berikan *micro-interaction* pada tombol, seperti membesar (*scale*) 1.05x saat disorot kursor (hover) atau ditekan (tap).

---

## Fase 5: Optimization & Accessibility (Penyempurnaan Akhir)
Memastikan kualitas proyek sesuai standar spesifikasi PRD.

1. **Aksesibilitas (WCAG Check):**
   - Audit manual kontras warna teks terhadap *background* (terutama warna-warna *vintage muted*).
   - Pastikan semua `<img>` *merchandise* memiliki atribut `alt` deskriptif.
   - Pastikan navigasi menggunakan *keyboard* (*Tab index*) berfungsi.

2. **Optimalisasi Performa & Gambar:**
   - Gunakan format WebP untuk semua aset gambar.
   - Implementasikan *Lazy Loading* (atribut `loading="lazy"`) pada gambar-gambar di bagian bawah *grid* portofolio.
   - Uji performa menggunakan ekstensi Google Lighthouse.

3. **Uji Responsivitas Silang (Cross-Device Testing):**
   - Periksa tata letak dan fungsionalitas di simulasi layar *Mobile*, *Tablet*, dan *Desktop* (menggunakan *Chrome DevTools*).
