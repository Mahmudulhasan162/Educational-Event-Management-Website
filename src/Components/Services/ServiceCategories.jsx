/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Servicecate from "./Servicecate";


const ServiceCategories = ({categories}) => {
    return (
        <div>
            <h1 className="text-4xl my-8 md:my-16 text-center font-bold dark:text-white"><span className="text-[#075E54]">Our</span> Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-2 md:mx-auto ">
            {
                categories?.map(category => <Servicecate key={category.id} category={category}></Servicecate>)
            }
            </div>
            <div className="w-full mx-auto text-center">
        
           <Link to="/services">
           <button className="px-4 md:px-6 md:text-xl py-1 md:py-2 bg-[#075E54] text-white font-medium rounded my-10 text-center">See All</button>
           </Link>
        </div>
        </div>
    );
};

export default ServiceCategories;