import {
    buildCreateSlice,
    asyncThunkCreator
} from "@reduxjs/toolkit";

const createSlice = buildCreateSlice({
    creators: {
        asyncThunk: asyncThunkCreator,
    },
});

export const productsSlice = createSlice({
    name: "productsSlice",
    initialState:{
        productsArrow: null,
    },
    // selectors: {
    //     cartsSelector: state => state.cartsArrow
    // },
    reducers: (create) => ({
        addProducts: create.reducer((state, action) => { }),
        getProducts: create.asyncThunk(
            async () => {
                let res = await fetch(`https://dummyjson.com/products`);
                let data = await res.json();
                return data;
            }, {
            pending: (state, action) => {
                console.log(1);
            },
            fulfilled: (state, action) => {
                console.log(2);
                state.productsArrow = action.payload
            },
            rejected: (state, action) => {
                console.log(3);
            },
        }
        ),
    }),
});

export const {getProducts} = productsSlice.actions;
// export const {cartsSelector} = cartsSlice.selectors;
export default productsSlice.reducer;
export const productsSelector = (state) => state.products;