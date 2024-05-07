import { useCounterSelector } from '../counter.store'
import { someModuleSlice } from './some-module.slice'

export const useSomeModuleSelector = () => useCounterSelector((state) => state[someModuleSlice.name])
