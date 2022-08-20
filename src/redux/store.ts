import { configureStore } from '@reduxjs/toolkit'

import filter from './filter/slice'
import cart from './cart/slice'
import fruits from './fruits/slice'
import animation from './animation/slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { filter, cart, fruits, animation }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();