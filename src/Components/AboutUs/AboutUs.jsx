import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 dark:bg-zinc-800 py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"><span className="text-[#075E54]">About</span> Us</h2>
          <p className="text-gray-600 dark:text-white leading-relaxed w-2/3 text-center border-4 border-[#075E54] p-6 text-lg font-medium mx-auto">

            Welcome to Educational Event Management Website, where we believe in the transformative power of education and
            professional development. Our mission is to create a platform that brings together learners,
            professionals, and experts to foster knowledge exchange, skill enhancement, and career growth.
            <Link to="/about">
            <button className="px-6 text-medium py-2 bg-[#075E54] text-white font-medium rounded my-5 text-center">See More</button>
            </Link>
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
