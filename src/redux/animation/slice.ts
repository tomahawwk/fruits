import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AnimationState } from "./types";

const initialState: AnimationState = {
    routeAnimate: false,
    appearAnimate: false,
}

const animationSlice = createSlice({
    name: 'animation',
    initialState,
    reducers: {
        setRouteAnimation(state, action: PayloadAction<boolean>) {
            state.routeAnimate = action.payload;
        },
        setAppearAnimation(state, action: PayloadAction<boolean>) {
            state.appearAnimate = action.payload;
        },
    }
})

export const { setRouteAnimation, setAppearAnimation } = animationSlice.actions;

export default animationSlice.reducer;