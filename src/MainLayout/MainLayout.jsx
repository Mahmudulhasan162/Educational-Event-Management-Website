import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";


const MainLayout = () => {
    return (
        <div className=" max-w-[1100px] mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;