import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  count: number
}

const initialState: State = {
  count: 0,
}

// w/o payload:
const decrement: CaseReducer<State> = (state) => ({
  ...state,
  count: state.count - 1,
})

// w/ payload:
const increment: CaseReducer<State, PayloadAction<number>> = (state, action) => ({
  ...state,
  count: state.count + (action.payload || 1),
})

export const someModuleSlice = createSlice({
  initialState,
  name: 'someModule',
  reducers: {
    decrement,
    increment,
  },
})
