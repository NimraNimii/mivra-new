"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type BagItem = {
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

type BagContextType = {
  items: BagItem[];
  itemCount: number;
  subtotal: number;
  isLoaded: boolean;
  addItem: (item: BagItem) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  clearBag: () => void;
};

const BagContext = createContext<BagContextType | undefined>(undefined);
const STORAGE_KEY = "mivra-bag";

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed as BagItem[]);
        }
      }
    } catch {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Storage may be unavailable.
      }
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        window.dispatchEvent(new Event("mivra-bag-updated"));
      } catch {
        // Storage may be unavailable.
      }
    }
  }, [items, loaded]);

  const addItem = useCallback((item: BagItem) => {
    setItems((current) => {
      const existing = current.find(
        (entry) =>
          entry.productId === item.productId &&
          entry.size === item.size &&
          entry.color === item.color
      );

      if (existing) {
        return current.map((entry) =>
          entry === existing
            ? { ...entry, quantity: entry.quantity + item.quantity }
            : entry
        );
      }

      return [...current, item];
    });
  }, []);

  const updateQuantity = useCallback(
    (productId: string, size: string, color: string, quantity: number) => {
      setItems((current) =>
        current.map((item) =>
          item.productId === productId &&
          item.size === size &&
          item.color === color
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
      );
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, size: string, color: string) => {
      setItems((current) =>
        current.filter(
          (item) =>
            !(
              item.productId === productId &&
              item.size === size &&
              item.color === color
            )
        )
      );
    },
    []
  );

  const clearBag = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      subtotal: items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      isLoaded: loaded,
      addItem,
      updateQuantity,
      removeItem,
      clearBag,
    }),
    [items, loaded, addItem, updateQuantity, removeItem, clearBag]
  );

  return (
    <BagContext.Provider value={value}>
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  const context = useContext(BagContext);

  if (!context) {
    throw new Error("useBag must be used inside BagProvider");
  }

  return context;
}
