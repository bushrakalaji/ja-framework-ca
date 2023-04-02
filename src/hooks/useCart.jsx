import { create } from "zustand";

const useCartStore = create((set) => ({
  products: [],
  cart: [],
  isLoading: false,
  hasError: false,
  addProductToCart: (id) => set((state) => ({ cart: [...state.cart, id] })),
  clearCart: () => set({ cart: [] }),
  fetchProducts: async (url) => {
    set(() => ({ isLoading: true }));
    try {
      const response = await fetch(url);
      const json = await response.json();
      set((state) => ({ products: (state.products = json), isLoading: false }));
    } catch (erroe) {
      set(() => ({ hasError: true, isLoading: false }));
    }
  },
}));

function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const products = useCartStore((state) => state.products);
  const fetchProducts = useCartStore((state) => state.fetchProducts);
  const isLoading = useCartStore((state) => state.isLoading);
  const hasError = useCartStore((state) => state.hasError);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  function addToCart(id) {
    addProductToCart(id);
  }

  return {
    addToCart,
    clearCart,
    fetchProducts,
    hasError,
    isLoading,
    products,
    cart,
  };
}

export { useCartStore, useCart };
