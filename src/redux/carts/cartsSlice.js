import {
    buildCreateSlice,
    asyncThunkCreator
} from "@reduxjs/toolkit";

const createSlice = buildCreateSlice({
    creators: {
        asyncThunk: asyncThunkCreator,
    },
});

export const cartsSlice = createSlice({
    name: "cartsSlice",
    initialState:{
        cartsArrow: null,
    },
    // selectors: {
    //     cartsSelector: state => state.cartsArrow
    // },
    reducers: (create) => ({
        addCarts: create.reducer((state, action) => { }),
        getCarts: create.asyncThunk(
            async () => {
                let res = await fetch(`https://dummyjson.com/carts`);
                let data = await res.json();
                return data;
            }, {
            pending: (state, action) => {
                // console.log(1);
            },
            fulfilled: (state, action) => {
                
                state.cartsArrow = action.payload
               
            },
            rejected: (state, action) => {
                console.log(3);
            },
        }
        ),
    }),
});

export const {getCarts} = cartsSlice.actions;
// export const {cartsSelector} = cartsSlice.selectors;
export default cartsSlice.reducer;
export const cartsSelector = (state) => state.carts;