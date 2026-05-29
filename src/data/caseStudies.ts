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
  key: string;
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
    labelKey: string;
    valueKey: string;
  }[];

  sections: {
    titleKey: string;
    contentKeys: string[];
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
    key: "automation-system",
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
        labelKey: "nusa.sidebar.company.label",
        valueKey: "nusa.sidebar.company.value",
      },
      {
        labelKey: "nusa.sidebar.industry.label",
        valueKey: "nusa.sidebar.industry.value",
      },
      {
        labelKey: "nusa.sidebar.size.label",
        valueKey: "nusa.sidebar.size.value",
      },
      {
        labelKey: "nusa.sidebar.founded.label",
        valueKey: "nusa.sidebar.founded.value",
      },
      {
        labelKey: "nusa.sidebar.product.label",
        valueKey: "nusa.sidebar.product.value",
      },
    ],

    sections: [
      {
        titleKey: "nusa.about.title",
        contentKeys: ["nusa.about.p1", "nusa.about.p2"],
      },
      {
        titleKey: "nusa.challenge.title",
        contentKeys: ["nusa.challenge.p1", "nusa.challenge.p2"],
        image: "/images/studycase/logistics.webp",
      },
      {
        titleKey: "nusa.solution.title",
        contentKeys: ["nusa.solution.p1", "nusa.solution.p2"],
        image: "/images/studycase/logistics.webp",
      },
      {
        titleKey: "nusa.result.title",
        contentKeys: ["nusa.result.p1", "nusa.result.p2"],
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
    key: "system-integration",
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
        labelKey: "rasa.sidebar.company.label",
        valueKey: "rasa.sidebar.company.value",
      },
      {
        labelKey: "rasa.sidebar.industry.label",
        valueKey: "rasa.sidebar.industry.value",
      },
      {
        labelKey: "rasa.sidebar.size.label",
        valueKey: "rasa.sidebar.size.value",
      },
      {
        labelKey: "rasa.sidebar.founded.label",
        valueKey: "rasa.sidebar.founded.value",
      },
      {
        labelKey: "rasa.sidebar.product.label",
        valueKey: "rasa.sidebar.product.value",
      },
    ],

    sections: [
      {
        titleKey: "rasa.about.title",
        contentKeys: ["rasa.about.p1", "rasa.about.p2"],
      },
      {
        titleKey: "rasa.challenge.title",
        contentKeys: ["rasa.challenge.p1", "rasa.challenge.p2"],
        image: "/images/studycase/pos.webp",
      },
      {
        titleKey: "rasa.solution.title",
        contentKeys: ["rasa.solution.p1", "rasa.solution.p2"],
        image: "/images/studycase/pos.webp",
      },
      {
        titleKey: "rasa.result.title",
        contentKeys: ["rasa.result.p1", "rasa.result.p2"],
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
    key: "internal-dashboard",
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
        labelKey: "talenta.sidebar.company.label",
        valueKey: "talenta.sidebar.company.value",
      },
      {
        labelKey: "talenta.sidebar.industry.label",
        valueKey: "talenta.sidebar.industry.value",
      },
      {
        labelKey: "talenta.sidebar.size.label",
        valueKey: "talenta.sidebar.size.value",
      },
      {
        labelKey: "talenta.sidebar.founded.label",
        valueKey: "talenta.sidebar.founded.value",
      },
      {
        labelKey: "talenta.sidebar.product.label",
        valueKey: "talenta.sidebar.product.value",
      },
    ],

    sections: [
      {
        titleKey: "talenta.about.title",
        contentKeys: ["talenta.about.p1", "talenta.about.p2"],
      },
      {
        titleKey: "talenta.challenge.title",
        contentKeys: ["talenta.challenge.p1", "talenta.challenge.p2"],
        image: "/images/studycase/recruitment.webp",
      },
      {
        titleKey: "talenta.solution.title",
        contentKeys: ["talenta.solution.p1", "talenta.solution.p2"],
        image: "/images/studycase/recruitment.webp",
      },
      {
        titleKey: "talenta.result.title",
        contentKeys: ["talenta.result.p1", "talenta.result.p2"],
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
    key: "ai-automation",
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
    labelKey: "supporthub.sidebar.company.label",
    valueKey: "supporthub.sidebar.company.value",
  },
  {
    labelKey: "supporthub.sidebar.industry.label",
    valueKey: "supporthub.sidebar.industry.value",
  },
  {
    labelKey: "supporthub.sidebar.size.label",
    valueKey: "supporthub.sidebar.size.value",
  },
  {
    labelKey: "supporthub.sidebar.founded.label",
    valueKey: "supporthub.sidebar.founded.value",
  },
  {
    labelKey: "supporthub.sidebar.product.label",
    valueKey: "supporthub.sidebar.product.value",
  },
],

    sections: [
      {
        titleKey: "supporthub.about.title",
        contentKeys: ["supporthub.about.p1", "supporthub.about.p2"],
      },
      {
        titleKey: "supporthub.challenge.title",
        contentKeys: ["supporthub.challenge.p1", "supporthub.challenge.p2"],
        image: "/images/studycase/customer-support.webp",
      },
      {
        titleKey: "supporthub.solution.title",
        contentKeys: ["supporthub.solution.p1", "supporthub.solution.p2"],
        image: "/images/studycase/customer-support.webp",
      },
      {
        titleKey: "supporthub.result.title",
        contentKeys: ["supporthub.result.p1", "supporthub.result.p2"],
      },
    ],
  },
];
