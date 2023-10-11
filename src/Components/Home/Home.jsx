import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import ServiceCategories from "../Services/ServiceCategories";



const Home = () => {
    const serviceData= useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <div>
                <ServiceCategories categories= {serviceData}></ServiceCategories>
            </div>
        </div>
    );
};

export default Home;