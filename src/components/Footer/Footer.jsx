

const Footer = () => {
    return (
        <footer className="bg-neutral pb-12  text-[#FFFFFFB2] mt-32">
            <div className="footer p-10 bg-neutral text-neutral-content w-max mx-auto space-x-24 justify-between">
            <div>
                <h3 className="font-bold text-xl text-White">CareerHub</h3>
                <p>There are many variations of passages <br />of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
            </div>
            <nav>
    <header className="font-bold text-xl text-white">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="font-bold text-xl text-white">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="font-bold text-xl text-White">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="font-bold text-xl text-white">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div> <hr className="w-[80%] bg-[#FFFFFFB2]  mx-auto" />
  {/* under footer */}
  <div className="mt-5 footer px-10 pt-3 pb-10 bg-neutral text-neutral-content justify-around">
    <p>@2023 CareerHub. All Rights Reserved</p>
    <p>Powered by CareerHub</p>
  </div>
</footer>
    );
};

export default Footer;