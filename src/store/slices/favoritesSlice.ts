import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../components/Product";


const initialState: Array<IProduct> = [];

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorite(state, action: { payload: IProduct }) {
            state.push(action.payload);
        },
        removeFromFavorite(state, action: { payload: string }) {
            const index = state.findIndex(item => item.name === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;