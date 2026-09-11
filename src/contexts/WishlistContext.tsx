"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type WishlistProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating?: string;
  image?: string;
};

type WishlistContextType = {
  wishlist: WishlistProduct[];
  addToWishlist: (product: WishlistProduct) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (product: WishlistProduct) => void;
  isInWishlist: (id: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const addToWishlist = (product: WishlistProduct) => {
    setWishlist((current) => {
      const alreadyExists = current.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return current;
      }

      return [...current, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const toggleWishlist = (product: WishlistProduct) => {
    setWishlist((current) => {
      const alreadyExists = current.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return current.filter(
          (item) => item.id !== product.id
        );
      }

      return [...current, product];
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}