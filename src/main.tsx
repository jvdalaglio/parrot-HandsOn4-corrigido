import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes'
import { RouterProvider } from "react-router-dom"
import {GlobalStyle} from "./Styles/Global"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
