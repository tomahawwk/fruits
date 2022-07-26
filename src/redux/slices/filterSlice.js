import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 0,
    sort: { 
        value: 'rating', 
        label: 'rating'
    },
    loading: true
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
        setLoading(state, action) {
            state.loading = action.payload;
        }
    }
})

export const { setCategoryId, setSort, setLoading } = filterSlice.actions;

export default filterSlice.reducer;