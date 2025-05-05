import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Career from './Pages/Career.jsx'
import CategoryNews from './Pages/CategoryNews.jsx'





const router = createBrowserRouter([
  {
    path:"/",
    Component:MainLayout,
    errorElement: <div>error</div>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/category/:id",
        Component: CategoryNews, 
        loader: () => fetch("/news.json")
      }
      
    ]

  }
  ,
  {
    path:'/about',
    Component: About
    
  },
  {
    path:'/career',
    Component:Career
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
