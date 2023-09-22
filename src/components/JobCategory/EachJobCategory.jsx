

import PropTypes from 'prop-types';


const EachJobCategory = ({ job }) => {
    const { logo, category_name, availability } = job;
    return (
        <div className="p-12 drop-shadow-xl text-left border-2 border-[#7E90FE] rounded-md">
            <img className="mb-7" src={logo} alt="" />
            <h4 className="text-2xl mb-2 font-extrabold">{category_name}</h4>
            <p className="text-sm text-[#757575]">{availability}</p>
        </div>
    );
};

EachJobCategory.propTypes = {
    job: PropTypes.shape({
        logo: PropTypes.string.isRequired, 
        category_name: PropTypes.string.isRequired, 
        availability: PropTypes.string.isRequired, 
    }).isRequired,
};

export default EachJobCategory;
