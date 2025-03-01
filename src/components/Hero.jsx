import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
      <ParticlesBackground />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-16 z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white font-black text-5xl sm:text-7xl text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-cyan to-gradient-pink">
                  Hello, I'm
                </span>
              </h1>
              
              <div className="mt-2 text-4xl sm:text-6xl font-bold text-white text-center">
                <TypeAnimation
                  sequence={[
                    'Rohit Bhardwaj',
                    1000,
                    'a Web Developer',
                    1000,
                    'a Devops engineer',
                    1000,
                    'a Problem Solver',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-secondary text-center mt-6 text-lg max-w-3xl"
            >
             I build modern, responsive websites using the latest technologies. I specialize in creating visually stunning and user-friendly digital experiences that are fast, efficient, and problem-solving. My goal is to blend creativity with functionality to deliver impactful web solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex flex-wrap justify-center gap-5"
            >
              <Link to="projects" smooth={true} duration={500}>
                <motion.button
                  className="animated-btn bg-gradient-to-r from-electric-cyan to-neon-purple text-white font-bold py-3 px-8 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              
              <Link to="contact" smooth={true} duration={500}>
                <motion.button
                  className="animated-btn bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-10 h-10 rounded-full border-4 border-secondary flex items-center justify-center"
          >
            <FiChevronDown className="w-6 h-6 text-secondary" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;