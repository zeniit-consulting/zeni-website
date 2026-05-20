const contactForm = document.querySelector<HTMLFormElement>("#contactForm");

const serviceLabels: Record<string, string> = {
  development: "Software Development",
  hardware: "Hardware Installation",
  consulting: "IT Consulting",
  automation: "Business AI Automation",
  audit: "Technology Audit",
  strategy: "IT Strategy & Advisory",
  other: "Other",
};

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const serviceValue = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const service = serviceLabels[serviceValue] || "Not selected";

    if (!name || !email || !message) {
      alert("Please complete your name, email, and message.");
      return;
    }

    const phoneNumber = "628811841064";

    const whatsappMessage = `
Halo *Zeni Consulting* 

Saya *${name}* ingin konsultasi terkait kebutuhan layanan digital untuk bisnis saya.

*Detail Kontak*
━━━━━━━━━━━━━━━━
*Nama:* ${name}
*Email:* ${email}
*Perusahaan:* ${company || "-"}

*Layanan yang Dibutuhkan*
━━━━━━━━━━━━━━━━
${service}

*Pesan / Kebutuhan*
━━━━━━━━━━━━━━━━
${message}

Terima kasih.
`.trim();

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  });
}
