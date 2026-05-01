import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import CardProv from "./context/CardProv.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CardProv>
        <App />
      </CardProv >
    </BrowserRouter>
  </StrictMode>
  ,
)
