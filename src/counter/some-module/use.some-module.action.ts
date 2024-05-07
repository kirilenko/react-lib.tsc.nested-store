import { useCounterDispatch } from '../counter.store'
import { someModuleSlice } from './some-module.slice'

export const useSomeModuleAction = () => {
  const dispatch = useCounterDispatch()
  const { actions } = someModuleSlice

  return {
    decrease: () => dispatch(actions.decrement()),
    increase: (props?: number) => dispatch(actions.increment(props || 1)),
  }
}
