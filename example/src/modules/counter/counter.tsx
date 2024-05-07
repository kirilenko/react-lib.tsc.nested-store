import React, { FC } from 'react'

import { useCounterSelector } from './use.counter.selector'
import { useCounterAction } from './use.counter.action'

const Counter: FC = () => {
  const { count } = useCounterSelector()
  const { decrease, increase } = useCounterAction()

  return (
    <div>
      <p>Internal counter: {count}</p>
      <button
        onClick={() => {
          decrease()
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          increase()
        }}
      >
        +
      </button>
    </div>
  )
}

export default Counter
