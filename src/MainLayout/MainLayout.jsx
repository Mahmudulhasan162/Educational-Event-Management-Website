import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar1 from "../Components/Header/NavBar1";
import Headroom from "react-headroom";


const MainLayout = () => {
    return (
        <div className=" mx-auto">
            <Headroom><NavBar1></NavBar1></Headroom>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;