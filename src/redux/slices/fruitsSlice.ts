import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from '../store';

export type SearchParams = {
    category: string;
    search: string;
    order: string;
    sortBy: string;
    currentPage: number;
}

export const fetchFruits = createAsyncThunk<Fruit[], SearchParams>('fruits/fetchFruits', async (params) => {
    const { category, search, order, sortBy, currentPage } = params;
    const { data } = await axios.get<Fruit[]>(
        `https://62bcc3246b1401736c008049.mockapi.io/items?page=${currentPage}&limit=10&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
});

export enum Status {
    LOADING = 'pending',   
    SUCCESS = 'filled',
    ERROR = 'failure'
}

export type Fruit = {
    id: string;
    title: string;
    price: number;
    oldprice: number;
    quantity: number;
    description: string;
    desktopImage: string;
    phoneImage: string;
    count: number;
    index: number;
}

interface FruitsState {
    items: Fruit[];
    isLoading: boolean;
    status: Status;
}

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

export const getFruitsSelector = (state: RootState) => state.fruits;

export const { setItems, setLoading } = fruitsSlice.actions;

export default fruitsSlice.reducer;