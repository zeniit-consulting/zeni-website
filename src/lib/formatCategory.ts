// src/lib/formatCategory.ts

export const formatCategory = (category: string | null | undefined): string => {
  if (!category) return "Uncategorized";

  return category
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};