const Banner = () => {
    return (
        <div className=" my-4 md:my-10 max-w-[1100px] md:mx-auto mx-2">
            <div className="carousel w-full">
  <div id="slide1" className=" md:h-[400px] carousel-item relative w-full text-center"  style={{backgroundImage: `linear-gradient(rgba(0, 0,0, 0.7), rgba(18, 140, 126, 0.7)),url('https://i.ibb.co/mbS8db5/Education.jpg')`,backgroundSize: 'cover', backgroundPosition: 'center',}}>
    <div style={{opacity: '100%'}} className="flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl md:text-5xl font-bold mb-20 md:mb-10 text-white"> Skills For Tomorrow :</p>

            <p className=" md:text-4xl font-semibold text-white text-center">Join Webinars, Career Fair, Training Programs</p>
            </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle ">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full" style={{backgroundImage: `linear-gradient(rgba(0, 0,0, 0.7), rgba(18, 140, 126, 0.7)),url('https://i.ibb.co/XLkG32K/trainingr.jpg')`,backgroundSize: 'cover', backgroundPosition: 'center',}}>
  <div style={{opacity: '100%'}} className="flex flex-col justify-center items-center mx-auto">
            <p className="text-xl md:text-5xl font-bold mb-20 md:mb-10 text-white">Educational Excellence :
            </p> 
            <p className="md:text-4xl font-semibold text-white text-center">Immense Yourself in Insightful Conferences </p>
            </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide3" className="carousel-item relative w-full" style={{backgroundImage: `linear-gradient(rgba(0, 0,0, 0.7), rgba(18, 140, 126, 0.7)),url('https://i.ibb.co/kDSfDch/995x664-17-1188-CAREER-003.png')`,backgroundSize: 'cover', backgroundPosition: 'center',}}>
    <div style={{opacity: '100%'}} className="flex flex-col justify-center items-center mx-auto">
            <p className="text-xl md:text-5xl font-bold mb-20 md:mb-10 text-white">Unlock Your Career Potential :
            </p> 
            <p className="md:text-4xl font-semibold text-white text-center">Navigate Our Dynamic Career Fairs</p>
            </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide4" className="carousel-item relative w-full" style={{backgroundImage: `linear-gradient(rgba(0, 0,0, 0.7), rgba(18, 140, 126, 0.7)),url('https://i.ibb.co/nr6cbMk/20221108-Career-Fair-01-1.jpg')`,backgroundSize: 'cover', backgroundPosition: 'center',}}>
  <div style={{opacity: '100%'}} className="flex flex-col justify-center items-center mx-auto">
            <p className="text-xl md:text-5xl font-bold mb-20 md:mb-10 text-white">Career Fair Brilliance : <br />
            </p>
            <p className="md:text-4xl font-semibold text-white text-center">Forge Connections for Future Success</p>
            </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;