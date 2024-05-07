import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Counter as ExternalCounter } from 'template.react.redux.lib.tsc'

import { Counter as InternalCounter } from './modules/counter'
import { store } from './store'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider {...{ store }}>
      <ExternalCounter />
      <InternalCounter />
    </Provider>
  </StrictMode>,
)
