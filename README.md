# 📖 Guestbook Digital

Website sederhana menggunakan [AdonisJS v5](https://adonisjs.com) sebagai buku tamu digital. Pengunjung dapat mengisi nama dan pesan, kemudian pesan akan disimpan ke database dan ditampilkan kembali dalam daftar.

---

## 🎯 Fitur

- ✅ Halaman Form untuk menulis pesan
- ✅ Penyimpanan data ke database (SQLite)
- ✅ Menampilkan daftar pesan tamu
- ✅ Flash message "Terima kasih sudah memberi pesan!"
- ✅ Struktur modular menggunakan controller dan view (`.edge`)
- ✅ Styling dengan Tailwind CSS CDN

---

## 🛠️ Teknologi

- **Framework**: [AdonisJS v5](https://docs.adonisjs.com)
- **Template Engine**: Edge
- **Bahasa**: TypeScript
- **Database**: SQLite (via Lucid ORM)

---

## 📂 Struktur Direktori Penting

guestbook/
├── app/
│ └── Controllers/Http/GuestsController.ts
├── database/
│ └── migrations/
├── resources/
│ └── views/
│ ├── layouts/main.edge
│ └── guests/{create,index}.edge
├── public/
├── start/
│ └── routes.ts
├── .env
├── ace
├── package.json
└── README.md

yaml
Salin
Edit

---

## 🚀 Menjalankan Aplikasi (Opsional)

Jika kamu ingin mencoba menjalankan secara lokal:

```bash
# 1. Clone repository
git clone https://github.com/username/guestbook.git
cd guestbook

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env
node ace configure @adonisjs/lucid
node ace migration:run

# 4. Jalankan server development
npm run dev