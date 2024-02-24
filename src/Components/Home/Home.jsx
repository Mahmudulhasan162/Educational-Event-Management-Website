import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import ServiceCategories from "../Services/ServiceCategories";
import Team from "../Team/Team";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Review from "../Review/Review";



const Home = () => {
    const serviceData= useLoaderData();
    
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div>
                <ServiceCategories categories= {serviceData}></ServiceCategories>
            </div>
            <Team></Team>
            <Review></Review>
        </div>
    );
};

export default Home;