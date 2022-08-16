import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

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

interface CartState {
    totalPrice: number;
    items: CartItem[];
}

const initialState: CartState = {
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;  
            } else{
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => { return (obj.price * obj.count) + sum }, 0);
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            if (findItem)
                findItem.count--;  
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    }
})

export const getCartSelector = (state: RootState) => state.cart;
export const getCartItemById = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id);

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;