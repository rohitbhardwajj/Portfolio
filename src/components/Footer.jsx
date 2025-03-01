import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative w-full py-10 bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-white text-2xl font-bold">Rohit Bhardwaj</h2>
            <p className="text-secondary mt-1">Web Developer & Devops Engineer</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/rohitbhardwajj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white hover:text-electric-cyan transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rohit-bhardwaj-a00ab930b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white hover:text-electric-cyan transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin />
            </motion.a>
         
            <motion.a
              href="http://instagram.com/btwits__rohittt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white hover:text-electric-cyan transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiInstagram />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-secondary text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Rohit. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-secondary hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-secondary hover:text-white transition-colors text-sm">
              Cookies Settings
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;