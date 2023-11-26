import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../Firebase/AuthProvider";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";


const Navbar = () => {
    const {user,Logout} = useContext(Context)
    const [mode , setMode] =useState("light");

    function changeTheme () {
        const html = document.documentElement;

        if(mode == "light"){
            html.classList.remove("light");
            html.classList.add("dark");
            setMode("dark"); 
            localStorage.setItem("mode","dark")   
        }else{
            html.classList.remove("dark");
            html.classList.add("light");
            setMode("light");
            localStorage.setItem("mode","light");   
        }
    }
    useEffect(()=>{
        const currentMode = localStorage.getItem("mode") || "light";
         setMode(currentMode);
         const html = document.documentElement;
         html.classList.add(currentMode)

    },[])

    const handleLogout= ()=>{
        Logout().then()
    }
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-10 py-10 border text-white bg-[#075E54]">
            <div>
            <h1 className="text-5xl font-bold">eduEvents</h1>
            </div>
           <div className="flex flex-col gap-3">
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
           <NavLink to="/cart"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>CART</NavLink>
            <NavLink to="/login"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>LOGIN</NavLink>
            <NavLink to="/register"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
           }>REGISTER</NavLink>

           <button onClick={changeTheme} className="text-2xl p-1 border rounded-full bg-zinc-800">{mode == "dark"? <BsSun/>: <FaMoon/>}</button>
            
            </div>
            <div className="flex gap-5">
            {user &&  <img className="rounded-full h-10 w-10" src={user?.photoURL ? user.photoURL : "https://i.ibb.co/ggqWRmN/ezgif-com-gif-maker.jpg"} alt="" />}
            {user &&  <p>{user?.displayName}</p>}
            { user && <button onClick={handleLogout} className="px-4 py-1 bg-white text-[#075E54] rounded "> Logout</button> }
            </div>
           </div>
           
        </div>
    );
};

export default Navbar;