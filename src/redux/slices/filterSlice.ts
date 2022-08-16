import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

export enum SortValueEnum {
    RATING_DESC = "rating",
    RATING_ASC = "-rating",
    PRICE_DESC = "price",
    PRICE_ASC = "-price",
    ALPHABET_DESC = "alphabet",
    ALPHABET_ASC = "-alphabet",
}

export type Sort = {
    label: string;
    value: SortValueEnum;
}

export interface FilterState {
    categoryId: number;
    searchValue: string;
    currentPage: number;
    sort: Sort,
}

const initialState: FilterState = {
    categoryId: 0,
    currentPage: 1,
    searchValue: '',
    sort: { 
        label: 'rating (highest)', 
        value: SortValueEnum.RATING_DESC
    },
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterState>) {
            state.sort = action.payload.sort;
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
        }
    }
})

export const getFilterSelector = (state: RootState) => state.filter;

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;