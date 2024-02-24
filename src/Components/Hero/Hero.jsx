/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from "../../assets/eduEvents Logo-modified.png"

const Hero = () => {
    return (
        <div className="hero max-w-[1100px] mx-auto my-2 md:my-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={logo} className=" rounded-lg w-32 md:w-[500px]" />
    <div>
      <h1 className="text-3xl md:text-5xl font-bold dark:text-white"><span className=" text-4xl md:text-6xl">Welcome to <span className="text-[#075E54]">edu</span>Events<span className="text-[#075E54]">,</span></span> where learning meets innovation<span className="text-[#075E54]">!</span></h1>
      <p className="py-3 md:py-6 dark:text-white text-gray-500 text-sm md:text-lg font-medium"> From workshops to conferences, we're your premier platform for seamless event management in the realm of education. Join us in shaping the future of learning. Start exploring today!</p>
      <Link to="/services">
            <button className="px-6 text-medium md:text-lg py-2 bg-[#075E54] text-white font-medium rounded md:my-5 text-center">Explore More</button>
            </Link>
    </div>
  </div>
</div>
    );
};

export default Hero;