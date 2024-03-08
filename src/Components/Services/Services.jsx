import Service from "./Service";

const Services = ( Services ) => {
    return (
        <div>
            <h1>{Services.length}</h1>
        <h1 className="text-4xl my-8 md:my-10 text-center font-bold dark:text-white"><span className="text-[#075E54]">Our</span> Services</h1>
         <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-5 py-3 md:py-10 max-w-[1100px] mx-auto">
            
         {
            Services?.Services?.map(service => <Service key={service.id} Service={service}></Service>)
         }
        </div>
        </div>
    );
};

export default Services;