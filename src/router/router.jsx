import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AdJob/AddJob";
import MyPostedJobs from "../pages/MyPosedJobs/MyPostedJobs";

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
          path:'jobapply/:id',
          element:<PrivateRoutes><JobApply></JobApply></PrivateRoutes>
        },
        {
          path:'myapplication',
          element:<PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
        },
        {
          path:'addjob',
          element:<PrivateRoutes><AddJob></AddJob></PrivateRoutes>
        },
        {
          path:'/mypostedjobs',
          element:<PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
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