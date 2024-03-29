import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ServicePage from "../Components/Services/ServicePage";
import ServiceDetails from "../Components/Services/ServiceDetails";
import AboutUsPage from "../Components/AboutUs/AboutUsPage";
import PrivateRoute from "../Components/Firebase/PrivateRoute";
import Cart from "../Components/Cart/Cart";


const Route = createBrowserRouter ([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch("https://educational-website-server-nu.vercel.app/services") 
            },
            {
                path : "/services",
                element : <ServicePage></ServicePage>,
                loader : ()=> fetch("https://educational-website-server-nu.vercel.app/allData") 
            },
            {
                path : "/services/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader : ({params})=> fetch(`https://educational-website-server-nu.vercel.app/allData/${params.id}`)
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
            },
            {
                path: "/cart",
                element : <PrivateRoute><Cart></Cart></PrivateRoute>
            }
        ]
    }
])

export default Route;