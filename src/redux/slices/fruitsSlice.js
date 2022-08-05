import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchFruits = createAsyncThunk('fruits/fetchFruits', async (params, thunkApi) => {
    const { category, search, order, sortValue, currentPage } = params;
    const { data } = await axios.get(
        `https://62bcc3246b1401736c008049.mockapi.io/items?page=${currentPage}&limit=10&${category}&sortBy=${sortValue}&order=${order}${search}`
    );
    console.log(thunkApi)
    return data;
});

const initialState = {
    items: [],
    isLoading: false,
    status: "pending"
}

const fruitsSlice = createSlice({
    name: 'fruits',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
            state.items.forEach((item, index) => {
                item.index = index;
            })
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
    extraReducers: {
        [fetchFruits.pending]: (state) => {
            state.status = "pending";
            state.items = [];
        },
        [fetchFruits.fulfilled]: (state, action) => {
            state.status = "filled";
            state.items = action.payload;
        },
        [fetchFruits.rejected]: (state) => {
            state.status = "failure";
            state.items = [];
        }
    },
}) 

export const { setItems, setLoading } = fruitsSlice.actions;

export default fruitsSlice.reducer;