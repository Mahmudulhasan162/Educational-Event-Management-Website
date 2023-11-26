import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const serviceData= useLoaderData();
    const {id} = useParams();
    const [service, setService] = useState();

    useEffect(()=>{
        const findService = serviceData?.find(service => service.id ==id)
        setService(findService)
    },[id, serviceData])
   if(!service){
    return <div>loading</div>
   }

    return (
        <div className="max-w-[700px] flex flex-col justify-center items-center mx-auto ">
            <img className="h-[60vh] w-full border-4 border-[#3d887f]" src={service.image} alt="" />
            <div className="p-5 pt-0 space-y-5 text-center border-4 border-[#3d887f]">
            <h1 className="text-3xl font-bold dark:text-white ">{service.service_name}</h1>
            <p className="text-xl font-medium dark:text-white">{service.short_description}</p>
            <p className="text-2xl font-bold dark:text-white">Price: ${service.price}</p>
            <NavLink to="/cart">
            <button className="bg-[#075E54] text-white px-4 py-2 rounded font-semibold">Add to Cart</button>
            </NavLink>
            </div>
            
        </div>
    );
};

export default ServiceDetails;