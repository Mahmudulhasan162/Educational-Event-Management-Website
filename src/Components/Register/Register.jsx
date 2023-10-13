import { useContext, useState } from "react";
import { Context } from "../Firebase/AuthProvider";
import swal from "sweetalert";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Register = () => {
    const {Register} = useContext(Context);
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(null);
    const Location= useLocation();
    const Navigate = useNavigate();


    const handleRegisterButton = () => {
      if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/.test(password)){
          swal("Passoword Not Correct!", "Minimum six characters, one special character and at least one capital letter needed!", "error");
      }else{
          if(email && name){
              Register(email, password, name).then(result=>console.log(result.user))
              Navigate(Location?.state ? Location.state : "/");
              swal("Welcome!", "You have registered successfully!", "success");
          }
      }
  }

    console.log(name);
    return (
      
        <div className="flex justify-center items-center h-[80vh]">
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#075E54] to-[#25D366] bg-clip-border text-white shadow-lg shadow-pink-500/40">
    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
      Register
    </h3>
  </div>
  <div className="flex flex-col gap-4 p-6">
    <div className="relative h-11 w-full min-w-[200px]">
      <input onChange={(e)=>setName(e.target.value)}
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#075E54] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#075E54] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#075E54] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#075E54] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Your Name
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input onChange={(e)=>setEmail(e.target.value)}
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#075E54] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" " required type="email"
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#075E54] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#075E54] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#075E54] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Email
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input onChange={(e)=>setPassword(e.target.value)}
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#075E54] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 required"
        placeholder=" " required type="password" 
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#075E54] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#075E54] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#075E54] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Password
      </label>
    </div>
  </div>
  <div className="p-6 pt-0">
    <button onClick={handleRegisterButton}
      className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#075E54] to-[#25D366] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Register
    </button>
    <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
      Already have an account?
      <Link
        to="/login"
        className="ml-1 block font-sans text-sm font-bold leading-normal text-[#075E54] antialiased"
      >
        Login
      </Link>
    </p>
  </div>
</div>
        </div>
    );
};

export default Register;