import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaCode, FaSun, FaMoon } from 'react-icons/fa';
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
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  // Toggle dark mode class on <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          <FaCode className="text-blue-500" />
          TechPulse
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
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
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-200'
                  } hover:text-blue-500 dark:hover:text-blue-300 transition duration-300`
                }
              >
                {({ isActive }) => (
                  <>
                    {name}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle */}
          <button onClick={() => setIsDark(!isDark)} className="cursor-pointer text-blue-600">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="cursor-pointer text-blue-600 text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="hidden md:block cursor-pointer text-blue-600 dark:text-blue-400"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 overflow-hidden"
          >
            <ul className="flex flex-col items-start gap-4 px-6 py-4">
              {navItems.map(({ name, path }) => (
                <li key={name} className="w-full">
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block w-full py-1 text-sm font-medium ${
                        isActive
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-200'
                      } hover:text-blue-500 dark:hover:text-blue-300 transition`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
