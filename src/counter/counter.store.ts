import { createSelectorHook, ReactReduxContextValue, TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { createContext, useContext } from 'react'
import { someModuleSlice } from './some-module/some-module.slice'
import { Store } from 'redux'

export const counterStore = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    [someModuleSlice.name]: someModuleSlice.reducer,
  },
})

export type CounterState = ReturnType<typeof counterStore.getState>

export const CounterContext = createContext<ReactReduxContextValue | null>(null)

export type CounterDispatch = typeof counterStore.dispatch

export const useCounterDispatch = () => {
  const { dispatch = () => {} } = (useContext(CounterContext)?.store as Store<CounterState>) || {}

  return dispatch as CounterDispatch
}

export const useCounterSelector: TypedUseSelectorHook<CounterState> = createSelectorHook(CounterContext)
