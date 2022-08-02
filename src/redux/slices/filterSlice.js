import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sort: { 
        label: 'rating (highest)', 
        value: 'rating'
    },
    loading: false
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setFilters(state, action) {
            state.sort = action.payload.sort;
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
        }
    }
})

export const { setCategoryId, setSort, setCurrentPage, setLoading, setFilters } = filterSlice.actions;

export default filterSlice.reducer;