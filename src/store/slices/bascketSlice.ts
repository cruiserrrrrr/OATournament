import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../components/Product";


const initialState: Array<IProduct> = [];

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action: { payload: IProduct }) {
            state.push(action.payload);
        },
        removeFromBasket(state, action: { payload: string }) {
            const index = state.findIndex(item => item.name === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;