import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import Career from './Pages/Career.jsx'
import CategoryNews from './Pages/CategoryNews.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import AuthLayOut from './Layout/AuthLayOut.jsx'
import AuthProvider from './Component/Provider/AuthProvider.jsx'
import NewsDetails from './Pages/NewsDetails.jsx'
import PrivateRoute from './Component/Provider/PrivateRoute.jsx'
import Loading from './Pages/Loading.jsx'





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
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
      }
      
    ]

  },
  {
    path:'/auth',
    element: <AuthLayOut></AuthLayOut>,
    children:[
      {
        path:"/auth/login",
        Component: Login
      }
      ,
      {
        path:"/auth/register",
        Component: Register
      }
    ]

  },
  {
    path:"/news-details/:id",
    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader: ()=> fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>
  }
  ,
  {
    path:'/career',
    Component:Career
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
