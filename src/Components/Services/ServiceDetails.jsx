/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import { Context } from "../Firebase/AuthProvider";


const ServiceDetails = () => {
    const serviceData= useLoaderData();
    const {price, short_description, image, service_name} = serviceData
    const [loading, setLoading] = useState(false);
    const {user} = useContext(Context)
    const userData= {
        ...serviceData,
        email: user.email
    
       }

   const handleCartSubmit =(e) => {
    e.preventDefault();

    try {
        setLoading(true);
        fetch(`http://localhost:5000/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
            swal("Product Added to Cart", "You have successfully added product to Cart", "success");
    
            // swal("Error", "Failed to add to cart", "error");

    } catch (error) {
        console.error("Error:", error);
        swal("Error", "An Error Occupied", "error");
    } finally {
        setLoading(false);
    }
}

    return (
        <div className="max-w-[700px] flex flex-col justify-center items-center mx-auto my-10 p-2 ">
            <img className=" lg:h-[60vh] w-full border-4 border-[#3d887f]" src={image} alt="" />
            <div className=" md:p-5 pt-0 space-y-2 md:space-y-5 text-center border-4 border-[#3d887f]">
            <h1 className=" text-lg md:text-xl lg:text-3xl font-bold dark:text-white ">{service_name}</h1>
            <p className="text-sm md:text-lg lg:text-xl font-medium dark:text-white">{short_description}</p>
            <p className=" md:text-2xl font-bold dark:text-white">Price: ${price}</p>
            <NavLink to="/cart">
            <button onClick={handleCartSubmit} className="bg-[#075E54] text-sm md:text-base text-white px-2 py-1 md:px-4 md:py-2 rounded font-semibold my-2 md:my-4">Add to Cart</button>
            </NavLink>
            </div>
            
        </div>
    );
};

export default ServiceDetails;