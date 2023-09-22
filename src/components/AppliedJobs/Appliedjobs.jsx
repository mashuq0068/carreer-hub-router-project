import FeaturedApliedJobs from '../FeaturedAppliedJobs/FeaturedApliedJobs';
import bgImage from './bg1.png'

const AppliedJobs = () => {
    return (
        <>
        <div className='mb-14'>
                <div className="h-[300px]  ">
                    <div className="flex justify-center relative top-[40%]  ">
                    <p className="text-4xl  font-extrabold">Applied Jobs</p>
                    </div>
                    <div>
                        <img src={bgImage}alt="" />
                    </div>
                </div>
        </div>
        <FeaturedApliedJobs></FeaturedApliedJobs>

        </>
    );
};

export default AppliedJobs;