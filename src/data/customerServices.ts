export type CustomerService = {
  hero: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
  };

  tabs: {
    id: string;
    labelKey: string;
  }[];

  implementation: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
    pointKeys: string[];
    ctaKey: string;
  };

  support: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
    faqs: {
      questionKey: string;
      answerKey: string;
    }[];
    ctaKey: string;
  };

  accountManagement: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
    faqs: {
      questionKey: string;
      answerKey: string;
    }[];
  };

  knowledgeCenter: {
    eyebrowKey: string;
    titleKey: string;
    descriptionKey: string;
    whatsappKey: string;
    ctaKey: string;
    categories: {
      titleKey: string;
      descriptionKey: string;
    }[];
  };

  testimonials: {
    company: string;
    quoteKey: string;
    nameKey: string;
    roleKey: string;
    image: string;
  }[];

  cta: {
    titleKey: string;
    descriptionKey: string;
    buttonKey: string;
  };
};
export const customerServices: CustomerService[] = [
  {
    hero: {
      eyebrowKey: "industry.customerservice.hero.eyebrow",
      titleKey: "industry.customerservice.hero.title",
      descriptionKey: "industry.customerservice.hero.description",
    },

    tabs: [
      {
        id: "implementation",
        labelKey: "industry.customerservice.tabs.1.label",
      },
      { id: "support", labelKey: "industry.customerservice.tabs.2.label" },
      { id: "account", labelKey: "industry.customerservice.tabs.3.label" },
      { id: "knowledge", labelKey: "industry.customerservice.tabs.4.label" },
    ],

    implementation: {
      eyebrowKey: "industry.customerservice.implementation.eyebrow",
      titleKey: "industry.customerservice.implementation.title",
      descriptionKey: "industry.customerservice.implementation.description",
      pointKeys: [
        "industry.customerservice.implementation.points.1",
        "industry.customerservice.implementation.points.2",
        "industry.customerservice.implementation.points.3",
      ],
      ctaKey: "industry.customerservice.implementation.cta",
    },

    support: {
      eyebrowKey: "industry.customerservice.support.eyebrow",
      titleKey: "industry.customerservice.support.title",
      descriptionKey: "industry.customerservice.support.description",
      faqs: [
        {
          questionKey: "industry.customerservice.support.faqs.1.question",
          answerKey: "industry.customerservice.support.faqs.1.answer",
        },
        {
          questionKey: "industry.customerservice.support.faqs.2.question",
          answerKey: "industry.customerservice.support.faqs.2.answer",
        },
        {
          questionKey: "industry.customerservice.support.faqs.3.question",
          answerKey: "industry.customerservice.support.faqs.3.answer",
        },
      ],
      ctaKey: "industry.customerservice.support.cta",
    },

    accountManagement: {
      eyebrowKey: "industry.customerservice.account.eyebrow",
      titleKey: "industry.customerservice.account.title",
      descriptionKey: "industry.customerservice.account.description",
      faqs: [
        {
          questionKey: "industry.customerservice.account.faqs.1.question",
          answerKey: "industry.customerservice.account.faqs.1.answer",
        },
        {
          questionKey: "industry.customerservice.account.faqs.2.question",
          answerKey: "industry.customerservice.account.faqs.2.answer",
        },
      ],
    },

    knowledgeCenter: {
      eyebrowKey: "industry.customerservice.knowledge.eyebrow",
      titleKey: "industry.customerservice.knowledge.title",
      descriptionKey: "industry.customerservice.knowledge.description",
      whatsappKey: "industry.customerservice.knowledge.whatsapp",
      ctaKey: "industry.customerservice.knowledge.cta",
      categories: [
        {
          titleKey: "industry.customerservice.knowledge.categories.1.title",
          descriptionKey:
            "industry.customerservice.knowledge.categories.1.description",
        },
        {
          titleKey: "industry.customerservice.knowledge.categories.2.title",
          descriptionKey:
            "industry.customerservice.knowledge.categories.2.description",
        },
        {
          titleKey: "industry.customerservice.knowledge.categories.3.title",
          descriptionKey:
            "industry.customerservice.knowledge.categories.3.description",
        },
      ],
    },

    testimonials: [
      {
        company: "SCG",
        quoteKey: "industry.customerservice.testimonial.1.quote",
        nameKey: "industry.customerservice.testimonial.1.name",
        roleKey: "industry.customerservice.testimonial.1.role",
        image: "/images/customer-service/testimonial-1.webp",
      },
      {
        company: "PERMEDIA",
        quoteKey: "industry.customerservice.testimonial.2.quote",
        nameKey: "industry.customerservice.testimonial.2.name",
        roleKey: "industry.customerservice.testimonial.2.role",
        image: "/images/customer-service/testimonial-2.webp",
      },
      {
        company: "Narasi",
        quoteKey: "industry.customerservice.testimonial.3.quote",
        nameKey: "industry.customerservice.testimonial.3.name",
        roleKey: "industry.customerservice.testimonial.3.role",
        image: "/images/customer-service/testimonial-3.webp",
      },
      {
        company: "Support Team",
        quoteKey: "industry.customerservice.testimonial.4.quote",
        nameKey: "industry.customerservice.testimonial.4.name",
        roleKey: "industry.customerservice.testimonial.4.role",
        image: "/images/customer-service/testimonial-4.webp",
      },
    ],
    cta: {
      titleKey: "industry.customerservice.cta.title",
      descriptionKey: "industry.customerservice.cta.description",
      buttonKey: "industry.customerservice.cta.button",
    },
  },
];
