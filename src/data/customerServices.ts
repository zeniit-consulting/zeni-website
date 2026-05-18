export type CustomerService = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };

  tabs: {
    id: string;
    label: string;
  }[];

  implementation: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    cta: string;
  };

  support: {
    eyebrow: string;
    title: string;
    description: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };

  accountManagement: {
    eyebrow: string;
    title: string;
    description: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };

  knowledgeCenter: {
    eyebrow: string;
    title: string;
    description: string;
    categories: {
      title: string;
      description: string;
    }[];
  };

  testimonials: {
    company: string;
    quote: string;
    name: string;
    role: string;
    image: string;
  }[];

  cta: {
    title: string;
    description: string;
  };
};
export const customerServices: CustomerService[] = [
  {
    hero: {
      eyebrow: "Customer Support & Success Zeni Konsulting",
      title:
        "Layanan customer service profesional untuk mendukung pertumbuhan bisnis Anda",
      description:
        "Kami membantu bisnis Anda memberikan pengalaman pelanggan yang cepat, responsif, dan terstruktur melalui support system, automation, dan knowledge base.",
    },

    tabs: [
      { id: "implementation", label: "Implementation & Training" },
      { id: "support", label: "Customer Support" },
      { id: "account", label: "Account Management" },
      { id: "knowledge", label: "Knowledge Center" },
    ],

    implementation: {
      eyebrow: "Implementation & Training",
      title: "Pendampingan implementasi sistem dari awal hingga siap digunakan",
      description:
        "Kami membantu proses setup, konfigurasi, dan training agar tim Anda dapat menggunakan sistem dengan lancar.",
      points: [
        "Training penggunaan sistem untuk tim internal",
        "Setup workflow sesuai kebutuhan bisnis",
        "Pendampingan onboarding hingga sistem siap berjalan",
      ],
      cta: "Konsultasi Sekarang",
    },

    support: {
      eyebrow: "Customer Support",
      title: "Tim support yang responsif dan siap membantu Anda",
      description:
        "Dapatkan bantuan cepat untuk kendala teknis, pertanyaan penggunaan, dan kebutuhan operasional harian.",
      faqs: [
        {
          question: "Langsung terhubung melalui live chat",
          answer:
            "Dapatkan bantuan langsung untuk menyelesaikan kendala dengan cepat melalui live chat.",
        },
        {
          question: "Support tersedia pada hari kerja",
          answer:
            "Tim kami siap membantu kebutuhan operasional Anda selama jam kerja.",
        },
        {
          question: "Respon cepat untuk kendala prioritas",
          answer:
            "Kami membantu menangani kendala penting agar operasional bisnis tetap berjalan.",
        },
      ],
    },

    accountManagement: {
      eyebrow: "Account Management",
      title: "Konsultasi personal dengan account manager",
      description:
        "Dapatkan arahan strategis dan rekomendasi penggunaan sistem sesuai kebutuhan bisnis Anda.",
      faqs: [
        {
          question: "Account manager yang mudah dihubungi",
          answer:
            "Account manager membantu memastikan penggunaan sistem berjalan sesuai tujuan bisnis.",
        },
        {
          question: "Business check-in secara berkala",
          answer:
            "Kami melakukan evaluasi berkala untuk memahami kebutuhan dan perkembangan bisnis Anda.",
        },
      ],
    },

    knowledgeCenter: {
      eyebrow: "Knowledge Center",
      title: "Panduan produk yang mudah diakses kapan saja",
      description:
        "Akses dokumentasi, panduan penggunaan, artikel bantuan, dan resource edukasi untuk mendukung tim Anda.",
      categories: [
        {
          title: "Guidebook",
          description: "Panduan lengkap penggunaan sistem dan fitur utama.",
        },
        {
          title: "Blog",
          description:
            "Artikel edukatif seputar customer service dan bisnis digital.",
        },
        {
          title: "Release Notes",
          description: "Informasi pembaruan fitur dan peningkatan sistem.",
        },
      ],
    },

    testimonials: [
      {
        company: "SCG",
        quote:
          "Sistem support sangat membantu tim kami dalam menangani kebutuhan operasional dengan lebih cepat.",
        name: "Indah Limasari Nabati Tawan",
        role: "HRIS Supervisor",
        image: "/images/customer-service/testimonial-1.webp",
      },
      {
        company: "PERMEDIA",
        quote:
          "Urusan layanan pelanggan jadi lebih terstruktur dan setiap kendala bisa ditangani dengan cepat.",
        name: "Bambang Sugiyanto",
        role: "Tax Officer",
        image: "/images/customer-service/testimonial-2.webp",
      },
      {
        company: "Narasi",
        quote:
          "Komunikasi dengan tim support jadi lebih mudah dan responsif untuk kebutuhan harian.",
        name: "Laode Khairullah Dahlan",
        role: "Head of HR",
        image: "/images/customer-service/testimonial-3.webp",
      },
      {
        company: "Support Team",
        quote:
          "Sistem support sangat membantu tim kami dalam menangani kebutuhan operasional dengan lebih cepat.",
        name: "Indah Limasari Nabati Tawan",
        role: "HRIS Supervisor",
        image: "/images/customer-service/testimonial-4.webp",
      },
    ],
    cta: {
      title: "Siap tingkatkan kualitas layanan pelanggan Anda?",
      description:
        "Diskusikan kebutuhan bisnis Anda bersama kami dan temukan solusi customer service yang tepat.",
    },
  },
];
