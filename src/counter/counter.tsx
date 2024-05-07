import React, { FC } from 'react'

import { CounterProvider, counterStore } from './counter.store'
import { SomeModule } from './some-module'

const Counter: FC = () => {
  return (
    <CounterProvider store={counterStore}>
      <SomeModule />
    </CounterProvider>
  )
}

export default Counter
