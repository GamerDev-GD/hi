import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../types";
import { loadProducts, saveProducts } from "../storage";

type ProductsContextValue = {
  products: Product[];
  replaceProducts: (next: Product[]) => void;
  upsertProduct: (p: Product) => void;
  deleteProduct: (id: string) => void;
  getBySlug: (slug: string) => Product | undefined;
};

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => loadProducts());

  const persist = useCallback((next: Product[]) => {
    setProducts(next);
    saveProducts(next);
  }, []);

  const replaceProducts = useCallback(
    (next: Product[]) => {
      persist(next);
    },
    [persist]
  );

  const upsertProduct = useCallback(
    (p: Product) => {
      setProducts((prev) => {
        const idx = prev.findIndex((x) => x.id === p.id);
        const next =
          idx === -1 ? [...prev, p] : prev.map((x) => (x.id === p.id ? p : x));
        saveProducts(next);
        return next;
      });
    },
    []
  );

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => {
      const next = prev.filter((x) => x.id !== id);
      saveProducts(next);
      return next;
    });
  }, []);

  const getBySlug = useCallback(
    (slug: string) => products.find((p) => p.slug === slug),
    [products]
  );

  const value = useMemo(
    () => ({
      products,
      replaceProducts,
      upsertProduct,
      deleteProduct,
      getBySlug,
    }),
    [products, replaceProducts, upsertProduct, deleteProduct, getBySlug]
  );

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
}
