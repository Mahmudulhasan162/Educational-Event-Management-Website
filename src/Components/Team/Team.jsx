const Team = () => {
    return (
        <div className="p-16 text-center">
            <h1 className="text-4xl font-bold">Our <span className="text-[#075E54]">Team</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-4 my-10 space-x-10">
                <div>
                <img className="relative inline-block h-[100px] lg:h-[200px] w-[100px] lg:w-[200px] rounded-full border-4 border-[#075E54] object-cover object-center" src="https://i.ibb.co/ggqWRmN/ezgif-com-gif-maker.jpg" alt="" />
                <h2 className="text-2xl my-3 font-semibold">Allen Garfield</h2>
                <h2 className="text-sm  font-semibold text-slate-600">MANAGER</h2>
                </div>
                <div>
                <img className="relative inline-block h-[100px] lg:h-[200px] w-[100px] lg:w-[200px] rounded-full border-4 border-[#075E54] object-cover object-center" src="https://i.ibb.co/dJsTwVh/ezgif-com-gif-maker-1.jpg" alt="" />
                <h2 className="text-2xl my-3 font-semibold">Martha Nielsen</h2>
                <h2 className="text-sm font-semibold text-slate-600">AGENCY FOUNDER</h2>
                </div>
                <div>
                <img className="relative inline-block h-[100px] lg:h-[200px] w-[100px] lg:w-[200px] rounded-full border-4 border-[#075E54] object-cover object-center" src="https://i.ibb.co/3TknGPF/p2.jpg" alt="" />
                <h2 className="text-2xl my-3 font-semibold">Gina Stiebitz</h2>
                <h2 className="text-sm  font-semibold text-slate-600">COORDINATOR</h2>
                </div>
                <div>
                <img className="relative inline-block h-[100px] lg:h-[200px] w-[100px] lg:w-[200px] rounded-full border-4 border-[#075E54] object-cover object-center" src="https://i.ibb.co/ygw72Yt/p3.jpg" alt="" />
                <h2 className="text-2xl my-3 font-semibold">Louis Hoffman</h2>
                <h2 className="text-sm font-semibold text-slate-600">CREATIVE DIRECTOR</h2>
                </div>
            </div>

        </div>
    );
};

export default Team;