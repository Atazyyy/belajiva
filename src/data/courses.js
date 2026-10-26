export const LEVELS = ["Pemula", "Menengah"];

export const COURSES = [
  {
    id: "spreadsheet-usaha",
    title: "Spreadsheet untuk Pencatatan Usaha",
    mentor: "Kak Salsa",
    level: "Pemula",
    color: "violet",
    desc: "Rapikan pembukuan harian pakai spreadsheet: dari catatan jual-beli sampai rekap bulanan otomatis.",
    modules: [
      { title: "Struktur sheet: apa yang dicatat & kapan", menit: 8 },
      { title: "Rumus SUM, IF, dan format rupiah", menit: 12 },
      { title: "Rekap otomatis per bulan & kategori", menit: 10 },
      { title: "Template siap pakai + studi kasus warung", menit: 9 },
    ],
    quiz: [
      {
        q: "Rumus untuk menjumlahkan kolom penjualan C2 sampai C31 adalah…",
        options: ["=JUMLAH(C2:C31)", "=SUM(C2:C31)", "=TOTAL(C2+C31)", "=ADD(C2:C31)"],
        answer: 1,
      },
      {
        q: "Supaya rekap bulanan otomatis, yang perlu dipakai adalah…",
        options: [
          "Salin manual tiap akhir bulan",
          "Filter warna sel",
          "Fungsi SUMIF berdasarkan kategori/bulan",
          "Tulis ulang datanya",
        ],
        answer: 2,
      },
      {
        q: "Format angka agar tampil 'Rp15.000' paling tepat adalah…",
        options: ["Format currency/rupiah", "Bold + tulis Rp manual", "Merge cell", "Wrap text"],
        answer: 0,
      },
    ],
  },
  {
    id: "copywriting-ig",
    title: "Copywriting Instagram yang Jualan",
    mentor: "Mas Reza",
    level: "Pemula",
    color: "fuchsia",
    desc: "Buat caption yang bikin orang berhenti scroll lalu checkout — formula AIDA versi sederhana.",
    modules: [
      { title: "Kenapa caption kamu di-skip (dan solusinya)", menit: 7 },
      { title: "Formula AIDA dengan bahasa sehari-hari", menit: 11 },
      { title: "Call-to-action yang tidak kaku", menit: 8 },
      { title: "10 template caption siap isi", menit: 10 },
    ],
    quiz: [
      {
        q: "Urutan AIDA yang benar adalah…",
        options: [
          "Attention → Interest → Desire → Action",
          "Action → Interest → Attention → Desire",
          "Interest → Action → Desire → Attention",
          "Desire → Attention → Interest → Action",
        ],
        answer: 0,
      },
      {
        q: "Hook yang bagus untuk 1 baris pertama caption adalah…",
        options: [
          "Selamat pagi semua 🙏",
          "Promo! Promo! Promo!",
          "Pertanyaan/masalah yang dirasakan pembeli",
          "Logo dan alamat toko",
        ],
        answer: 2,
      },
      {
        q: "CTA yang efektif dan spesifik adalah…",
        options: ["Terima kasih", "DM kata 'MAU' sekarang", "Semangat ya!", "Kami melayani dengan sepenuh hati"],
        answer: 1,
      },
    ],
  },
  {
    id: "foto-produk-hp",
    title: "Fotografi Produk Pakai HP",
    mentor: "Kak Mirna",
    level: "Pemula",
    color: "amber",
    desc: "Foto produk kayak katalog tanpa kamera mahal: cahaya jendela, sudut, dan editing gratis.",
    modules: [
      { title: "Aturan cahaya: dekat jendela, jam terbaik", menit: 9 },
      { title: "3 sudut wajib untuk semua produk", menit: 8 },
      { title: "Background murah: kertas, kain, kayu", menit: 7 },
      { title: "Editing HP: brightness, kontras, crop", menit: 11 },
    ],
    quiz: [
      {
        q: "Sumber cahaya terbaik untuk foto produk gratis adalah…",
        options: ["Lampu kuning kamar", "Cahaya jendela pagi", "Flash HP langsung", "Lampu neon"],
        answer: 1,
      },
      {
        q: "Prinsip sudut yang direkomendasikan modul ini adalah…",
        options: [
          "Satu sudut untuk semua produk",
          "3 sudut wajib: frontal, detail, suasana",
          "Selalu dari atas",
          "Selalu dari bawah",
        ],
        answer: 1,
      },
      {
        q: "Background yang aman untuk katalog rapi adalah…",
        options: [
          "Motif ramai bertabrakan",
          "Spanduk toko",
          "Polos (kertas/kain) yang tidak bersaing dengan produk",
          "Langsung dari meja kerja",
        ],
        answer: 2,
      },
    ],
  },
  {
    id: "bookkeeping-pemula",
    title: "Pembukuan Sederhana Tanpa Ribet",
    mentor: "Bu Laras",
    level: "Menengah",
    color: "sky",
    desc: "Pisahkan uang usaha & pribadi, catat hutang-piutang, dan kenali kapan usahamu untung.",
    modules: [
      { title: "Rekening terpisah: kenapa & cara mulai", menit: 8 },
      { title: "Mencatat hutang & piutang pelanggan", menit: 12 },
      { title: "3 laporan mini wajib tiap bulan", menit: 11 },
      { title: "Tanda-tanda usaha sehat vs berbahaya", menit: 9 },
    ],
    quiz: [
      {
        q: "Langkah pertama pembukuan yang sehat adalah…",
        options: [
          "Membeli software mahal",
          "Memisahkan rekening usaha dan pribadi",
          "Menyewa akuntan penuh waktu",
          "Menghafal jurnal",
        ],
        answer: 1,
      },
      {
        q: "Piutang adalah…",
        options: [
          "Uang yang kita terima duluan",
          "Uang pelanggan yang belum dibayar ke kita",
          "Modal awal usaha",
          "Diskon pembelian",
        ],
        answer: 1,
      },
      {
        q: "Laba kotor dihitung dengan cara…",
        options: [
          "Omzet − modal pokok penjualan",
          "Omzet + gaji",
          "Modal − omzet",
          "Omzet − semua pengeluaran termasuk gaji",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "cs-wa-profesional",
    title: "Customer Service WhatsApp yang Membantu",
    mentor: "Kak Salsa",
    level: "Pemula",
    color: "emerald",
    desc: "Balas chat cepat, jelas, dan menutup penjualan — plus template balasan untuk 8 situasi umum.",
    modules: [
      { title: "Peta pesan: pertanyaan yang 90% berulang", menit: 7 },
      { title: "Struktur balasan: sapaan → jawaban → CTA", menit: 9 },
      { title: "Menolak dengan sopan (stok habis, harga tetap)", menit: 8 },
      { title: "Template balasan siap pakai", menit: 12 },
    ],
    quiz: [
      {
        q: "Struktur balasan yang diajarkan modul ini adalah…",
        options: [
          "Sapaan → jawaban → langkah berikutnya",
          "Langsung harga saja",
          "Stiker dulu, baru jawab besok",
          "Jawab panjang lebar tanpa arah",
        ],
        answer: 0,
      },
      {
        q: "Stok habis — respons terbaik adalah…",
        options: [
          "Dibiarkan read",
          "Bilang 'habis' saja",
          "Tawarkan alternatif + catat sebagai pelanggan potensial",
          "Bilang stok datang besok (padahal tidak pasti)",
        ],
        answer: 2,
      },
      {
        q: "Waktu balas ideal untuk chat penjualan adalah…",
        options: ["< 1 jam di jam kerja", "Besok pagi", "Kapan pun saya ingat", "Hanya akhir bulan"],
        answer: 0,
      },
    ],
  },
];

export const courseById = (id) => COURSES.find((c) => c.id === id);

export const totalMenit = (course) =>
  course.modules.reduce((a, m) => a + m.menit, 0);
