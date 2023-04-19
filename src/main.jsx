import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Context provider
import DecodeProvider from './context/DecodeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DecodeProvider>
      <App />
    </DecodeProvider>
  </React.StrictMode>,
)
