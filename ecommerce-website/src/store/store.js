import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/productSlice'
import { productsApi } from '../features/productsApi'
import cartReducer from '../features/cartSlice'


export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware)=>
     getDefaultMiddleware().concat(productsApi.middleware)

})