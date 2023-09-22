import { NavLink } from "react-router-dom";


const Navbar = () => {
  const allLink =
    <>
      <div className="space-x-16 space-y-5">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/appliedJobs'}>Applied Jobs</NavLink>
        <NavLink to={'/blogs'}>Blog</NavLink>
      </div>


    </>
  return (
    <nav>
      <div className="navbar bg-base-100 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {allLink}
            </ul>
          </div>
          <a className=" normal-case xl:text-2xl 2xl:text-3xl font-extrabold">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 xl:text-base 2xl:text-xl font-semibold">
            {allLink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-900 from-[#7E90FE] to-[#9873FF] xl:text-sm 2xl:text-lg text-white font-extrabold ">Star Applying</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;