import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import NotFound from './components/NotFound.jsx'
import Programs from './components/Programs.jsx'
import News from './components/News.jsx'

const router = createBrowserRouter([
  {
    path: "/earist-extension-program/",
    element: <App/>,
    children: [
      {
        path: "/earist-extension-program/",
        element: <Home/>
      },
      {
        path: "/earist-extension-program/programs",
        element: <Programs/>
      },
      {
        path: "/earist-extension-program/*",
        element: <NotFound/>
      },
      {
        path: "/earist-extension-program/news",
        element: <News/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
