import PropTypes from 'prop-types';
import imageLocation from './location2.png'
import imageSalary from './money.png'
import { NavLink } from 'react-router-dom';
const FeaturedJob = ({ featuredJob }) => {
    const { id , logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = featuredJob;
    return (
        <div className='space-y-5 drop-shadow-xl shadow-xl p-8'>
            <img src={logo} alt="" />
            <h4 className="font-bold text-xl">{job_title}</h4>
            <p className='text-[#757575]'>{company_name}</p>
            <button className="px-3 py-2 text-[#9873FF] rounded-md  border-2 border-[#9873FF]   font-semibold hover:text-clip  hover:bg-[#9873FF] hover:text-white  bg-white ">{remote_or_onsite}</button>
            <button className="ml-7 px-3 border-2 text-[#9873FF] rounded-md  border-[#9873FF] hover:bg-[#9873FF] hover:text-white font-semibold py-2      bg-white ">{job_type}</button>
            <div className='flex gap-5 text-[#75757]'>
                <div className='flex gap-2'>
                    <img className=' ' src={imageLocation} alt="" />
                    <p>{location}</p>
                </div>
                <div className='flex gap-2'>
                    <img src={imageSalary} alt="" />
                    <p>{salary}</p>
                </div>
            </div>
          <NavLink to={`/details/${id}`} className='btn text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-900 font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>View Details 
          </NavLink>
        </div>
    );

};
FeaturedJob.propTypes = {
    featuredJob: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        job_title: PropTypes.string.isRequired,
        company_name: PropTypes.string.isRequired,
        remote_or_onsite: PropTypes.string.isRequired,
        job_type: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
    }).isRequired,
};

export default FeaturedJob;