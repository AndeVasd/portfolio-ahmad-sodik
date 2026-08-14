# Portfolio Ahmad Sodik

Website portfolio profesional milik **Ahmad Sodik** — Android & Web Developer dari Sumatera Selatan yang fokus membangun aplikasi Android native dengan Kotlin dan web modern dengan React / TypeScript.

🔗 **Live preview:** [https://id-preview--c423daea-738c-4ef9-bb17-7439b78749d2.lovable.app](https://id-preview--c423daea-738c-4ef9-bb17-7439b78749d2.lovable.app)

---

## Tentang Website Ini

Portfolio ini dirancang dengan tema **terminal / code-dark** beraksen teal/cyan, memberikan kesan teknis, modern, dan memorable. Website menampilkan:

- **Hero Section** — animasi typing, kartu profil GitHub, dan tombol CTA ke CV & kontak.
- **About Section** — deskripsi diri dalam style code-editor card.
- **Skills & Tools** — logo brand teknologi (Kotlin, Android Studio, Jetpack Compose, React, Laravel, dll) dalam kartu ikon + marquee nama skill.
- **Projects** — showcase proyek unggulan dari GitHub.
- **CV Preview** — pratinjau CV online sebelum diunduh.
- **Contact Form** — form kontak dengan mailto.
- Smooth scroll navigation & reveal animations di seluruh section.

## Teknologi yang Digunakan

- **Framework:** [TanStack Start](https://tanstack.com/start) v1 + React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v4
- **Runtime target:** Cloudflare Workers / Edge Functions
- **Icons:** Lucide React + Simple Icons CDN
- **Fonts:** Unbounded (heading), Outfit (body), JetBrains Mono (code)

## Daftar Proyek yang Ditampilkan

1. **KDMP Mesuji Jaya** — Sistem informasi koperasi desa (React + Tailwind)
2. **KopdesMJ Android** — Aplikasi mobile koperasi desa (Kotlin + Firebase)
3. **Sarpras** — Manajemen sarana & prasarana (Kotlin + MVVM)
4. **KhatApps** — Aplikasi pembelajaran khat (Kotlin + Room)
5. **PPDB Dena Upakara** — Sistem PPDB berbasis Android
6. **MovieShof** — Katalog film dengan TMDB API (Kotlin + Retrofit)

## Cara Menjalankan Project (Development)

Pastikan Node.js versi **20+** atau **Bun** sudah terinstall.

### 1. Clone repository

```bash
git clone https://github.com/ahmadsodik4717/portfolio-ahmad-sodik.git
cd portfolio-ahmad-sodik
```

### 2. Install dependensi

Menggunakan Bun (disarankan):

```bash
bun install
```

Atau menggunakan npm:

```bash
npm install
```

### 3. Jalankan server development

```bash
bun dev
# atau
npm run dev
```

Buka browser di `http://localhost:8080`.

### 4. Build untuk production

```bash
bun run build
# atau
npm run build
```

### 5. Format & lint

```bash
bun run format
bun run lint
# atau
npm run format
npm run lint
```

## Struktur Folder

```
portfolio-ahmad-sodik/
├── src/
│   ├── components/
│   │   ├── Portfolio.tsx      # Komponen utama halaman portfolio
│   │   ├── SiteNav.tsx        # Navigasi responsive
│   │   └── Reveal.tsx         # Wrapper animasi scroll reveal
│   ├── routes/
│   │   ├── __root.tsx         # Root layout & provider
│   │   ├── index.tsx          # Route / + metadata SEO
│   │   └── ...                # Route lain jika ada
│   ├── styles.css             # Tailwind v4 + custom theme
│   ├── router.tsx             # TanStack Router config
│   ├── server.ts              # Server config
│   └── start.ts               # Start config
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Assets & CV

- CV tersedia dalam format PDF dan dapat diunduh publik.
- Pratinjau CV ditampilkan sebagai gambar resolusi tinggi agar tidak diblokir browser.

## Deploy

Project ini dibangun di atas [Lovable](https://lovable.dev) dan dapat di-deploy langsung dari platform Lovable atau di-export ke GitHub untuk hosting di Vercel / Cloudflare Pages / Netlify.

## Kontak

- **Email:** ahmadsodik0105@gmail.com
- **GitHub:** [@ahmadsodik4717](https://github.com/ahmadsodik4717)
- **LinkedIn:** [Ahmad Sodik](https://www.linkedin.com/in/ahmadsodik)

---

Dibuat dengan semangat koding oleh **Ahmad Sodik**.
