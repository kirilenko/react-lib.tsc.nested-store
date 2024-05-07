import { useAppDispatch } from '../../store'
import { counterSlice } from './counter.slice'

export const useCounterAction = () => {
  const dispatch = useAppDispatch()
  const { actions } = counterSlice

  return {
    decrease: () => dispatch(actions.decrement()),
    increase: (props?: number) => dispatch(actions.increment(props || 1)),
  }
}
