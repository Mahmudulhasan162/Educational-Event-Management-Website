import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-10 py-10 border text-white bg-[#075E54]">
            <div>
            <h1 className="text-5xl font-bold">eduEvents</h1>
            </div>
            <div className="flex gap-6 text-medium font-medium">
            <NavLink to="/"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
           }>HOME</NavLink>
            <NavLink to="/services"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>SERVICES</NavLink>
            <NavLink to="/about"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>ABOUT US</NavLink>
            <NavLink to="/login"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>LOGIN</NavLink>
            <NavLink to="/register"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>REGISTER</NavLink>
            </div>
        </div>
    );
};

export default Navbar;