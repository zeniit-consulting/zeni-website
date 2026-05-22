const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${endpoint}`);
  }

  return response.json();
}

export type ApiResponse<T> = {
  data: T;
};

export type Service = {
  id: number;
  image : string | null;
  image_url: string | null;
  title: string;
  slug: string;
  description: string;
  techs : string[] | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type Blog = {
  id: number;
  thumbnail: string | null;
  thumbnail_url: string | null;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  author: string | null;
  is_published: boolean;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
};

export type SiteSetting = {
  id: number;
  company_name: string;
  tagline: string | null;
  description: string | null;
  address: string | null;
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  linkedin_url: string | null;
  tiktok_url: string | null;
  youtube_url: string | null;
  logo: string | null;
  logo_url: string | null;
  favicon: string | null;
  favicon_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
};

export async function getServices() {
  return fetchApi<ApiResponse<Service[]>>("/services");
}

export async function getServiceBySlug(slug: string) {
  return fetchApi<ApiResponse<Service>>(`/services/${slug}`);
}

export async function getBlogs() {
  return fetchApi<ApiResponse<Blog[]>>("/blogs");
}

export async function getSiteSettings() {
  return fetchApi<ApiResponse<SiteSetting | null>>("/site-settings");
}