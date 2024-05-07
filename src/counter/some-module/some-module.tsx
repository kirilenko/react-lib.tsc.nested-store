import React, { FC } from 'react'

import { useSomeModuleSelector } from './use.some-module.selector'
import { useSomeModuleAction } from './use.some-module.action'

const SomeModule: FC = () => {
  const { count } = useSomeModuleSelector()
  const { decrease, increase } = useSomeModuleAction()

  return (
    <div>
      <p>External some-module: {count}</p>
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

export default SomeModule
