import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";


const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [jobLength, setJobLength] = useState(2)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))

    }, [])
    const handleFullJobs = () =>{
        setJobLength(featuredJobs.length)
    }

    return (
        <section className="space-y-12 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto"> 
            <div className="text-center space-y-7">
                <h3 className="text-4xl font-bold">Featured Jobs</h3>
                <p className="text-[#757575] text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 xl:gap-8 2xl:gap-20 duration-7000 ">
                {featuredJobs.slice(0 , jobLength).map(featuredJob => <FeaturedJob featuredJob={featuredJob} key={featuredJob.id} ></FeaturedJob>)}
            </div>
            <div className="text-center">
            <button onClick={handleFullJobs} className="btn duration-7000  hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-900  text-white font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Show All</button>
            </div>
        </section>
    );
};

export default FeaturedJobs;