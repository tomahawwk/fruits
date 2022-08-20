import { calcTotalPrice } from "./calcTotalPrice";
import { CartItem } from "../redux/cart/types";

export const getBasketFromLS = () => {
    const data = localStorage.getItem("basket");
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);

    return {
        items: items as CartItem[],
        totalPrice
    }
}