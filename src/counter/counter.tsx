import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { CounterContext, counterStore } from './counter.store'
import { SomeModule } from './some-module'

const Counter: FC = () => {
  return (
    <Provider context={CounterContext} store={counterStore}>
      <SomeModule />
    </Provider>
  )
}

export default Counter
