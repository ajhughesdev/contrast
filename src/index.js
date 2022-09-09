import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fonts from './routes/fonts'
import Mockups from './routes/mockups'
import Illustrations from './routes/illustrations'
import Icons from './routes/icons'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Fonts />} />
          <Route path='/Mockups' element={<Mockups />} />
          <Route path='/Illustrations' element={<Illustrations />} />
          <Route path='/Icons' element={<Icons />} />
          <Route
            path='*'
            element={
              <div style={{ marginTop: '54px' }}>An error has occurred.</div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
