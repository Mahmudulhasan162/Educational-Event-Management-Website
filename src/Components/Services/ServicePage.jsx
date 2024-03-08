import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import { useEffect, useState } from "react";


const ServicePage = () => {
    const serviceData= useLoaderData()
    const [services, setServices] = useState([]);
    const count = serviceData.length;
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages= Math.ceil(count/itemsPerPage);

    const pages = [...Array(numberOfPages).keys()].map(page => page +1)
    console.log(pages);

    useEffect(()=>{
        fetch(`https://educational-website-server-nu.vercel.app/allData?page=${currentPage -1 }&size=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => setServices(data))

    },[currentPage,itemsPerPage])

    const handleItemsPerPage= e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }
    const handlePrevPage = () => {
        if(currentPage>1){
            setCurrentPage(currentPage -1);
        }
    }

    const handleNextPage = ()=>{
        if(currentPage< pages.length){
            setCurrentPage(currentPage+1)
        }
    }
    return (
        <div>
            <Services Services = {services}></Services>
            <center>
            <div className="my-10">
                <button className="md:btn md:btn-circle md:border-[#075E54] md:mr-5" onClick={handlePrevPage}>❮</button>
                {
                    pages.map(page => <button className={currentPage==page?'bg-[#075E54] md:bg-[#075E54] w-8 h-8 rounded-full text-white md:btn md:btn-circle mr-1 md:mr-5 text-xs md:text-white':'md:btn mr-1 md:mr-5 md:btn-circle md:border-[#075E54] text-xs w-5 h-5'} onClick={()=> setCurrentPage(page)} key={page}>{page}</button>)
                }
                <button className="md:btn md:btn-circle md:border-[#075E54] mr-5" onClick={handleNextPage}>❯</button>
                <p className="bg-[#075E54] text-sm md:text-lg w-max px-2 py-1 md:px-4 md:py-2 text-white font-semibold rounded-xl mt-5">Select Length</p>
                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                </select>
            </div>
            </center>
        </div>
    );
};

export default ServicePage;