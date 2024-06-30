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
import Write from './routes/write'
import PostView from './routes/postView'
import EditPost from './routes/post/editPost'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        path: "home/",
        element: <Home/>,
      },
      {
        path: "blog/post/",
        element: <Post/>,
      },
      {
        path: "blog/post/show/:postId",
        element: <PostView/>,
      },
      {
        path:"login/",
        element: <Login/>
      },
      {
        path:"reiginstration/",
        element: <Register/>
      },
      {
        path:"blog/write/",
        element: <Write/>
      },
      {
        path: "blog/post/show/:postId/edit",
        element: <EditPost/>,
      },
      // {
      //   path:"edit/:postId",
      //   element: <EditPost/>
      // },
      // {
      //   path:"delete/:postId",
      //   element: <DeletePost/>
      // }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
