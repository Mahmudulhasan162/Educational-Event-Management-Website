import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import ServiceCategories from "../Services/ServiceCategories";
import Footer from "../Footer/Footer";
import Team from "../Team/Team";



const Home = () => {
    const serviceData= useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <div>
                <ServiceCategories categories= {serviceData}></ServiceCategories>
            </div>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;