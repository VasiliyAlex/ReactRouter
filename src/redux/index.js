import { configureStore } from "@reduxjs/toolkit";
import postsSlice from './posts/postsSlice'
import cartsSlice from './carts/cartsSlice'
import productsSlice from './products/productsSlice'

export const store = configureStore ({
    reducer : {
        posts: postsSlice, 
        carts: cartsSlice, 
        products: productsSlice, 
        }
    })