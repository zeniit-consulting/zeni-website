// src/lib/formatTech.ts

export const formatTech = (tech: string | null | undefined): string => {
  if (!tech) return "Other";

  const labels: Record<string, string> = {
    astro: "Astro",
    laravel: "Laravel",
    nextjs: "Next.js",
    next: "Next.js",
    tailwind: "Tailwind CSS",
    react: "React",
    vue: "Vue.js",
    nuxt: "Nuxt.js",
    typescript: "TypeScript",
    javascript: "JavaScript",
    nodejs: "Node.js",
    express: "Express.js",
    wordpress: "WordPress",
    uiux: "UI/UX Design",
    figma: "Figma",
  };

  const normalized = tech.toLowerCase().replaceAll("-", "");

  return (
    labels[normalized] ??
    tech
      .replaceAll("-", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );
};