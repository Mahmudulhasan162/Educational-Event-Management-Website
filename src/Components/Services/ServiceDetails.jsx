/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const ServiceDetails = () => {
    const serviceData= useLoaderData();
    const {id} = useParams();
    const [service, setService] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const findService = serviceData?.find(service => service.id ==id)
        setService(findService)
    },[id, serviceData])
   if(!service){
    return <div>loading</div>
   }

   const handleCartSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(service),
        });

        if (response.ok) {
            swal("Product Added to Cart", "You have successfully added product to Cart", "success");
        } else {
            swal("Error", "Failed to add to cart", "error");
        }
    } catch (error) {
        console.error("Error:", error);
        swal("Error", "An Error Occupied", "error");
    } finally {
        setLoading(false);
    }
}

    return (
        <div className="max-w-[700px] flex flex-col justify-center items-center mx-auto ">
            <img className="h-[60vh] w-full border-4 border-[#3d887f]" src={service.image} alt="" />
            <div className="p-5 pt-0 space-y-5 text-center border-4 border-[#3d887f]">
            <h1 className="text-3xl font-bold dark:text-white ">{service.service_name}</h1>
            <p className="text-xl font-medium dark:text-white">{service.short_description}</p>
            <p className="text-2xl font-bold dark:text-white">Price: ${service.price}</p>
            <NavLink to="/cart">
            <button onClick={handleCartSubmit} className="bg-[#075E54] text-white px-4 py-2 rounded font-semibold">Add to Cart</button>
            </NavLink>
            </div>
            
        </div>
    );
};

export default ServiceDetails;