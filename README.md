# Belajiva — LMS Kursus Singkat Skill Usaha

> **Kategori proyek: Web App — LMS (Learning Management System) ringan.**
> Katalog kursus, modul dengan progres, kuis akhir ber skor — semua progres tersimpan otomatis.

LMS ringan untuk pelatihan/bimbing usaha: kursus pendek 4 modul × 8–12
menit dengan kuis 3 soal. Proyek ini adalah **concept demo** untuk
portofolio jasa pembuatan web — kursus, mentor, dan materi bersifat fiktif.
Nama "Belajiva" sengaja dibuat unik (belum dipakai entitas mana pun di
internet).

**Live:** https://belajiva.vercel.app

## Fitur

- **5 kursus** skill usaha (spreadsheet, copywriting IG, foto produk,
  pembukuan, CS WhatsApp) dengan mentor & level.
- **Halaman detail kursus**: checklist modul yang bisa ditandai selesai
  (progres bar update otomatis), info total durasi.
- **Kuis akhir 3 soal** per kursus: skor tersimpan sebagai skor terbaik,
  syarat kelulusan minimal 2 benar + semua modul selesai → badge "Siap
  Terapkan".
- **Progres total** di header (semua modul selesai / semua kursus).
- Progres tersimpan di **localStorage** + tombol reset.

## Untuk siapa demo ini?

Bimbel, pelatihan UMKM, komunitas, trainer internal perusahaan — semua
yang menjual/menyelenggarakan kursus dan butuh progres peserta tercatat.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animasi transisi halaman kursus)
- Lucide Icons

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # build produksi ke folder dist/
```

## Catatan

- Seluruh kursus & soal adalah data contoh yang disimpan di localStorage
  browser — tidak ada backend sungguhan.
- Dibuat sebagai concept demo portofolio oleh
  [Agni Miftah Fauzi](https://github.com/Atazyyy).
