interface CartStoreItems {
  id: number;
  title: string;
  price: number;
  img_paths: string[];
  colors: string;
  quantity: number;
  sum: number;
  isSelected: boolean;
}

export interface CartStore {
  items: CartStoreItems[];
  total: number;
}

export interface ActionsCartStore {
  addItem: (newItem: CartStoreItems) => void;
  removeItem: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  selectedItem: (id: number) => void;
  selectAllItems: () => void;
  deselectAllItems: () => void;
  createOrder: () => void;
}
