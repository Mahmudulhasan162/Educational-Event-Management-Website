import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";


const ServicePage = () => {
    const serviceData= useLoaderData();
    return (
        <div>
            <Services Services = {serviceData}></Services>
        </div>
    );
};

export default ServicePage;