import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`${
        scrolled ? 'bg-primary/80 backdrop-blur-md' : 'bg-transparent'
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ease-in-out`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Link to='home' className='flex items-center gap-2 cursor-pointer'>
          <motion.p 
            className='text-white text-[18px] font-bold cursor-pointer flex'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rohit Bhardwaj &nbsp;
            <span className='hidden sm:block'>| Developer</span>
          </motion.p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <Link 
                to={nav.id} 
                smooth={true} 
                duration={500} 
                spy={true}
                activeClass="active"
                offset={-70}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-4'>
          <motion.button
            onClick={toggleDarkMode}
            className='w-10 h-10 rounded-full flex items-center justify-center bg-tertiary/30 text-white'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <div
              className='w-[28px] h-[28px] object-contain cursor-pointer z-20'
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <FiX size={28} color="white" /> : <FiMenu size={28} color="white" />}
            </div>

            <motion.div
              className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95, y: toggle ? 0 : -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? 'text-white' : 'text-secondary'
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <Link 
                      to={nav.id} 
                      smooth={true} 
                      duration={500} 
                      spy={true}
                      activeClass="active"
                      offset={-70}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;