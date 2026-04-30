export type Lang = "id" | "en" | "es";

export const translations: Record<string, Record<Lang, string>> = {
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
    id: "Pengembangan Web",
    en: "Web Development",
    es: "Desarrollo Web",
  },
  "home.feature.web.text": {
    id: "Aplikasi web kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan. Tanpa kompromi solusi siap pakai.",
    en: "Custom web applications built with clean architecture—scalable, maintainable, and fit for purpose. No off-the-shelf compromises.",
    es: "Aplicaciones web personalizadas con arquitectura limpia—escalable, mantenible y adecuado. Sin compromisos de soluciones genéricas.",
  },
  "home.feature.mobile.title": {
    id: "Pengembangan Aplikasi",
    en: "Mobile Development",
    es: "Desarrollo de Aplicaciones Móviles",
  },
  "home.feature.mobile.text": {
    id: "Aplikasi seluler kustom dengan arsitektur bersih—skalabel, mudah dikelola, dan sesuai kebutuhan. Tanpa kompromi solusi siap pakai.",
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
