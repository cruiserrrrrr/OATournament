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
        addStock(state, action: { payload: string }) {
            const product = state.find(item => item.name === action.payload);
            if (product && product.quantity > product.stock) {
                product.stock += 1
            }
        },
        reduceStock(state, action: { payload: string }) {
            const product = state.find(item => item.name === action.payload);
            if (product && product.stock > 0) {
                product.stock -= 1
            }
        },
    },
});

export const { addToBasket, removeFromBasket, addStock, reduceStock } = basketSlice.actions;
export default basketSlice.reducer;