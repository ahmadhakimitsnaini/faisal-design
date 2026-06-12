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

   - Uji responsivitas silang (Cross-Device Testing): Periksa tata letak dan fungsionalitas di simulasi layar *Mobile*, *Tablet*, dan *Desktop* (menggunakan *Chrome DevTools*).

---

## Fase 6: Integrasi Komponen "Pixel Logo Grid" (Versi JSX)
Fase ini berfokus pada pengintegrasian komponen animasi *canvas* ke dalam proyek dengan mempertahankan format JavaScript murni (`.jsx`), menghindari kompleksitas migrasi TypeScript.

1. **Persiapan Struktur Direktori (Standar Shadcn):**
   - Pastikan folder `src/components/ui/` telah tersedia. Direktori ini krusial untuk menampung komponen fundamental yang independen dan dapat digunakan kembali (*reusable*).
   - Buat file baru bernama `pixel-logo-grid.jsx` di dalam folder tersebut.

2. **Konversi Kode (Dari TSX ke JSX):**
   - **Hapus Deklarasi Tipe (Type Definitions):** Buang blok `type Pixel`, `type PixelCanvasProps`, dan `type LogoSvgProps`.
   - **Hapus Parameter Type:** Bersihkan parameter fungsi dari sintaks TS. Contoh: ubah `(ctx: CanvasRenderingContext2D, ...)` menjadi `(ctx, ...)`.
   - **Sesuaikan Hooks:** Ubah deklarasi *ref* yang ketat seperti `useRef<HTMLCanvasElement>(null)` menjadi sintaks bawaan React `useRef(null)`.
   - **Sesuaikan Props:** Ubah deklarasi komponen `function PixelCanvas({ colors, gap, speed }: PixelCanvasProps)` menjadi `function PixelCanvas({ colors, gap = 5, speed = 30 })`.

3. **Penyesuaian Dependency & Import Path:**
   - Karena proyek ini tidak memiliki *Path Aliases* (`@/`), ubah baris impor utilitas bawaan Shadcn dari `import { cn } from "@/lib/utils";` menjadi jalur relatif: `import { cn } from "../../lib/utils";`.
   - Pastikan library `clsx` dan `tailwind-merge` sudah terinstal di proyek sebagai penyokong fungsi `cn()`.

4. **Pemasangan & Rendering Komponen:**
   - Impor komponen `PixelCanvas` dan gabungan Logo (seperti `AirbnbLogo`, `NetflixLogo`) ke halaman utama atau bagian yang diinginkan (*Hero Section*).
   - Elemen pembungkus (*parent container*) wajib diberi kelas Tailwind `relative`. Ini memastikan `PixelCanvas` (yang menggunakan `absolute inset-0`) menempati luas area yang tepat dan tidak tumpah ke bagian lain.

5. **Pengujian Fungsional & Kinerja (QA):**
   - Lakukan uji interaksi: Pastikan titik-titik kanvas menyebar keluar (*ripple-out*) dari tengah dengan benar saat di-*hover* dan kembali pudar saat kursor dijauhkan.
   - Uji kinerja dan fitur aksesibilitas (*Reduced Motion*): Pastikan animasi melambat atau berhenti apabila pengguna mengaktifkan fitur kurangi gerakan (*prefers-reduced-motion*) pada sistem operasi mereka.
