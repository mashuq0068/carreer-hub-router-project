import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";


const Home = () => {
    return (
        <div className="space-y-[130px]">
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;