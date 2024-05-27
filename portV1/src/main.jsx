import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Introduce from './routes/aboutMe';
import Activity from './routes/activity';
import BlogMain from './routes/blogmain';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/1",
        element: <Contact />,
      },

      {
        path: "contacts/2",
        element: <Introduce/>,
      },
      
      {
        path: "contacts/3",
        element: <Activity/>,
      }
    ],
  },
  {
    path: 'blog/',
    elemnt: <BlogMain/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
