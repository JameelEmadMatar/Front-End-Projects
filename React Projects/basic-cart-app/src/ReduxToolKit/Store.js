import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from '../ReduxToolKit/Slices/ProductsSlice'
import CartReducer from '../ReduxToolKit/Slices/CartSlice'
export const store = configureStore({
    reducer: {
        products: ProductReducer,
        cart : CartReducer
    }
})