/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Service = ({Service}) => {
    const {id, image, service_name, price} = Service || {};
    return (
        <div>
            <div className="card  bg-[#F2F7F4] dark:bg-zinc-800 border-black dark:border-white border-2 shadow-xl h-[400px]">
  <figure className=" pt-10">
    <img src={image} alt="Shoes" className=" w-full" />
  </figure>
  <div className="card-body items-center text-center text-black dark:text-white">
    <h2 className="card-title">{service_name}</h2>
    <h3>Price: ${price}</h3>
    <Link to={`/services/${id}`}>
    <div className="card-actions">
      <button className="w-full bg-[#075E54] text-white px-16 py-3 rounded">View Details</button>
    </div>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Service;