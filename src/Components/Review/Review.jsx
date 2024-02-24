/* eslint-disable react/no-unescaped-entities */
import photo1 from "../../assets/pic1.jpg"
import photo2 from "../../assets/photo_2021-08-27_09-37-38.jpg"

const Review = () => {
    return (
        <div>
      <div className="text-center space-y-5">
      <h1 className="text-4xl font-bold dark:text-white">Customer <span className="text-[#075E54]">Review</span></h1>
        <p className=" px-2 md:w-2/4 mx-auto text-sm md:text-base font-normal dark:text-white text-[#737373]">
          The majority of our customer keeps coming back to us for our services and they are always pleased with the services they get.
        </p>
      </div>
      <div className=" md:flex gap-6 mt-10 mb-10 md:mb-20 max-w-[1100px] mx-auto ">
        <div className="border-2 border-[#075E54] py-5 px-2 mx-2 md:py-12 md:pl-12 md:pr-3 rounded-xl">
          <div className="flex gap-5">
            <img src={photo2} className=" w-8 h-8 md:w-16 md:h-16 rounded-full" alt="" />
            <div>
              <h1 className=" md:text-2xl font-bold text-[#444] dark:text-white">
               Kazi Mahmudul Hasan
              </h1>
              <h1 className=" text-sm md:text-xl font-semibold text-[#737373]">
                Entrepreneur
              </h1>
            </div>
            <div className=" mx-auto hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z"
                  fill="#FF3811"
                  fillOpacity="0.2"
                />
                <path
                  d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z"
                  fill="#FF3811"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          <p className="text-[#737373] text-xs md:text-base font-normal my-5 dark:text-white">
          eduEvents simplified my event planning process. From registration to logistics, everything was seamless. The platform's intuitive design saved me time and effort, ensuring a stress-free experience. Highly recommend for anyone organizing educational events!
          </p>
          <div>
            <div className="rating ">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400 "
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-[#075E54] py-5 px-2 mx-2 md:py-12 md:pl-12 md:pr-3 rounded-xl">
          <div className="flex gap-5">
            <img src={photo1} className=" w-8 h-8 md:w-16 md:h-16 rounded-full" alt="" />
            <div>
              <h1 className=" md:text-2xl font-bold text-[#444] dark:text-white">
                Mahmudul Hasan Shafi
              </h1>
              <h1 className="text-sm md:text-xl font-semibold text-[#737373]">
                Businessman
              </h1>
            </div>
            <div className=" mx-auto hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z"
                  fill="#FF3811"
                  fillOpacity="0.2"
                />
                <path
                  d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z"
                  fill="#FF3811"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          <p className="text-[#737373] text-xs md:text-base font-normal my-5 dark:text-white">
          Impressive platform! Found valuable educational events effortlessly. User-friendly interface and prompt support made navigating through options a breeze. With eduEvents, I not only discovered enriching learning opportunities but also enjoyed a smooth, hassle-free experience. A must for educators and learners alike!
          </p>
          <div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Review;