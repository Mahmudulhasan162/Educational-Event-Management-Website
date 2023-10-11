import Service from "./Service";

const Services = ( Services ) => {
    return (
        <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
         {
            Services?.Services?.map(service => <Service key={service.id} Service={service}></Service>)
         }
        </div>
        </div>
    );
};

export default Services;