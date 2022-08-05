import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    routeAnimate: false,
    appearAnimate: false,
}

const animationSlice = createSlice({
    name: 'animation',
    initialState,
    reducers: {
        setRouteAnimation(state, action) {
            state.routeAnimate = action.payload;
        },
        setAppearAnimation(state, action) {
            state.appearAnimate = action.payload;
        },
    }
})

export const { setRouteAnimation, setAppearAnimation } = animationSlice.actions;

export default animationSlice.reducer;