const Team = () => {
    return (
        <div className=" p-3 md:p-16 text-center mx-auto max-w-[1100px]">
            <h1 className="text-4xl font-bold dark:text-white">Our <span className="text-[#075E54]">Team</span></h1>
            <div className="grid items-center grid-cols-2 md:grid-cols-4 my-10 space-x-2 md:space-x-10 space-y-3">
                <div>
                <img className="relative inline-block lg:h-[200px] lg:w-[200px] rounded-full border-4 border-[#075E54] object-cover object-center" src="https://i.ibb.co/NFWsL86/photo-1506794778202-cad84cf45f1d.jpg" alt="" />
                <h2 className=" text-sm md:text-2xl md:my-3 font-bold dark:text-white">Allen Garfield</h2>
                <h2 className="text-xs md:text-sm  font-semibold text-slate-600 dark:text-white">MANAGER</h2>
                </div>
                <div>
                <img className="relative inline-block lg:h-[200px] lg:w-[200px] rounded-full border-4 border-[#075E54] object-cover object-center" src="https://i.ibb.co/1dz7pwd/photo-1534528741775-53994a69daeb.jpg" alt="" />
                <h2 className="text-sm md:text-2xl md:my-3 font-bold dark:text-white">Martha Nielsen</h2>
                <h2 className="text-xs md:text-sm  font-semibold text-slate-600 dark:text-white">AGENCY FOUNDER</h2>
                </div>
                <div>
                <img className="relative inline-block  lg:h-[200px] lg:w-[200px] rounded-full border-4 border-[#075E54] object-cover object-center" src="https://i.ibb.co/Qf4wvBk/photo-1567532939604-b6b5b0db2604.jpg" alt="" />
                <h2 className="text-sm md:text-2xl md:my-3 font-bold dark:text-white">Gina Stiebitz</h2>
                <h2 className="text-xs md:text-sm  font-semibold text-slate-600 dark:text-white">COORDINATOR</h2>
                </div>
                <div>
                <img className="relative inline-block  lg:h-[200px]  lg:w-[200px] rounded-full border-4 border-[#075E54] object-cover object-center" src="https://i.ibb.co/fnZSpsm/photo-1507003211169-0a1dd7228f2d.jpg" alt="" />
                <h2 className="text-sm md:text-2xl md:my-3 font-bold dark:text-white">Louis Hoffman</h2>
                <h2 className="text-xs md:text-sm  font-semibold text-slate-600 dark:text-white">CREATIVE DIRECTOR</h2>
                </div>
            </div>

        </div>
    );
};

export default Team;