import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path:'/',
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:'/jobs/:id',
          Component: JobDetails,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)

        },
        {
            path:'/register',
            Component:Register,
        },
        {
            path:'/login',
            Component:Login,
        }
    ]
  },
]);

export default router;