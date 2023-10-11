const Servicecate = ({category}) => {
    const {image, category_name, time, audience_capacity, price_start_from} = category || {}
    const backgroundImage = {
        backgroundImage: `url(${image})`
    }
    return (
        <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={backgroundImage}>
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
     {category_name}
    </h2>
    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
      Price Start From : ${price_start_from}
    </h5>
    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
      Audience Capacity : {audience_capacity}
    </h5>
    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
      Event Time : {time}
    </h5>
    
  </div>
  <button className="px-4 py-2 bg-[#075E54]">See All</button>
</div>
    );
};

export default Servicecate;