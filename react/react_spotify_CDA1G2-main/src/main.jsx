import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import Router from './tools/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* on appelle notre store */}
    <Provider store={store}>
    {/* on appelle le router pour gérer les url */}
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
