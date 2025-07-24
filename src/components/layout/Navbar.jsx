import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Community', path: '/community' },
  { name: 'Tools', path: '/tools' },
  { name: 'News', path: '/news' },
  { name: 'Profile', path: '/profile' },
  { name: 'About', path: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-400"
        >
          <FaCode className="text-blue-400" />
          TechPulse
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {navItems.map(({ name, path }) => (
              <motion.li
                key={name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-sm font-medium ${
                      isActive ? 'text-blue-400' : 'text-gray-300'
                    } hover:text-blue-300 transition duration-300`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {name}
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300 cursor-pointer">
            Sign In
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-400 text-xl focus:outline-none cursor-pointer"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block w-full py-1 text-sm font-medium ${
                        isActive ? 'text-blue-400' : 'text-gray-300'
                      } hover:text-blue-300 transition`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
              <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300 cursor-pointer">
                Sign In
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
