import { Twitter, Instagram, Facebook, Linkedin, ArrowRight } from "react-feather";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
        <div className='max-w-80'>
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-500"
          >
            <FaCode className="text-blue-500" />
            TechPulse
          </NavLink>
          <p className='text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <div className='flex items-center gap-3 mt-4 cursor-pointer '>
            <Instagram className="w-6 h-6 hover:text-blue-800 transition duration-300" viewBox="0 0 24 24" />
            <Facebook className="w-6 h-6 hover:text-blue-800 transition duration-300" viewBox="0 0 24 24" />
            <Twitter className="w-6 h-6 hover:text-blue-800 transition duration-300" viewBox="0 0 24 24" />
            <Linkedin className="w-6 h-6 hover:text-blue-800 transition duration-300" viewBox="0 0 24 24" />
          </div>
        </div>

        <div>
          <p className='text-lg text-blue-800 uppercase'>Company</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#">About</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        <div>
          <p className='text-lg text-blue-800 uppercase'>Support</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Options</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div className='max-w-80'>
          <p className='text-lg text-blue-800 uppercase'>Stay Updated</p>
          <p className='mt-3 text-sm'>
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className='flex items-center mt-4'>
            <input type="text" className='bg-transparent rounded-l border border-blue-800 h-9 px-3 outline-none' placeholder='Your email' />
            <a href="/news">
              <button className='flex items-center justify-center bg-blue-800 h-9 w-9 aspect-square rounded-r'>
                <ArrowRight className="w-4 h-4 text-white cursor-pointer" width="24" height="24" viewBox="0 0 24 24" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr className='border-gray-300 mt-8' />
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} <a href="#">TechPulse</a>. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
