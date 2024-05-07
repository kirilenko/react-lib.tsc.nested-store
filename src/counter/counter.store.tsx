import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { someModuleSlice } from './some-module/some-module.slice'

export const counterStore = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    [someModuleSlice.name]: someModuleSlice.reducer,
  },
})

export type CounterStore = typeof counterStore

export type CounterState = ReturnType<CounterStore['getState']>

export type CounterDispatch = CounterStore['dispatch']

type CounterContextValueType = {
  dispatch: CounterDispatch
  state: CounterState
  store: CounterStore
}

export const CounterContext = createContext<CounterContextValueType>({
  dispatch: (() => {}) as CounterDispatch,
  state: {} as CounterState,
  store: {} as CounterStore,
})

export const CounterProvider: FC<PropsWithChildren<{ store: CounterStore }>> = ({ children, store }) => {
  const [state, setState] = useState<CounterState>(store.getState())

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [store])

  return (
    <CounterContext.Provider value={{ dispatch: store.dispatch, store, state }}>{children}</CounterContext.Provider>
  )
}

export const useCounterDispatch = () => useContext(CounterContext).dispatch

export const useCounterSelector: TypedUseSelectorHook<CounterState> = (selector) =>
  selector(useContext(CounterContext).state)

export const useCounterStore = () => useContext(CounterContext).store
