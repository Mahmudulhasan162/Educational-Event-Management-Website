/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import { useContext, useState } from "react";
import { Context } from "../Firebase/AuthProvider";
import swal from "sweetalert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



const Login = () => {
  const { googleLogIn, Login } = useContext(Context);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const Location= useLocation();
  const Navigate = useNavigate();

  const handleGoogleLogIn = () =>{
    googleLogIn().then((result) => {
      swal("Logged In", "You have successfully logged in", "success");
      
      const user = {
        email: result.user.email
      }
      console.log(user);
      axios.post('https://educational-website-server-nu.vercel.app/jwt', user, {
        withCredentials: true
      })
      .then( res => {
        console.log(res.data);
        if(res.data.success){
          Navigate(Location?.state ? Location.state : "/")
        }
      })
    })
  }
  const handleLogin = () => {
    if(email, password){
      Login(email, password).then((result) => {
        swal("Logged In", "You have successfully logged in", "success");

        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = {
          email
        }
        console.log(user);
        // get access token:
        axios.post('https://educational-website-server-nu.vercel.app/jwt', user, {
          withCredentials: true
        })
        .then( res => {
          console.log(res.data);

          if(res.data.success){
            Navigate(Location?.state ? Location.state : "/")
          }
        })
      })
      .catch(()=> {
        swal("User Not Found", "You are not a registered user", "warning");
      })
    }

  }
  
    return (
        <div className="flex justify-center items-center my-10 md:h-[60vh]">
            <div className="relative flex w-56 md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 mb-4 grid h-14 md:h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#075E54] to-[#25D366] bg-clip-border text-white shadow-lg shadow-pink-500/40">
    <h3 className="block font-sans text-xl md:text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
      Log In
    </h3>
  </div>
  <div className="flex flex-col gap-2 md:gap-4 p-3 md:p-6">
    <div className="relative h-8 md:h-11 w-full md:min-w-[200px]">
      <input onChange={(e)=>setEmail(e.target.value)}
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#075E54] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" type="email"
        placeholder=" "
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[8px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-[11px] md:peer-placeholder-shown:text-sm 
      peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#075E54] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#075E54] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#075E54] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Email
      </label>
    </div>
    <div className="relative h-8 md:h-11 w-full md:min-w-[200px]">
      <input onChange={(e)=>setPassword(e.target.value)}
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#075E54] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" " type="password"
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-[11px] md:peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#075E54] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#075E54] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#075E54] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Password
      </label>
    </div>
  </div>
  <div className="p-6 pt-0">
    <button onClick={handleLogin}
      className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#075E54] to-[#25D366] py-1 md:py-3 px-6 text-center align-middle font-sans text-[8px] md:text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Log In
    </button>
    <button onClick={handleGoogleLogIn}
      className="my-2 md:my-4 block w-full select-none rounded-lg bg-gradient-to-tr from-[#075E54] to-[#25D366] py-1 md:py-3 px-6 text-center align-middle font-sans text-[8px] md:text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Sign In with Google
    </button>
    <p className="md:mt-6 flex justify-center font-sans text-xs md:text-sm font-light leading-normal text-inherit antialiased">
      Don't have an account?
      <Link
        to="/register"
        className="ml-1 block font-sans text-sm font-bold leading-normal text-[#075E54] antialiased"
      >
        Register
      </Link>
    </p>
  </div>
</div>
        </div>
    );
};

export default Login;