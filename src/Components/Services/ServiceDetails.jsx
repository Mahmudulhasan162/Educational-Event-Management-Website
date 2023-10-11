import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


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
        <div className="w-[700px] flex flex-col justify-center items-center mx-auto space-y-5 mt-10 bg-[#3d887f]">
            <img className="h-[60vh] w-full" src={service.image} alt="" />
            <div className="p-5  space-y-5 text-center">
            <h1 className="text-3xl font-bold ">{service.service_name}</h1>
            <p className="text-xl font-medium">{service.short_description}</p>
            <p className="text-2xl font-bold">Price: ${service.price}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;