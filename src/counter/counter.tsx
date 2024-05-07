import React, { FC, useState } from 'react'

type Props = {
  value?: number
}

const Counter: FC<Props> = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value)

  return (
    <div>
      <p>External counter: {counter}</p>
      <button onClick={() => setCounter((p) => p - 1)}>-</button>
      <button onClick={() => setCounter((p) => p + 1)}>+</button>
    </div>
  )
}

export default Counter
