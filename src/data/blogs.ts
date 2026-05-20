export type Blog = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  content: {
    heading: string;
    paragraphs?: string[];
    list?: string[];
  }[];
};

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "sistem-logistik-digital",
    title: "Sistem Logistik Digital: Cara Membuat Operasional Lebih Efisien",
    excerpt:
      "Pelajari bagaimana sistem digital membantu bisnis logistik memantau pengiriman, armada, dan laporan operasional.",
    category: "Digital Transformation",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    date: "19 Mei 2026",
    readTime: "7 min read",
    author: "Revormasi",
    content: [
      {
        heading: "Mengapa topik ini penting?",
        paragraphs: [
          "Bisnis logistik membutuhkan proses yang cepat, rapi, dan mudah dipantau agar operasional berjalan lebih efisien.",
          "Dengan sistem digital, tim bisa mengurangi pekerjaan manual dan mendapatkan data yang lebih jelas.",
        ],
      },
      {
        heading: "Manfaat utama untuk bisnis",
        list: [
          "Tracking pengiriman lebih mudah dipantau.",
          "Laporan operasional lebih cepat dibuat.",
          "Pelanggan mendapatkan update lebih jelas.",
          "Tim internal bekerja dengan alur yang lebih rapi.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Digitalisasi membantu bisnis logistik terlihat lebih profesional dan siap berkembang.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "website-untuk-bisnis-logistik",
    title: "Kenapa Bisnis Logistik Membutuhkan Website Profesional?",
    excerpt:
      "Website membantu bisnis logistik terlihat lebih kredibel, mudah ditemukan, dan lebih cepat menerima inquiry pelanggan.",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    date: "18 Mei 2026",
    readTime: "5 min read",
    author: "Revormasi",
    content: [
      {
        heading: "Mengapa website penting untuk bisnis logistik?",
        paragraphs: [
          "Website membantu bisnis logistik terlihat lebih profesional di mata calon pelanggan.",
          "Dengan website, informasi layanan, area pengiriman, kontak, dan portofolio bisnis bisa ditampilkan dengan lebih jelas.",
        ],
      },
      {
        heading: "Fitur yang sebaiknya ada",
        list: [
          "Halaman layanan pengiriman.",
          "Form inquiry atau permintaan quotation.",
          "Tombol WhatsApp langsung.",
          "Profil perusahaan dan keunggulan layanan.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Website bukan hanya media promosi, tetapi juga alat untuk membangun kepercayaan dan mendapatkan calon pelanggan baru.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "tracking-pengiriman-real-time",
    title: "Manfaat Tracking Pengiriman Real-Time untuk Pelanggan",
    excerpt:
      "Tracking real-time membantu pelanggan mendapatkan update pengiriman dengan lebih jelas dan cepat.",
    category: "Logistics",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1200&auto=format&fit=crop",
    date: "17 Mei 2026",
    readTime: "6 min read",
    author: "Revormasi",
    content: [
      {
        heading: "Kenapa tracking real-time dibutuhkan?",
        paragraphs: [
          "Pelanggan ingin mengetahui status pengiriman tanpa harus terus bertanya ke admin.",
          "Tracking real-time membuat proses komunikasi lebih transparan dan mengurangi beban customer service.",
        ],
      },
      {
        heading: "Manfaat tracking pengiriman",
        list: [
          "Status pengiriman lebih transparan.",
          "Pelanggan merasa lebih aman.",
          "Tim support lebih hemat waktu.",
          "Kendala pengiriman lebih cepat diketahui.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Tracking pengiriman membantu meningkatkan pengalaman pelanggan dan membuat bisnis terlihat lebih modern.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "dashboard-operasional-logistik",
    title: "Dashboard Operasional untuk Memantau Performa Bisnis Logistik",
    excerpt:
      "Dashboard membantu tim melihat data pengiriman, armada, stok, dan laporan dalam satu tempat.",
    category: "Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    date: "16 Mei 2026",
    readTime: "8 min read",
    author: "Revormasi",
    content: [
      {
        heading: "Apa itu dashboard operasional?",
        paragraphs: [
          "Dashboard operasional adalah tampilan data yang membantu tim memantau aktivitas bisnis dalam satu tempat.",
          "Untuk bisnis logistik, dashboard bisa menampilkan jumlah pengiriman, status armada, laporan harian, dan performa operasional.",
        ],
      },
      {
        heading: "Data yang bisa ditampilkan",
        list: [
          "Total pengiriman aktif.",
          "Pengiriman selesai dan tertunda.",
          "Performa armada atau driver.",
          "Laporan biaya operasional.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Dashboard membantu pemilik bisnis mengambil keputusan lebih cepat berdasarkan data yang mudah dibaca.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "otomatisasi-laporan-bisnis",
    title: "Otomatisasi Laporan Bisnis agar Tim Tidak Lagi Manual",
    excerpt:
      "Dengan otomatisasi laporan, bisnis bisa menghemat waktu dan membuat keputusan lebih cepat.",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    date: "15 Mei 2026",
    readTime: "4 min read",
    author: "Revormasi",
    content: [
      {
        heading: "Masalah laporan manual",
        paragraphs: [
          "Laporan manual sering memakan waktu dan rawan kesalahan input.",
          "Jika data tersebar di banyak file, tim akan kesulitan melihat kondisi bisnis secara cepat.",
        ],
      },
      {
        heading: "Keuntungan otomatisasi laporan",
        list: [
          "Menghemat waktu kerja tim.",
          "Mengurangi kesalahan input data.",
          "Laporan lebih mudah dianalisis.",
          "Pemilik bisnis bisa mengambil keputusan lebih cepat.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Otomatisasi laporan membuat proses bisnis lebih efisien dan membantu tim fokus pada pekerjaan yang lebih penting.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "integrasi-whatsapp-website",
    title: "Integrasi WhatsApp di Website untuk Meningkatkan Inquiry",
    excerpt:
      "Tombol WhatsApp membantu calon pelanggan langsung terhubung dengan bisnis tanpa proses yang rumit.",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    date: "14 Mei 2026",
    readTime: "5 min read",
    author: "Revormasi",
    content: [
      {
        heading: "Kenapa WhatsApp penting di website?",
        paragraphs: [
          "Banyak pelanggan lebih nyaman menghubungi bisnis melalui WhatsApp karena cepat dan familiar.",
          "Dengan tombol WhatsApp, calon pelanggan bisa langsung bertanya tanpa harus mengisi proses yang panjang.",
        ],
      },
      {
        heading: "Penempatan tombol WhatsApp yang efektif",
        list: [
          "Di hero section.",
          "Di halaman layanan.",
          "Di bagian CTA akhir.",
          "Di halaman kontak.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Integrasi WhatsApp dapat membantu meningkatkan inquiry dan mempercepat komunikasi dengan calon pelanggan.",
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "company-profile-modern",
    title: "Ciri Website Company Profile Modern untuk Bisnis Profesional",
    excerpt:
      "Website company profile yang baik harus jelas, cepat, responsive, dan mampu membangun kepercayaan sejak halaman pertama.",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    date: "13 Mei 2026",
    readTime: "6 min read",
    author: "Revormasi",

    content: [
      {
        heading: "Apa itu website company profile modern?",
        paragraphs: [
          "Website company profile modern adalah website yang tidak hanya menampilkan informasi perusahaan, tetapi juga membangun kepercayaan sejak halaman pertama.",
          "Tampilan yang rapi, copywriting yang jelas, dan struktur halaman yang mudah dipahami akan membantu calon pelanggan mengenal bisnis dengan lebih cepat.",
        ],
      },
      {
        heading: "Elemen penting yang harus ada",
        list: [
          "Headline yang menjelaskan value bisnis.",
          "Informasi layanan yang mudah dipahami.",
          "Portofolio atau studi kasus.",
          "CTA yang jelas seperti WhatsApp atau form kontak.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Company profile modern membantu bisnis terlihat lebih profesional dan memudahkan calon pelanggan mengambil keputusan.",
        ],
      },
    ],
  },
  {
    id: 8,
    slug: "landing-page-yang-menghasilkan-leads",
    title: "Cara Membuat Landing Page yang Lebih Efektif Menghasilkan Leads",
    excerpt:
      "Landing page yang fokus pada headline, benefit, CTA, dan social proof dapat membantu bisnis mendapatkan lebih banyak calon pelanggan.",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    date: "12 Mei 2026",
    readTime: "7 min read",
    author: "Revormasi",

    content: [
      {
        heading: "Kenapa landing page harus fokus?",
        paragraphs: [
          "Landing page yang baik harus punya satu tujuan utama, misalnya membuat pengunjung menghubungi bisnis, mengisi form, atau meminta penawaran.",
          "Jika terlalu banyak informasi yang tidak penting, pengunjung bisa bingung dan akhirnya tidak melakukan aksi apa pun.",
        ],
      },
      {
        heading: "Bagian penting dalam landing page",
        list: [
          "Headline yang kuat dan jelas.",
          "Benefit layanan yang mudah dibaca.",
          "Testimonial atau bukti kepercayaan.",
          "CTA yang terlihat dan mudah diklik.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Landing page yang fokus dapat membantu bisnis mendapatkan lebih banyak leads dari pengunjung yang tepat.",
        ],
      },
    ],
  },
  {
    id: 9,
    slug: "crm-sederhana-untuk-bisnis",
    title: "Kenapa Bisnis Kecil Mulai Membutuhkan CRM Sederhana?",
    excerpt:
      "CRM membantu bisnis mencatat prospek, follow-up pelanggan, riwayat komunikasi, dan peluang penjualan dengan lebih rapi.",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    date: "11 Mei 2026",
    readTime: "5 min read",
    author: "Revormasi",

    content: [
      {
        heading: "Kenapa bisnis kecil butuh CRM?",
        paragraphs: [
          "Saat jumlah calon pelanggan mulai bertambah, mencatat semuanya secara manual bisa membuat banyak peluang terlewat.",
          "CRM sederhana membantu bisnis menyimpan data prospek, riwayat komunikasi, dan status follow-up dengan lebih rapi.",
        ],
      },
      {
        heading: "Manfaat CRM sederhana",
        list: [
          "Data pelanggan lebih terorganisir.",
          "Follow-up tidak mudah terlupakan.",
          "Tim bisa melihat status prospek dengan jelas.",
          "Peluang penjualan lebih mudah dipantau.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "CRM sederhana membantu bisnis kecil bekerja lebih terstruktur tanpa harus langsung memakai sistem yang terlalu kompleks.",
        ],
      },
    ],
  },
  {
    id: 10,
    slug: "desain-ui-saas-untuk-website-bisnis",
    title: "Tren Desain UI SaaS untuk Website Bisnis Modern",
    excerpt:
      "Desain bergaya SaaS membuat website terlihat lebih clean, profesional, dan cocok untuk bisnis digital.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    date: "10 Mei 2026",
    readTime: "6 min read",
    author: "Revormasi",

    content: [
      {
        heading: "Kenapa desain SaaS terlihat profesional?",
        paragraphs: [
          "Desain bergaya SaaS biasanya menggunakan layout yang bersih, spacing yang lega, typography yang rapi, dan visual dashboard yang modern.",
          "Gaya ini cocok untuk website bisnis karena memberikan kesan digital, terpercaya, dan mudah dipahami.",
        ],
      },
      {
        heading: "Ciri desain UI SaaS",
        list: [
          "Layout clean dengan banyak white space.",
          "Card section yang rapi.",
          "CTA yang jelas.",
          "Ilustrasi atau mockup dashboard yang modern.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Desain UI SaaS bisa membuat website bisnis terlihat lebih modern dan meningkatkan kesan profesional di mata calon pelanggan.",
        ],
      },
    ],
  },
  {
    id: 11,
    slug: "glassmorphism-untuk-website-modern",
    title: "Glassmorphism: Cara Membuat Tampilan Website Lebih Premium",
    excerpt:
      "Efek transparan, blur, dan shadow halus bisa membuat tampilan website terasa lebih modern tanpa terlihat berlebihan.",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    date: "9 Mei 2026",
    readTime: "4 min read",
    author: "Revormasi",

    content: [
      {
        heading: "Apa itu glassmorphism?",
        paragraphs: [
          "Glassmorphism adalah gaya desain yang menggunakan efek transparan, blur, border halus, dan shadow lembut untuk menciptakan tampilan seperti kaca.",
          "Jika digunakan dengan tepat, efek ini bisa membuat website terlihat lebih premium tanpa mengganggu keterbacaan konten.",
        ],
      },
      {
        heading: "Tips menggunakan glassmorphism",
        list: [
          "Gunakan background yang tidak terlalu ramai.",
          "Pastikan teks tetap mudah dibaca.",
          "Jangan gunakan efek blur secara berlebihan.",
          "Kombinasikan dengan spacing dan border yang halus.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Glassmorphism cocok digunakan sebagai aksen visual, terutama untuk card, hero section, atau dashboard modern.",
        ],
      },
    ],
  },
  {
    id: 12,
    slug: "kecepatan-website-dan-konversi",
    title: "Pengaruh Kecepatan Website terhadap Kepercayaan dan Konversi",
    excerpt:
      "Website yang lambat bisa membuat pengunjung pergi sebelum membaca layanan yang ditawarkan bisnis.",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    date: "8 Mei 2026",
    readTime: "5 min read",
    author: "Revormasi",

    content: [
      {
        heading: "Kenapa kecepatan website penting?",
        paragraphs: [
          "Website yang lambat bisa membuat pengunjung pergi sebelum membaca informasi layanan yang ditawarkan.",
          "Kecepatan website juga memengaruhi pengalaman pengguna, kepercayaan, dan peluang konversi dari calon pelanggan.",
        ],
      },
      {
        heading: "Cara meningkatkan performa website",
        list: [
          "Gunakan gambar yang sudah dikompres.",
          "Kurangi script yang tidak dibutuhkan.",
          "Gunakan struktur HTML dan CSS yang rapi.",
          "Optimalkan loading asset seperti font dan image.",
        ],
      },
      {
        heading: "Kesimpulan",
        paragraphs: [
          "Website yang cepat membantu bisnis memberikan pengalaman lebih baik dan meningkatkan peluang pengunjung menjadi pelanggan.",
        ],
      },
    ],
  },
];
