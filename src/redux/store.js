import { configureStore } from '@reduxjs/toolkit'

import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import fruits from './slices/fruitsSlice'
import animation from './slices/animationSlice'

export const store = configureStore({
  reducer: { filter, cart, fruits, animation }
})