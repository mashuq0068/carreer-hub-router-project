
import bannerImage from './user.png'
const Banner = () => {
    return (
        <div className='flex justify-around items-center lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto'>
           <div className="space-y-5 ">
            <h1 className="font-extrabold text-5xl ">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] bg-clip-text text-transparent to-[#9873FF]">Dream Job</span></h1>
            <p className="text-[#757575]">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
            <button className="btn hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-900 text-white font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
            
            </div> 
            <div className='w-[90%] lg:w-[55%] '>
<img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;