import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface AnimationState {
    routeAnimate: boolean;
    appearAnimate: boolean;
}

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

export const getAnimationSelector = (state: RootState) => state.animation;

export const { setRouteAnimation, setAppearAnimation } = animationSlice.actions;

export default animationSlice.reducer;