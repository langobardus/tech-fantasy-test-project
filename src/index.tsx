import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducApp } from 'reducers'
import { Provider } from 'react-redux'
import { rootSaga } from './sagas'
import { App } from './components/App'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducApp,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
