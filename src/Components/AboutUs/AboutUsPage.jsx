/* eslint-disable react/no-unescaped-entities */
const AboutUsPage = () => {
    return (
        <div className=" mx-1 md:w-1/3 md:h-[80vh] md:mx-auto text-sm md:text-lg font-medium border-2 md:border-4 border-[#075E54] p-2 md:p-6 my-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white text-center"><span className="text-[#075E54]">About</span> Us</h2>
            <p className="text-gray-600 dark:text-white leading-relaxed mt-4">
            Welcome to <span className="font-bold text-base md:text-xl">eduEvents</span>, where we believe in the transformative power of education and
            professional development. Our mission is to create a platform that brings together learners,
            professionals, and experts to foster knowledge exchange, skill enhancement, and career growth.
          </p>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
            <p className="text-gray-600 dark:text-white leading-relaxed mt-4">
            At eduEvents, we curate a diverse range of events, including workshops, webinars,
            career fairs, educational conferences, and training programs, with the aim of providing
            valuable learning experiences tailored to your needs.
          </p>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          <p className="text-gray-600 dark:text-white leading-relaxed mt-4">
            Our team is passionate about empowering individuals to thrive in their personal and professional
            journeys. Whether you're a student looking to explore new opportunities, a professional seeking
            to up-skill, or an expert eager to share knowledge, eduEvents is your go-to platform.
          </p>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          <p className="text-gray-600 dark:text-white leading-relaxed mt-4">
            Join us on this educational journey, and let's shape a future where continuous learning and
            collaboration lead to endless possibilities.
          </p>
        </div>
    );
};

export default AboutUsPage;