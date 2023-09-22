import * as React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from "./components/AppliedJobs/Appliedjobs";
import Blogs from "./components/Blogs/Blogs";
import Details from "./components/Details/Details";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children :[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/appliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader : ({params})=> fetch(`../public/jobs.json/${params.id}`)
      }

    ]

  }
    
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <div >
      <React.StrictMode>
      <RouterProvider router={router} ></RouterProvider>
    </React.StrictMode>
    </div>
  
)
