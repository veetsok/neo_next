import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ActionsCartStore, CartStore } from "@/lib/types";

const useCartStore = create<CartStore & ActionsCartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      addItem: (newItem) =>
        set((state) => {
          const existItemIndex = state.items.findIndex(
            (item) => item.id === newItem.id
          );
          if (existItemIndex !== -1) {
            const updatedItems = [...state.items];
            updatedItems[existItemIndex].quantity += newItem.quantity;
            updatedItems[existItemIndex].sum +=
              newItem.price * newItem.quantity; // Обновление суммы одного отдельного товара
            return {
              items: updatedItems,
            };
          } else {
            const sum = newItem.price * newItem.quantity; // Вычисление суммы одного отдельного товара
            return {
              items: [...state.items, { ...newItem, sum }], // Добавление свойства sum
            };
          }
        }),
      removeItem: (id) =>
        set((state) => {
          const itemToRemove = state.items.find((item) => item.id === id);
          if (!itemToRemove) return state;
          const updatedItems = state.items.filter((item) => item.id !== id);
          return {
            items: updatedItems,
          };
        }),
      updateItemQuantity: (id, quantity) =>
        set((state) => {
          const updatedItems = state.items.map(
            (item) =>
              item.id === id
                ? { ...item, quantity, sum: item.price * quantity }
                : item // Обновление суммы при изменении количества
          );
          return {
            items: updatedItems,
          };
        }),
      clearCart: () =>
        set((state) => {
          const updatedItems = state.items.filter((item) => !item.isSelected);
          const total = updatedItems.reduce((acc, item) => acc + item.sum, 0);
          return {
            items: updatedItems.map((item) => ({ ...item, isSelected: false })),
            total: total,
          };
        }),

      increaseQuantity: (id) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  sum: item.sum + item.price,
                } // Увеличение суммы на цену одного товара
              : item
          );
          return {
            items: updatedItems,
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
                } // Уменьшение суммы на цену одного товара
              : item
          );
          return {
            items: updatedItems,
          };
        }),
      selectedItem: (id) => {
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id ? { ...item, isSelected: !item.isSelected } : item
          );
          const total = updatedItems
            .filter((item) => item.isSelected)
            .reduce((acc, item) => acc + item.sum, 0);

          return {
            items: updatedItems,
            total: total,
          };
        });
      },
      selectAllItems: () =>
        set((state) => {
          const updatedItems = state.items.map((item) => ({
            ...item,
            isSelected: true,
          }));
          const total = updatedItems.reduce((acc, item) => acc + item.sum, 0);
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
      createOrder: () => {
        const selectedItems = useCartStore
          .getState()
          .items.filter((item) => item.isSelected);
        const total = useCartStore.getState().total;
        console.log("Creating order with selected items:", selectedItems);
        console.log("Total:", total);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
