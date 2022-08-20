import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterState, SortValueEnum, Sort } from "./types";

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
            state.categoryId = action.payload.categoryId;
        }
    }
})

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;