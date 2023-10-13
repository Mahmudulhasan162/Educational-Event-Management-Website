import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ServicePage from "../Components/Services/ServicePage";
import ServiceDetails from "../Components/Services/ServiceDetails";
import AboutUsPage from "../Components/AboutUs/AboutUsPage";
import PrivateRoute from "../Components/Firebase/PrivateRoute";


const Route = createBrowserRouter ([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch("/service.json") 
            },
            {
                path : "/services",
                element : <ServicePage></ServicePage>,
                loader : ()=> fetch("/data.json") 
            },
            {
                path : "/services/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader : ()=> fetch("/data.json")
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/about",
                element : <AboutUsPage></AboutUsPage>
            }
        ]
    }
])

export default Route;