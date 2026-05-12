import { SEED_PRODUCTS } from "./data/seed";
import type { Product } from "./types";
import { ADMIN_SESSION_KEY, STORAGE_KEY } from "./types";

function safeParse(json: string | null): Product[] | null {
  if (!json) return null;
  try {
    const data = JSON.parse(json) as unknown;
    if (!Array.isArray(data)) return null;
    return data as Product[];
  } catch {
    return null;
  }
}

export function loadProducts(): Product[] {
  const stored = safeParse(localStorage.getItem(STORAGE_KEY));
  if (stored && stored.length) return stored;
  return SEED_PRODUCTS;
}

export function saveProducts(products: Product[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

export function resetToSeed(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function isAdminSession(): boolean {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
}

export function setAdminSession(ok: boolean): void {
  if (ok) sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
  else sessionStorage.removeItem(ADMIN_SESSION_KEY);
}
