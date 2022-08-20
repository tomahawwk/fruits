export type CartItem = {
    id: string;
    title: string;
    price: number;
    oldprice: number;
    description: string;
    desktopImage: string;
    phoneImage: string;
    count: number;
}

export interface CartState {
    totalPrice: number;
    items: CartItem[];
}
