/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Service = ({Service}) => {
    const {_id, image, service_name, price} = Service || {};
    return (
        <div className="">
            <div className="card m-1 bg-[#F2F7F4] dark:bg-zinc-800 border-black dark:border-white border-2 shadow-xl md:h-[400px]">
  <figure className="  md:pt-10">
    <img src={image} alt="Shoes" className=" w-full" />
  </figure>
  <div className="card-body items-center text-center p-0 md:p-3 text-black dark:text-white">
    <h2 className="card-title text-sm md:text-xl py-0">{service_name}</h2>
    <h3 className=" text-sm md:text-base">Price: ${price}</h3>
    <Link to={`/services/${_id}`}>
    <div className="card-actions">
      <button className="w-full bg-[#075E54] text-white px-2 py-1 md:px-16 md:py-3 rounded text-xs md:text-lg mb-2 md:mb-4">View Details</button>
    </div>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Service;