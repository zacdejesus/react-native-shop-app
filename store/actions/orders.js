import cart from "../reducers/cart";
import CartItem from "../../components/shop/CartItem";

export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (CartItems, totalAmount) => {
    return {
        type: ADD_ORDER,
        orderData: {items: cartItems, amount: totalAmount }
    };
};