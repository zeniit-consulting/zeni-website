export type CaseStudy = {
  slug: string;

  company: {
    name: string;
    logoText: string;
    industry: string;
    size: string;
    founded: string;
    productsUsed: string[];
  };

  title: string;
  client: string;
  category: string;
  image: string;
  excerpt: string;

  testimonial: {
    quote: string;
    person: string;
    position: string;
    avatar?: string;
  };

  stats: {
    value: string;
    label: string;
  }[];

  sidebar: {
    label: string;
    value: string;
  }[];

  sections: {
    title: string;
    content: string[];
    image?: string;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "logistics-workflow-automation",

    company: {
      name: "Nusa Logistics",
      logoText: "NUSA LOGISTICS",
      industry: "Supply Chain & Logistics",
      size: "50–200 employees",
      founded: "2018",
      productsUsed: [
        "Workflow Automation",
        "Operational Dashboard",
        "Reporting System",
      ],
    },

    title:
      "Nusa Logistics tingkatkan visibilitas pengiriman dan percepat reporting operasional dengan sistem automation wwkwkwkwkwkwk eurueyrueyrueyriueyuryueyrueiyruieyruiyeuriyeuiyrueiyuiyruiyeui",

    client: "Supply Chain & Logistics",

    category: "AUTOMATION SYSTEM",

    image: "/images/studycase/logistics.webp",

    excerpt:
      "Sistem automation membantu tim operasional memantau pengiriman, laporan, dan alert dalam satu dashboard terpusat.",

    testimonial: {
      quote:
        "Sebelumnya proses reporting membutuhkan banyak komunikasi manual. Setelah sistem ini berjalan, tim kami bisa mengambil keputusan lebih cepat.",
      person: "Operations Manager",
      position: "Nusa Logistics",
      avatar: "/images/studycase/logistics.webp",
    },

    stats: [
      {
        value: "70%",
        label: "waktu reporting lebih cepat",
      },
      {
        value: "100%",
        label: "tracking pengiriman terpusat",
      },
      {
        value: "3x",
        label: "visibilitas operasional meningkat",
      },
    ],

    sidebar: [
      {
        label: "Perusahaan",
        value: "Nusa Logistics",
      },
      {
        label: "Industri",
        value: "Supply Chain & Logistics",
      },
      {
        label: "Ukuran Perusahaan",
        value: "50–200 karyawan",
      },
      {
        label: "Tahun Berdiri",
        value: "2018",
      },
      {
        label: "Produk yang Digunakan",
        value: "Workflow Automation, Operational Dashboard",
      },
    ],

    sections: [
      {
        title: "Tentang Perusahaan",
        content: [
          "Nusa Logistics adalah perusahaan logistik yang membantu bisnis mengelola distribusi barang, monitoring pengiriman, dan koordinasi operasional lintas tim.",
          "Seiring meningkatnya volume pengiriman, perusahaan membutuhkan sistem yang lebih rapi untuk memantau status pengiriman, menyusun laporan, dan memberikan informasi operasional secara real-time.",
        ],
      },
      {
        title: "Tantangan Bisnis",
        content: [
          "Sebelumnya, proses tracking pengiriman masih dilakukan secara manual melalui spreadsheet dan komunikasi antar tim. Hal ini membuat data sering tidak sinkron dan membutuhkan waktu lebih lama untuk diperbarui.",
          "Tim operasional juga membutuhkan waktu tambahan untuk membuat laporan harian karena informasi tersebar di beberapa sumber yang berbeda.",
        ],
        image: "/images/studycase/logistics.webp",
      },
      {
        title: "Zeni Consulting sebagai solusi",
        content: [
          "Sistem automation dibangun untuk menghubungkan proses tracking, alert operasional, dan reporting ke dalam satu dashboard terpusat.",
          "Dengan sistem ini, tim dapat melihat status pengiriman, menerima notifikasi penting, dan menghasilkan laporan tanpa harus mengumpulkan data secara manual.",
        ],
        image: "/images/studycase/logistics.webp",
      },
      {
        title: "Hasil",
        content: [
          "Setelah sistem diterapkan, waktu reporting berkurang hingga 70% dan visibilitas pengiriman meningkat secara signifikan.",
          "Tim operasional dapat bekerja lebih cepat, lebih terorganisir, dan memiliki data yang lebih akurat untuk mendukung pengambilan keputusan.",
        ],
      },
    ],
  },

  {
  slug: "multi-branch-pos-integration",

  company: {
    name: "Rasa Group",
    logoText: "RASA GROUP",
    industry: "Retail & F&B",
    size: "100–300 employees",
    founded: "2016",
    productsUsed: [
      "POS Integration",
      "Inventory Sync",
      "Operational Dashboard",
    ],
  },

  title:
    "Rasa Group tingkatkan akurasi stok dan sinkronisasi penjualan multi-cabang dengan sistem POS terintegrasi",

  client: "Retail & F&B",

  category: "SYSTEM INTEGRATION",

  image: "/images/studycase/pos.webp",

  excerpt:
    "Sistem integrasi POS membantu Rasa Group menyatukan data penjualan, stok, dan performa cabang secara real-time.",

  testimonial: {
    quote:
      "Sebelumnya kami sering membutuhkan waktu lama untuk mencocokkan data penjualan dan stok antar cabang. Setelah sistem ini berjalan, semua data lebih mudah dipantau.",
    person: "Branch Operations Lead",
    position: "Rasa Group",
    avatar: "/images/studycase/pos.webp",
  },

  stats: [
    {
      value: "95%",
      label: "akurasi stok meningkat",
    },
    {
      value: "2x",
      label: "monitoring cabang lebih cepat",
    },
    {
      value: "100%",
      label: "data POS tersinkronisasi",
    },
  ],

  sidebar: [
    {
      label: "Perusahaan",
      value: "Rasa Group",
    },
    {
      label: "Industri",
      value: "Retail & F&B",
    },
    {
      label: "Ukuran Perusahaan",
      value: "100–300 karyawan",
    },
    {
      label: "Tahun Berdiri",
      value: "2016",
    },
    {
      label: "Produk yang Digunakan",
      value: "POS Integration, Inventory Sync, Operational Dashboard",
    },
  ],

  sections: [
    {
      title: "Tentang Perusahaan",
      content: [
        "Rasa Group adalah bisnis retail dan F&B yang mengelola beberapa cabang dengan kebutuhan operasional harian yang tinggi.",
        "Dengan jumlah transaksi yang terus meningkat, perusahaan membutuhkan sistem yang mampu menyatukan data penjualan, stok, dan performa cabang dalam satu platform yang mudah dipantau.",
      ],
    },
    {
      title: "Tantangan Bisnis",
      content: [
        "Sebelumnya, data penjualan dan stok dari setiap cabang masih direkap secara terpisah. Hal ini membuat proses pengecekan stok dan laporan penjualan membutuhkan waktu lebih lama.",
        "Perbedaan data antar cabang juga membuat tim operasional sulit mendapatkan gambaran kondisi bisnis secara real-time.",
      ],
      image: "/images/studycase/pos.webp",
    },
    {
      title: "Zeni Consulting sebagai solusi",
      content: [
        "Sistem POS terintegrasi dikembangkan untuk menyatukan data transaksi, stok barang, dan laporan cabang ke dalam satu dashboard terpusat.",
        "Dengan integrasi ini, tim dapat memantau performa cabang, melihat pergerakan stok, dan membuat keputusan operasional dengan data yang lebih akurat.",
      ],
      image: "/images/studycase/pos.webp",
    },
    {
      title: "Hasil",
      content: [
        "Setelah sistem diterapkan, akurasi stok meningkat hingga 95% dan proses monitoring cabang menjadi dua kali lebih cepat.",
        "Tim manajemen dapat melihat kondisi operasional secara real-time tanpa harus menunggu rekap manual dari setiap cabang.",
      ],
    },
  ],
},

{
  slug: "recruitment-management-dashboard",

  company: {
    name: "Talenta People",
    logoText: "TALENTA PEOPLE",
    industry: "Human Resources",
    size: "50–150 employees",
    founded: "2019",
    productsUsed: [
      "Recruitment Dashboard",
      "Applicant Tracking",
      "Interview Scheduling",
    ],
  },

  title:
    "Talenta People sederhanakan proses rekrutmen dan monitoring kandidat dengan dashboard internal",

  client: "Human Resources",

  category: "INTERNAL DASHBOARD",

  image: "/images/studycase/recruitment.webp",

  excerpt:
    "Dashboard rekrutmen membantu tim HR mengelola kandidat, jadwal interview, dan status hiring dalam satu sistem terpusat.",

  testimonial: {
    quote:
      "Proses hiring sebelumnya tersebar di spreadsheet dan chat. Dengan dashboard ini, status kandidat jauh lebih mudah dipantau oleh seluruh tim.",
    person: "HR Manager",
    position: "Talenta People",
    avatar: "/images/studycase/recruitment.webp",
  },

  stats: [
    {
      value: "60%",
      label: "proses administrasi berkurang",
    },
    {
      value: "2x",
      label: "tracking kandidat lebih cepat",
    },
    {
      value: "100%",
      label: "pipeline rekrutmen terpusat",
    },
  ],

  sidebar: [
    {
      label: "Perusahaan",
      value: "Talenta People",
    },
    {
      label: "Industri",
      value: "Human Resources",
    },
    {
      label: "Ukuran Perusahaan",
      value: "50–150 karyawan",
    },
    {
      label: "Tahun Berdiri",
      value: "2019",
    },
    {
      label: "Produk yang Digunakan",
      value: "Recruitment Dashboard, Applicant Tracking",
    },
  ],

  sections: [
    {
      title: "Tentang Perusahaan",
      content: [
        "Talenta People adalah perusahaan yang membantu bisnis mengelola kebutuhan sumber daya manusia, termasuk proses rekrutmen dan manajemen kandidat.",
        "Seiring meningkatnya kebutuhan hiring, tim HR membutuhkan sistem yang lebih rapi untuk memantau kandidat, jadwal interview, dan status setiap proses rekrutmen.",
      ],
    },
    {
      title: "Tantangan Bisnis",
      content: [
        "Sebelumnya, proses rekrutmen masih banyak bergantung pada spreadsheet, chat internal, dan update manual dari beberapa anggota tim.",
        "Kondisi ini membuat status kandidat sulit dipantau secara konsisten dan meningkatkan risiko informasi terlewat selama proses hiring.",
      ],
      image: "/images/studycase/recruitment.webp",
    },
    {
      title: "Zeni Consulting sebagai solusi",
      content: [
        "Dashboard rekrutmen dibangun untuk membantu tim HR mengelola kandidat, melihat pipeline hiring, dan mengatur jadwal interview dalam satu sistem.",
        "Setiap kandidat dapat dipantau berdasarkan status, tahapan seleksi, dan catatan internal sehingga koordinasi tim menjadi lebih terstruktur.",
      ],
      image: "/images/studycase/recruitment.webp",
    },
    {
      title: "Hasil",
      content: [
        "Setelah dashboard digunakan, proses administrasi rekrutmen berkurang hingga 60% dan tracking kandidat menjadi dua kali lebih cepat.",
        "Tim HR dapat bekerja lebih terorganisir dan memiliki visibilitas yang lebih baik terhadap seluruh pipeline rekrutmen.",
      ],
    },
  ],
},

{
  slug: "ai-customer-support-assistant",

  company: {
    name: "SupportHub Indonesia",
    logoText: "SUPPORTHUB",
    industry: "Customer Service",
    size: "30–100 employees",
    founded: "2020",
    productsUsed: [
      "AI Support Assistant",
      "WhatsApp Integration",
      "Knowledge Base Automation",
    ],
  },

  title:
    "SupportHub Indonesia percepat respon pelanggan dengan AI assistant terintegrasi WhatsApp",

  client: "Customer Service",

  category: "AI AUTOMATION",

  image: "/images/studycase/customer-support.webp",

  excerpt:
    "AI assistant membantu tim support menjawab pertanyaan berulang, mengakses knowledge base, dan mempercepat respon pelanggan.",

  testimonial: {
    quote:
      "Pertanyaan pelanggan yang berulang sekarang bisa ditangani lebih cepat. Tim support kami bisa fokus ke kasus yang lebih penting.",
    person: "Customer Support Lead",
    position: "SupportHub Indonesia",
    avatar: "/images/studycase/customer-support.webp",
  },

  stats: [
    {
      value: "45%",
      label: "beban pertanyaan repetitif berkurang",
    },
    {
      value: "2.5x",
      label: "respon awal lebih cepat",
    },
    {
      value: "24/7",
      label: "dukungan otomatis tersedia",
    },
  ],

  sidebar: [
    {
      label: "Perusahaan",
      value: "SupportHub Indonesia",
    },
    {
      label: "Industri",
      value: "Customer Service",
    },
    {
      label: "Ukuran Perusahaan",
      value: "30–100 karyawan",
    },
    {
      label: "Tahun Berdiri",
      value: "2020",
    },
    {
      label: "Produk yang Digunakan",
      value: "AI Support Assistant, WhatsApp Integration",
    },
  ],

  sections: [
    {
      title: "Tentang Perusahaan",
      content: [
        "SupportHub Indonesia membantu bisnis mengelola layanan pelanggan melalui berbagai channel komunikasi digital.",
        "Dengan meningkatnya volume pertanyaan pelanggan, perusahaan membutuhkan solusi yang mampu membantu tim support menjawab pertanyaan berulang secara lebih cepat dan konsisten.",
      ],
    },
    {
      title: "Tantangan Bisnis",
      content: [
        "Tim support sering menerima pertanyaan yang sama setiap hari, mulai dari informasi layanan, status pesanan, hingga panduan penggunaan produk.",
        "Banyaknya pertanyaan repetitif membuat waktu respon menjadi lebih lambat dan mengurangi fokus tim terhadap kasus pelanggan yang lebih kompleks.",
      ],
      image: "/images/studycase/customer-support.webp",
    },
    {
      title: "Zeni Consulting sebagai solusi",
      content: [
        "AI assistant dikembangkan dan diintegrasikan dengan WhatsApp serta knowledge base internal untuk membantu menjawab pertanyaan pelanggan secara otomatis.",
        "Sistem ini dirancang untuk memahami pertanyaan umum, memberikan jawaban berdasarkan data internal, dan membantu mengarahkan pelanggan ke informasi yang relevan.",
      ],
      image: "/images/studycase/customer-support.webp",
    },
    {
      title: "Hasil",
      content: [
        "Setelah AI assistant digunakan, beban pertanyaan repetitif berkurang hingga 45% dan respon awal pelanggan menjadi 2.5 kali lebih cepat.",
        "Tim support dapat lebih fokus menangani kasus yang membutuhkan perhatian manusia, sementara pertanyaan umum tetap terlayani secara konsisten.",
      ],
    },
  ],
},

];
