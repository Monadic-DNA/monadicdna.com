import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the base URL based on the current environment
 * Use this for constructing absolute URLs for og:image and other metadata
 */
export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL || 
         (process.env.NODE_ENV === 'production' ? 'https://monadicdna.com' : 'http://localhost:3000');
}

/**
 * Constructs a full URL by combining the base URL with the provided path
 * @param path - The path to append to the base URL (should start with '/')
 */
export function getFullUrl(path: string) {
  const baseUrl = getBaseUrl();
  // Ensure path starts with a slash and there's no double slash when combined
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}
