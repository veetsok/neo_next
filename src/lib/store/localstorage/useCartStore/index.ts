import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ActionsCartStore, CartStore, CreateOrderResult } from "@/lib/types";

const useCartStore = create<CartStore & ActionsCartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,

      recalculateTotal: (items) => {
        const total = items
          .filter((item) => item.isSelected)
          .reduce((acc, item) => acc + item.sum, 0);
        return total;
      },

      addItem: (newItem) =>
        set((state) => {
          const existItemIndex = state.items.findIndex(
            (item) => item.id === newItem.id
          );
          let updatedItems;

          if (existItemIndex !== -1) {
            updatedItems = [...state.items];
            updatedItems[existItemIndex].quantity += newItem.quantity;
            updatedItems[existItemIndex].sum +=
              newItem.price * newItem.quantity;
          } else {
            const sum = newItem.price * newItem.quantity;
            updatedItems = [...state.items, { ...newItem, sum }];
          }

          const total = state.recalculateTotal(updatedItems);
          return {
            items: updatedItems,
            total: total,
          };
        }),

      removeItem: (id) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== id);
          const total = state.recalculateTotal(updatedItems);
          return {
            items: updatedItems,
            total: total,
          };
        }),

      updateItemQuantity: (id, quantity) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id
              ? { ...item, quantity, sum: item.price * quantity }
              : item
          );
          const total = state.recalculateTotal(updatedItems);
          return {
            items: updatedItems,
            total: total,
          };
        }),

      clearCart: () =>
        set(() => ({
          items: [],
          total: 0,
        })),

      increaseQuantity: (id) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  sum: item.sum + item.price,
                }
              : item
          );
          const total = state.recalculateTotal(updatedItems);
          return {
            items: updatedItems,
            total: total,
          };
        }),

      decreaseQuantity: (id) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id && item.quantity > 1
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  sum: item.sum - item.price,
                }
              : item
          );
          const total = state.recalculateTotal(updatedItems);
          return {
            items: updatedItems,
            total: total,
          };
        }),

      selectedItem: (id) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id ? { ...item, isSelected: !item.isSelected } : item
          );
          const total = state.recalculateTotal(updatedItems);
          return {
            items: updatedItems,
            total: total,
          };
        }),

      selectAllItems: () =>
        set((state) => {
          const updatedItems = state.items.map((item) => ({
            ...item,
            isSelected: true,
          }));
          const total = state.recalculateTotal(updatedItems);
          return {
            items: updatedItems,
            total: total,
          };
        }),

      deselectAllItems: () =>
        set((state) => {
          const updatedItems = state.items.map((item) => ({
            ...item,
            isSelected: false,
          }));
          return {
            items: updatedItems,
            total: 0,
          };
        }),

      createOrder: (): CreateOrderResult => {
        const state = useCartStore.getState();
        const selectedItems = state.items.filter((item) => item.isSelected);
        const total = selectedItems.reduce((acc, item) => acc + item.sum, 0);

        const updatedItems = state.items.filter((item) => !item.isSelected);
        set({
          items: updatedItems,
          total: state.recalculateTotal(updatedItems),
        });

        return { selectedItems, total };
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
