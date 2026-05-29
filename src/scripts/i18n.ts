export type Lang = "id" | "en" | "es";

export const translations: Record<string, Record<Lang, string>> =  {
  // ── Navigation & Header ──────────────────────────────
  "nav.home": { id: "Beranda", en: "Home", es: "Inicio" },
  "nav.about": { id: "Tentang Kami", en: "About Us", es: "Sobre Nosotros" },
  "nav.projects": { id: "Proyek Unggulan", en: "Featured Projects", es: "Proyectos Destacados" },
  "nav.services": { id: "Layanan", en: "Services", es: "Servicios" },
  "nav.portfolio": { id: "Portofolio", en: "Portfolio", es: "Portafolio" },
  "nav.casestudies": {
    id: "Studi Kasus",
    en: "Case Studies",
    es: "Casos de Estudio",
  },
  "nav.book": {
    id: "Konsultasi Gratis",
    en: "Book Consultation",
    es: "Reservar Consulta",
  },

  // ── Mega menu ─────────────────────────────────────────
  "mega.webdev": {
    id: "Pengembangan Web",
    en: "Web Development",
    es: "Desarrollo Web",
  },
  "mega.webdev.subtitle": {
    id: "Situs responsif & modern",
    en: "Responsive & modern websites",
    es: "Sitios web responsivos y modernos",
  },
  "mega.mobile": {
    id: "Pengembangan Aplikasi Mobile",
    en: "Mobile App Development",
    es: "Desarrollo de Aplicaciones Móviles",
  },
  "mega.mobile.subtitle": {
    id: "Aplikasi mobile yang inovatif",
    en: "Innovative mobile applications",
    es: "Aplicaciones móviles innovadoras",
  },
  
  "mega.development": {
    id: "Pengembangan Software",
    en: "Software Development",
    es: "Desarrollo de Software",
  },
  "mega.hardware": {
    id: "Instalasi Perangkat Keras",
    en: "Hardware Installation",
    es: "Instalación de Hardware",
  },
  "mega.consulting": {
    id: "Konsultasi IT",
    en: "IT Consulting",
    es: "Consultoría IT",
  },
  "mega.automation": {
    id: "Otomasi AI Bisnis",
    en: "Business AI Automation",
    es: "Automatización IA Empresarial",
  },

  // ── Footer ────────────────────────────────────────────
  "footer.tagline": {
    id: "Sistem yang berkembang. Kejelasan dalam teknologi.",
    en: "Systems that scale. Clarity in technology.",
    es: "Sistemas que escalan. Claridad en tecnología.",
  },
  "footer.navigate": { id: "Navigasi", en: "Navigate", es: "Navegar" },
  "footer.connect": { id: "Hubungi", en: "Connect", es: "Conectar" },
  "footer.insights": { id: "Wawasan", en: "Insights", es: "Perspectivas" },
  "footer.servicesLabel": { id: "Layanan", en: "Services", es: "Servicios" },
  "footer.home": { id: "Beranda", en: "Home", es: "Inicio" },
  "footer.about": { id: "Tentang Kami", en: "About Us", es: "Sobre Nosotros" },
  "footer.services": { id: "Layanan", en: "Services", es: "Servicios" },
  "footer.portfolio": { id: "Portofolio", en: "Portfolio", es: "Portafolio" },
  "footer.contact": { id: "Kontak", en: "Contact", es: "Contacto" },
  "footer.whatsapp": { id: "WhatsApp", en: "WhatsApp", es: "WhatsApp" },
  "footer.email": { id: "Email", en: "Email", es: "Correo" },
  "footer.schedule": {
    id: "Jadwalkan panggilan",
    en: "Schedule call",
    es: "Programar llamada",
  },
  "footer.blog": { id: "Blog", en: "Blog", es: "Blog" },
  "footer.newsletter": { id: "Buletin", en: "Newsletter", es: "Boletín" },
  "footer.copyright": {
    id: `© ${new Date().getFullYear()} Zeni Consulting. Hak cipta dilindungi.`,
    en: `© ${new Date().getFullYear()} Zeni Consulting. All rights reserved.`,
    es: `© ${new Date().getFullYear()} Zeni Consulting. Todos los derechos reservados.`,
  },

  // ── Homepage: Hero ────────────────────────────────────
  "home.hero.badge": {
    id: "Konsultasi IT Strategis",
    en: "Strategic IT Consulting",
    es: "Consultoría IT Estratégica",
  },
  "home.hero.headline": {
    id: "Bangun sistem yang berkembang dengan teknologi yang Anda butuhkan.",
    en: "Build systems that scale with the technology you need.",
    es: "Construye sistemas que escalen con la tecnología que necesitas.",
  },
  "home.hero.sub": {
    id: "Konsultasi IT strategis untuk bisnis yang berkembang. Dari pengembangan software hingga otomasi AI—kami menyelaraskan teknologi dengan tujuan Anda. Tanpa ketergantungan vendor.",
    en: "Strategic IT consulting for growing businesses. From software development to AI automation—we align technology with your goals. No vendor lock-in.",
    es: "Consultoría IT estratégica para empresas en crecimiento. Desde desarrollo de software hasta automatización IA—alineamos la tecnología con tus objetivos. Sin dependencia de proveedores.",
  },
  "home.hero.cta1": {
    id: "Konsultasi Gratis",
    en: "Book Consultation",
    es: "Reservar Consulta",
  },
  "home.hero.cta2": {
    id: "Lihat Layanan",
    en: "View Services",
    es: "Ver Servicios",
  },
  "home.hero.cardLabel": {
    id: "Performa Sistem",
    en: "System Performance",
    es: "Rendimiento del Sistema",
  },
  "home.hero.cardStatus": {
    id: "Semua sistem berjalan normal",
    en: "All systems operational",
    es: "Todos los sistemas operativos",
  },
  "home.hero.cardUptime": {
    id: "Uptime 99.9%",
    en: "99.9% Uptime",
    es: "99.9% Disponibilidad",
  },

  // ── Homepage: Trusted ─────────────────────────────────
  "home.trusted.label": {
    id: "Dipercaya oleh bisnis yang berkembang",
    en: "Trusted by growing businesses",
    es: "Confiado por empresas en crecimiento",
  },

  // ── Homepage: Clients ────────────────────────────────
  "home.clients.label": {
    id: "Klien Kami",
    en: "Our Clients",
    es: "Nuestros Clientes",
  },
  "home.clients.title": {
    id: "Kami Bekerja Sama dengan Bisnis yang Ambisius di Berbagai Industri",
    en: "We Partner with Ambitious Businesses Across Industries",
    es: "Colaboramos con Empresas Ambiciosas en Diversas Industrias",
  },
  "home.clients.subtitle": {
    id: "Dari startup teknologi hingga perusahaan yang sudah mapan, kami membantu organisasi memanfaatkan teknologi untuk pertumbuhan dan inovasi.",
    en: "From tech startups to established enterprises, we help organizations leverage technology for growth and innovation.",
    es: "Desde startups tecnológicas hasta empresas consolidadas, ayudamos a las organizaciones a aprovechar la tecnología para el crecimiento e innovación.",
  },

  // ── Homepage: Services ────────────────────────────────
  "home.services.label": {
    id: "Layanan Kami",
    en: "Our Services",
    es: "Nuestros Servicios",
  },
  "home.services.title": {
    id: "Solusi IT strategis yang disesuaikan untuk kebutuhan bisnis Anda",
    en: "Strategic IT solutions tailored to your business needs",
    es: "Soluciones IT estratégicas adaptadas a las necesidades de tu negocio",
  },
  "home.services.subtitle": {
    id: "Dari pengembangan software hingga penasihat strategis, kami menyediakan layanan komprehensif yang mendorong pertumbuhan.",
    en: "From software development to strategic advisory, we provide comprehensive services that drive growth.",
    es: "Desde desarrollo de software hasta asesoría estratégica, ofrecemos servicios integrales que impulsan el crecimiento.",
  },

  // ── Homepage: Feature cards ───────────────────────────
  "home.feature.web.title": {
    id: "Pengembangan Website",
    en: "Website Development",
    es: "Desarrollo de Sitios Web",
  },
  "home.feature.web.text": {
    id: "Aplikasi web kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan. Tanpa kompromi solusi siap pakai.",
    en: "Custom web applications built with clean architecture—scalable, maintainable, and fit for purpose. No off-the-shelf compromises.",
    es: "Aplicaciones web personalizadas con arquitectura limpia—escalable, mantenible y adecuado. Sin compromisos de soluciones genéricas.",
  },
  "home.feature.mobile.title": {
    id: "Pengembangan Aplikasi Mobile",
    en: "Mobile App Development",
    es: "Desarrollo de Aplicaciones Móviles",
  },
  "home.feature.mobile.text": {
    id: "Aplikasi mobile kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan. Tanpa kompromi solusi siap pakai.",
    en: "Custom mobile applications built with clean architecture—scalable, maintainable, and fit for purpose. No off-the-shelf compromises.",
    es: "Aplicaciones móviles personalizadas con arquitectura limpia—escalable, mantenible y adecuado. Sin compromisos de soluciones genéricas.",
  },

  "home.feature.webapp.title": {
    id: "Pengembangan Web & Aplikasi",
    en: "Web & App Development",
    es: "Desarrollo Web y de Aplicaciones",
  },
  "home.feature.webapp.text": {
    id: "Aplikasi web dan seluler kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan. Tanpa kompromi solusi siap pakai.",
    en: "Custom web and mobile applications built with clean architecture—scalable, maintainable, and fit for purpose. No off-the-shelf compromises.",
    es: "Aplicaciones web y móviles personalizadas con arquitectura limpia—escalable, mantenible y adecuado. Sin compromisos de soluciones genéricas.",
  },

  "home.feature.dev.title": {
    id: "Pengembangan Software",
    en: "Software Development",
    es: "Desarrollo de Software",
  },
  "home.feature.dev.text": {
    id: "Software kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan. Tanpa kompromi solusi siap pakai.",
    en: "Custom software built with clean architecture—scalable, maintainable, and fit for purpose. No off-the-shelf compromises.",
    es: "Software personalizado con arquitectura limpia—escalable, mantenible y adecuado. Sin compromisos de soluciones genéricas.",
  },
  "home.feature.hw.title": {
    id: "Instalasi Perangkat Keras",
    en: "Hardware Installation",
    es: "Instalación de Hardware",
  },
  "home.feature.hw.text": {
    id: "Setup profesional infrastruktur jaringan, server, dan workstation. Pemasangan kabel terstruktur, terdokumentasi, siap berkembang.",
    en: "Professional setup of network infrastructure, servers, and workstations. Structured cabling, documented, ready to scale.",
    es: "Configuración profesional de infraestructura de red, servidores y estaciones de trabajo. Cableado estructurado, documentado, listo para escalar.",
  },
  "home.feature.it.title": {
    id: "Konsultasi IT",
    en: "IT Consulting",
    es: "Consultoría IT",
  },
  "home.feature.it.text": {
    id: "Peta jalan teknologi, tinjauan arsitektur, dan penyelarasan strategis. Backend Anda sebagai sumber kebenaran tunggal.",
    en: "Technology roadmap, architecture review, and strategic alignment. Your backend as the single source of truth.",
    es: "Hoja de ruta tecnológica, revisión de arquitectura y alineación estratégica. Tu backend como fuente única de verdad.",
  },
  "home.feature.ai.title": {
    id: "Otomasi AI Bisnis",
    en: "Business AI Automation",
    es: "Automatización IA Empresarial",
  },
  "home.feature.ai.text": {
    id: "Alur kerja bertenaga AI untuk merampingkan operasi. Implementasi sederhana, integrasi intuitif, hasil yang terukur.",
    en: "AI-powered workflows to streamline operations. Simple implementations, intuitive integrations, fully typed outcomes.",
    es: "Flujos de trabajo impulsados por IA para optimizar operaciones. Implementaciones simples, integraciones intuitivas, resultados definidos.",
  },
  "home.feature.audit.title": {
    id: "Audit Teknologi",
    en: "Technology Audit",
    es: "Auditoría Tecnológica",
  },
  "home.feature.audit.text": {
    id: "Penilaian objektif terhadap sistem dan infrastruktur Anda saat ini. Rekomendasi yang jelas dan bisa ditindaklanjuti.",
    en: "Objective assessment of your current systems and infrastructure. Clear, actionable recommendations.",
    es: "Evaluación objetiva de tus sistemas e infraestructura actuales. Recomendaciones claras y accionables.",
  },
  "home.feature.strategy.title": {
    id: "Strategi & Penasihat IT",
    en: "IT Strategy & Advisory",
    es: "Estrategia y Asesoría IT",
  },
  "home.feature.strategy.text": {
    id: "Selaraskan teknologi dengan tujuan bisnis jangka panjang. Buat keputusan yang tepat dan terukur.",
    en: "Align technology with long-term business objectives. Make informed, measurable decisions.",
    es: "Alinea la tecnología con los objetivos de negocio a largo plazo. Toma decisiones informadas y medibles.",
  },
  "home.feature.learn": {
    id: "Selengkapnya →",
    en: "Learn more →",
    es: "Saber más →",
  },

  // ── Homepage: Technology We Use ─────────────────────────────────
  "home.technology.label": {
    id: "Teknologi yang Kami Gunakan",
    en: "Technologies We Use",
    es: "Tecnologías que Usamos",
  },
  "home.technology.title": {
    id: "Teknologi yang kami gunakan untuk membangun sistem yang berkembang",
    en: "Technologies we use to build systems that scale",
    es: "Tecnologías que usamos para construir sistemas que escalan",
  },
  "home.technology.subtitle": {
    id: "Kami memilih teknologi berdasarkan kebutuhan bisnis, bukan tren. Tumpukan kami dirancang untuk skalabilitas, keandalan, dan kemudahan pemeliharaan.",
    en: "We choose technologies based on business needs, not trends. Our stack is designed for scalability, reliability, and maintainability.",
    es: "Elegimos tecnologías basadas en las necesidades del negocio, no en las tendencias. Nuestra pila está diseñada para escalabilidad, confiabilidad y mantenibilidad.",
  },

  // ── Homepage: Project Showcase ─────────────────────────────────
    "projects.detail.back": {
    id: "← Kembali ke Proyek",
    en: "← Back to Projects",
    es: "← Volver a Proyectos",
  },
  "projects.hero.title": {
    id: "Proyek Kami",
    en: "Our Projects",
    es: "Nuestros Proyectos",
  },
  "projects.view.details": {
    id: "Lihat Semua Proyek",
    en: "View All Projects",
    es: "Ver Todos los Proyectos",
  },
  "projects.hero.badge": {
    id: "Apa yang Kami Lakukan",
    en: "What We Do",
    es: "Qué Hacemos",
  },
  "projects.hero.sub": {
    id: "Jelajahi portofolio proyek sukses kami dan lihat bagaimana kami membantu bisnis mencapai tujuan mereka.",
    en: "Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.",
    es: "Explora nuestro portafolio de proyectos exitosos y descubre cómo hemos ayudado a las empresas a alcanzar sus objetivos.",
  },

  "home.project.label": {
    id: "Proyek Kita",
    en: "Our Projects",
    es: "Nuestros Proyectos",
  },

  "home.project.title": {
    id: "Proyek yang Kami Telah Selesaikan",
    en: "Projects we've delivered",
    es: "Proyectos que hemos entregado",
  },
  "home.project.subtitle": {
    id: "Solusi nyata dibangun untuk bisnis nyata.",
    en: "Real solutions built for real businesses.",
    es: "Soluciones reales construidas para negocios reales.",
  },

  "project.e-commerce.title": {
    id: "Platform E-commerce",
    en: "E-commerce Platform",
    es: "Plataforma E-commerce",
  },
  "project.e-commerce.description": {
    id: "Solusi e-commerce terpadu, termasuk katalog, keranjang belanja, dan pemrosesan pembayaran.",
    en: "Integrated e-commerce solution, including catalog, shopping cart, and payment processing.",
    es: "Solución integral para comercio electrónico, incluyendo catálogo, carrito de compras y procesamiento de pagos.",
  },
  "project.e-commerce.tech": {
    id: "Laravel •  Vue.js",
    en: "Laravel •  Vue.js",
    es: "Laravel •  Vue.js",
  },

  "project.inventory.title": {
    id: "Sistem Manajemen Inventaris",
    en: "Inventory Management System",
    es: "Sistema de Gestión de Inventario",
  },
  "project.inventory.description": {
    id: "Solusi manajemen inventaris yang komprehensif, termasuk pencatatan stok, pemantauan permintaan, dan laporan otomatis.",
    en: "Comprehensive inventory management solution, including stock recording, demand monitoring, and automated reporting.",
    es: "Solución integral para la gestión de inventario, incluyendo registro de existencias, monitoreo de demanda y reportes automatizados.",
  },
  "project.inventory.tech": {
    id: "Node.js • React",
    en: "Node.js • React",
    es: "Node.js • React",
  },

  "project.chatbot.title": {
    id: "AI Chatbot",
    en: "AI Chatbot",
    es: "Chatbot IA",
  },
  "project.chatbot.description": {
    id: "Chatbot dukungan pelanggan bertenaga AI yang mengurangi waktu respons sebesar 40%.",
    en: "AI-powered customer support chatbot that reduced response times by 40%.",
    es: "Chatbot de soporte al cliente impulsado por IA que redujo los tiempos de respuesta en un 40%.",
  },
  "project.chatbot.tech": {
    id: "Python • TensorFlow",
    en: "Python • TensorFlow",
    es: "Python • TensorFlow",
  },

  "project.mobile-banking.title": {
    id: "Aplikasi Mobile Banking",
    en: "Mobile Banking App",
    es: "Aplicación de Banca Móvil",
  },
  "project.mobile-banking.description": {
    id: "Aplikasi mobile banking yang aman dengan autentikasi biometrik dan pemantauan transaksi real-time.",
    en: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
    es: "Aplicación de banca móvil segura con autenticación biométrica y monitoreo de transacciones en tiempo real.",
  },
  "project.mobile-banking.tech": {
    id: "Kotlin • Swift",
    en: "Kotlin • Swift",
    es: "Kotlin • Swift",
  },

  "project.analytics.title": {
    id: "Dashboard Analytics SaaS",
    en: "SaaS Analytics Dashboard",
    es: "Panel de Analytics para SaaS",
  },
  "project.analytics.description": {
    id: "Dashboard analytics multi-tenant untuk produk SaaS, memungkinkan pelanggan memvisualisasikan metrik dan tren utama.",
    en: "Multi-tenant analytics dashboard for a SaaS product, enabling customers to visualize key metrics and trends.",
    es: "Panel de analytics multi-tenant para un producto SaaS, que permite a los clientes visualizar métricas y tendencias clave.",
  },
  "project.analytics.tech": {
    id: "React • Node.js",
    en: "React • Node.js",
    es: "React • Node.js",
  },
  "project.travel.title": {
    id: "Situs Pemesanan Perjalanan",
    en: "Travel Booking Website",
    es: "Sitio Web de Reservas de Viaje",
  },
  "project.travel.description": {
    id: "Situs web untuk pemesanan perjalanan dengan antarmuka yang ramah pengguna dan integrasi dengan penyedia layanan terkemuka.",
    en: "Travel booking website with a user-friendly interface and integration with leading service providers.",
    es: "Sitio web para reservas de viaje con una interfaz amigable y una integración con proveedores de servicios líderes.",
  },
  "project.travel.tech": {
    id: "Laravel • Vue.js",
    en: "Laravel • Vue.js",
    es: "Laravel • Vue.js",
  },

  "project.company-profile.title": {
    id: "Situs Profil Perusahaan",
    en: "Company Profile Website",
    es: "Sitio Web de Perfil de Empresa",
  },
  "project.company-profile.description": {
    id: "Situs web profil perusahaan profesional dengan manajemen CMS untuk pembaruan konten yang mudah.",
    en: "Professional corporate company profile website with CMS management for easy content updates.",
    es: "Sitio web de perfil corporativo profesional con gestión de CMS para actualizaciones de contenido fáciles.",
  },
  "project.company-profile.tech": {
    id: "Astro • Tailwind CSS",
    en: "Astro • Tailwind CSS",
    es: "Astro • Tailwind CSS", 
  },

  "project.invoice.title": {
    id: "Sistem Manajemen Invoice",
    en: "Invoice Management System",
    es: "Sistema de Gestión de Facturas",
  },
  "project.invoice.description": {
    id: "Platform digital untuk manajemen invoice dan pengingat penagihan, membantu bisnis mengotomatisasi proses penagihan mereka.",
    en: "Digital platform for invoice management and billing reminders, helping businesses automate their billing processes.",
    es: "Plataforma digital para la gestión de facturas y recordatorios de facturación, ayudando a las empresas a automatizar sus procesos de facturación.",
  },
  "project.invoice.tech": {
    id: "Node.js • React",
    en: "Node.js • React",
    es: "Node.js • React",
  },

  "project.viewdetails": {
    id: "Lihat detail →",
    en: "View details →",
    es: "Ver detalles →",
  },

  // ── Homepage: Stats ───────────────────────────────────
  "home.stat.projects": {
    id: "Proyek Selesai",
    en: "Projects Delivered",
    es: "Proyectos Entregados",
  },
  "home.stat.experience": {
    id: "Tahun Pengalaman",
    en: "Years Experience",
    es: "Años de Experiencia",
  },
  "home.stat.satisfaction": {
    id: "Kepuasan Klien",
    en: "Client Satisfaction",
    es: "Satisfacción del Cliente",
  },
  "home.stat.support": {
    id: "Dukungan 24/7",
    en: "24/7 Support",
    es: "Soporte 24/7",
  },

  // ── Homepage: Why Zeni ────────────────────────────────
  "home.why.label": { id: "Mengapa Zeni", en: "Why Zeni", es: "Por Qué Zeni" },
  "home.why.title": {
    id: "Mengapa bisnis memilih Zeni Consulting",
    en: "Why businesses choose Zeni Consulting",
    es: "Por qué las empresas eligen Zeni Consulting",
  },
  "home.why.subtitle": {
    id: "Kami bukan vendor biasa. Kami menjadi mitra strategis untuk pertumbuhan teknologi Anda.",
    en: "We're not a typical vendor. We become your strategic partner for technology growth.",
    es: "No somos un proveedor típico. Nos convertimos en tu socio estratégico para el crecimiento tecnológico.",
  },
  "home.why.item1.title": {
    id: "Tanpa Ketergantungan Vendor",
    en: "No Vendor Lock-in",
    es: "Sin Dependencia de Proveedores",
  },
  "home.why.item1.text": {
    id: "Kami membangun dengan standar terbuka dan mendokumentasikan segalanya. Anda memiliki kode dan bisa melanjutkan tanpa kami.",
    en: "We build with open standards and document everything. You own the code and can continue without us.",
    es: "Construimos con estándares abiertos y documentamos todo. Tú eres dueño del código y puedes continuar sin nosotros.",
  },
  "home.why.item2.title": {
    id: "Pendekatan Berbasis Strategi",
    en: "Strategy-First Approach",
    es: "Enfoque Estratégico Primero",
  },
  "home.why.item2.text": {
    id: "Kami memulai dengan memahami bisnis Anda sebelum menyentuh teknologi. Solusi yang kami berikan selalu selaras dengan tujuan Anda.",
    en: "We start by understanding your business before touching technology. Our solutions always align with your goals.",
    es: "Empezamos por entender tu negocio antes de tocar la tecnología. Nuestras soluciones siempre se alinean con tus objetivos.",
  },
  "home.why.item3.title": {
    id: "Transfer Pengetahuan Penuh",
    en: "Full Knowledge Transfer",
    es: "Transferencia Total de Conocimiento",
  },
  "home.why.item3.text": {
    id: "Dokumentasi dan serah terima adalah bagian dari setiap proyek. Tim Anda akan paham dan bisa mengelola sendiri.",
    en: "Documentation and handover are part of every project. Your team will understand and can manage independently.",
    es: "La documentación y el traspaso son parte de cada proyecto. Tu equipo entenderá y podrá gestionar de forma independiente.",
  },

  // ── Homepage: Process ─────────────────────────────────
  "home.process.label": {
    id: "Proses Kami",
    en: "Our Process",
    es: "Nuestro Proceso",
  },
  "home.process.title": {
    id: "Cara kami bekerja",
    en: "How we work",
    es: "Cómo trabajamos",
  },
  "home.process.intro": {
    id: "Zeni merampingkan pengiriman dengan fase yang jelas, pencapaian transparan, dan serah terima terdokumentasi penuh.",
    en: "Zeni streamlines delivery with clear phases, transparent milestones, and fully documented handovers.",
    es: "Zeni optimiza la entrega con fases claras, hitos transparentes y documentación completa.",
  },
  "home.process.d1.title": {
    id: "Penemuan terlebih dahulu",
    en: "Discovery first",
    es: "Descubrimiento primero",
  },
  "home.process.d1.text": {
    id: "Memahami bisnis, tujuan, dan kendala Anda sebelum mengusulkan solusi.",
    en: "Understand your business, goals, and constraints before proposing solutions.",
    es: "Comprender tu negocio, objetivos y limitaciones antes de proponer soluciones.",
  },
  "home.process.d2.title": {
    id: "Pencapaian yang jelas",
    en: "Clear milestones",
    es: "Hitos claros",
  },
  "home.process.d2.text": {
    id: "Pengiriman transparan dengan checkpoint yang bisa Anda tinjau dan arahkan.",
    en: "Transparent delivery with checkpoints you can review and steer.",
    es: "Entrega transparente con puntos de control que puedes revisar y dirigir.",
  },
  "home.process.d3.title": {
    id: "Transfer pengetahuan",
    en: "Knowledge transfer",
    es: "Transferencia de conocimiento",
  },
  "home.process.d3.text": {
    id: "Dokumentasi dan serah terima menjadi bagian dari setiap kerja sama.",
    en: "Documentation and handover built into every engagement.",
    es: "Documentación y traspaso integrados en cada proyecto.",
  },

  // ── Homepage: Tools ───────────────────────────────────
  "home.tools.label": {
    id: "Teknologi",
    en: "Technologies",
    es: "Tecnologías",
  },
  "home.tools.title": {
    id: "Teknologi yang kami gunakan",
    en: "Technologies we work with",
    es: "Tecnologías con las que trabajamos",
  },

   // ── Homepage: Vision & Mission ───────────────────────────────────
  "home.vision-mision.label": {
    id: "Visi & Misi",
    en: "Vision & Mission",
    es: "Visión y Misión",
  },
  "home.vision-mision.title": {
    id: "Visi kami untuk masa depan teknologi bisnis",
    en: "Our vision for the future of business technology",
    es: "Nuestra visión para el futuro de la tecnología empresarial",
  },
  "home.vision-mision.subtitle": {
    id: "Kami percaya masa depan bisnis adalah sistem yang berkembang dengan teknologi yang tepat, tanpa ketergantungan vendor. Kami berkomitmen untuk memberdayakan bisnis membangun masa depan itu.",
    en: "We believe the future of business is systems that scale with the right technology, without vendor lock-in. We're committed to empowering businesses to build that future.",
    es: "Creemos que el futuro de los negocios son sistemas que escalan con la tecnología adecuada, sin dependencia de proveedores. Estamos comprometidos a empoderar a las empresas para construir ese futuro.",
  },
  "home.vision.title": {
    id: "Visi Kami",
    en: "Our Vision",
    es: "Nuestra Visión",
  },
  "home.vision.description": {
    id: "Kami membayangkan dunia di mana bisnis memiliki kendali penuh atas teknologi mereka, membangun sistem yang berkembang dengan kebutuhan mereka tanpa batasan vendor.",
    en: "Our vision is to empower businesses to build systems that scale with the right technology, without vendor lock-in.",
    es: "Nuestra visión es empoderar a las empresas para construir sistemas que escalen con la tecnología adecuada, sin dependencia de proveedores.",
  },
  "home.mission.title": {
    id: "Misi Kami",
    en: "Our Mission",
    es: "Nuestra Misión",
  },
  "home.mission.item1": {
    id: "Misi kami adalah menjadi mitra strategis untuk bisnis yang ingin membangun sistem yang berkembang. Kami menyediakan konsultasi IT strategis, pengembangan software kustom, dan transfer pengetahuan penuh untuk memberdayakan klien kami mencapai tujuan mereka.",
    en: "Our mission is to be the strategic partner for businesses looking to build systems that scale. We provide strategic IT consulting, custom software development, and full knowledge transfer to empower our clients to achieve their goals.",
    es: "Nuestra misión es ser el socio estratégico para las empresas que buscan construir sistemas que escalen. Proporcionamos consultoría IT estratégica, desarrollo de software personalizado y transferencia total de conocimiento para empoderar a nuestros clientes a alcanzar sus objetivos.",
  },
  "home.mission.item2": {
    id: "Kami berkomitmen untuk membangun hubungan jangka panjang dengan klien kami, menjadi mitra tepercaya dalam perjalanan teknologi mereka. Kami percaya bahwa dengan memberikan solusi yang tepat, mendokumentasikan segalanya, dan mentransfer pengetahuan, kami dapat membantu bisnis membangun masa depan yang berkembang dengan teknologi yang tepat.",
    en: "We're committed to building long-term relationships with our clients, becoming a trusted partner in their technology journey. We believe that by delivering the right solutions, documenting everything, and transferring knowledge, we can help businesses build a future that scales with the right technology.",
    es: "Estamos comprometidos a construir relaciones a largo plazo con nuestros clientes, convirtiéndonos en un socio de confianza en su viaje tecnológico. Creemos que al entregar las soluciones adecuadas, documentar todo y transferir conocimiento, podemos ayudar a las empresas a construir un futuro que escale con la tecnología adecuada.",
  },
  "home.mission.item3": {
    id: "Kami berusaha untuk menjadi lebih dari sekadar vendor teknologi. Kami ingin menjadi mitra strategis yang membantu bisnis meraih potensi penuh mereka melalui teknologi yang tepat, tanpa ketergantungan vendor.",
    en: "We strive to be more than just a technology vendor. We want to be a strategic partner that helps businesses reach their full potential through the right technology, without vendor lock-in.",
    es: "Nos esforzamos por ser más que un proveedor de tecnología. Queremos ser un socio estratégico que ayude a las empresas a alcanzar su máximo potencial a través de la tecnología adecuada, sin dependencia de proveedores.",
  },


  // ── Homepage: Testimonials ────────────────────────────
  "home.testimonials.label": {
    id: "Testimoni",
    en: "Testimonials",
    es: "Testimonios",
  },
  "home.testimonials.title": {
    id: "Apa kata klien kami",
    en: "What our clients say",
    es: "Lo que dicen nuestros clientes",
  },
  "home.testimonial.1.text": {
    id: "Zeni membantu kami mengkonsolidasikan lima sistem lama menjadi satu platform. Prosesnya transparan dan hasilnya nyata.",
    en: "Zeni helped us consolidate five legacy systems into one platform. The process was transparent and the results were tangible.",
    es: "Zeni nos ayudó a consolidar cinco sistemas heredados en una plataforma. El proceso fue transparente y los resultados tangibles.",
  },
  "home.testimonial.1.name": { id: "Ahmad R.", en: "Ahmad R.", es: "Ahmad R." },
  "home.testimonial.1.role": {
    id: "CTO, Perusahaan Ritel",
    en: "CTO, Retail Company",
    es: "CTO, Empresa Retail",
  },
  "home.testimonial.2.text": {
    id: "Mesin workflow yang mereka bangun mengubah proses onboarding kami sepenuhnya. Dari 5 hari menjadi 24 jam.",
    en: "The workflow engine they built completely transformed our onboarding process. From 5 days down to 24 hours.",
    es: "El motor de flujo de trabajo que construyeron transformó completamente nuestro proceso de incorporación. De 5 días a 24 horas.",
  },
  "home.testimonial.2.name": { id: "Sarah L.", en: "Sarah L.", es: "Sarah L." },
  "home.testimonial.2.role": {
    id: "VP Operations, SaaS B2B",
    en: "VP Operations, B2B SaaS",
    es: "VP Operaciones, SaaS B2B",
  },
  "home.testimonial.3.text": {
    id: "Mereka tidak hanya membangun—mereka mendokumentasikan dan mentransfer pengetahuan. Tim kami sekarang bisa mengelola sendiri.",
    en: "They don't just build—they document and transfer knowledge. Our team can now manage things independently.",
    es: "No solo construyen—documentan y transfieren conocimiento. Nuestro equipo ahora puede gestionar de forma independiente.",
  },
  "home.testimonial.3.name": { id: "Budi K.", en: "Budi K.", es: "Budi K." },
  "home.testimonial.3.role": {
    id: "Direktur IT, Logistik",
    en: "IT Director, Logistics",
    es: "Director IT, Logística",
  },

  // ── Homepage: Final CTA ───────────────────────────────
  "home.cta.headline": {
    id: "Mulai bangun kejelasan dalam teknologi Anda hari ini",
    en: "Start building clarity into your technology today",
    es: "Empieza a construir claridad en tu tecnología hoy",
  },
  "home.cta.sub": {
    id: "Mulai konsultasi atau jelajahi layanan kami untuk melihat bagaimana kami bisa membantu.",
    en: "Dive into a consultation or explore our services to see how we can help.",
    es: "Agenda una consulta o explora nuestros servicios para ver cómo podemos ayudarte.",
  },
  "home.cta.cta1": {
    id: "Konsultasi Gratis",
    en: "Book Consultation",
    es: "Reservar Consulta",
  },
  "home.cta.cta2": {
    id: "Lihat Layanan",
    en: "View Services",
    es: "Ver Servicios",
  },

  // ── Homepage: Elevate (legacy, kept for compatibility) ─
  "home.elevate.title": {
    id: "Tingkatkan bisnis Anda dengan teknologi yang tepat",
    en: "Elevate your business with the right technology",
    es: "Eleva tu negocio con la tecnología adecuada",
  },
  "home.elevate.text": {
    id: "Zeni dilengkapi dengan kemampuan strategis yang dirancang untuk mempercepat pertumbuhan dan mempermudah implementasi teknologi Anda.",
    en: "Zeni is packed with strategic capabilities designed to accelerate your growth and make technology implementation a breeze.",
    es: "Zeni cuenta con capacidades estratégicas diseñadas para acelerar tu crecimiento y facilitar la implementación tecnológica.",
  },

  // ── Homepage: Demo card (legacy, kept for compatibility)
  "home.demo.title": {
    id: "Dibangun untuk proyek nyata",
    en: "Built for real projects",
    es: "Construido para proyectos reales",
  },
  "home.demo.client": {
    id: "Platform E-commerce",
    en: "E-commerce Platform",
    es: "Plataforma E-commerce",
  },
  "home.demo.status": { id: "Terkirim", en: "Delivered", es: "Entregado" },
  "home.demo.from": {
    id: "Sistem Lama",
    en: "Legacy Systems",
    es: "Sistemas Heredados",
  },
  "home.demo.to": {
    id: "Platform Terpadu",
    en: "Unified Platform",
    es: "Plataforma Unificada",
  },
  "home.demo.meta1": {
    id: "60% lebih sedikit pekerjaan manual",
    en: "60% fewer manual tasks",
    es: "60% menos tareas manuales",
  },
  "home.demo.meta2": {
    id: "Sumber kebenaran tunggal",
    en: "Single source of truth",
    es: "Fuente única de verdad",
  },

  // ── Homepage: Process badges (legacy) ─────────────────
  "home.process.badge1": {
    id: "Penemuan",
    en: "Discovery",
    es: "Descubrimiento",
  },
  "home.process.badge2": { id: "Bangun", en: "Build", es: "Construcción" },
  "home.process.badge3": { id: "Optimasi", en: "Optimize", es: "Optimización" },

  // ── About page ────────────────────────────────────────
  "about.hero.badge": {
    id: "Tentang Kami",
    en: "About Us",
    es: "Sobre Nosotros",
  },
  "about.hero.title": {
    id: "Tentang Zeni",
    en: "About Zeni",
    es: "Sobre Zeni",
  },
  "about.hero.sub": {
    id: "Penasihat strategis. Bukan sekadar agensi biasa.",
    en: "Strategic advisory. Not just another agency.",
    es: "Asesoría estratégica. No solo otra agencia.",
  },

  // About: Philosophy
  "about.philosophy.label": {
    id: "Filosofi Kami",
    en: "Our Philosophy",
    es: "Nuestra Filosofía",
  },
  "about.philosophy.title": {
    id: "Filosofi",
    en: "Philosophy",
    es: "Filosofía",
  },
  "about.philosophy.text": {
    id: "Kami percaya teknologi harus melayani bisnis—bukan sebaliknya. Peran kami adalah membawa kejelasan pada keputusan teknis yang kompleks, menyelaraskan sistem dengan strategi, dan memberikan hasil yang berarti. Kami tidak mengejar tren. Kami membangun fondasi yang bertahan.",
    en: "We believe technology should serve business—not the reverse. Our role is to bring clarity to complex technical decisions, align systems with strategy, and deliver outcomes that matter. We don't chase trends. We build foundations that last.",
    es: "Creemos que la tecnología debe servir al negocio, no al revés. Nuestro rol es aportar claridad a decisiones técnicas complejas, alinear sistemas con estrategia y entregar resultados que importan. No seguimos tendencias. Construimos bases duraderas.",
  },

  // About: Values
  "about.value.quality.title": { id: "Kualitas", en: "Quality", es: "Calidad" },
  "about.value.quality.text": {
    id: "Kami menerapkan standar tinggi di setiap aspek—dari arsitektur kode hingga dokumentasi proyek.",
    en: "We apply high standards in every aspect—from code architecture to project documentation.",
    es: "Aplicamos altos estándares en cada aspecto—desde la arquitectura del código hasta la documentación del proyecto.",
  },
  "about.value.trust.title": {
    id: "Kepercayaan",
    en: "Trust",
    es: "Confianza",
  },
  "about.value.trust.text": {
    id: "Transparansi dan komunikasi jujur menjadi dasar setiap hubungan dengan klien.",
    en: "Transparency and honest communication form the foundation of every client relationship.",
    es: "La transparencia y la comunicación honesta forman la base de cada relación con clientes.",
  },
  "about.value.impact.title": { id: "Dampak", en: "Impact", es: "Impacto" },
  "about.value.impact.text": {
    id: "Kami fokus pada hasil yang terukur dan bermakna, bukan sekadar output teknis.",
    en: "We focus on measurable, meaningful outcomes—not just technical output.",
    es: "Nos enfocamos en resultados medibles y significativos—no solo en salida técnica.",
  },

  // About: How We Work
  "about.howwework.label": {
    id: "Cara Kerja",
    en: "How We Work",
    es: "Cómo Trabajamos",
  },
  "about.howwework.title": {
    id: "Cara Kami Bekerja",
    en: "How We Work",
    es: "Cómo Trabajamos",
  },
  "about.howwework.text": {
    id: "Kami mulai dengan memahami. Sebelum mengusulkan solusi apa pun, kami menginvestasikan waktu untuk mempelajari bisnis, tujuan, dan kendala Anda. Rekomendasi kami pragmatis—fokus pada apa yang menggerakkan jarum sekarang, sambil membuka pintu untuk pertumbuhan masa depan.",
    en: "We start with understanding. Before proposing any solution, we invest time in learning your business, your goals, and your constraints. Our recommendations are pragmatic—focused on what moves the needle now, while keeping the door open for future growth.",
    es: "Empezamos por comprender. Antes de proponer cualquier solución, invertimos tiempo en conocer tu negocio, tus objetivos y tus limitaciones. Nuestras recomendaciones son pragmáticas—enfocadas en lo que mueve la aguja ahora, manteniendo la puerta abierta al crecimiento futuro.",
  },

  // About: Approach
  "about.approach.1": {
    id: "Penemuan terlebih dahulu—tanpa asumsi, tanpa jawaban template",
    en: "Discovery first—no assumptions, no template answers",
    es: "Descubrimiento primero—sin suposiciones, sin respuestas de plantilla",
  },
  "about.approach.1.detail": {
    id: "Kami mendalam memahami konteks bisnis Anda sebelum menyusun strategi teknologi apa pun.",
    en: "We deeply understand your business context before crafting any technology strategy.",
    es: "Entendemos profundamente el contexto de tu negocio antes de diseñar cualquier estrategia tecnológica.",
  },
  "about.approach.2": {
    id: "Komunikasi transparan dan pencapaian yang jelas",
    en: "Transparent communication and clear milestones",
    es: "Comunicación transparente e hitos claros",
  },
  "about.approach.2.detail": {
    id: "Setiap proyek memiliki checkpoint yang bisa Anda tinjau dan arahkan kapan saja.",
    en: "Every project has checkpoints you can review and steer at any time.",
    es: "Cada proyecto tiene puntos de control que puedes revisar y dirigir en cualquier momento.",
  },
  "about.approach.3": {
    id: "Dokumentasi dan transfer pengetahuan sebagai bagian dari pengiriman",
    en: "Documentation and knowledge transfer as part of delivery",
    es: "Documentación y transferencia de conocimiento como parte de la entrega",
  },
  "about.approach.3.detail": {
    id: "Kami memastikan tim Anda bisa mengelola dan mengembangkan solusi secara mandiri.",
    en: "We ensure your team can manage and extend the solution independently.",
    es: "Aseguramos que tu equipo pueda gestionar y extender la solución de forma independiente.",
  },
  "about.approach.4": {
    id: "Dukungan berkelanjutan dan iterasi saat Anda membutuhkannya",
    en: "Ongoing support and iteration when you need it",
    es: "Soporte continuo e iteración cuando lo necesites",
  },
  "about.approach.4.detail": {
    id: "Kami tetap tersedia untuk support berkelanjutan, perbaikan, dan pengembangan lebih lanjut.",
    en: "We remain available for ongoing support, fixes, and further development.",
    es: "Permanecemos disponibles para soporte continuo, correcciones y desarrollo adicional.",
  },

  // About: Engagement Model
  "about.engagement.label": {
    id: "Model Kerja Sama",
    en: "Engagement Model",
    es: "Modelo de Trabajo",
  },
  "about.engagement.title": {
    id: "Model Kerja Sama",
    en: "Engagement Model",
    es: "Modelo de Trabajo",
  },
  "about.engagement.text": {
    id: "Kami menawarkan opsi kerja sama fleksibel yang disesuaikan dengan kebutuhan Anda—dari proyek diskrit dan audit hingga kemitraan retainer berkelanjutan. Setiap kerja sama dimulai dengan lingkup, timeline, dan kriteria sukses yang jelas.",
    en: "We offer flexible engagement options tailored to your needs—from discrete projects and audits to ongoing retainer partnerships. Every engagement begins with a clear scope, timeline, and success criteria.",
    es: "Ofrecemos opciones de colaboración flexibles adaptadas a tus necesidades—desde proyectos discretos y auditorías hasta asociaciones de retención continuas. Cada compromiso comienza con un alcance, cronograma y criterios de éxito claros.",
  },
  "about.engagement.project.title": {
    id: "Berbasis Proyek",
    en: "Project-based",
    es: "Basado en Proyecto",
  },
  "about.engagement.project.text": {
    id: "Lingkup tetap, timeline tetap. Ideal untuk pengembangan sistem, audit, atau penilaian strategis.",
    en: "Fixed scope, fixed timeline. Ideal for system development, audits, or strategic assessments.",
    es: "Alcance fijo, cronograma fijo. Ideal para desarrollo de sistemas, auditorías o evaluaciones estratégicas.",
  },
  "about.engagement.project.f1": {
    id: "Lingkup & timeline tetap",
    en: "Fixed scope & timeline",
    es: "Alcance y cronograma fijos",
  },
  "about.engagement.project.f2": {
    id: "Pencapaian yang jelas",
    en: "Clear milestones",
    es: "Hitos claros",
  },
  "about.engagement.project.f3": {
    id: "Dokumentasi penuh",
    en: "Full documentation",
    es: "Documentación completa",
  },
  "about.engagement.retainer.title": {
    id: "Retainer",
    en: "Retainer",
    es: "Retención",
  },
  "about.engagement.retainer.text": {
    id: "Dukungan strategis, pemeliharaan, dan penasihat berkelanjutan. Untuk kepemimpinan teknologi jangka panjang.",
    en: "Ongoing strategic support, maintenance, and advisory. For long-term technology leadership.",
    es: "Soporte estratégico continuo, mantenimiento y asesoría. Para liderazgo tecnológico a largo plazo.",
  },
  "about.engagement.retainer.f1": {
    id: "Dukungan berkelanjutan",
    en: "Ongoing support",
    es: "Soporte continuo",
  },
  "about.engagement.retainer.f2": {
    id: "Prioritas respons",
    en: "Priority response",
    es: "Respuesta prioritaria",
  },
  "about.engagement.retainer.f3": {
    id: "Penasihat strategis",
    en: "Strategic advisory",
    es: "Asesoría estratégica",
  },
  "about.engagement.consult.title": {
    id: "Konsultasi",
    en: "Consultation",
    es: "Consulta",
  },
  "about.engagement.consult.text": {
    id: "Sesi satu kali untuk tinjauan arsitektur, pemilihan teknologi, atau penyelarasan strategi.",
    en: "One-off sessions for architecture review, technology selection, or strategy alignment.",
    es: "Sesiones únicas para revisión de arquitectura, selección de tecnología o alineación estratégica.",
  },
  "about.engagement.consult.f1": {
    id: "Sesi satu kali",
    en: "One-off session",
    es: "Sesión única",
  },
  "about.engagement.consult.f2": {
    id: "Tinjauan arsitektur",
    en: "Architecture review",
    es: "Revisión de arquitectura",
  },
  "about.engagement.consult.f3": {
    id: "Rekomendasi tertulis",
    en: "Written recommendations",
    es: "Recomendaciones escritas",
  },

  // About: Leadership
  "about.leadership.label": {
    id: "Kepemimpinan",
    en: "Leadership",
    es: "Liderazgo",
  },
  "about.leadership.title": {
    id: "Kepemimpinan",
    en: "Leadership",
    es: "Liderazgo",
  },
  "about.leadership.text": {
    id: "Zeni Consulting dipimpin oleh praktisi dengan pengalaman mendalam dalam sistem enterprise, startup, dan transformasi digital. Kami menggabungkan kedalaman teknis dengan ketajaman bisnis—kami berbicara kedua bahasa.",
    en: "Zeni Consulting is led by practitioners with deep experience in enterprise systems, startups, and digital transformation. We combine technical depth with business acumen—we speak both languages.",
    es: "Zeni Consulting está liderado por profesionales con amplia experiencia en sistemas empresariales, startups y transformación digital. Combinamos profundidad técnica con visión de negocio—hablamos ambos idiomas.",
  },
  "about.leadership.stat1": {
    id: "Proyek Selesai",
    en: "Projects Delivered",
    es: "Proyectos Entregados",
  },
  "about.leadership.stat2": {
    id: "Tahun Pengalaman",
    en: "Years Experience",
    es: "Años de Experiencia",
  },
  "about.leadership.stat3": {
    id: "Kepuasan Klien",
    en: "Client Satisfaction",
    es: "Satisfacción del Cliente",
  },
  "about.leadership.stat4": {
    id: "Industri Dilayani",
    en: "Industries Served",
    es: "Industrias Atendidas",
  },
  "about.leadership.cta.text": {
    id: "Siap membahas bagaimana kami dapat mendukung strategi teknologi Anda?",
    en: "Ready to discuss how we can support your technology strategy?",
    es: "¿Listo para discutir cómo podemos apoyar tu estrategia tecnológica?",
  },
  "about.leadership.cta.btn": {
    id: "Hubungi Kami",
    en: "Get in touch",
    es: "Contáctanos",
  },

  // About: CTA
  "about.cta.title": {
    id: "Siap memulai proyek Anda?",
    en: "Ready to start your project?",
    es: "¿Listo para iniciar tu proyecto?",
  },
  "about.cta.text": {
    id: "Jadwalkan konsultasi gratis dan mari diskusikan bagaimana kami bisa membantu.",
    en: "Schedule a free consultation and let's discuss how we can help.",
    es: "Agenda una consulta gratuita y discutamos cómo podemos ayudarte.",
  },
  "about.cta.btn1": {
    id: "Konsultasi Gratis",
    en: "Book Consultation",
    es: "Reservar Consulta",
  },
  "about.cta.btn2": {
    id: "Lihat Layanan",
    en: "View Services",
    es: "Ver Servicios",
  },

  // ── Services page ─────────────────────────────────────
  "services.hero.badge": {
    id: "Layanan Kami",
    en: "Our Services",
    es: "Nuestros Servicios",
  },
  "services.hero.title": { id: "Layanan", en: "Services", es: "Servicios" },
  "services.hero.sub": {
    id: "Solusi IT strategis yang disesuaikan untuk kebutuhan bisnis Anda.",
    en: "Strategic IT solutions tailored to your business needs.",
    es: "Soluciones IT estratégicas adaptadas a las necesidades de tu negocio.",
  },
  "services.webdev.title": {
    id: "Pengembangan Web",
    en: "Web Development",
    es: "Desarrollo Web",
  },
  "services.webdev.summary": {
    id: "Aplikasi web kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan.",
    en: "Custom web applications built with clean architecture—scalable, maintainable, and fit for purpose.",
    es: "Aplicaciones web personalizadas con arquitectura limpia—escalable, mantenible y adecuado.",
  },
  "services.mobile.title": {
    id: "Pengembangan Aplikasi",
    en: "Mobile Development",
    es: "Desarrollo de Aplicaciones Móviles",
  },
  "services.mobile.summary": {
    id: "Aplikasi seluler kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan.",
    en: "Custom mobile applications built with clean architecture—scalable, maintainable, and fit for purpose.",
    es: "Aplicaciones móviles personalizadas con arquitectura limpia—escalable, mantenible y adecuado.",
  },
  "services.webapp.title": {
    id: "Pengembangan Aplikasi Web",
    en: "Web App Development",
    es: "Desarrollo de Aplicaciones Web",
  },
  "services.webapp.summary": {
    id: "Aplikasi web kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan.",
    en: "Custom web applications built with clean architecture—scalable, maintainable, and fit for purpose.",
    es: "Aplicaciones web personalizadas con arquitectura limpia—escalable, mantenible y adecuado.",
  },

  "services.dev.title": {
    id: "Pengembangan Software",
    en: "Software Development",
    es: "Desarrollo de Software",
  },
  "services.dev.summary": {
    id: "Software kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan.",
    en: "Custom software built with clean architecture—scalable, maintainable, and fit for purpose.",
    es: "Software personalizado con arquitectura limpia—escalable, mantenible y adecuado.",
  },
  "services.hw.title": {
    id: "Instalasi Perangkat Keras",
    en: "Hardware Installation",
    es: "Instalación de Hardware",
  },
  "services.hw.summary": {
    id: "Setup profesional infrastruktur jaringan, server, workstation, dan peralatan IT.",
    en: "Professional setup of network infrastructure, servers, workstations, and IT equipment.",
    es: "Configuración profesional de infraestructura de red, servidores, estaciones de trabajo y equipos IT.",
  },
  "services.it.title": {
    id: "Konsultasi IT",
    en: "IT Consulting",
    es: "Consultoría IT",
  },
  "services.it.summary": {
    id: "Peta jalan teknologi, tinjauan arsitektur, dan penyelarasan strategis untuk tujuan bisnis Anda.",
    en: "Technology roadmap, architecture review, and strategic alignment for your business goals.",
    es: "Hoja de ruta tecnológica, revisión de arquitectura y alineación estratégica para tus objetivos de negocio.",
  },
  "services.ai.title": {
    id: "Otomasi AI Bisnis",
    en: "Business AI Automation",
    es: "Automatización IA Empresarial",
  },
  "services.ai.summary": {
    id: "Alur kerja bertenaga AI untuk merampingkan operasi dan membebaskan tim Anda untuk tugas bernilai lebih tinggi.",
    en: "AI-powered workflows to streamline operations and free your team for higher-value tasks.",
    es: "Flujos de trabajo impulsados por IA para optimizar operaciones y liberar a tu equipo para tareas de mayor valor.",
  },
  "services.audit.title": {
    id: "Audit Teknologi",
    en: "Technology Audit",
    es: "Auditoría Tecnológica",
  },
  "services.audit.summary": {
    id: "Tinjauan komprehensif terhadap infrastruktur dan sistem teknologi Anda.",
    en: "Comprehensive review of your technology infrastructure and systems.",
    es: "Revisión integral de su infraestructura y sistemas tecnológicos.",
  },
  "services.strategy.title": {
    id: "Strategi Teknologi",
    en: "Technology Strategy",
    es: "Estrategia Tecnológica",
  },
  "services.strategy.summary": {
    id: "Peta jalan teknologi yang selaras dengan tujuan bisnis Anda.",
    en: "Technology roadmap aligned with your business goals.",
    es: "Hoja de ruta tecnológica alineada con tus objetivos de negocio.",
  },
  
  "services.viewdetails": {
    id: "Lihat detail →",
    en: "View details →",
    es: "Ver detalles →",
  },

  // Services: Process
  "services.process.label": {
    id: "Proses Kami",
    en: "Our Process",
    es: "Nuestro Proceso",
  },
  "services.process.title": {
    id: "Cara kami mengerjakan proyek",
    en: "How we deliver projects",
    es: "Cómo entregamos proyectos",
  },
  "services.process.subtitle": {
    id: "Setiap proyek mengikuti metodologi terstruktur kami untuk memastikan pengiriman tepat waktu dan berkualitas.",
    en: "Every project follows our structured methodology to ensure timely, quality delivery.",
    es: "Cada proyecto sigue nuestra metodología estructurada para asegurar entrega puntual y de calidad.",
  },
  "services.process.step1.title": {
    id: "Penemuan",
    en: "Discovery",
    es: "Descubrimiento",
  },
  "services.process.step1.text": {
    id: "Memahami kebutuhan, tujuan, dan kendala bisnis Anda.",
    en: "Understand your business needs, goals, and constraints.",
    es: "Comprender las necesidades, objetivos y limitaciones de tu negocio.",
  },
  "services.process.step2.title": {
    id: "Perencanaan",
    en: "Planning",
    es: "Planificación",
  },
  "services.process.step2.text": {
    id: "Merancang solusi dan menetapkan pencapaian yang jelas.",
    en: "Design the solution and establish clear milestones.",
    es: "Diseñar la solución y establecer hitos claros.",
  },
  "services.process.step3.title": {
    id: "Eksekusi",
    en: "Execution",
    es: "Ejecución",
  },
  "services.process.step3.text": {
    id: "Membangun dan menerapkan dengan iterasi transparan.",
    en: "Build and implement with transparent iterations.",
    es: "Construir e implementar con iteraciones transparentes.",
  },
  "services.process.step4.title": {
    id: "Serah Terima",
    en: "Handover",
    es: "Entrega",
  },
  "services.process.step4.text": {
    id: "Dokumentasi, pelatihan, dan transfer pengetahuan penuh.",
    en: "Documentation, training, and full knowledge transfer.",
    es: "Documentación, capacitación y transferencia completa de conocimiento.",
  },

  // Service btn view details
  "services.view.details": {
    id: "Lihat Semua Layanan  →",
    en: "View All Services →",
    es: "Ver todos los servicios →",
  },

  // Services: CTA
  "services.cta.title": {
    id: "Siap membahas proyek Anda?",
    en: "Ready to discuss your project?",
    es: "¿Listo para discutir tu proyecto?",
  },
  "services.cta.text": {
    id: "Setiap kerja sama dimulai dengan percakapan.",
    en: "Every engagement starts with a conversation.",
    es: "Cada compromiso comienza con una conversación.",
  },
  "services.cta.btn": {
    id: "Jadwalkan konsultasi",
    en: "Schedule a consultation",
    es: "Agendar una consulta",
  },

  // ── Service detail pages: shared ──────────────────────
  "servicedetail.back": {
    id: "← Layanan",
    en: "← Services",
    es: "← Servicios",
  },
  "servicedetail.problem": { id: "Masalah", en: "Problem", es: "Problema" },
  "servicedetail.approach": { id: "Pendekatan", en: "Approach", es: "Enfoque" },
  "servicedetail.outcome": { id: "Hasil", en: "Outcome", es: "Resultado" },
  "servicedetail.features": {
    id: "Fitur Utama",
    en: "Key Features",
    es: "Características principales",
  },
  "servicedetail.usecase": {
    id: "Contoh Kasus",
    en: "Example Use Case",
    es: "Caso de Uso",
  },
  "servicedetail.cta.text": {
    id: "Siap memulai? Hubungi kami untuk konsultasi gratis.",
    en: "Ready to get started? Contact us for a free consultation.",
    es: "¿Listo para comenzar? Contáctanos para una consulta gratuita.",
  },
  "servicedetail.cta.btn": {
    id: "Hubungi Kami",
    en: "Get in Touch",
    es: "Contáctanos",
  },

  // Service Detail: CTA Sidebar
  "servicedetail.sidebar.cta.title": {
    id: "Butuh bantuan untuk project Anda?",
    en: "Need Help with Your Project?",
    es: "¿Necesitas ayuda con tu proyecto?",
  },

  "servicedetail.sidebar.cta.desc": {
    id: "Diskusikan kebutuhan Anda bersama tim kami. Gratis dan tanpa komitmen.",
    en: "Talk to our experts about your requirements. It's free and there's no obligation.",
    es: "Habla con nuestros expertos sobre tus necesidades. Es gratis y sin compromiso.",
  },

  "servicedetail.sidebar.cta.button": {
    id: "Konsultasi Gratis",
    en: "Get Free Consultation",
    es: "Consulta gratuita",
  },

  "servicedetail.sidebar.benefits.title": {
    id: "Kenapa Memilih Kami",
    en: "Why Choose Us",
    es: "¿Por qué elegirnos?",
  },

  "servicedetail.sidebar.benefits.1": {
    id: "Konsultasi Awal Gratis",
    en: "Free Initial Consultation",
    es: "Consulta inicial gratuita",
  },

  "servicedetail.sidebar.benefits.2": {
    id: "Tim Developer Berpengalaman",
    en: "Experienced Development Team",
    es: "Equipo de desarrollo experimentado",
  },

  "servicedetail.sidebar.benefits.3": {
    id: "Teknologi Modern & Scalable",
    en: "Modern & Scalable Technology",
    es: "Tecnología moderna y escalable",
  },

  "servicedetail.sidebar.benefits.4": {
    id: "Support & Maintenance Berkelanjutan",
    en: "Ongoing Support & Maintenance",
    es: "Soporte y mantenimiento continuo",
  },

  "servicedetail.sidebar.benefits.5": {
    id: "Harga Transparan & Kompetitif",
    en: "Transparent & Competitive Pricing",
    es: "Precios transparentes y competitivos",
  },

  // Service: web development
  "service.webdev.title": {
    id: "Pengembangan Web",
    en: "Web Development",
    es: "Desarrollo Web",
  },
  "service.webdev.sub": {
    id: "Aplikasi web kustom yang tahan lama. Skalabel. Mudah dikelola.",
    en: "Custom web applications built to last. Scalable. Maintainable.",
    es: "Aplicaciones web personalizadas construidas para durar. Escalable. Mantenible.",
  },
  "service.webdev.problem": {
    id: "Banyak bisnis bergantung pada aplikasi web yang usang, sulit dikelola, atau tidak sesuai kebutuhan. Solusi siap pakai sering kali tidak cukup untuk kebutuhan unik Anda, sementara pengembangan internal bisa kekurangan keahlian atau sumber daya.",
    en: "Many businesses rely on outdated, hard-to-manage, or ill-fitting web applications. Off-the-shelf solutions often fall short for your unique needs, while in-house development can lack expertise or resources.",
    es: "Muchas empresas dependen de aplicaciones web obsoletas, difíciles de gestionar o inadecuadas. Las soluciones genéricas a menudo no son suficientes para tus necesidades únicas, mientras que el desarrollo interno puede carecer de experiencia o recursos.",
  },
  "service.webdev.approach": {
    id: "Kami membangun aplikasi web dengan prinsip arsitektur bersih: pemisahan perhatian, kemampuan pengujian, dan dokumentasi dari hari pertama. Kami bekerja secara iteratif dengan hasil yang jelas, sehingga Anda melihat kemajuan dan bisa mengarahkan lebih awal. Pilihan teknologi didorong oleh konteks Anda—bukan zona nyaman kami.",
    en: "We build web applications with clean architecture principles: separation of concerns, testability, and documentation from day one. We work in iterations with clear deliverables, so you see progress and can steer direction early. Technology choices are driven by your context—not by our comfort zone.",
    es: "Construimos aplicaciones web con principios de arquitectura limpia: separación de responsabilidades, testeabilidad y documentación desde el día uno. Trabajamos en iteraciones con entregables claros para que veas el progreso y puedas dirigir el rumbo temprano. Las elecciones tecnológicas están guiadas por tu contexto—no por nuestra zona de confort.",
  },
  "service.webdev.outcome": {
    id: "Aplikasi web yang bekerja untuk bisnis Anda hari ini dan berkembang bersama Anda besok. Basis kode yang tim Anda (atau kami) bisa kelola dan kembangkan tanpa memulai dari awal.",
    en: "Web applications that work for your business today and scale with you tomorrow. Codebases that your team (or ours) can maintain and extend without starting over.",
    es: "Aplicaciones web que funcionan para tu negocio hoy y escalan contigo mañana. Bases de código que tu equipo (o el nuestro) puede mantener y extender sin empezar de cero.",
  },
  "service.webdev.usecase": {
    id: "Sebuah perusahaan ritel membutuhkan platform e-commerce kustom untuk mengintegrasikan sistem POS mereka, mengelola inventaris, dan memberikan pengalaman pelanggan yang mulus. Kami menghasilkan aplikasi Laravel dengan frontend React—terintegrasi dengan sistem POS mereka, di-deploy di AWS, dan didokumentasi agar tim internal mereka bisa mengelolanya.",
    en: "A retail company needed a custom e-commerce platform to integrate their POS system, manage inventory, and provide a seamless customer experience. We delivered a Laravel application with React frontend—integrated with their POS, deployed on AWS, and documented for their in-house team to own.",
    es: "Una empresa minorista necesitaba una plataforma de comercio electrónico personalizada para integrar su sistema POS, gestionar inventario y brindar una experiencia de cliente fluida. Entregamos una aplicación Laravel con frontend React—integrada con su POS, desplegada en AWS y documentada para que su equipo interno la administrara.",
  },
  "services.webdev.features.1": {
    id: "Website cepat & SEO-friendly",
    en: "Fast & SEO-friendly website",
    es: "Sitio web rápido y SEO-friendly",
  },

  "services.webdev.features.2": {
    id: "Desain responsif (mobile-first)",
    en: "Responsive design (mobile-first)",
    es: "Diseño responsivo (mobile-first)",
  },

  "services.webdev.features.3": {
    id: "Mudah dikelola (CMS / dashboard)",
    en: "Easy to manage (CMS / dashboard)",
    es: "Fácil de gestionar (CMS / panel)",
  },

  "services.webdev.features.4": {
    id: "Integrasi API & sistem lain",
    en: "API & system integration",
    es: "Integración de API y sistemas",
  },

  // Service: mobile development
  "service.mobile.title": {
    id: "Pengembangan Aplikasi",
    en: "Mobile Development",
    es: "Desarrollo de Aplicaciones Móviles",
  },
  "service.mobile.sub": {
    id: "Aplikasi seluler kustom yang tahan lama. Skalabel. Mudah dikelola.",
    en: "Custom mobile applications built to last. Scalable. Maintainable.",
    es: "Aplicaciones móviles personalizadas construidas para durar. Escalables. Mantenibles.",
  },
  "service.mobile.problem": {
    id: "Banyak bisnis ingin aplikasi seluler untuk pelanggan atau karyawan mereka, tetapi solusi siap pakai sering kali tidak cukup untuk kebutuhan unik Anda. Pengembangan internal bisa kekurangan keahlian atau sumber daya, sementara aplikasi yang dirancang dengan buruk menyebabkan pengalaman pengguna yang buruk dan adopsi rendah.",
    en: "Many businesses want mobile apps for their customers or employees, but off-the-shelf solutions often fall short for your unique needs. In-house development can lack expertise or resources, while poorly designed apps lead to bad user experiences and low adoption.",
    es: "Muchas empresas quieren aplicaciones móviles para sus clientes o empleados, pero las soluciones genéricas a menudo no son suficientes para tus necesidades únicas. El desarrollo interno puede carecer de experiencia o recursos, mientras que las aplicaciones mal diseñadas conducen a malas experiencias de usuario y baja adopción.",
  },
  "service.mobile.approach": {
    id: "Kami membangun aplikasi seluler dengan prinsip arsitektur bersih: pemisahan perhatian, kemampuan pengujian, dan dokumentasi dari hari pertama. Kami bekerja secara iteratif dengan hasil yang jelas, sehingga Anda melihat kemajuan dan bisa mengarahkan lebih awal. Pilihan teknologi didorong oleh konteks Anda—bukan zona nyaman kami.",
    en: "We build mobile applications with clean architecture principles: separation of concerns, testability, and documentation from day one. We work in iterations with clear deliverables, so you see progress and can steer direction early. Technology choices are driven by your context—not by our comfort zone.",
    es: "Construimos aplicaciones móviles con principios de arquitectura limpia: separación de responsabilidades, testeabilidad y documentación desde el día uno. Trabajamos en iteraciones con entregables claros para que veas el progreso y puedas dirigir el rumbo temprano. Las elecciones tecnológicas están guiadas por tu contexto—no por nuestra zona de confort.",
  },
  "service.mobile.outcome": {
    id: "Aplikasi seluler yang bekerja untuk bisnis Anda hari ini dan berkembang bersama Anda besok. Basis kode yang tim Anda (atau kami) bisa kelola dan kembangkan tanpa memulai dari awal.",
    en: "Mobile applications that work for your business today and scale with you tomorrow. Codebases that your team (or ours) can maintain and extend without starting over.",
    es: "Aplicaciones móviles que funcionan para tu negocio hoy y escalan contigo mañana. Bases de código que tu equipo (o el nuestro) puede mantener y extender sin empezar de cero.",
  },
  "service.mobile.usecase": {
    id: "Sebuah perusahaan logistik membutuhkan aplikasi seluler untuk para sopir mereka mengelola rute, mengirim pembaruan status, dan berkomunikasi dengan dispatch. Kami menghasilkan aplikasi React Native—terintegrasi dengan sistem backend mereka, di-deploy di App Store dan Google Play, dan didokumentasi agar tim internal mereka bisa mengelolanya.",
    en: "A logistics company needed a mobile app for their drivers to manage routes, send status updates, and communicate with dispatch. We delivered a React Native app—integrated with their backend systems, deployed on the App Store and Google Play, and documented for their in-house team to own.",
    es: "Una empresa de logística necesitaba una aplicación móvil para que sus conductores gestionaran rutas, enviaran actualizaciones de estado y se comunicaran con el despacho. Entregamos una aplicación React Native—integrada con sus sistemas backend, desplegada en la App Store y Google Play, y documentada para que su equipo interno la administrara.",
  },

  // Service: web app development
  "service.webapp.title": {
    id: "Pengembangan Aplikasi Web",
    en: "Web App Development",
    es: "Desarrollo de Aplicaciones Web",
  },
  "service.webapp.sub": {
    id: "Aplikasi web kustom yang tahan lama. Skalabel. Mudah dikelola.",
    en: "Custom web applications built to last. Scalable. Maintainable.",
    es: "Aplicaciones web personalizadas construidas para durar. Escalable. Mantenible.",
  },
  "service.webapp.problem": {
    id: "Banyak bisnis bergantung pada aplikasi web yang usang, sulit dikelola, atau tidak sesuai kebutuhan. Solusi siap pakai sering kali tidak cukup untuk kebutuhan unik Anda, sementara pengembangan internal bisa kekurangan keahlian atau sumber daya.",
    en: "Many businesses rely on outdated, hard-to-manage, or ill-fitting web applications. Off-the-shelf solutions often fall short for your unique needs, while in-house development can lack expertise or resources.",
    es: "Muchas empresas dependen de aplicaciones web obsoletas, difíciles de gestionar o inadecuadas. Las soluciones genéricas a menudo no son suficientes para tus necesidades únicas, mientras que el desarrollo interno puede carecer de experiencia o recursos.",
  },
  "service.webapp.approach": {
    id: "Kami membangun aplikasi web dengan prinsip arsitektur bersih: pemisahan perhatian, kemampuan pengujian, dan dokumentasi dari hari pertama. Kami bekerja secara iteratif dengan hasil yang jelas, sehingga Anda melihat kemajuan dan bisa mengarahkan lebih awal. Pilihan teknologi didorong oleh konteks Anda—bukan zona nyaman kami.",
    en: "We build web applications with clean architecture principles: separation of concerns, testability, and documentation from day one. We work in iterations with clear deliverables, so you see progress and can steer direction early. Technology choices are driven by your context—not by our comfort zone.",
    es: "Construimos aplicaciones web con principios de arquitectura limpia: separación de responsabilidades, testeabilidad y documentación desde el día uno. Trabajamos en iteraciones con entregables claros para que veas el progreso y puedas dirigir el rumbo temprano. Las elecciones tecnológicas están guiadas por tu contexto—no por nuestra zona de confort.",
  },
  "service.webapp.outcome": {
    id: "Aplikasi web yang bekerja untuk bisnis Anda hari ini dan berkembang bersama Anda besok. Basis kode yang tim Anda (atau kami) bisa kelola dan kembangkan tanpa memulai dari awal.",
    en: "Web applications that work for your business today and scale with you tomorrow. Codebases that your team (or ours) can maintain and extend without starting over.",
    es: "Aplicaciones web que funcionan para tu negocio hoy y escalan contigo mañana. Bases de código que tu equipo (o el nuestro) puede mantener y extender sin empezar de cero.",
  },
  "service.webapp.usecase": {
    id: "Sebuah perusahaan ritel membutuhkan platform e-commerce kustom untuk mengintegrasikan sistem POS mereka, mengelola inventaris, dan memberikan pengalaman pelanggan yang mulus. Kami menghasilkan aplikasi Laravel dengan frontend React—terintegrasi dengan sistem POS mereka, di-deploy di AWS, dan didokumentasi agar tim internal mereka bisa mengelolanya.",
    en: "A retail company needed a custom e-commerce platform to integrate their POS system, manage inventory, and provide a seamless customer experience. We delivered a Laravel application with React frontend—integrated with their POS, deployed on AWS, and documented for their in-house team to own.",
    es: "Una empresa minorista necesitaba una plataforma de comercio electrónico personalizada para integrar su sistema POS, gestionar inventario y brindar una experiencia de cliente fluida. Entregamos una aplicación Laravel con frontend React—integrada con su POS, desplegada en AWS y documentada para que su equipo interno la administrara.",
  },


  // Service: development
  "service.dev.title": {
    id: "Pengembangan Software",
    en: "Software Development",
    es: "Desarrollo de Software",
  },
  "service.dev.sub": {
    id: "Software kustom yang tahan lama. Skalabel. Mudah dikelola.",
    en: "Custom software built to last. Scalable. Maintainable.",
    es: "Software personalizado construido para durar. Escalable. Mantenible.",
  },
  "service.dev.problem": {
    id: "Solusi siap pakai sering kali tidak cukup—alur kerja kustom, kebutuhan integrasi, atau persyaratan skalabilitas membutuhkan sistem yang disesuaikan. Banyak proyek gagal karena arsitektur buruk, persyaratan tidak jelas, atau kurangnya perencanaan pemeliharaan jangka panjang.",
    en: "Off-the-shelf solutions often fall short—custom workflows, integration needs, or scalability requirements demand tailored systems. Many projects fail due to poor architecture, unclear requirements, or lack of long-term maintenance planning.",
    es: "Las soluciones genéricas a menudo no son suficientes—los flujos de trabajo personalizados, las necesidades de integración o los requisitos de escalabilidad exigen sistemas a medida. Muchos proyectos fracasan por arquitectura deficiente, requisitos poco claros o falta de planificación de mantenimiento a largo plazo.",
  },
  "service.dev.approach": {
    id: "Kami membangun sistem dengan prinsip arsitektur bersih: pemisahan perhatian, kemampuan pengujian, dan dokumentasi dari hari pertama. Kami bekerja secara iteratif dengan hasil yang jelas, sehingga Anda melihat kemajuan dan bisa mengarahkan lebih awal. Pilihan teknologi didorong oleh konteks Anda—bukan zona nyaman kami.",
    en: "We build systems with clean architecture principles: separation of concerns, testability, and documentation from day one. We work in iterations with clear deliverables, so you see progress and can steer direction early. Technology choices are driven by your context—not by our comfort zone.",
    es: "Construimos sistemas con principios de arquitectura limpia: separación de responsabilidades, testeabilidad y documentación desde el día uno. Trabajamos en iteraciones con entregables claros para que veas el progreso y puedas dirigir el rumbo temprano. Las elecciones tecnológicas están guiadas por tu contexto—no por nuestra zona de confort.",
  },
  "service.dev.outcome": {
    id: "Sistem yang bekerja untuk bisnis Anda hari ini dan berkembang bersama Anda besok. Basis kode yang tim Anda (atau kami) bisa kelola dan kembangkan tanpa memulai dari awal.",
    en: "Systems that work for your business today and scale with you tomorrow. Codebases that your team (or ours) can maintain and extend without starting over.",
    es: "Sistemas que funcionan para tu negocio hoy y escalan contigo mañana. Bases de código que tu equipo (o el nuestro) puede mantener y extender sin empezar de cero.",
  },
  "service.dev.usecase": {
    id: "Sebuah perusahaan SaaS B2B membutuhkan mesin alur kerja kustom untuk mengotomasi onboarding klien. Kami menghasilkan sistem berbasis Laravel dengan frontend Vue.js—terintegrasi dengan CRM mereka, di-deploy di AWS, dan didokumentasi agar tim internal mereka bisa mengelolanya.",
    en: "A B2B SaaS company needed a custom workflow engine to automate client onboarding. We delivered a Laravel-based system with Vue.js frontend—integrated with their CRM, deployed on AWS, and documented for their in-house team to own.",
    es: "Una empresa SaaS B2B necesitaba un motor de flujo de trabajo personalizado para automatizar la incorporación de clientes. Entregamos un sistema basado en Laravel con frontend Vue.js—integrado con su CRM, desplegado en AWS y documentado para que su equipo interno lo administrara.",
  },

  // Service: hardware
  "service.hw.title": {
    id: "Instalasi Perangkat Keras",
    en: "Hardware Installation",
    es: "Instalación de Hardware",
  },
  "service.hw.sub": {
    id: "Infrastruktur andal. Terpasang dengan benar. Dibangun untuk bertahan.",
    en: "Reliable infrastructure. Properly installed. Built to last.",
    es: "Infraestructura confiable. Correctamente instalada. Construida para durar.",
  },
  "service.hw.problem": {
    id: "Kantor baru, ekspansi, atau peningkatan infrastruktur membutuhkan deployment hardware yang tepat. Instalasi buruk menyebabkan downtime, kabel berantakan, dan masalah pemeliharaan di masa depan. Banyak bisnis kesulitan dengan koordinasi vendor dan kurangnya keahlian internal.",
    en: "New offices, expansions, or infrastructure upgrades require proper hardware deployment. Poor installation leads to downtime, cable clutter, and future maintenance headaches. Many businesses struggle with vendor coordination and lack in-house expertise.",
    es: "Las nuevas oficinas, expansiones o actualizaciones de infraestructura requieren una implementación adecuada de hardware. Una mala instalación genera tiempo de inactividad, desorden de cables y dolores de cabeza futuros. Muchas empresas tienen dificultades con la coordinación de proveedores y carecen de experiencia interna.",
  },
  "service.hw.approach": {
    id: "Kami menangani instalasi hardware dari awal hingga akhir: pemasangan kabel jaringan, rak server, workstation, dan periferal. Kami mengikuti standar pemasangan kabel terstruktur, mendokumentasikan semuanya, dan memastikan infrastruktur Anda skalabel dan mudah dikelola sejak hari pertama.",
    en: "We handle end-to-end hardware installation: network cabling, server racks, workstations, and peripherals. We follow structured cabling standards, document everything, and ensure your infrastructure is scalable and maintainable from day one.",
    es: "Manejamos la instalación de hardware de extremo a extremo: cableado de red, racks de servidores, estaciones de trabajo y periféricos. Seguimos estándares de cableado estructurado, documentamos todo y aseguramos que tu infraestructura sea escalable y mantenible desde el día uno.",
  },
  "service.hw.outcome": {
    id: "Infrastruktur bersih dan terorganisir. Downtime berkurang. Dokumentasi jelas untuk upgrade di masa depan. Hardware yang mendukung operasi bisnis Anda dengan andal.",
    en: "Clean, organized infrastructure. Reduced downtime. Clear documentation for future upgrades. Hardware that supports your business operations reliably.",
    es: "Infraestructura limpia y organizada. Tiempo de inactividad reducido. Documentación clara para futuras actualizaciones. Hardware que soporta las operaciones de tu negocio de forma confiable.",
  },
  "service.hw.usecase": {
    id: "Sebuah perusahaan logistik yang berkembang membuka gudang baru. Kami menginstal infrastruktur jaringan, access point, dan workstation—memberikan setup siap pakai dengan dokumentasi dan pelatihan serah terima untuk tim IT mereka.",
    en: "A growing logistics company opened a new warehouse. We installed network infrastructure, access points, and workstations—delivering a turnkey setup with documentation and handover training for their IT team.",
    es: "Una empresa de logística en crecimiento abrió un nuevo almacén. Instalamos infraestructura de red, puntos de acceso y estaciones de trabajo—entregando una configuración llave en mano con documentación y capacitación de traspaso para su equipo IT.",
  },

  // Service: consulting
  "service.it.title": {
    id: "Konsultasi IT",
    en: "IT Consulting",
    es: "Consultoría IT",
  },
  "service.it.sub": {
    id: "Selaraskan teknologi dengan tujuan bisnis. Buat keputusan yang tepat.",
    en: "Align technology with business objectives. Make informed decisions.",
    es: "Alinea la tecnología con los objetivos de negocio. Toma decisiones informadas.",
  },
  "service.it.problem": {
    id: "Bisnis yang berkembang sering menghadapi arah teknologi yang tidak jelas—sistem yang berantakan, prioritas bertentangan, atau keputusan yang didorong oleh vendor bukan strategi. Hasilnya: pengeluaran sia-sia, utang teknis, dan peluang yang terlewat.",
    en: "Growing businesses often face unclear technology direction—sprawling systems, conflicting priorities, or decisions driven by vendors rather than strategy. The result: wasted spend, technical debt, and missed opportunities.",
    es: "Las empresas en crecimiento a menudo enfrentan una dirección tecnológica poco clara—sistemas dispersos, prioridades conflictivas o decisiones impulsadas por proveedores en lugar de estrategia. El resultado: gasto desperdiciado, deuda técnica y oportunidades perdidas.",
  },
  "service.it.approach": {
    id: "Kami melakukan penemuan terstruktur untuk memahami tujuan bisnis, kondisi saat ini, dan kendala Anda. Kemudian kami mengembangkan peta jalan praktis—diprioritaskan, bertahap, dan selaras dengan lintasan pertumbuhan Anda. Tanpa laporan penuh jargon; kami memberikan rekomendasi yang bisa ditindaklanjuti.",
    en: "We conduct structured discovery to understand your business goals, current state, and constraints. We then develop a practical roadmap—prioritized, phased, and aligned with your growth trajectory. No jargon-heavy reports; we deliver actionable recommendations you can implement.",
    es: "Realizamos un descubrimiento estructurado para entender tus objetivos de negocio, estado actual y limitaciones. Luego desarrollamos una hoja de ruta práctica—priorizada, por fases y alineada con tu trayectoria de crecimiento. Sin informes llenos de jerga; entregamos recomendaciones accionables que puedes implementar.",
  },
  "service.it.outcome": {
    id: "Arah teknologi yang jelas, keputusan arsitektur yang tervalidasi, dan peta jalan yang bisa dijalankan oleh tim dan stakeholder Anda. Anda akan tahu apa yang harus dibangun, mengapa, dan urutannya.",
    en: "Clear technology direction, validated architecture decisions, and a roadmap that your team and stakeholders can execute. You'll know what to build, why, and in what order.",
    es: "Dirección tecnológica clara, decisiones de arquitectura validadas y una hoja de ruta que tu equipo y partes interesadas pueden ejecutar. Sabrás qué construir, por qué y en qué orden.",
  },
  "service.it.usecase": {
    id: "Sebuah peritel menengah perlu mengkonsolidasikan lima sistem lama menjadi platform terpadu. Kami menghasilkan peta jalan migrasi 18 bulan dengan fase yang jelas, proyeksi biaya, dan mitigasi risiko—memungkinkan keputusan tingkat dewan yang tepat.",
    en: "A mid-size retailer needed to consolidate five legacy systems into a unified platform. We delivered an 18-month migration roadmap with clear phases, cost projections, and risk mitigation—enabling informed board-level decisions.",
    es: "Un minorista mediano necesitaba consolidar cinco sistemas heredados en una plataforma unificada. Entregamos una hoja de ruta de migración de 18 meses con fases claras, proyecciones de costos y mitigación de riesgos—permitiendo decisiones informadas a nivel directivo.",
  },

  // Service: automation
  "service.ai.title": {
    id: "Otomasi AI Bisnis",
    en: "Business AI Automation",
    es: "Automatización IA Empresarial",
  },
  "service.ai.sub": {
    id: "Alur kerja bertenaga AI. Kurangi pekerjaan manual. Fokus pada yang penting.",
    en: "AI-powered workflows. Less manual work. More focus on what matters.",
    es: "Flujos de trabajo impulsados por IA. Menos trabajo manual. Más enfoque en lo que importa.",
  },
  "service.ai.problem": {
    id: "Proses manual dan repetitif menghabiskan waktu dan menimbulkan kesalahan. Entri data, pembuatan laporan, sinkronisasi lintas sistem—tugas-tugas ini mengonsumsi jam kerja yang bisa digunakan untuk strategi, hubungan pelanggan, atau inovasi.",
    en: "Manual, repetitive processes drain time and introduce errors. Data entry, report generation, cross-system synchronization—these tasks consume hours that could be spent on strategy, customer relationships, or innovation.",
    es: "Los procesos manuales y repetitivos consumen tiempo e introducen errores. Entrada de datos, generación de informes, sincronización entre sistemas—estas tareas consumen horas que podrían dedicarse a estrategia, relaciones con clientes o innovación.",
  },
  "service.ai.approach": {
    id: "Kami memetakan alur kerja Anda saat ini, mengidentifikasi peluang otomasi, dan merancang solusi yang terintegrasi dengan tools yang ada. Kami memprioritaskan otomasi berdampak tinggi dan risiko rendah terlebih dahulu—memberikan kemenangan cepat sambil membangun menuju transformasi yang lebih luas.",
    en: "We map your current workflows, identify automation opportunities, and design solutions that integrate with your existing tools. We prioritize high-impact, low-risk automations first—delivering quick wins while building toward broader transformation.",
    es: "Mapeamos tus flujos de trabajo actuales, identificamos oportunidades de automatización y diseñamos soluciones que se integran con tus herramientas existentes. Priorizamos automatizaciones de alto impacto y bajo riesgo primero—entregando victorias rápidas mientras construimos hacia una transformación más amplia.",
  },
  "service.ai.outcome": {
    id: "Usaha manual berkurang, kesalahan lebih sedikit, dan eksekusi lebih cepat. Tim Anda menghabiskan lebih sedikit waktu pada tugas rutin dan lebih banyak pada pekerjaan yang mendorong pertumbuhan.",
    en: "Reduced manual effort, fewer errors, and faster execution. Your team spends less time on routine tasks and more on work that drives growth.",
    es: "Esfuerzo manual reducido, menos errores y ejecución más rápida. Tu equipo dedica menos tiempo a tareas rutinarias y más a trabajo que impulsa el crecimiento.",
  },
  "service.ai.usecase": {
    id: "Sebuah perusahaan logistik secara manual menyinkronkan pesanan antara ERP dan operator pengiriman mereka. Kami membangun lapisan otomasi yang menyinkronkan secara real-time, menangani kasus edge, dan mengirim peringatan—memotong 4 jam pekerjaan manual harian menjadi hampir nol.",
    en: "A logistics company was manually syncing orders between their ERP and shipping carriers. We built an automation layer that syncs in real-time, handles edge cases, and sends alerts—cutting 4 hours of daily manual work to near zero.",
    es: "Una empresa de logística sincronizaba manualmente pedidos entre su ERP y transportistas. Construimos una capa de automatización que sincroniza en tiempo real, maneja casos especiales y envía alertas—reduciendo 4 horas de trabajo manual diario a casi cero.",
  },

  // Service: audit
  "service.audit.title": {
    id: "Audit Teknologi",
    en: "Technology Audit",
    es: "Auditoría Tecnológica",
  },
  "service.audit.sub": {
    id: "Penilaian objektif. Rekomendasi yang jelas.",
    en: "Objective assessment. Clear recommendations.",
    es: "Evaluación objetiva. Recomendaciones claras.",
  },
  "service.audit.problem": {
    id: "Banyak bisnis tidak yakin apakah infrastruktur teknologi mereka optimal, aman, atau siap untuk pertumbuhan. Tanpa penilaian independen, masalah tersembunyi menumpuk dan biaya meningkat.",
    en: "Many businesses are unsure whether their technology infrastructure is optimal, secure, or growth-ready. Without independent assessment, hidden issues accumulate and costs increase.",
    es: "Muchas empresas no están seguras de si su infraestructura tecnológica es óptima, segura o está lista para crecer. Sin una evaluación independiente, los problemas ocultos se acumulan y los costos aumentan.",
  },
  "service.audit.approach": {
    id: "Kami melakukan penilaian menyeluruh terhadap sistem, infrastruktur, dan proses teknologi Anda. Kami mengidentifikasi risiko, inefisiensi, dan peluang—kemudian memberikan rekomendasi tertulis yang jelas dan bisa ditindaklanjuti.",
    en: "We conduct thorough assessment of your systems, infrastructure, and technology processes. We identify risks, inefficiencies, and opportunities—then deliver clear, actionable written recommendations.",
    es: "Realizamos una evaluación exhaustiva de tus sistemas, infraestructura y procesos tecnológicos. Identificamos riesgos, ineficiencias y oportunidades—luego entregamos recomendaciones escritas claras y accionables.",
  },
  "service.audit.outcome": {
    id: "Pemahaman yang jelas tentang kondisi teknologi Anda saat ini, dengan peta jalan prioritas untuk perbaikan dan optimasi.",
    en: "Clear understanding of your current technology state, with a prioritized roadmap for improvements and optimization.",
    es: "Comprensión clara del estado actual de tu tecnología, con una hoja de ruta priorizada para mejoras y optimización.",
  },
  "service.audit.usecase": {
    id: "Sebuah perusahaan manufaktur menengah meminta audit infrastruktur IT mereka sebelum ekspansi. Kami mengidentifikasi kerentanan keamanan, sistem yang redundan, dan peluang penghematan biaya—menghasilkan rencana optimasi yang menghemat 30% biaya operasional IT.",
    en: "A mid-size manufacturing company requested an IT infrastructure audit before expansion. We identified security vulnerabilities, redundant systems, and cost-saving opportunities—producing an optimization plan that saved 30% in IT operational costs.",
    es: "Una empresa manufacturera mediana solicitó una auditoría de infraestructura IT antes de expandirse. Identificamos vulnerabilidades de seguridad, sistemas redundantes y oportunidades de ahorro—produciendo un plan de optimización que ahorró 30% en costos operativos de IT.",
  },

  // Service: strategy
  "service.strategy.title": {
    id: "Strategi & Penasihat IT",
    en: "IT Strategy & Advisory",
    es: "Estrategia y Asesoría IT",
  },
  "service.strategy.sub": {
    id: "Selaraskan teknologi dengan tujuan bisnis. Buat keputusan yang tepat.",
    en: "Align technology with business objectives. Make informed decisions.",
    es: "Alinea la tecnología con los objetivos de negocio. Toma decisiones informadas.",
  },
  "service.strategy.problem": {
    id: "Tanpa strategi IT yang jelas, bisnis sering membuat keputusan teknologi secara reaktif—membeli tools yang tidak terintegrasi, membangun sistem yang tidak skalabel, atau menginvestasikan di area yang salah.",
    en: "Without a clear IT strategy, businesses often make reactive technology decisions—buying tools that don't integrate, building non-scalable systems, or investing in the wrong areas.",
    es: "Sin una estrategia IT clara, las empresas a menudo toman decisiones tecnológicas reactivas—comprando herramientas que no se integran, construyendo sistemas no escalables o invirtiendo en las áreas equivocadas.",
  },
  "service.strategy.approach": {
    id: "Kami bekerja dengan kepemimpinan Anda untuk mengembangkan strategi IT yang selaras dengan tujuan bisnis. Kami memetakan kondisi saat ini, mendefinisikan visi target, dan membuat peta jalan bertahap yang realistis dan terukur.",
    en: "We work with your leadership to develop an IT strategy aligned with business objectives. We map current state, define target vision, and create a phased, realistic, measurable roadmap.",
    es: "Trabajamos con tu liderazgo para desarrollar una estrategia IT alineada con los objetivos de negocio. Mapeamos el estado actual, definimos la visión objetivo y creamos una hoja de ruta realista, medible y por fases.",
  },
  "service.strategy.outcome": {
    id: "Peta jalan IT strategis yang bisa dijalankan tim Anda, dengan prioritas yang jelas, estimasi investasi, dan KPI yang terukur.",
    en: "A strategic IT roadmap your team can execute, with clear priorities, investment estimates, and measurable KPIs.",
    es: "Una hoja de ruta IT estratégica que tu equipo puede ejecutar, con prioridades claras, estimaciones de inversión y KPIs medibles.",
  },
  "service.strategy.usecase": {
    id: "Sebuah startup fintech yang berkembang pesat membutuhkan strategi teknologi untuk mendukung pertumbuhan 5x dalam 2 tahun. Kami mengembangkan peta jalan arsitektur, strategi scaling, dan rencana perekrutan tim teknis.",
    en: "A fast-growing fintech startup needed a technology strategy to support 5x growth in 2 years. We developed an architecture roadmap, scaling strategy, and technical team hiring plan.",
    es: "Una startup fintech de rápido crecimiento necesitaba una estrategia tecnológica para soportar un crecimiento 5x en 2 años. Desarrollamos una hoja de ruta de arquitectura, estrategia de escalamiento y plan de contratación del equipo técnico.",
  },

  // ── Portfolio page ────────────────────────────────────
  "portfolio.hero.badge": {
    id: "Karya Kami",
    en: "Our Work",
    es: "Nuestro Trabajo",
  },
  "portfolio.hero.title": {
    id: "Portofolio",
    en: "Portfolio",
    es: "Portafolio",
  },
  "portfolio.hero.sub": {
    id: "Proyek nyata. Hasil terukur. Kepercayaan melalui bukti.",
    en: "Real projects. Measurable outcomes. Trust through evidence.",
    es: "Proyectos reales. Resultados medibles. Confianza a través de evidencia.",
  },
  "portfolio.cta.title": {
    id: "Punya proyek dalam pikiran?",
    en: "Have a project in mind?",
    es: "¿Tienes un proyecto en mente?",
  },
  "portfolio.cta.text": {
    id: "Kami ingin mendengar tantangan Anda dan menjelajahi bagaimana kami bisa membantu.",
    en: "We'd love to hear about your challenges and explore how we can help.",
    es: "Nos encantaría conocer tus desafíos y explorar cómo podemos ayudarte.",
  },
  "portfolio.cta.btn": {
    id: "Hubungi Kami",
    en: "Get in touch",
    es: "Contáctanos",
  },

  // ── Case Studies page ─────────────────────────────────
  "casestudies.hero.badge": {
    id: "Analisis Mendalam",
    en: "In-Depth Analysis",
    es: "Análisis en Profundidad",
  },
  "casestudies.hero.title": {
    id: "Studi Kasus",
    en: "Case Studies",
    es: "Casos de Estudio",
  },
  "casestudies.hero.sub": {
    id: "Proyek nyata. Hasil terukur. Kepercayaan melalui bukti.",
    en: "Real projects. Measurable outcomes. Trust through evidence.",
    es: "Proyectos reales. Resultados medibles. Confianza a través de evidencia.",
  },
  "casestudies.cta.title": {
    id: "Punya proyek dalam pikiran?",
    en: "Have a project in mind?",
    es: "¿Tienes un proyecto en mente?",
  },
  "casestudies.cta.text": {
    id: "Kami ingin mendengar tantangan Anda dan menjelajahi bagaimana kami bisa membantu.",
    en: "We'd love to hear about your challenges and explore how we can help.",
    es: "Nos encantaría conocer tus desafíos y explorar cómo podemos ayudarte.",
  },
  "casestudies.cta.btn": {
    id: "Hubungi Kami",
    en: "Get in touch",
    es: "Contáctanos",
  },
  "casestudies.challenge": { id: "Tantangan", en: "Challenge", es: "Desafío" },
  "casestudies.solution": { id: "Solusi", en: "Solution", es: "Solución" },
  "casestudies.outcome": { id: "Hasil", en: "Outcome", es: "Resultado" },

  "casestudies.featured-hero.eyebrow": {
    id: "Klien Kami",
    en: "Our Clients",
    es: "Nuestros Clientes",
  },
  "casestudies.featured-hero.title": {
    id: "Berkembang bersama bisnis modren di Indonesia",
    en: "Growing together with modern business in Indonesia",
    es: "Creciendo juntos con el negocio moderno en Indonesia",
  },
  "casestudies.featured-hero.description": {
    id: "Kami membantu perusahaan membangun sistem, automasi, dan infrastruktur digital yang scalable untuk operasional yang lebih efisien.",
    en: "We help companies build scalable systems, automation, and digital infrastructure for more efficient operations.",
    es: "Ayudamos a las empresas a construir sistemas escalables, automática y infraestructura digital para operaciones m&aacute;s eficientes.",
  },
  "casestudies.stasts.title": {
    id:"Berkembang bersama Zeni Consulting",
    en:"Growing together with Zeni Consulting",
    es:"Creciendo juntos con Zeni Consulting",
  },
  "casestudies.stasts.description": {
    id:"Solusi teknologi yang membantu bisnis bekerja lebih cepat dan efisien",
    en:"Technology solutions that help businesses work faster and more efficiently",
    es:"Soluciones de tecnolog&iacute;a que ayudan a las empresas a trabajar m&aacute;s r&aacute;pidamente y eficientemente",
  },
  "casestudies.stasts.label.1": {
    id:"Project Selesai",
    en:"Completed Projects",
    es:"Proyectos Completados",
  },
  "casestudies.stasts.label.2": {
    id: "Sistem Dibangun",
    en: "Systems Built",
    es: "Sistemas Construidos",
  },
  "casestudies.stasts.label.3": {
    id: "Kepuasan Klien",
    en: "Client Satisfaction",
    es: "Satisfacci&oacute;n del Cliente",
  },
  "casestudies.eyebrow": {
    id: "Studi Kasus",
    en: "Case Studies",
    es: "Casos de Estudio",

  },
  "casestudies.title": {
    id: "Solusi nyata untuk bisinis modren",
    en: "Real solutions for modern businesses",
    es: "Soluciones reales para negocios modernos",
  },
  "casestudies.description": {
    id: "Studi kasus pilihan dari project yang kami kerjakan untuk membantu",
    en: "Featured case studies from projects we've worked on to help",
    es: "Estudios de caso destacados de proyectos que hemos trabajado para ayudar",
  },
  "casestudies.filters.all": {
    id: "Semua",
    en: "All",
    es: "Todo",
  },
  "casestudies.filters.automation": {
    id: "Automation",
    en: "Automation",
    es: "Automatizaci&oacute;n",
  },
  "casestudies.filters.dashboard": {
    id: "Dashboard",
    en: "Dashboard",
    es: "Tablero",
  },
  "casestudies.filters.integration": {
    id: "Integration",
    en: "Integration",
    es: "Integraci&oacute;n",
  },
  "casestudies.filters.aisystems": {
    id: "AI Systems",
    en: "AI Systems",
    es: "Sistemas de IA",
  },

  


  "casestudies.nusalogistics.company.industry": {
  id: "Rantai Pasok & Logistik",
  en: "Supply Chain & Logistics",
  es: "Cadena de Suministro y Logística",
},

"casestudies.nusalogistics.company.size": {
  id: "50–200 karyawan",
  en: "50–200 employees",
  es: "50–200 empleados",
},

"casestudies.nusalogistics.company.founded": {
  id: "2018",
  en: "2018",
  es: "2018",
},

"casestudies.nusalogistics.company.products.workflowautomation": {
  id: "Otomatisasi Alur Kerja",
  en: "Workflow Automation",
  es: "Automatización de Flujos de Trabajo",
},

"casestudies.nusalogistics.company.products.operationaldashboard": {
  id: "Dashboard Operasional",
  en: "Operational Dashboard",
  es: "Panel Operativo",
},

"casestudies.nusalogistics.company.products.reportingsystem": {
  id: "Sistem Pelaporan",
  en: "Reporting System",
  es: "Sistema de Informes",
},

"casestudies.automation-system.category": {
  id: "Sistem Otomasi",
  en: "Automation Systems",
  es: "Sistemas de Automatización",
},
"casestudies.system-integration.category": {
  id: "Integrasi Sistem",
  en: "System Integration",
  es: "Integración de Sistemas",
},
"casestudies.internal-dashboard.category": {
  id: "Dashboard Internal",
  en: "Internal Dashboard",
  es: "Panel Interno",
},
"casestudies.ai-automation.category": {
  id: "Otomasi AI",
  en: "AI Automation",
  es: "Automatización de IA",
},

"casestudies.automation-system.title": {
  id: "Otomasi Proses Manual untuk Perusahaan Logistik",
  en: "Automating Manual Processes for a Logistics Company",
  es: "Automatizando Procesos Manuales para una Empresa de Logística",
},
"casestudies.system-integration.title": {
  id: "Integrasi Sistem untuk Perusahaan Ritel",
  en: "System Integration for a Retail Company",
  es: "Integración de Sistemas para una Empresa Minorista",
},
"casestudies.internal-dashboard.title": {
  id: "Dashboard Internal untuk Perusahaan Manufaktur",
  en: "Internal Dashboard for a Manufacturing Company",
  es: "Panel Interno para una Empresa Manufacturera",
},
"casestudies.ai-automation.title": {
  id: "Otomasi AI untuk Perusahaan SaaS",
  en: "AI Automation for a SaaS Company",
  es: "Automatización de IA para una Empresa SaaS",
},
"casestudies.cta-section.badge": {
  id: "Mari Bekerja Sama",
  en: "LET'S WORK TOGETHER",
  es: "TRABAJEMOS JUNTOS",
},
"casestudies.cta-section.title": {
  id: "Bangun Sistem yang Lebih Cerdas untuk Bisnis Anda yang Berkembang",
  en: "Build Smarter Systems for Your Growing Business",
  es: "Construye Sistemas Más Inteligentes para Tu Negocio en Crecimiento",
},
"casestudies.cta-section.text": {
  id: "Kami ingin mendengar tentang tantangan Anda dan menjelajahi bagaimana kami bisa membantu.",
  en: "We'd love to hear about your challenges and explore how we can help.",
  es: "Nos encantaría conocer tus desafíos y explorar cómo podemos ayudarte.",
},
"casestudies.cta-section.btn-start": {
  id: "Mulai Konsultasi",
  en: "Start Consultation",
  es: "Iniciar Consulta",
},
"casestudies.cta-section.btn-service": {
  id: "Jelajahi Layanan Kami",
  en: "Explore Our Services",
  es: "Explora Nuestros Servicios",
},

"casestudies.case-detail.back": {
  id: "<-Kembali ke Studi Kasus",
  en: "Back to Case Studies",
  es: "Volver a Casos de Estudio",
},
"casestudies.case-detail.Nusa Logistics.name": {
  id: "Nusa Logistics",
  en: "Nusa Logistics",
  es: "Nusa Logistics",
},

"casestudies.case-detail.Rasa Group.name": {
  "id": "Rasa Group",
  "en": "Rasa Group",
  "es": "Rasa Group"
},

"casestudies.case-detail.SupportHub Indonesia.name": {
  "id": "SupportHub Indonesia",
  "en": "SupportHub Indonesia",
  "es": "SupportHub Indonesia"
},

"casestudies.case-detail.Talenta People.name": {
  "id": "Talenta People",
  "en": "Talenta People",
  "es": "Talenta People"
},
"casestudies.case-detail.automation-system.title": {
  id: "Otomasi Proses Manual untuk Perusahaan Logistik",
  en: "Automating Manual Processes for a Logistics Company",
  es: "Automatizando Procesos Manuales para una Empresa de Logística",
},
"casestudies.case-detail.system-integration.title": {
  id: "Integrasi Sistem untuk Perusahaan Ritel",
  en: "System Integration for a Retail Company",
  es: "Integración de Sistemas para una Empresa Minorista",
},
"casestudies.case-detail.internal-dashboard.title": {
  id: "Dashboard Internal untuk Perusahaan Manufaktur",
  en: "Internal Dashboard for a Manufacturing Company",
  es: "Panel Interno para una Empresa Manufacturera",
},
"casestudies.case-detail.ai-automation.title": {
  id: "Otomasi AI untuk Perusahaan SaaS",
  en: "AI Automation for a SaaS Company",
  es: "Automatización de IA para una Empresa SaaS",
},


"casestudies.case-detail.wawancara": {
  id: "Wawancara dengan",
  en: "Interview with",
  es: "Entrevista con"
},
"casestudies.case-detail.automation-system.person": {
  id: "Operations Manager, Nusa Logistics",
  en: "Operations Manager, Nusa Logistics",
  es: "Gerente de Operaciones, Nusa Logistics"
},
"casestudies.case-detail.system-integration.person": {
  id: "IT Manager, Rasa Group",
  en: "IT Manager, Rasa Group",
  es: "IT Manager, Rasa Group"
},
"casestudies.case-detail.internal-dashboard.person": {
  id: "Head of Operations, SupportHub Indonesia",
  en: "Head of Operations, SupportHub Indonesia",
  es: "Head of Operations, SupportHub Indonesia"
},
"casestudies.case-detail.ai-automation.person": {
  id: "CEO, Talenta People",
  en: "CEO, Talenta People",
  es: "CEO, Talenta People"
},
"casestudies.case-detail.automation-system.position": {
  id: "CTO, Nusa Logistics",
  en: "CTO, Nusa Logistics",
  es: "CTO, Nusa Logistics",
},
"casestudies.case-detail.system-integration.position": {
  id: "CTO, Rasa Group",
  en: "CTO, Rasa Group",
  es: "CTO, Rasa Group"
},
"casestudies.case-detail.internal-dashboard.position": {
  id: "CTO, SupportHub Indonesia",
  en: "CTO, SupportHub Indonesia",
  es: "CTO, SupportHub Indonesia"
},
"casestudies.case-detail.ai-automation.position": {
  id: "CTO, Talenta People",
  en: "CTO, Talenta People",
  es: "CTO, Talenta People"
},
"casestudies.case-detail.automation-system.stats-value": {
  id: "90%",
  en: "90%",
  es: "90%",
},
"casestudies.case-detail.automation-system.stats-label": {
  id: "Pengurangan usaha manual",
  en: "Reduction in manual effort",
  es: "Reducción en esfuerzo manual",
},
"casestudies.case-detail.system-integration.stats-value": {
  id: "85%",
  en: "85%",
  es: "85%",
},
"casestudies.case-detail.system-integration.stats-label": {
  id: "Peningkatan efisiensi operasional",
  en: "Improvement in operational efficiency",
  es: "Mejora en la eficiencia operativa",
},
"casestudies.case-detail.internal-dashboard.stats-value": {
  id: "95%",
  en: "95%",
  es: "95%",
},
"casestudies.case-detail.internal-dashboard.stats-label": {
  id: "Peningkatan keputusan berbasis data",
  en: "Improved data-driven decision making",
  es: "Mejora en la toma de decisiones basada en datos",
},
"casestudies.case-detail.ai-automation.stats-value": {
  id: "80%",
  en: "80%",
  es: "80%",
},
"casestudies.case-detail.ai-automation.stats-label": {
  id: "Pengurangan waktu proses",
  en: "Reduction in processing time",
  es: "Reducción en el tiempo de procesamiento",
},
"casestudies.case-detail.automation-system.sidebar-label": {
  id: "Perusahaan",
  en: "Company",
  es: "Empresa",
},
"casestudies.case-detail.automation-system.sidebar-value": {
  id: "Nusa Logistics",
  en: "Nusa Logistics",
  es: "Nusa Logistics",
},
"casestudies.case-detail.system-integration.sidebar-label": {
  id: "Perusahaan",
  en: "Company",
  es: "Empresa",
},
"casestudies.case-detail.system-integration.sidebar-value": {
  id: "Rasa Group",
  en: "Rasa Group",
  es: "Rasa Group",
},
"casestudies.case-detail.internal-dashboard.sidebar-label": {
  id: "Perusahaan",
  en: "Company",
  es: "Empresa",
},
"casestudies.case-detail.internal-dashboard.sidebar-value": {
  id: "SupportHub Indonesia",
  en: "SupportHub Indonesia",
  es: "SupportHub Indonesia",
},
"casestudies.case-detail.ai-automation.sidebar-label": {
  id: "Perusahaan",
  en: "Company",
  es: "Empresa",
},
"casestudies.case-detail.ai-automation.sidebar-value": {
  id: "Talenta People",
  en: "Talenta People",
  es: "Talenta People",
},

"casestudies.case-detail.automation-system.excerpt": {
  id: "Pengurangan beban kerja manual dan peningkatan efisiensi operasional.",
  en: "Reduction in manual workload and improvement in operational efficiency.",
  es: "Reducción de carga de trabajo manual y mejora en la eficiencia operativa.",
},
"casestudies.case-detail.system-integration.excerpt": {
  id: "Integrasi sistem yang mulus untuk meningkatkan efisiensi operasional.",
  en: "Seamless system integration to enhance operational efficiency.",
  es: "Integración de sistemas sin problemas para mejorar la eficiencia operativa.",
},
"casestudies.case-detail.internal-dashboard.excerpt": {
  id: "Dashboard internal yang meningkatkan pengambilan keputusan berbasis data.",
  en: "Internal dashboard that enhances data-driven decision making.",
  es: "Panel interno que mejora la toma de decisiones basada en datos.",
},
"casestudies.case-detail.ai-automation.excerpt": {
  id: "Otomasi AI yang mengurangi waktu proses dan meningkatkan efisiensi.",
  en: "AI automation that reduces processing time and increases efficiency.",
  es: "Automatización de IA que reduce el tiempo de procesamiento y aumenta la eficiencia.",
},

// ===== NUSA LOGISTICS =====
"nusa.about.title": {
  id: "Tentang Perusahaan",
  en: "About the Company",
  es: "Sobre la Empresa",
},
"nusa.about.p1": {
  id: "Nusa Logistics adalah perusahaan logistik yang membantu bisnis mengelola distribusi barang, monitoring pengiriman, dan koordinasi operasional lintas tim.",
  en: "Nusa Logistics is a logistics company that helps businesses manage goods distribution, delivery monitoring, and cross-team operational coordination.",
  es: "Nusa Logistics es una empresa de logística que ayuda a los negocios a gestionar la distribución de mercancías, el monitoreo de envíos y la coordinación operativa entre equipos.",
},
"nusa.about.p2": {
  id: "Seiring meningkatnya volume pengiriman, perusahaan membutuhkan sistem yang lebih rapi untuk memantau status pengiriman, menyusun laporan, dan memberikan informasi operasional secara real-time.",
  en: "As delivery volumes grew, the company needed a more structured system to monitor delivery status, compile reports, and provide operational information in real-time.",
  es: "A medida que aumentaban los volúmenes de entrega, la empresa necesitaba un sistema más estructurado para monitorear el estado de los envíos, compilar informes y proporcionar información operativa en tiempo real.",
},

"nusa.challenge.title": {
  id: "Tantangan Bisnis",
  en: "Business Challenges",
  es: "Desafíos del Negocio",
},
"nusa.challenge.p1": {
  id: "Sebelumnya, proses tracking pengiriman masih dilakukan secara manual melalui spreadsheet dan komunikasi antar tim. Hal ini membuat data sering tidak sinkron dan membutuhkan waktu lebih lama untuk diperbarui.",
  en: "Previously, the delivery tracking process was still done manually through spreadsheets and inter-team communication. This often caused data to go out of sync and required more time to update.",
  es: "Anteriormente, el proceso de seguimiento de entregas se realizaba manualmente mediante hojas de cálculo y comunicación entre equipos, lo que frecuentemente causaba desincronización de datos y requería más tiempo para actualizarlos.",
},
"nusa.challenge.p2": {
  id: "Tim operasional juga membutuhkan waktu tambahan untuk membuat laporan harian karena informasi tersebar di beberapa sumber yang berbeda.",
  en: "The operations team also needed extra time to create daily reports because information was scattered across multiple different sources.",
  es: "El equipo operativo también necesitaba tiempo adicional para crear informes diarios porque la información estaba dispersa en múltiples fuentes distintas.",
},

"nusa.solution.title": {
  id: "Zeni Consulting sebagai Solusi",
  en: "Zeni Consulting as the Solution",
  es: "Zeni Consulting como Solución",
},
"nusa.solution.p1": {
  id: "Sistem automation dibangun untuk menghubungkan proses tracking, alert operasional, dan reporting ke dalam satu dashboard terpusat.",
  en: "An automation system was built to connect the tracking process, operational alerts, and reporting into one centralized dashboard.",
  es: "Se construyó un sistema de automatización para conectar el proceso de seguimiento, las alertas operativas y los informes en un panel centralizado.",
},
"nusa.solution.p2": {
  id: "Dengan sistem ini, tim dapat melihat status pengiriman, menerima notifikasi penting, dan menghasilkan laporan tanpa harus mengumpulkan data secara manual.",
  en: "With this system, the team can view delivery status, receive important notifications, and generate reports without manually collecting data.",
  es: "Con este sistema, el equipo puede ver el estado de los envíos, recibir notificaciones importantes y generar informes sin necesidad de recopilar datos manualmente.",
},

"nusa.result.title": {
  id: "Hasil",
  en: "Results",
  es: "Resultados",
},
"nusa.result.p1": {
  id: "Setelah sistem diterapkan, waktu reporting berkurang hingga 70% dan visibilitas pengiriman meningkat secara signifikan.",
  en: "After the system was implemented, reporting time was reduced by up to 70% and delivery visibility improved significantly.",
  es: "Tras implementar el sistema, el tiempo de generación de informes se redujo hasta un 70% y la visibilidad de los envíos mejoró significativamente.",
},
"nusa.result.p2": {
  id: "Tim operasional dapat bekerja lebih cepat, lebih terorganisir, dan memiliki data yang lebih akurat untuk mendukung pengambilan keputusan.",
  en: "The operations team can now work faster, more organized, and with more accurate data to support decision-making.",
  es: "El equipo operativo ahora puede trabajar más rápido, de forma más organizada y con datos más precisos para apoyar la toma de decisiones.",
},

// ===== NUSA LOGISTICS SIDEBAR =====
"nusa.sidebar.company.label": {
  id: "Perusahaan",
  en: "Company",
  es: "Empresa",
},
"nusa.sidebar.company.value": {
  id: "Nusa Logistics",
  en: "Nusa Logistics",
  es: "Nusa Logistics",
},
"nusa.sidebar.industry.label": {
  id: "Industri",
  en: "Industry",
  es: "Industria",
},
"nusa.sidebar.industry.value": {
  id: "Supply Chain & Logistics",
  en: "Supply Chain & Logistics",
  es: "Cadena de Suministro y Logística",
},
"nusa.sidebar.size.label": {
  id: "Ukuran Perusahaan",
  en: "Company Size",
  es: "Tamaño de la Empresa",
},
"nusa.sidebar.size.value": {
  id: "50–200 karyawan",
  en: "50–200 employees",
  es: "50–200 empleados",
},
"nusa.sidebar.founded.label": {
  id: "Tahun Berdiri",
  en: "Founded",
  es: "Año de Fundación",
},
"nusa.sidebar.founded.value": {
  id: "2018",
  en: "2018",
  es: "2018",
},
"nusa.sidebar.product.label": {
  id: "Produk yang Digunakan",
  en: "Products Used",
  es: "Productos Utilizados",
},
"nusa.sidebar.product.value": {
  id: "Workflow Automation, Operational Dashboard",
  en: "Workflow Automation, Operational Dashboard",
  es: "Automatización de Flujos, Panel Operativo",
},

// ===== TALENTA PEOPLE =====
"talenta.about.title": {
  id: "Tentang Perusahaan",
  en: "About the Company",
  es: "Sobre la Empresa",
},
"talenta.about.p1": {
  id: "Talenta People adalah perusahaan yang membantu bisnis mengelola kebutuhan sumber daya manusia, termasuk proses rekrutmen dan manajemen kandidat.",
  en: "Talenta People is a company that helps businesses manage human resource needs, including the recruitment process and candidate management.",
  es: "Talenta People es una empresa que ayuda a los negocios a gestionar las necesidades de recursos humanos, incluyendo el proceso de reclutamiento y la gestión de candidatos.",
},
"talenta.about.p2": {
  id: "Seiring meningkatnya kebutuhan hiring, tim HR membutuhkan sistem yang lebih rapi untuk memantau kandidat, jadwal interview, dan status setiap proses rekrutmen.",
  en: "As hiring demands grew, the HR team needed a more structured system to track candidates, interview schedules, and the status of each recruitment process.",
  es: "A medida que crecía la demanda de contratación, el equipo de RR.HH. necesitaba un sistema más estructurado para hacer seguimiento de candidatos, horarios de entrevistas y el estado de cada proceso de reclutamiento.",
},

"talenta.challenge.title": {
  id: "Tantangan Bisnis",
  en: "Business Challenges",
  es: "Desafíos del Negocio",
},
"talenta.challenge.p1": {
  id: "Sebelumnya, proses rekrutmen masih banyak bergantung pada spreadsheet, chat internal, dan update manual dari beberapa anggota tim.",
  en: "Previously, the recruitment process heavily relied on spreadsheets, internal chats, and manual updates from multiple team members.",
  es: "Anteriormente, el proceso de reclutamiento dependía en gran medida de hojas de cálculo, chats internos y actualizaciones manuales de varios miembros del equipo.",
},
"talenta.challenge.p2": {
  id: "Kondisi ini membuat status kandidat sulit dipantau secara konsisten dan meningkatkan risiko informasi terlewat selama proses hiring.",
  en: "This situation made it difficult to consistently monitor candidate status and increased the risk of missing information during the hiring process.",
  es: "Esta situación dificultaba el seguimiento consistente del estado de los candidatos y aumentaba el riesgo de perder información durante el proceso de contratación.",
},

"talenta.solution.title": {
  id: "Zeni Consulting sebagai Solusi",
  en: "Zeni Consulting as the Solution",
  es: "Zeni Consulting como Solución",
},
"talenta.solution.p1": {
  id: "Dashboard rekrutmen dibangun untuk membantu tim HR mengelola kandidat, melihat pipeline hiring, dan mengatur jadwal interview dalam satu sistem.",
  en: "A recruitment dashboard was built to help the HR team manage candidates, view the hiring pipeline, and schedule interviews all in one system.",
  es: "Se construyó un panel de reclutamiento para ayudar al equipo de RR.HH. a gestionar candidatos, ver el pipeline de contratación y programar entrevistas en un solo sistema.",
},
"talenta.solution.p2": {
  id: "Setiap kandidat dapat dipantau berdasarkan status, tahapan seleksi, dan catatan internal sehingga koordinasi tim menjadi lebih terstruktur.",
  en: "Each candidate can be tracked by status, selection stage, and internal notes, making team coordination more structured.",
  es: "Cada candidato puede ser monitoreado por estado, etapa de selección y notas internas, lo que hace que la coordinación del equipo sea más estructurada.",
},

"talenta.result.title": {
  id: "Hasil",
  en: "Results",
  es: "Resultados",
},
"talenta.result.p1": {
  id: "Setelah dashboard digunakan, proses administrasi rekrutmen berkurang hingga 60% dan tracking kandidat menjadi dua kali lebih cepat.",
  en: "After the dashboard was adopted, recruitment administration processes were reduced by up to 60% and candidate tracking became twice as fast.",
  es: "Tras adoptar el panel, los procesos administrativos de reclutamiento se redujeron hasta un 60% y el seguimiento de candidatos se volvió el doble de rápido.",
},
"talenta.result.p2": {
  id: "Tim HR dapat bekerja lebih terorganisir dan memiliki visibilitas yang lebih baik terhadap seluruh pipeline rekrutmen.",
  en: "The HR team can now work more organized and has better visibility across the entire recruitment pipeline.",
  es: "El equipo de RR.HH. ahora puede trabajar de forma más organizada y tiene mejor visibilidad de todo el pipeline de reclutamiento.",
},

// ===== TALENTA PEOPLE SIDEBAR =====
"talenta.sidebar.company.label": {
  id: "Perusahaan",
  en: "Company",
  es: "Empresa",
},
"talenta.sidebar.company.value": {
  id: "Talenta People",
  en: "Talenta People",
  es: "Talenta People",
},
"talenta.sidebar.industry.label": {
  id: "Industri",
  en: "Industry",
  es: "Industria",
},
"talenta.sidebar.industry.value": {
  id: "Human Resources",
  en: "Human Resources",
  es: "Recursos Humanos",
},
"talenta.sidebar.size.label": {
  id: "Ukuran Perusahaan",
  en: "Company Size",
  es: "Tamaño de la Empresa",
},
"talenta.sidebar.size.value": {
  id: "50–150 karyawan",
  en: "50–150 employees",
  es: "50–150 empleados",
},
"talenta.sidebar.founded.label": {
  id: "Tahun Berdiri",
  en: "Founded",
  es: "Año de Fundación",
},
"talenta.sidebar.founded.value": {
  id: "2019",
  en: "2019",
  es: "2019",
},
"talenta.sidebar.product.label": {
  id: "Produk yang Digunakan",
  en: "Products Used",
  es: "Productos Utilizados",
},
"talenta.sidebar.product.value": {
  id: "Recruitment Dashboard, Applicant Tracking",
  en: "Recruitment Dashboard, Applicant Tracking",
  es: "Panel de Reclutamiento, Seguimiento de Candidatos",
},

// ===== RASA GROUP =====
"rasa.about.title": {
  id: "Tentang Perusahaan",
  en: "About the Company",
  es: "Sobre la Empresa",
},
"rasa.about.p1": {
  id: "Rasa Group adalah bisnis retail dan F&B yang mengelola beberapa cabang dengan kebutuhan operasional harian yang tinggi.",
  en: "Rasa Group is a retail and F&B business managing multiple branches with high daily operational demands.",
  es: "Rasa Group es un negocio de retail y F&B que gestiona varias sucursales con altas demandas operativas diarias.",
},
"rasa.about.p2": {
  id: "Dengan jumlah transaksi yang terus meningkat, perusahaan membutuhkan sistem yang mampu menyatukan data penjualan, stok, dan performa cabang dalam satu platform yang mudah dipantau.",
  en: "With a growing number of transactions, the company needed a system capable of unifying sales data, stock, and branch performance into one easy-to-monitor platform.",
  es: "Con un número creciente de transacciones, la empresa necesitaba un sistema capaz de unificar datos de ventas, inventario y rendimiento de sucursales en una sola plataforma fácil de monitorear.",
},

"rasa.challenge.title": {
  id: "Tantangan Bisnis",
  en: "Business Challenges",
  es: "Desafíos del Negocio",
},
"rasa.challenge.p1": {
  id: "Sebelumnya, data penjualan dan stok dari setiap cabang masih direkap secara terpisah. Hal ini membuat proses pengecekan stok dan laporan penjualan membutuhkan waktu lebih lama.",
  en: "Previously, sales and stock data from each branch were still recorded separately. This made the stock-checking and sales reporting process take significantly longer.",
  es: "Anteriormente, los datos de ventas e inventario de cada sucursal se registraban por separado, lo que hacía que el proceso de verificación de stock e informes de ventas tomara más tiempo.",
},
"rasa.challenge.p2": {
  id: "Perbedaan data antar cabang juga membuat tim operasional sulit mendapatkan gambaran kondisi bisnis secara real-time.",
  en: "Data discrepancies between branches also made it difficult for the operations team to get a real-time picture of the business condition.",
  es: "Las discrepancias de datos entre sucursales también dificultaban que el equipo operativo obtuviera una visión en tiempo real del estado del negocio.",
},

"rasa.solution.title": {
  id: "Zeni Consulting sebagai Solusi",
  en: "Zeni Consulting as the Solution",
  es: "Zeni Consulting como Solución",
},
"rasa.solution.p1": {
  id: "Sistem POS terintegrasi dikembangkan untuk menyatukan data transaksi, stok barang, dan laporan cabang ke dalam satu dashboard terpusat.",
  en: "An integrated POS system was developed to unify transaction data, stock levels, and branch reports into one centralized dashboard.",
  es: "Se desarrolló un sistema POS integrado para unificar los datos de transacciones, niveles de inventario e informes de sucursales en un panel centralizado.",
},
"rasa.solution.p2": {
  id: "Dengan integrasi ini, tim dapat memantau performa cabang, melihat pergerakan stok, dan membuat keputusan operasional dengan data yang lebih akurat.",
  en: "With this integration, the team can monitor branch performance, track stock movement, and make operational decisions based on more accurate data.",
  es: "Con esta integración, el equipo puede monitorear el rendimiento de las sucursales, rastrear el movimiento de inventario y tomar decisiones operativas basadas en datos más precisos.",
},

"rasa.result.title": {
  id: "Hasil",
  en: "Results",
  es: "Resultados",
},
"rasa.result.p1": {
  id: "Setelah sistem diterapkan, akurasi stok meningkat hingga 95% dan proses monitoring cabang menjadi dua kali lebih cepat.",
  en: "After the system was implemented, stock accuracy increased by up to 95% and branch monitoring became twice as fast.",
  es: "Tras implementar el sistema, la precisión del inventario aumentó hasta un 95% y el monitoreo de sucursales se volvió el doble de rápido.",
},
"rasa.result.p2": {
  id: "Tim manajemen dapat melihat kondisi operasional secara real-time tanpa harus menunggu rekap manual dari setiap cabang.",
  en: "The management team can now view operational conditions in real-time without waiting for manual reports from each branch.",
  es: "El equipo de gestión ahora puede ver las condiciones operativas en tiempo real sin esperar informes manuales de cada sucursal.",
},

// ===== RASA GROUP SIDEBAR =====
"rasa.sidebar.company.label": {
  id: "Perusahaan",
  en: "Company",
  es: "Empresa",
},
"rasa.sidebar.company.value": {
  id: "Rasa Group",
  en: "Rasa Group",
  es: "Rasa Group",
},
"rasa.sidebar.industry.label": {
  id: "Industri",
  en: "Industry",
  es: "Industria",
},
"rasa.sidebar.industry.value": {
  id: "Retail & F&B",
  en: "Retail & F&B",
  es: "Retail y Alimentos & Bebidas",
},
"rasa.sidebar.size.label": {
  id: "Ukuran Perusahaan",
  en: "Company Size",
  es: "Tamaño de la Empresa",
},
"rasa.sidebar.size.value": {
  id: "100–300 karyawan",
  en: "100–300 employees",
  es: "100–300 empleados",
},
"rasa.sidebar.founded.label": {
  id: "Tahun Berdiri",
  en: "Founded",
  es: "Año de Fundación",
},
"rasa.sidebar.founded.value": {
  id: "2016",
  en: "2016",
  es: "2016",
},
"rasa.sidebar.product.label": {
  id: "Produk yang Digunakan",
  en: "Products Used",
  es: "Productos Utilizados",
},
"rasa.sidebar.product.value": {
  id: "POS Integration, Inventory Sync, Operational Dashboard",
  en: "POS Integration, Inventory Sync, Operational Dashboard",
  es: "Integración POS, Sincronización de Inventario, Panel Operativo",
},

// ===== SUPPORTHUB INDONESIA =====
"supporthub.about.title": {
  id: "Tentang Perusahaan",
  en: "About the Company",
  es: "Sobre la Empresa",
},
"supporthub.about.p1": {
  id: "SupportHub Indonesia membantu bisnis mengelola layanan pelanggan melalui berbagai channel komunikasi digital.",
  en: "SupportHub Indonesia helps businesses manage customer service across various digital communication channels.",
  es: "SupportHub Indonesia ayuda a las empresas a gestionar el servicio al cliente a través de diversos canales de comunicación digital.",
},
"supporthub.about.p2": {
  id: "Dengan meningkatnya volume pertanyaan pelanggan, perusahaan membutuhkan solusi yang mampu membantu tim support menjawab pertanyaan berulang secara lebih cepat dan konsisten.",
  en: "As customer inquiry volumes grew, the company needed a solution to help the support team answer repetitive questions faster and more consistently.",
  es: "A medida que aumentaba el volumen de consultas de clientes, la empresa necesitaba una solución para ayudar al equipo de soporte a responder preguntas repetitivas de forma más rápida y consistente.",
},

"supporthub.challenge.title": {
  id: "Tantangan Bisnis",
  en: "Business Challenges",
  es: "Desafíos del Negocio",
},
"supporthub.challenge.p1": {
  id: "Tim support sering menerima pertanyaan yang sama setiap hari, mulai dari informasi layanan, status pesanan, hingga panduan penggunaan produk.",
  en: "The support team frequently received the same questions every day, ranging from service information and order status to product usage guides.",
  es: "El equipo de soporte recibía frecuentemente las mismas preguntas cada día, desde información del servicio y estado de pedidos hasta guías de uso del producto.",
},
"supporthub.challenge.p2": {
  id: "Banyaknya pertanyaan repetitif membuat waktu respon menjadi lebih lambat dan mengurangi fokus tim terhadap kasus pelanggan yang lebih kompleks.",
  en: "The high volume of repetitive questions slowed down response times and reduced the team's focus on more complex customer cases.",
  es: "El alto volumen de preguntas repetitivas ralentizaba los tiempos de respuesta y reducía el enfoque del equipo en casos de clientes más complejos.",
},

"supporthub.solution.title": {
  id: "Zeni Consulting sebagai Solusi",
  en: "Zeni Consulting as the Solution",
  es: "Zeni Consulting como Solución",
},
"supporthub.solution.p1": {
  id: "AI assistant dikembangkan dan diintegrasikan dengan WhatsApp serta knowledge base internal untuk membantu menjawab pertanyaan pelanggan secara otomatis.",
  en: "An AI assistant was developed and integrated with WhatsApp and an internal knowledge base to automatically answer customer inquiries.",
  es: "Se desarrolló un asistente de IA e integró con WhatsApp y una base de conocimiento interna para responder automáticamente las consultas de los clientes.",
},
"supporthub.solution.p2": {
  id: "Sistem ini dirancang untuk memahami pertanyaan umum, memberikan jawaban berdasarkan data internal, dan membantu mengarahkan pelanggan ke informasi yang relevan.",
  en: "The system was designed to understand common questions, provide answers based on internal data, and guide customers to relevant information.",
  es: "El sistema fue diseñado para comprender preguntas comunes, proporcionar respuestas basadas en datos internos y guiar a los clientes hacia información relevante.",
},

"supporthub.result.title": {
  id: "Hasil",
  en: "Results",
  es: "Resultados",
},
"supporthub.result.p1": {
  id: "Setelah AI assistant digunakan, beban pertanyaan repetitif berkurang hingga 45% dan respon awal pelanggan menjadi 2.5 kali lebih cepat.",
  en: "After the AI assistant was deployed, the load of repetitive inquiries decreased by up to 45% and initial customer response time became 2.5 times faster.",
  es: "Tras implementar el asistente de IA, la carga de consultas repetitivas se redujo hasta un 45% y el tiempo de respuesta inicial al cliente se volvió 2,5 veces más rápido.",
},
"supporthub.result.p2": {
  id: "Tim support dapat lebih fokus menangani kasus yang membutuhkan perhatian manusia, sementara pertanyaan umum tetap terlayani secara konsisten.",
  en: "The support team can now focus more on cases that require human attention, while common inquiries are still handled consistently.",
  es: "El equipo de soporte ahora puede enfocarse más en casos que requieren atención humana, mientras que las consultas comunes siguen siendo atendidas de forma consistente.",
},

// ===== SUPPORTHUB INDONESIA SIDEBAR =====
"supporthub.sidebar.company.label": {
  id: "Perusahaan",
  en: "Company",
  es: "Empresa",
},
"supporthub.sidebar.company.value": {
  id: "SupportHub Indonesia",
  en: "SupportHub Indonesia",
  es: "SupportHub Indonesia",
},
"supporthub.sidebar.industry.label": {
  id: "Industri",
  en: "Industry",
  es: "Industria",
},
"supporthub.sidebar.industry.value": {
  id: "Customer Service",
  en: "Customer Service",
  es: "Servicio al Cliente",
},
"supporthub.sidebar.size.label": {
  id: "Ukuran Perusahaan",
  en: "Company Size",
  es: "Tamaño de la Empresa",
},
"supporthub.sidebar.size.value": {
  id: "30–100 karyawan",
  en: "30–100 employees",
  es: "30–100 empleados",
},
"supporthub.sidebar.founded.label": {
  id: "Tahun Berdiri",
  en: "Founded",
  es: "Año de Fundación",
},
"supporthub.sidebar.founded.value": {
  id: "2020",
  en: "2020",
  es: "2020",
},
"supporthub.sidebar.product.label": {
  id: "Produk yang Digunakan",
  en: "Products Used",
  es: "Productos Utilizados",
},
"supporthub.sidebar.product.value": {
  id: "AI Support Assistant, WhatsApp Integration",
  en: "AI Support Assistant, WhatsApp Integration",
  es: "Asistente de Soporte IA, Integración con WhatsApp",
},




// ===== INDUSTRI LOGISTIK =====
"industry.logistics.title": {
  id: "Industri Logistik",
  en: "Logistics Industry",
  es: "Industria Logística",
},
"industry.logistics.sub": {
  id: "Sistem logistik yang lebih cerdas untuk pelaporan yang lebih cepat, visibilitas pengiriman yang lebih baik, dan operasional yang lebih efisien.",
  en: "Smarter logistics systems for faster reporting, better delivery visibility, and more efficient operations.",
  es: "Sistemas logísticos más inteligentes para informes más rápidos, mejor visibilidad de entregas y operaciones más eficientes.",
},

// ===== INDUSTRI LOGISTIK HERO =====
"industry.logistics.hero.eyebrow": {
  id: "Solusi industri logistik & transportasi",
  en: "Logistics & Transportation Industry Solutions",
  es: "Soluciones para la Industria Logística y de Transporte",
},
"industry.logistics.hero.title": {
  id: "Solusi digital untuk operasional logistik yang lebih lancar",
  en: "Digital solutions for smoother logistics operations",
  es: "Soluciones digitales para operaciones logísticas más fluidas",
},
"industry.logistics.hero.description": {
  id: "Bantu bisnis logistik memantau pengiriman, armada, laporan, dan layanan pelanggan dalam satu sistem yang rapi dan mudah digunakan.",
  en: "Helping logistics businesses monitor deliveries, fleets, reports, and customer service in one clean and easy-to-use system.",
  es: "Ayudamos a las empresas logísticas a monitorear envíos, flotas, informes y servicio al cliente en un sistema ordenado y fácil de usar.",
},
"industry.logistics.hero.primaryCta": {
  id: "WhatsApp sekarang",
  en: "WhatsApp now",
  es: "WhatsApp ahora",
},
"industry.logistics.hero.secondaryCta": {
  id: "Jadwalkan konsultasi",
  en: "Schedule a consultation",
  es: "Programar una consulta",
},

// ===== INDUSTRI LOGISTIK CHALLENGES =====
"industry.logistics.challenges.title": {
  id: "Tantangan bisnis yang dihadapi industri logistik",
  en: "Business challenges faced by the logistics industry",
  es: "Desafíos empresariales que enfrenta la industria logística",
},
"industry.logistics.challenges.1.title": {
  id: "Operasional masih manual",
  en: "Operations still manual",
  es: "Operaciones aún manuales",
},
"industry.logistics.challenges.1.description": {
  id: "Tracking pengiriman, laporan, dan koordinasi tim masih tersebar di banyak tools sehingga proses kerja menjadi lambat.",
  en: "Delivery tracking, reports, and team coordination are still scattered across many tools, slowing down work processes.",
  es: "El seguimiento de entregas, los informes y la coordinación del equipo aún están dispersos en muchas herramientas, lo que ralentiza los procesos de trabajo.",
},
"industry.logistics.challenges.2.title": {
  id: "Visibilitas pengiriman kurang jelas",
  en: "Lack of delivery visibility",
  es: "Visibilidad de entregas poco clara",
},
"industry.logistics.challenges.2.description": {
  id: "Tim sulit memantau status order, armada, dan performa pengiriman secara real-time.",
  en: "The team struggles to monitor order status, fleet, and delivery performance in real-time.",
  es: "El equipo tiene dificultades para monitorear el estado de pedidos, la flota y el rendimiento de entregas en tiempo real.",
},
"industry.logistics.challenges.3.title": {
  id: "Laporan bisnis lambat",
  en: "Slow business reporting",
  es: "Informes empresariales lentos",
},
"industry.logistics.challenges.3.description": {
  id: "Data operasional belum terpusat sehingga proses analisis dan reporting membutuhkan waktu lama.",
  en: "Operational data is not yet centralized, making analysis and reporting processes time-consuming.",
  es: "Los datos operativos aún no están centralizados, lo que hace que los procesos de análisis e informes sean lentos.",
},
"industry.logistics.challenges.4.title": {
  id: "Layanan pelanggan tidak konsisten",
  en: "Inconsistent customer service",
  es: "Servicio al cliente inconsistente",
},
"industry.logistics.challenges.4.description": {
  id: "Customer sulit mendapatkan update cepat terkait status pengiriman dan kendala operasional.",
  en: "Customers struggle to get quick updates on delivery status and operational issues.",
  es: "Los clientes tienen dificultades para obtener actualizaciones rápidas sobre el estado de entregas y problemas operativos.",
},


// ===== INDUSTRI LOGISTIK SOLUTIONS =====
"industry.logistics.solutions.title": {
  id: "Penuhi berbagai kebutuhan industri logistik & transportasi dengan solusi terbaik",
  en: "Meet the various needs of the logistics & transportation industry with the best solutions",
  es: "Satisface las diversas necesidades de la industria logística y de transporte con las mejores soluciones",
},
"industry.logistics.solutions.cta": {
  id: "Jadwalkan konsultasi →",
  en: "Schedule a consultation →",
  es: "Programar una consulta →",
},

"industry.logistics.solutions.1.label": {
  id: "Manajemen operasional",
  en: "Operational Management",
  es: "Gestión Operacional",
},
"industry.logistics.solutions.1.title": {
  id: "Kelola operasional logistik dengan sistem yang lebih rapi",
  en: "Manage logistics operations with a more organized system",
  es: "Gestiona las operaciones logísticas con un sistema más organizado",
},
"industry.logistics.solutions.1.description": {
  id: "Bantu tim mengatur pekerjaan harian, data karyawan, jadwal operasional, dan proses administrasi bisnis logistik secara lebih efisien.",
  en: "Help the team manage daily tasks, employee data, operational schedules, and logistics business administration processes more efficiently.",
  es: "Ayuda al equipo a gestionar tareas diarias, datos de empleados, horarios operativos y procesos administrativos del negocio logístico de forma más eficiente.",
},

"industry.logistics.solutions.2.label": {
  id: "Cabang & armada logistik",
  en: "Branches & Logistics Fleet",
  es: "Sucursales y Flota Logística",
},
"industry.logistics.solutions.2.title": {
  id: "Kelola cabang dan armada logistik lebih terpusat",
  en: "Manage branches and logistics fleet more centrally",
  es: "Gestiona sucursales y flota logística de forma más centralizada",
},
"industry.logistics.solutions.2.description": {
  id: "Pantau data armada, jadwal pengiriman, performa driver, dan aktivitas cabang dalam satu sistem yang mudah digunakan.",
  en: "Monitor fleet data, delivery schedules, driver performance, and branch activities in one easy-to-use system.",
  es: "Monitorea datos de flota, horarios de entrega, rendimiento de conductores y actividades de sucursales en un sistema fácil de usar.",
},

"industry.logistics.solutions.3.label": {
  id: "Supply chain & inventaris",
  en: "Supply Chain & Inventory",
  es: "Cadena de Suministro e Inventario",
},
"industry.logistics.solutions.3.title": {
  id: "Pantau stok dan pergerakan barang secara real-time",
  en: "Monitor stock and goods movement in real-time",
  es: "Monitorea el stock y el movimiento de mercancías en tiempo real",
},
"industry.logistics.solutions.3.description": {
  id: "Bantu tim melihat ketersediaan stok, barang masuk-keluar, serta kebutuhan inventaris dengan lebih cepat.",
  en: "Help the team view stock availability, incoming and outgoing goods, and inventory needs more quickly.",
  es: "Ayuda al equipo a ver la disponibilidad de stock, entradas y salidas de mercancías y necesidades de inventario más rápidamente.",
},

"industry.logistics.solutions.4.label": {
  id: "Layanan pelanggan",
  en: "Customer Service",
  es: "Servicio al Cliente",
},
"industry.logistics.solutions.4.title": {
  id: "Tingkatkan layanan pelanggan dengan respon yang lebih cepat",
  en: "Improve customer service with faster responses",
  es: "Mejora el servicio al cliente con respuestas más rápidas",
},
"industry.logistics.solutions.4.description": {
  id: "Kelola inquiry pelanggan, permintaan quotation, update status pengiriman, dan komplain dalam satu alur komunikasi yang lebih rapi.",
  en: "Manage customer inquiries, quotation requests, delivery status updates, and complaints in one more organized communication flow.",
  es: "Gestiona consultas de clientes, solicitudes de cotización, actualizaciones de estado de entrega y quejas en un flujo de comunicación más organizado.",
},

"industry.logistics.solutions.5.label": {
  id: "Keuangan & biaya",
  en: "Finance & Costs",
  es: "Finanzas y Costos",
},
"industry.logistics.solutions.5.title": {
  id: "Pantau biaya operasional dan arus kas bisnis logistik",
  en: "Monitor operational costs and cash flow of logistics business",
  es: "Monitorea los costos operativos y el flujo de caja del negocio logístico",
},
"industry.logistics.solutions.5.description": {
  id: "Bantu tim memantau biaya pengiriman, biaya armada, invoice pelanggan, pembayaran vendor, dan laporan keuangan operasional secara lebih terstruktur.",
  en: "Help the team monitor delivery costs, fleet costs, customer invoices, vendor payments, and operational financial reports more structurally.",
  es: "Ayuda al equipo a monitorear costos de entrega, costos de flota, facturas de clientes, pagos a proveedores e informes financieros operativos de forma más estructurada.",
},

"industry.logistics.solutions.6.label": {
  id: "Transformasi digital",
  en: "Digital Transformation",
  es: "Transformación Digital",
},
"industry.logistics.solutions.6.title": {
  id: "Bangun sistem digital yang siap berkembang bersama bisnis",
  en: "Build a digital system ready to grow with your business",
  es: "Construye un sistema digital listo para crecer con tu negocio",
},
"industry.logistics.solutions.6.description": {
  id: "Digitalisasi proses kerja logistik mulai dari website company profile, dashboard operasional, integrasi WhatsApp, form inquiry, hingga sistem internal sesuai kebutuhan bisnis.",
  en: "Digitalize logistics work processes from company profile websites, operational dashboards, WhatsApp integration, inquiry forms, to internal systems tailored to business needs.",
  es: "Digitaliza los procesos de trabajo logístico desde sitios web de perfil empresarial, paneles operativos, integración con WhatsApp, formularios de consulta hasta sistemas internos adaptados a las necesidades del negocio.",
},

// ===== INDUSTRI LOGISTIK ADVANTAGES =====
"industry.logistics.advantages.title": {
  id: "Keunggulan solusi digital untuk industri logistik",
  en: "Advantages of digital solutions for the logistics industry",
  es: "Ventajas de las soluciones digitales para la industria logística",
},
"industry.logistics.advantages.1.title": {
  id: "Dashboard terpusat",
  en: "Centralized Dashboard",
  es: "Panel Centralizado",
},
"industry.logistics.advantages.1.description": {
  id: "Semua data penting bisnis dapat dipantau dari satu tempat.",
  en: "All important business data can be monitored from one place.",
  es: "Todos los datos importantes del negocio pueden monitorearse desde un solo lugar.",
},
"industry.logistics.advantages.2.title": {
  id: "Proses lebih cepat",
  en: "Faster Processes",
  es: "Procesos más Rápidos",
},
"industry.logistics.advantages.2.description": {
  id: "Kurangi pekerjaan manual dengan alur digital yang lebih efisien.",
  en: "Reduce manual work with more efficient digital workflows.",
  es: "Reduce el trabajo manual con flujos de trabajo digitales más eficientes.",
},
"industry.logistics.advantages.3.title": {
  id: "Reporting lebih mudah",
  en: "Easier Reporting",
  es: "Informes más Fáciles",
},
"industry.logistics.advantages.3.description": {
  id: "Data operasional lebih mudah dibaca untuk pengambilan keputusan.",
  en: "Operational data is easier to read for decision-making.",
  es: "Los datos operativos son más fáciles de leer para la toma de decisiones.",
},
"industry.logistics.advantages.4.title": {
  id: "Notifikasi kendala",
  en: "Issue Notifications",
  es: "Notificaciones de Problemas",
},
"industry.logistics.advantages.4.description": {
  id: "Tim bisa mendapatkan alert saat ada kendala operasional.",
  en: "The team can receive alerts when operational issues arise.",
  es: "El equipo puede recibir alertas cuando surjan problemas operativos.",
},
"industry.logistics.advantages.5.title": {
  id: "Responsive di semua device",
  en: "Responsive on All Devices",
  es: "Responsivo en Todos los Dispositivos",
},
"industry.logistics.advantages.5.description": {
  id: "Website nyaman digunakan di desktop, tablet, dan mobile.",
  en: "The website is comfortable to use on desktop, tablet, and mobile.",
  es: "El sitio web es cómodo de usar en escritorio, tablet y móvil.",
},
"industry.logistics.advantages.6.title": {
  id: "Bisa dikembangkan",
  en: "Scalable",
  es: "Escalable",
},
"industry.logistics.advantages.6.description": {
  id: "Fitur dapat ditambah sesuai kebutuhan bisnis ke depannya.",
  en: "Features can be added according to future business needs.",
  es: "Las funciones pueden añadirse según las necesidades futuras del negocio.",
},

// ===== INDUSTRI LOGISTIK TESTIMONIAL =====
"industry.logistics.testimonial.quote": {
  id: "Sistem digital membantu tim kami memantau pengiriman dan membuat laporan operasional jauh lebih cepat.",
  en: "The digital system helped our team monitor deliveries and create operational reports much faster.",
  es: "El sistema digital ayudó a nuestro equipo a monitorear entregas y crear informes operativos mucho más rápido.",
},
"industry.logistics.testimonial.name": {
  id: "Operations Manager",
  en: "Operations Manager",
  es: "Gerente de Operaciones",
},
"industry.logistics.testimonial.company": {
  id: "Logistics Company",
  en: "Logistics Company",
  es: "Empresa Logística",
},

// ===== INDUSTRI LOGISTIK FAQ =====
"industry.logistics.faq.title": {
  id: "Frequently Asked Questions",
  en: "Frequently Asked Questions",
  es: "Preguntas Frecuentes",
},
"industry.logistics.faq.1.question": {
  id: "Apa manfaat website untuk bisnis logistik?",
  en: "What are the benefits of a website for a logistics business?",
  es: "¿Cuáles son los beneficios de un sitio web para un negocio logístico?",
},
"industry.logistics.faq.1.answer": {
  id: "Website membantu bisnis menampilkan layanan, menerima inquiry, meningkatkan kepercayaan pelanggan, dan memperkuat kehadiran digital.",
  en: "A website helps businesses showcase services, receive inquiries, build customer trust, and strengthen digital presence.",
  es: "Un sitio web ayuda a las empresas a mostrar servicios, recibir consultas, generar confianza en los clientes y fortalecer la presencia digital.",
},
"industry.logistics.faq.2.question": {
  id: "Apakah bisa dibuat fitur tracking pengiriman?",
  en: "Can a delivery tracking feature be built?",
  es: "¿Se puede crear una función de seguimiento de entregas?",
},
"industry.logistics.faq.2.answer": {
  id: "Bisa. Fitur tracking dapat dibuat sesuai kebutuhan, mulai dari status manual admin hingga sistem yang lebih otomatis.",
  en: "Yes. The tracking feature can be built according to needs, ranging from manual admin status updates to a more automated system.",
  es: "Sí. La función de seguimiento puede desarrollarse según las necesidades, desde actualizaciones de estado manual del administrador hasta un sistema más automatizado.",
},
"industry.logistics.faq.3.question": {
  id: "Apakah bisa terhubung ke WhatsApp?",
  en: "Can it be connected to WhatsApp?",
  es: "¿Puede conectarse a WhatsApp?",
},
"industry.logistics.faq.3.answer": {
  id: "Bisa. CTA, form inquiry, dan tombol konsultasi dapat diarahkan langsung ke WhatsApp bisnis.",
  en: "Yes. CTAs, inquiry forms, and consultation buttons can be directed straight to the business WhatsApp.",
  es: "Sí. Los CTAs, formularios de consulta y botones de consultoría pueden dirigirse directamente al WhatsApp del negocio.",
},
"industry.logistics.faq.4.question": {
  id: "Apakah tampilannya bisa responsive?",
  en: "Can the display be responsive?",
  es: "¿Puede el diseño ser responsivo?",
},
"industry.logistics.faq.4.answer": {
  id: "Bisa. Halaman akan dibuat agar nyaman dibuka melalui desktop, tablet, dan mobile.",
  en: "Yes. The page will be built to work comfortably on desktop, tablet, and mobile.",
  es: "Sí. La página se desarrollará para que sea cómoda en escritorio, tablet y móvil.",
},

// ===== INDUSTRI LOGISTIK CTA =====
"industry.logistics.cta.title": {
  id: "Siap kembangkan bisnis logistik Anda?",
  en: "Ready to grow your logistics business?",
  es: "¿Listo para desarrollar tu negocio logístico?",
},
"industry.logistics.cta.description": {
  id: "Bangun website dan sistem digital yang membantu operasional bisnis berjalan lebih rapi.",
  en: "Build a website and digital system that helps business operations run more smoothly.",
  es: "Construye un sitio web y sistema digital que ayude a las operaciones del negocio a funcionar con más fluidez.",
},
"industry.logistics.cta.primaryCta": {
  id: "Konsultasi via WhatsApp",
  en: "Consult via WhatsApp",
  es: "Consultar por WhatsApp",
},
"industry.logistics.cta.secondaryCta": {
  id: "Konsultasi gratis",
  en: "Free consultation",
  es: "Consulta gratuita",
},

// ===== INDUSTRI CUSTOMER SERVICE HERO =====
"industry.customerservice.title": {
  id: "Customer Service",
  en: "Customer Service",
  es: "Servicio al Cliente",
},
"industry.customerservice.sub": {
  id: "Solusi customer service yang membantu mempercepat respons, merapikan alur kerja support, dan meningkatkan pengalaman pelanggan.",
  en: "Customer service solutions that help speed up responses, streamline support workflows, and improve customer experience.",
  es: "Soluciones de servicio al cliente que ayudan a acelerar las respuestas, optimizar los flujos de trabajo de soporte y mejorar la experiencia del cliente.",
},

// ===== INDUSTRI CUSTOMER SERVICE HERO =====
"industry.customerservice.hero.eyebrow": {
  id: "Customer Support & Success Zeni Konsulting",
  en: "Customer Support & Success Zeni Consulting",
  es: "Soporte y Éxito del Cliente Zeni Consulting",
},
"industry.customerservice.hero.title": {
  id: "Layanan customer service profesional untuk mendukung pertumbuhan bisnis Anda",
  en: "Professional customer service to support your business growth",
  es: "Servicio al cliente profesional para apoyar el crecimiento de tu negocio",
},
"industry.customerservice.hero.description": {
  id: "Kami membantu bisnis Anda memberikan pengalaman pelanggan yang cepat, responsif, dan terstruktur melalui support system, automation, dan knowledge base.",
  en: "We help your business deliver fast, responsive, and structured customer experiences through support systems, automation, and knowledge bases.",
  es: "Ayudamos a tu negocio a ofrecer experiencias al cliente rápidas, receptivas y estructuradas a través de sistemas de soporte, automatización y bases de conocimiento.",
},

// ===== INDUSTRI CUSTOMER SERVICE TABS =====
"industry.customerservice.tabs.1.label": {
  id: "Implementation & Training",
  en: "Implementation & Training",
  es: "Implementación y Capacitación",
},
"industry.customerservice.tabs.2.label": {
  id: "Customer Support",
  en: "Customer Support",
  es: "Soporte al Cliente",
},
"industry.customerservice.tabs.3.label": {
  id: "Account Management",
  en: "Account Management",
  es: "Gestión de Cuentas",
},
"industry.customerservice.tabs.4.label": {
  id: "Knowledge Center",
  en: "Knowledge Center",
  es: "Centro de Conocimiento",
},

// ===== CUSTOMER SERVICE IMPLEMENTATION =====
"industry.customerservice.implementation.eyebrow": {
  id: "Implementation & Training",
  en: "Implementation & Training",
  es: "Implementación y Capacitación",
},
"industry.customerservice.implementation.title": {
  id: "Pendampingan implementasi sistem dari awal hingga siap digunakan",
  en: "System implementation assistance from start to ready-to-use",
  es: "Asistencia de implementación del sistema desde el inicio hasta estar listo para usar",
},
"industry.customerservice.implementation.description": {
  id: "Kami membantu proses setup, konfigurasi, dan training agar tim Anda dapat menggunakan sistem dengan lancar.",
  en: "We assist with the setup, configuration, and training process so your team can use the system smoothly.",
  es: "Ayudamos con el proceso de configuración, instalación y capacitación para que tu equipo pueda usar el sistema sin problemas.",
},
"industry.customerservice.implementation.points.1": {
  id: "Training penggunaan sistem untuk tim internal",
  en: "System usage training for internal teams",
  es: "Capacitación en uso del sistema para equipos internos",
},
"industry.customerservice.implementation.points.2": {
  id: "Setup workflow sesuai kebutuhan bisnis",
  en: "Workflow setup according to business needs",
  es: "Configuración de flujo de trabajo según las necesidades del negocio",
},
"industry.customerservice.implementation.points.3": {
  id: "Pendampingan onboarding hingga sistem siap berjalan",
  en: "Onboarding assistance until the system is ready to run",
  es: "Asistencia de incorporación hasta que el sistema esté listo para funcionar",
},
"industry.customerservice.implementation.cta": {
  id: "Konsultasi Sekarang",
  en: "Consult Now",
  es: "Consultar Ahora",
},

// ===== CUSTOMER SERVICE TESTIMONIALS =====
"industry.customerservice.testimonial.1.quote": {
  id: "Sistem support sangat membantu tim kami dalam menangani kebutuhan operasional dengan lebih cepat.",
  en: "The support system greatly helped our team handle operational needs much faster.",
  es: "El sistema de soporte ayudó enormemente a nuestro equipo a manejar las necesidades operativas mucho más rápido.",
},
"industry.customerservice.testimonial.1.name": {
  id: "Indah Limasari Nabati Tawan",
  en: "Indah Limasari Nabati Tawan",
  es: "Indah Limasari Nabati Tawan",
},
"industry.customerservice.testimonial.1.role": {
  id: "HRIS Supervisor",
  en: "HRIS Supervisor",
  es: "Supervisora de HRIS",
},
"industry.customerservice.testimonial.2.quote": {
  id: "Urusan layanan pelanggan jadi lebih terstruktur dan setiap kendala bisa ditangani dengan cepat.",
  en: "Customer service matters became more structured and every issue could be handled quickly.",
  es: "Los asuntos de servicio al cliente se volvieron más estructurados y cada problema pudo resolverse rápidamente.",
},
"industry.customerservice.testimonial.2.name": {
  id: "Bambang Sugiyanto",
  en: "Bambang Sugiyanto",
  es: "Bambang Sugiyanto",
},
"industry.customerservice.testimonial.2.role": {
  id: "Tax Officer",
  en: "Tax Officer",
  es: "Oficial de Impuestos",
},
"industry.customerservice.testimonial.3.quote": {
  id: "Komunikasi dengan tim support jadi lebih mudah dan responsif untuk kebutuhan harian.",
  en: "Communication with the support team became easier and more responsive for daily needs.",
  es: "La comunicación con el equipo de soporte se volvió más fácil y receptiva para las necesidades diarias.",
},
"industry.customerservice.testimonial.3.name": {
  id: "Laode Khairullah Dahlan",
  en: "Laode Khairullah Dahlan",
  es: "Laode Khairullah Dahlan",
},
"industry.customerservice.testimonial.3.role": {
  id: "Head of HR",
  en: "Head of HR",
  es: "Jefe de RR.HH.",
},
"industry.customerservice.testimonial.4.quote": {
  id: "Sistem support sangat membantu tim kami dalam menangani kebutuhan operasional dengan lebih cepat.",
  en: "The support system greatly helped our team handle operational needs much faster.",
  es: "El sistema de soporte ayudó enormemente a nuestro equipo a manejar las necesidades operativas mucho más rápido.",
},
"industry.customerservice.testimonial.4.name": {
  id: "Indah Limasari Nabati Tawan",
  en: "Indah Limasari Nabati Tawan",
  es: "Indah Limasari Nabati Tawan",
},
"industry.customerservice.testimonial.4.role": {
  id: "HRIS Supervisor",
  en: "HRIS Supervisor",
  es: "Supervisora de HRIS",
},

// ===== CUSTOMER SERVICE SUPPORT =====
"industry.customerservice.support.eyebrow": {
  id: "Customer Support",
  en: "Customer Support",
  es: "Soporte al Cliente",
},
"industry.customerservice.support.title": {
  id: "Tim support yang responsif dan siap membantu Anda",
  en: "A responsive support team ready to help you",
  es: "Un equipo de soporte receptivo listo para ayudarte",
},
"industry.customerservice.support.description": {
  id: "Dapatkan bantuan cepat untuk kendala teknis, pertanyaan penggunaan, dan kebutuhan operasional harian.",
  en: "Get quick assistance for technical issues, usage questions, and daily operational needs.",
  es: "Obtén asistencia rápida para problemas técnicos, preguntas de uso y necesidades operativas diarias.",
},
"industry.customerservice.support.faqs.1.question": {
  id: "Langsung terhubung melalui live chat",
  en: "Connect directly via live chat",
  es: "Conéctate directamente a través del chat en vivo",
},
"industry.customerservice.support.faqs.1.answer": {
  id: "Dapatkan bantuan langsung untuk menyelesaikan kendala dengan cepat melalui live chat.",
  en: "Get direct assistance to resolve issues quickly through live chat.",
  es: "Obtén asistencia directa para resolver problemas rápidamente a través del chat en vivo.",
},
"industry.customerservice.support.faqs.2.question": {
  id: "Support tersedia pada hari kerja",
  en: "Support available on working days",
  es: "Soporte disponible en días laborables",
},
"industry.customerservice.support.faqs.2.answer": {
  id: "Tim kami siap membantu kebutuhan operasional Anda selama jam kerja.",
  en: "Our team is ready to help with your operational needs during working hours.",
  es: "Nuestro equipo está listo para ayudar con tus necesidades operativas durante el horario laboral.",
},
"industry.customerservice.support.faqs.3.question": {
  id: "Respon cepat untuk kendala prioritas",
  en: "Fast response for priority issues",
  es: "Respuesta rápida para problemas prioritarios",
},
"industry.customerservice.support.faqs.3.answer": {
  id: "Kami membantu menangani kendala penting agar operasional bisnis tetap berjalan.",
  en: "We help handle critical issues to keep business operations running smoothly.",
  es: "Ayudamos a manejar problemas críticos para mantener las operaciones del negocio en marcha.",
},
"industry.customerservice.support.whatsapp": {
  id: "WhatsApp sekarang",
  en: "WhatsApp now",
  es: "WhatsApp ahora",
},
"industry.customerservice.support.cta": {
  id: "Hubungi Customer Support",
  en: "Contact Customer Support",
  es: "Contactar Soporte al Cliente",
},

// ===== CUSTOMER SERVICE ACCOUNT MANAGEMENT =====
"industry.customerservice.account.eyebrow": {
  id: "Account Management",
  en: "Account Management",
  es: "Gestión de Cuentas",
},
"industry.customerservice.account.title": {
  id: "Konsultasi personal dengan account manager",
  en: "Personal consultation with an account manager",
  es: "Consulta personal con un gestor de cuentas",
},
"industry.customerservice.account.description": {
  id: "Dapatkan arahan strategis dan rekomendasi penggunaan sistem sesuai kebutuhan bisnis Anda.",
  en: "Get strategic guidance and system usage recommendations tailored to your business needs.",
  es: "Obtén orientación estratégica y recomendaciones de uso del sistema adaptadas a las necesidades de tu negocio.",
},
"industry.customerservice.account.faqs.1.question": {
  id: "Account manager yang mudah dihubungi",
  en: "Easily reachable account manager",
  es: "Gestor de cuentas fácilmente accesible",
},
"industry.customerservice.account.faqs.1.answer": {
  id: "Account manager membantu memastikan penggunaan sistem berjalan sesuai tujuan bisnis.",
  en: "The account manager helps ensure system usage aligns with your business goals.",
  es: "El gestor de cuentas ayuda a garantizar que el uso del sistema esté alineado con los objetivos del negocio.",
},
"industry.customerservice.account.faqs.2.question": {
  id: "Business check-in secara berkala",
  en: "Regular business check-ins",
  es: "Revisiones periódicas del negocio",
},
"industry.customerservice.account.faqs.2.answer": {
  id: "Kami melakukan evaluasi berkala untuk memahami kebutuhan dan perkembangan bisnis Anda.",
  en: "We conduct periodic evaluations to understand your business needs and development.",
  es: "Realizamos evaluaciones periódicas para comprender las necesidades y el desarrollo de tu negocio.",
},

// ===== CUSTOMER SERVICE KNOWLEDGE CENTER =====
"industry.customerservice.knowledge.eyebrow": {
  id: "Knowledge Center",
  en: "Knowledge Center",
  es: "Centro de Conocimiento",
},
"industry.customerservice.knowledge.title": {
  id: "Panduan produk yang mudah diakses kapan saja",
  en: "Product guides accessible anytime",
  es: "Guías de productos accesibles en cualquier momento",
},
"industry.customerservice.knowledge.description": {
  id: "Akses dokumentasi, panduan penggunaan, artikel bantuan, dan resource edukasi untuk mendukung tim Anda.",
  en: "Access documentation, usage guides, help articles, and educational resources to support your team.",
  es: "Accede a documentación, guías de uso, artículos de ayuda y recursos educativos para apoyar a tu equipo.",
},
"industry.customerservice.knowledge.whatsapp": {
  id: "WhatsApp sekarang",
  en: "WhatsApp now",
  es: "WhatsApp ahora",
},
"industry.customerservice.knowledge.cta": {
  id: "Hubungi Customer Support",
  en: "Contact Customer Support",
  es: "Contactar Soporte al Cliente",
},
"industry.customerservice.knowledge.categories.1.title": {
  id: "Guidebook",
  en: "Guidebook",
  es: "Guía",
},
"industry.customerservice.knowledge.categories.1.description": {
  id: "Panduan lengkap penggunaan sistem dan fitur utama.",
  en: "Complete guide to system usage and key features.",
  es: "Guía completa del uso del sistema y las funciones principales.",
},
"industry.customerservice.knowledge.categories.2.title": {
  id: "Blog",
  en: "Blog",
  es: "Blog",
},
"industry.customerservice.knowledge.categories.2.description": {
  id: "Artikel edukatif seputar customer service dan bisnis digital.",
  en: "Educational articles about customer service and digital business.",
  es: "Artículos educativos sobre servicio al cliente y negocios digitales.",
},
"industry.customerservice.knowledge.categories.3.title": {
  id: "Release Notes",
  en: "Release Notes",
  es: "Notas de Versión",
},
"industry.customerservice.knowledge.categories.3.description": {
  id: "Informasi pembaruan fitur dan peningkatan sistem.",
  en: "Information on feature updates and system improvements.",
  es: "Información sobre actualizaciones de funciones y mejoras del sistema.",
},

// ===== CUSTOMER SERVICE HELP CENTER =====
"industry.customerservice.helpcenter.heading": {
  id: "Temukan panduan Anda berdasarkan kategori",
  en: "Find your guide by category",
  es: "Encuentra tu guía por categoría",
},
"industry.customerservice.helpcenter.preview.title": {
  id: "Guidebook",
  en: "Guidebook",
  es: "Guía",
},
"industry.customerservice.helpcenter.preview.description": {
  id: "Sekarang, untuk mendapat lebih banyak wawasan tentang penggunaan sistem dan layanan customer support Anda.",
  en: "Now, get more insights about system usage and your customer support services.",
  es: "Ahora, obtén más información sobre el uso del sistema y tus servicios de atención al cliente.",
},
"industry.customerservice.helpcenter.preview.cta": {
  id: "Kunjungi pusat bantuan",
  en: "Visit help center",
  es: "Visitar centro de ayuda",
},

// ===== CUSTOMER SERVICE CTA =====
"industry.customerservice.cta.title": {
  id: "Siap tingkatkan kualitas layanan pelanggan Anda?",
  en: "Ready to improve the quality of your customer service?",
  es: "¿Listo para mejorar la calidad de tu servicio al cliente?",
},
"industry.customerservice.cta.description": {
  id: "Diskusikan kebutuhan bisnis Anda bersama kami dan temukan solusi customer service yang tepat.",
  en: "Discuss your business needs with us and find the right customer service solution.",
  es: "Discute las necesidades de tu negocio con nosotros y encuentra la solución de servicio al cliente adecuada.",
},

// ===== NAVBAR & FOOTER LINKS =====
"nav.customerservice": {
  id: "Customer Service",
  en: "Customer Service",
  es: "Servicio al Cliente",
},
"nav.industrylogistics": {
  id: "Industri Logistik",
  en: "Logistics Industry",
  es: "Industria Logística",
},
"footer.helpcenter": {
  id: "Pusat Bantuan",
  en: "Help Center",
  es: "Centro de Ayuda",
},
"footer.blogs": {
  id: "Blog",
  en: "Blog",
  es: "Blog",
},

// ===== PUSAT BANTUAN HERO =====
"helpcenter.hero.eyebrow": {
  id: "Pusat Bantuan",
  en: "Help Center",
  es: "Centro de Ayuda",
},
"helpcenter.hero.title": {
  id: "Temukan jawaban untuk kebutuhan digital Anda.",
  en: "Find answers for your digital needs.",
  es: "Encuentra respuestas para tus necesidades digitales.",
},
"helpcenter.hero.description": {
  id: "Akses panduan layanan, proses kerja, dan dukungan teknis Zeni Consulting dalam satu tempat yang mudah dicari.",
  en: "Access service guides, workflows, and Zeni Consulting technical support all in one easy-to-search place.",
  es: "Accede a guías de servicio, flujos de trabajo y soporte técnico de Zeni Consulting en un solo lugar fácil de buscar.",
},

// ===== PUSAT BANTUAN STATS =====
"helpcenter.stats.categories": {
  id: "Kategori",
  en: "Categories",
  es: "Categorías",
},
"helpcenter.stats.articles": {
  id: "Artikel bantuan",
  en: "Help articles",
  es: "Artículos de ayuda",
},
"helpcenter.stats.consultation": {
  id: "Arahan konsultasi",
  en: "Consultation guidance",
  es: "Orientación de consulta",
},

// ===== PUSAT BANTUAN PANEL =====
"helpcenter.panel.label": {
  id: "Mulai dari sini",
  en: "Start here",
  es: "Empieza aquí",
},
"helpcenter.panel.title": {
  id: "Topik yang paling sering dicari",
  en: "Most frequently searched topics",
  es: "Temas más buscados frecuentemente",
},
"helpcenter.panel.description": {
  id: "Pilih kategori untuk melihat panduan dan jawaban yang relevan dengan kebutuhan bisnis Anda.",
  en: "Choose a category to see guides and answers relevant to your business needs.",
  es: "Elige una categoría para ver guías y respuestas relevantes para las necesidades de tu negocio.",
},

// ===== PUSAT BANTUAN CATEGORIES =====

// Category 1: Mulai Konsultasi
"helpcenter.cat.1.title": {
  id: "Mulai Konsultasi",
  en: "Start Consultation",
  es: "Iniciar Consulta",
},
"helpcenter.cat.1.description": {
  id: "Panduan untuk memulai konsultasi dan mendiskusikan kebutuhan bisnis Anda.",
  en: "Guide to starting a consultation and discussing your business needs.",
  es: "Guía para iniciar una consulta y discutir las necesidades de tu negocio.",
},
"helpcenter.cat.1.article.1.title": {
  id: "Bagaimana cara memulai konsultasi?",
  en: "How do I start a consultation?",
  es: "¿Cómo inicio una consulta?",
},
"helpcenter.cat.1.article.1.content": {
  id: "Anda dapat menghubungi tim Zeni Consulting melalui WhatsApp atau halaman kontak. Setelah itu, tim kami akan membantu memahami kebutuhan bisnis Anda.",
  en: "You can contact the Zeni Consulting team via WhatsApp or the contact page. Afterward, our team will help understand your business needs.",
  es: "Puedes contactar al equipo de Zeni Consulting a través de WhatsApp o la página de contacto. Luego, nuestro equipo te ayudará a entender las necesidades de tu negocio.",
},
"helpcenter.cat.1.article.1.link": {
  id: "Lihat Tentang Kami",
  en: "View About Us",
  es: "Ver Sobre Nosotros",
},
"helpcenter.cat.1.article.2.title": {
  id: "Apa saja yang perlu disiapkan sebelum konsultasi?",
  en: "What needs to be prepared before a consultation?",
  es: "¿Qué se necesita preparar antes de una consulta?",
},
"helpcenter.cat.1.article.2.content": {
  id: "Siapkan informasi singkat tentang bisnis, masalah yang ingin diselesaikan, target project, dan estimasi timeline yang diharapkan.",
  en: "Prepare a brief overview of your business, the problem to be solved, project targets, and the expected timeline estimate.",
  es: "Prepara una breve descripción de tu negocio, el problema a resolver, los objetivos del proyecto y la estimación de tiempo esperada.",
},
"helpcenter.cat.1.article.2.link": {
  id: "Lihat Tentang Kami",
  en: "View About Us",
  es: "Ver Sobre Nosotros",
},

// Category 2: Layanan Zeni
"helpcenter.cat.2.title": {
  id: "Layanan Zeni",
  en: "Zeni Services",
  es: "Servicios de Zeni",
},
"helpcenter.cat.2.description": {
  id: "Informasi tentang pengembangan software, konsultasi IT, hardware, dan automasi.",
  en: "Information about software development, IT consulting, hardware, and automation.",
  es: "Información sobre desarrollo de software, consultoría de TI, hardware y automatización.",
},
"helpcenter.cat.2.article.1.title": {
  id: "Layanan apa saja yang tersedia?",
  en: "What services are available?",
  es: "¿Qué servicios están disponibles?",
},
"helpcenter.cat.2.article.1.content": {
  id: "Zeni Consulting menyediakan layanan pengembangan software, instalasi perangkat keras, konsultasi IT, dan automasi AI bisnis.",
  en: "Zeni Consulting provides software development, hardware installation, IT consulting, and business AI automation services.",
  es: "Zeni Consulting ofrece servicios de desarrollo de software, instalación de hardware, consultoría de TI y automatización de IA empresarial.",
},
"helpcenter.cat.2.article.1.link": {
  id: "Lihat Layanan",
  en: "View Services",
  es: "Ver Servicios",
},
"helpcenter.cat.2.article.2.title": {
  id: "Apakah bisa membuat sistem custom?",
  en: "Can a custom system be built?",
  es: "¿Se puede construir un sistema personalizado?",
},
"helpcenter.cat.2.article.2.content": {
  id: "Bisa. Kami dapat membangun sistem sesuai proses bisnis dan kebutuhan operasional perusahaan Anda.",
  en: "Yes. We can build a system tailored to your company's business processes and operational needs.",
  es: "Sí. Podemos construir un sistema adaptado a los procesos empresariales y necesidades operativas de tu empresa.",
},
"helpcenter.cat.2.article.2.link": {
  id: "Lihat Layanan",
  en: "View Services",
  es: "Ver Servicios",
},

// Category 3: Project & Proses Kerja
"helpcenter.cat.3.title": {
  id: "Project & Proses Kerja",
  en: "Project & Workflow",
  es: "Proyecto y Flujo de Trabajo",
},
"helpcenter.cat.3.description": {
  id: "Pelajari alur kerja project, timeline, revisi, dan komunikasi selama pengerjaan.",
  en: "Learn about project workflows, timelines, revisions, and communication during development.",
  es: "Aprende sobre flujos de trabajo del proyecto, plazos, revisiones y comunicación durante el desarrollo.",
},
"helpcenter.cat.3.article.1.title": {
  id: "Bagaimana alur pengerjaan project?",
  en: "What is the project workflow?",
  es: "¿Cuál es el flujo de trabajo del proyecto?",
},
"helpcenter.cat.3.article.1.content": {
  id: "Alur umum dimulai dari konsultasi, analisis kebutuhan, perencanaan solusi, desain, pengembangan, testing, revisi, hingga deployment.",
  en: "The general flow starts from consultation, needs analysis, solution planning, design, development, testing, revision, and deployment.",
  es: "El flujo general comienza desde la consulta, análisis de necesidades, planificación de soluciones, diseño, desarrollo, pruebas, revisión hasta el despliegue.",
},
"helpcenter.cat.3.article.1.link": {
  id: "Lihat Tentang Kami",
  en: "View About Us",
  es: "Ver Sobre Nosotros",
},
"helpcenter.cat.3.article.2.title": {
  id: "Berapa lama estimasi pengerjaan?",
  en: "How long is the estimated development time?",
  es: "¿Cuánto tiempo toma el desarrollo estimado?",
},
"helpcenter.cat.3.article.2.content": {
  id: "Durasi pengerjaan bergantung pada kompleksitas project. Website sederhana bisa lebih cepat, sedangkan sistem custom membutuhkan analisis dan pengembangan lebih detail.",
  en: "Development duration depends on project complexity. Simple websites can be done faster, while custom systems require more detailed analysis and development.",
  es: "La duración del desarrollo depende de la complejidad del proyecto. Los sitios web simples pueden hacerse más rápido, mientras que los sistemas personalizados requieren análisis y desarrollo más detallados.",
},
"helpcenter.cat.3.article.2.link": {
  id: "Lihat Tentang Kami",
  en: "View About Us",
  es: "Ver Sobre Nosotros",
},

// Category 4: Support & Maintenance
"helpcenter.cat.4.title": {
  id: "Support & Maintenance",
  en: "Support & Maintenance",
  es: "Soporte y Mantenimiento",
},
"helpcenter.cat.4.description": {
  id: "Bantuan setelah project selesai, perawatan sistem, dan dukungan teknis.",
  en: "Assistance after project completion, system maintenance, and technical support.",
  es: "Asistencia tras la finalización del proyecto, mantenimiento del sistema y soporte técnico.",
},
"helpcenter.cat.4.article.1.title": {
  id: "Apakah tersedia layanan maintenance?",
  en: "Is a maintenance service available?",
  es: "¿Está disponible un servicio de mantenimiento?",
},
"helpcenter.cat.4.article.1.content": {
  id: "Ya. Kami menyediakan layanan maintenance untuk menjaga sistem tetap berjalan stabil, aman, dan sesuai kebutuhan bisnis.",
  en: "Yes. We provide maintenance services to keep the system running stably, securely, and in line with business needs.",
  es: "Sí. Ofrecemos servicios de mantenimiento para mantener el sistema funcionando de forma estable, segura y acorde a las necesidades del negocio.",
},
"helpcenter.cat.4.article.1.link": {
  id: "Lihat Tentang Kami",
  en: "View About Us",
  es: "Ver Sobre Nosotros",
},
"helpcenter.cat.4.article.2.title": {
  id: "Apa saja yang termasuk support?",
  en: "What is included in support?",
  es: "¿Qué incluye el soporte?",
},
"helpcenter.cat.4.article.2.content": {
  id: "Support dapat mencakup bug fixing, monitoring, minor update, backup, dan konsultasi teknis lanjutan.",
  en: "Support can include bug fixing, monitoring, minor updates, backup, and further technical consultation.",
  es: "El soporte puede incluir corrección de errores, monitoreo, actualizaciones menores, copias de seguridad y consultoría técnica adicional.",
},
"helpcenter.cat.4.article.2.link": {
  id: "Lihat Tentang Kami",
  en: "View About Us",
  es: "Ver Sobre Nosotros",
},


// ===== PUSAT BANTUAN SECTION =====
"helpcenter.section.eyebrow": {
  id: "Knowledge base",
  en: "Knowledge base",
  es: "Base de conocimiento",
},
"helpcenter.section.title": {
  id: "Pilih kategori bantuan",
  en: "Choose a help category",
  es: "Elige una categoría de ayuda",
},
"helpcenter.section.description": {
  id: "Semua panduan disusun berdasarkan alur kerja nyata agar Anda bisa menemukan informasi dengan cepat.",
  en: "All guides are organized based on real workflows so you can find information quickly.",
  es: "Todas las guías están organizadas según flujos de trabajo reales para que puedas encontrar información rápidamente.",
},
"helpcenter.section.articles": {
  id: "artikel",
  en: "articles",
  es: "artículos",
},
"helpcenter.section.viewguide": {
  id: "Lihat panduan",
  en: "View guide",
  es: "Ver guía",
},
"helpcenter.section.empty": {
  id: "Tidak ada bantuan yang cocok dengan pencarian Anda.",
  en: "No help matches your search.",
  es: "No hay ayuda que coincida con tu búsqueda.",
},

// ===== PUSAT BANTUAN POPULAR =====
"helpcenter.popular.eyebrow": {
  id: "FAQ populer",
  en: "Popular FAQ",
  es: "Preguntas Frecuentes Populares",
},
"helpcenter.popular.title": {
  id: "Pertanyaan yang sering diajukan",
  en: "Frequently asked questions",
  es: "Preguntas frecuentemente realizadas",
},
"helpcenter.popular.description": {
  id: "Jawaban cepat untuk pertanyaan yang biasanya muncul saat mulai berdiskusi dengan tim Zeni Consulting.",
  en: "Quick answers to questions that usually come up when starting a discussion with the Zeni Consulting team.",
  es: "Respuestas rápidas a preguntas que suelen surgir al iniciar una discusión con el equipo de Zeni Consulting.",
},
"helpcenter.popular.1.title": {
  id: "Bagaimana cara memulai konsultasi dengan Zeni Consulting?",
  en: "How do I start a consultation with Zeni Consulting?",
  es: "¿Cómo inicio una consulta con Zeni Consulting?",
},
"helpcenter.popular.2.title": {
  id: "Apakah Zeni Consulting bisa membuat sistem custom?",
  en: "Can Zeni Consulting build a custom system?",
  es: "¿Puede Zeni Consulting construir un sistema personalizado?",
},
"helpcenter.popular.3.title": {
  id: "Berapa lama estimasi pengerjaan website atau sistem?",
  en: "How long is the estimated development time for a website or system?",
  es: "¿Cuánto tiempo toma el desarrollo estimado de un sitio web o sistema?",
},
"helpcenter.popular.4.title": {
  id: "Apakah tersedia layanan maintenance setelah project selesai?",
  en: "Is a maintenance service available after the project is completed?",
  es: "¿Está disponible un servicio de mantenimiento después de completar el proyecto?",
},

// ===== PUSAT BANTUAN CTA =====
"helpcenter.cta.eyebrow": {
  id: "Masih butuh bantuan?",
  en: "Still need help?",
  es: "¿Aún necesitas ayuda?",
},
"helpcenter.cta.title": {
  id: "Diskusikan kebutuhan bisnis Anda dengan tim kami.",
  en: "Discuss your business needs with our team.",
  es: "Discute las necesidades de tu negocio con nuestro equipo.",
},
"helpcenter.cta.description": {
  id: "Ceritakan konteks bisnis, tantangan operasional, atau ide sistem yang ingin Anda bangun. Tim Zeni Consulting akan membantu memberi arahan awal yang jelas.",
  en: "Share your business context, operational challenges, or system ideas you want to build. The Zeni Consulting team will help provide clear initial guidance.",
  es: "Comparte el contexto de tu negocio, los desafíos operativos o las ideas de sistema que deseas construir. El equipo de Zeni Consulting te ayudará a proporcionar una orientación inicial clara.",
},
"helpcenter.cta.button": {
  id: "Hubungi Kami",
  en: "Contact Us",
  es: "Contáctanos",
},
"helpcenter.detail.back": {
  id: "Kembali ke Pusat Bantuan",
  en: "Back to Help Center",
  es: "Volver al Centro de Ayuda",
},
"helpcenter.detail.summary": {
  id: "Ringkasan",
  en: "Summary",
  es: "Resumen",
},
"helpcenter.detail.articles": {
  id: "Artikel bantuan",
  en: "Help articles",
  es: "Artículos de ayuda",
},
"helpcenter.detail.access": {
  id: "Akses panduan",
  en: "Guide access",
  es: "Acceso a guías",
},
"helpcenter.detail.articlelist": {
  id: "Daftar artikel",
  en: "Article list",
  es: "Lista de artículos",
},
"helpcenter.detail.othercategories": {
  id: "Kategori lainnya",
  en: "Other categories",
  es: "Otras categorías",
},
"helpcenter.detail.eyebrow": {
  id: "Panduan detail",
  en: "Detailed guide",
  es: "Guía detallada",
},
"helpcenter.detail.contenttitle": {
  id: "Artikel dalam kategori ini",
  en: "Articles in this category",
  es: "Artículos en esta categoría",
},
"helpcenter.detail.contentdesc": {
  id: "Ikuti panduan berikut untuk memahami konteks layanan, proses, dan dukungan yang tersedia dari Zeni Consulting.",
  en: "Follow the guides below to understand the service context, processes, and support available from Zeni Consulting.",
  es: "Sigue las guías a continuación para entender el contexto del servicio, los procesos y el soporte disponible de Zeni Consulting.",
},
"helpcenter.detail.guidelabel": {
  id: "Panduan bantuan",
  en: "Help guide",
  es: "Guía de ayuda",
},
"helpcenter.detail.cta.eyebrow": {
  id: "Butuh arahan langsung?",
  en: "Need direct guidance?",
  es: "¿Necesitas orientación directa?",
},
"helpcenter.detail.cta.title": {
  id: "Konsultasikan kebutuhan Anda dengan tim kami.",
  en: "Consult your needs with our team.",
  es: "Consulta tus necesidades con nuestro equipo.",
},
"helpcenter.detail.cta.description": {
  id: "Jika jawaban di atas belum cukup spesifik, tim Zeni Consulting siap membantu memberi arahan awal sesuai konteks bisnis Anda.",
  en: "If the answers above are not specific enough, the Zeni Consulting team is ready to provide initial guidance based on your business context.",
  es: "Si las respuestas anteriores no son suficientemente específicas, el equipo de Zeni Consulting está listo para dar orientación inicial según el contexto de tu negocio.",
},
"helpcenter.detail.cta.button": {
  id: "Hubungi Kami",
  en: "Contact Us",
  es: "Contáctanos",
},






  // ── Contact page ──────────────────────────────────────
  "contact.hero.badge": {
    id: "Hubungi Kami",
    en: "Get In Touch",
    es: "Contáctanos",
  },
  "contact.hero.title": { id: "Kontak", en: "Contact Us", es: "Contacto" },
  "contact.hero.sub": {
    id: "Mari mulai percakapan. Ceritakan tantangan Anda dan kami akan menemukan solusi yang tepat bersama.",
    en: "Let's start a conversation. Tell us about your challenges and we'll find the right solution together.",
    es: "Comencemos una conversación. Cuéntanos tus desafíos y encontraremos la solución adecuada juntos.",
  },
  "contact.form.title": {
    id: "Kirim pesan",
    en: "Send a message",
    es: "Enviar un mensaje",
  },
  "contact.form.desc": {
    id: "Isi formulir di bawah dan kami akan membalas dalam 24 jam.",
    en: "Fill out the form below and we'll get back to you within 24 hours.",
    es: "Completa el formulario y te responderemos dentro de 24 horas.",
  },
  "contact.form.name": { id: "Nama", en: "Name", es: "Nombre" },
  "contact.form.name.ph": { id: "Nama Anda", en: "Your name", es: "Tu nombre" },
  "contact.form.email": { id: "Email", en: "Email", es: "Correo electrónico" },
  "contact.form.email.ph": {
    id: "anda@perusahaan.com",
    en: "you@company.com",
    es: "tu@empresa.com",
  },
  "contact.form.company": {
    id: "Perusahaan (opsional)",
    en: "Company (optional)",
    es: "Empresa (opcional)",
  },
  "contact.form.company.ph": {
    id: "Perusahaan Anda",
    en: "Your company",
    es: "Tu empresa",
  },
  "contact.form.service": {
    id: "Layanan yang diminati",
    en: "Service interested in",
    es: "Servicio de interés",
  },
  "contact.form.service.default": {
    id: "Pilih layanan...",
    en: "Select a service...",
    es: "Selecciona un servicio...",
  },
  "contact.form.service.dev": {
    id: "Pengembangan Software",
    en: "Software Development",
    es: "Desarrollo de Software",
  },
  "contact.form.service.hw": {
    id: "Instalasi Perangkat Keras",
    en: "Hardware Installation",
    es: "Instalación de Hardware",
  },
  "contact.form.service.it": {
    id: "Konsultasi IT",
    en: "IT Consulting",
    es: "Consultoría IT",
  },
  "contact.form.service.ai": {
    id: "Otomasi AI Bisnis",
    en: "Business AI Automation",
    es: "Automatización IA Empresarial",
  },
  "contact.form.service.audit": {
    id: "Audit Teknologi",
    en: "Technology Audit",
    es: "Auditoría Tecnológica",
  },
  "contact.form.service.strategy": {
    id: "Strategi & Penasihat IT",
    en: "IT Strategy & Advisory",
    es: "Estrategia y Asesoría IT",
  },
  "contact.form.service.other": { id: "Lainnya", en: "Other", es: "Otro" },
  "contact.form.message": { id: "Pesan", en: "Message", es: "Mensaje" },
  "contact.form.message.ph": {
    id: "Ceritakan tentang proyek atau tantangan Anda...",
    en: "Tell us about your project or challenge...",
    es: "Cuéntanos sobre tu proyecto o desafío...",
  },
  "contact.form.submit": {
    id: "Kirim Pesan",
    en: "Send Message",
    es: "Enviar Mensaje",
  },
  "contact.channels.title": {
    id: "Cara lain menghubungi kami",
    en: "Other ways to reach us",
    es: "Otras formas de contactarnos",
  },
  "contact.channels.wa": { id: "WhatsApp", en: "WhatsApp", es: "WhatsApp" },
  "contact.channels.email": { id: "Email", en: "Email", es: "Correo" },
  "contact.channels.schedule": {
    id: "Jadwalkan panggilan",
    en: "Schedule a call",
    es: "Programar una llamada",
  },
  "contact.channels.calendly": {
    id: "Pesan via Calendly",
    en: "Book via Calendly",
    es: "Reservar vía Calendly",
  },
  "contact.response.title": {
    id: "Respons Cepat",
    en: "Quick Response",
    es: "Respuesta Rápida",
  },
  "contact.response.text": {
    id: "Kami biasanya merespons dalam 24 jam pada hari kerja.",
    en: "We typically respond within 24 hours on business days.",
    es: "Normalmente respondemos dentro de 24 horas en días laborables.",
  },

  // ── Blog page ─────────────────────────────────────────
  "blog.hero.badge": { id: "Wawasan", en: "Insights", es: "Perspectivas" },
  "blog.hero.title": { id: "Blog", en: "Blog", es: "Blog" },
  "blog.hero.sub": {
    id: "Wawasan tentang teknologi, strategi, dan membangun sistem yang berkembang.",
    en: "Insights on technology, strategy, and building systems that scale.",
    es: "Perspectivas sobre tecnología, estrategia y construcción de sistemas escalables.",
  },
  "blog.coming.title": {
    id: "Konten Segera Hadir",
    en: "Content Coming Soon",
    es: "Contenido Próximamente",
  },
  "blog.coming.text": {
    id: "Kami sedang menyiapkan konten kepemimpinan pemikiran—wawasan, whitepaper, dan panduan praktis untuk bisnis yang berkembang.",
    en: "We're preparing thought leadership content—insights, whitepapers, and practical guides for growing businesses.",
    es: "Estamos preparando contenido de liderazgo—perspectivas, documentos técnicos y guías prácticas para empresas en crecimiento.",
  },
  "blog.coming.notify": {
    id: "Ingin diberi tahu saat kami menerbitkan?",
    en: "Want to be notified when we publish?",
    es: "¿Quieres ser notificado cuando publiquemos?",
  },
  "blog.coming.btn": {
    id: "Hubungi Kami",
    en: "Get in touch",
    es: "Contáctanos",
  },
  "blog.topic.1": { id: "Strategi IT", en: "IT Strategy", es: "Estrategia IT" },
  "blog.topic.2": {
    id: "Otomasi AI",
    en: "AI Automation",
    es: "Automatización IA",
  },
  "blog.topic.3": {
    id: "Arsitektur Software",
    en: "Software Architecture",
    es: "Arquitectura de Software",
  },
  "blog.topic.4": {
    id: "Transformasi Digital",
    en: "Digital Transformation",
    es: "Transformación Digital",
  },
  "blog.topic.5": {
    id: "Audit Teknologi",
    en: "Technology Audit",
    es: "Auditoría Tecnológica",
  },
};

const STORAGE_KEY = "zeni-lang";

export function getLang(): Lang {
  if (typeof window === "undefined") return "id";
  return (localStorage.getItem(STORAGE_KEY) as Lang) || "id";
}

export function setLang(lang: Lang): void {
  localStorage.setItem(STORAGE_KEY, lang);
}

export function t(key: string, lang?: Lang): string {
  const l = lang || getLang();
  return translations[key]?.[l] || translations[key]?.["en"] || key;
}

export function applyTranslations(lang?: Lang): void {
  const l = lang || getLang();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n")!;
    const text = t(key, l);
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      // Handle placeholder
      const phKey = el.getAttribute("data-i18n-ph");
      if (phKey) {
        (el as HTMLInputElement).placeholder = t(phKey, l);
      }
    }
    el.textContent = text;
  });

  // Handle placeholders separately
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph")!;
    (el as HTMLInputElement).placeholder = t(key, l);
  });

  // Update html lang attribute
  document.documentElement.lang = l === "id" ? "id" : l === "es" ? "es" : "en";
}
