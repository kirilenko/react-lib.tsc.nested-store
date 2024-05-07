import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Counter as ExternalCounter } from 'template.react.redux.lib.tsc'

import { Counter as InternalCounter } from './modules/counter'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ExternalCounter />
    <InternalCounter />
  </StrictMode>,
)
