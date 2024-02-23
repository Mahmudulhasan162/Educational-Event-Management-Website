import Service from "./Service";

const Services = ( Services ) => {
    return (
        <div>
         <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-5 py-3 md:py-10 max-w-[1100px] mx-auto">
         {
            Services?.Services?.map(service => <Service key={service.id} Service={service}></Service>)
         }
        </div>
        </div>
    );
};

export default Services;