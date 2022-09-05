import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'
import App from './App.jsx'
import Spinner from './components/Spinner'

const FioriProvider = React.lazy(() =>
  new Promise(resolve => setTimeout(resolve, 500)).then(() => import('./layouts/FioriProvider'))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex min-h-screen min-w-full flex-grow flex-col items-center justify-center overflow-x-hidden bg-uwqhd-gradient bg-cover bg-center bg-no-repeat">
      <React.Suspense fallback={<Spinner />}>
        <FioriProvider>
          <App />
        </FioriProvider>
      </React.Suspense>
    </div>
  </React.StrictMode>
)
