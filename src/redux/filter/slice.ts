import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterState, SortValueEnum, Sort } from "./types";

const initialState: FilterState = {
    category: '0',
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
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
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
            state.category = String(action.payload.category);
        }
    }
})

export const { setCategory, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;