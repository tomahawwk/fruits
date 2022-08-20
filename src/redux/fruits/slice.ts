
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchFruits } from "./asyncActions";
import { FruitsState, Status, Fruit } from './types';

const initialState: FruitsState = {
    items: [],
    isLoading: false,
    status: Status.LOADING
}

const fruitsSlice = createSlice({
    name: 'fruits',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Fruit[]>) {
            state.items = action.payload;
            state.items.forEach((item, index) => {
                item.index = index;
            })
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFruits.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchFruits.fulfilled, (state, action: PayloadAction<Fruit[]>) => {
            state.status = Status.SUCCESS;
            state.items = action.payload;
        });
        builder.addCase(fetchFruits.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
})

export const { setItems, setLoading } = fruitsSlice.actions;

export default fruitsSlice.reducer;