import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-10 py-10 border text-white bg-[#075E54]">
            <div>
            <h1 className="text-5xl font-bold">eduEvents</h1>
            </div>
            <div className="flex gap-10 text-xl font-semibold">
            <NavLink to="/"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
           }>Home</NavLink>
            <NavLink to="/services"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>Services</NavLink>
            <NavLink to="/login"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>Login</NavLink>
            <NavLink to="/register"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>Register</NavLink>
            </div>
        </div>
    );
};

export default Navbar;