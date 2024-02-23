import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar1 from "../Components/Header/NavBar1";


const MainLayout = () => {
    return (
        <div className=" mx-auto">
            <NavBar1></NavBar1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;