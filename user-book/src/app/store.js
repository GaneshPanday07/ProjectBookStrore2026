import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../feactures/cart/cartSlice'
const store = configureStore({
    reducer: {
        cart: cardReducer
    }
})
export default store