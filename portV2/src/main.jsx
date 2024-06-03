import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Root from "./routes/root"
import Home from "./routes/home"
import Post from "./routes/post"
import Login from './routes/login'
import ErrorPage from './error-page'
import Register from './routes/register'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "home/",
        element: <Home/>,
      },
      {
        path: "blog/",
        element: <Post/>,
      },
      {
        path:"login/",
        element: <Login/>
      },
      {
        path:"reiginstration/",
        element: <Register/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
