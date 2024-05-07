import { useAppSelector } from '../../store'
import { counterSlice } from './counter.slice'

export const useCounterSelector = () => useAppSelector((state) => state[counterSlice.name])
