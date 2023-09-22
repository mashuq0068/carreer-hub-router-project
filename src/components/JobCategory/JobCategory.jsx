import { useEffect, useState } from "react";
import EachJobCategory from "./EachJobCategory";


const JobCategory = () => {
    const [jobs , setJobs] = useState([]);
   
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    } ,[])
    
    console.log(jobs)
    return (
        <section className="text-center space-y-7 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="space-y-5">
            <h2 className="text-4xl font-bold">Job Category List</h2>
            <p className="text-[#757575] text-sm">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-5">
       {jobs.map(job => <EachJobCategory  key = {job.id} job = {job}></EachJobCategory> )}
            </div>
        </section>
    );
};

export default JobCategory;