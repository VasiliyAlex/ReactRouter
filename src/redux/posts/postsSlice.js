import {
    buildCreateSlice,
    asyncThunkCreator
} from "@reduxjs/toolkit";

const createSlice = buildCreateSlice({
    creators: {
        asyncThunk: asyncThunkCreator,
    },
});

export const postsSlice = createSlice({
    name: "postsSlice",
    initialState:{
        postsArrow: null,
    },
    // selectors: {
    //     cartsSelector: state => state.cartsArrow
    // },
    reducers: (create) => ({
        addPosts: create.reducer((state, action) => { }),
        getPosts: create.asyncThunk(
            async () => {
                let res = await fetch(`https://dummyjson.com/posts`);
                let data = await res.json();
                return data;
            }, {
            pending: (state, action) => {
                console.log(1);
            },
            fulfilled: (state, action) => {
                console.log(2);
                state.postsArrow = action.payload
            },
            rejected: (state, action) => {
                console.log(3);
            },
        }
        ),
    }),
});

export const {getPosts} = postsSlice.actions;
// export const {cartsSelector} = cartsSlice.selectors;
export default postsSlice.reducer;
export const postsSelector = (state) => state.posts;