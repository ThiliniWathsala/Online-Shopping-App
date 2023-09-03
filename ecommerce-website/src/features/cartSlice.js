import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const initialValue = {
    cartItem: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    totalCartItems: 0,
    TotalCartAmount: 0
}

const calcSubTotal = (state) =>{
    let totalAmount = 0;
    state.cartItem.forEach(element => {
        totalAmount = totalAmount + (element.quantity * element.price)
    });
    state.TotalCartAmount = totalAmount;
}


const cartSlice = createSlice({
    name: "cart",
    initialState: initialValue,
    reducers: {
        addToCart(state, action){

            const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id)

            if(itemIndex>=0){
                state.cartItem[itemIndex].quantity += 1;
                toast.info("Added 1 item for " + action.payload.name, { position: "top-right"})
            }else{
                const tempCartItem = {...action.payload, quantity: 1}
                state.cartItem.push(tempCartItem);
                toast.success(action.payload.name + " is added to cart ", { position: "top-right"})
            }

            calcSubTotal(state);

            localStorage.setItem("cartItems", JSON.stringify(state.cartItem) )
        },

        removeFromCart(state, action){
            const itemIndex = state.cartItem.findIndex(item=> item.id === action.payload.id)

            if(itemIndex >=0){
                state.cartItem[itemIndex].quantity -= 1;
                toast.info("Removed 1 item from " + action.payload.name, { position: "top-right"})
                calcSubTotal(state);
            }
        },
        removeProduct(state, action){
            const itemIndex = state.cartItem.findIndex(item=> item.id === action.payload.id)

            if(itemIndex>=0){
                state.cartItem.splice(itemIndex,1);
                toast.info("Removed item " + action.payload.name + " from cart", { position: "top-right"})
                calcSubTotal(state);
            }
        },
        clearCart(state, action){
            state.cartItem = []
            state.TotalCartAmount = 0;
        }
    }
})


export const {addToCart, removeFromCart, removeProduct, clearCart} = cartSlice.actions;

export default cartSlice.reducer;