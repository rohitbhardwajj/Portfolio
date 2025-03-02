import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { services, stats } from '../constants';
import { FiCode, FiSmartphone, FiServer, FiPenTool } from 'react-icons/fi';

const ServiceCard = ({ index, title, icon, description }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'web':
        return <FiCode className="w-16 h-16 text-white" />;
      case 'mobile':
        return <FiSmartphone className="w-16 h-16 text-white" />;
      case 'backend':
        return <FiServer className="w-16 h-16 text-white" />;
      case 'creator':
        return <FiPenTool className="w-16 h-16 text-white" />;
      default:
        return <FiCode className="w-16 h-16 text-white" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="glass xs:w-[250px] w-full p-6 rounded-2xl"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-20 h-20 rounded-full bg-gradient-to-r from-electric-cyan to-neon-purple flex justify-center items-center mb-5"
      >
        {getIcon(icon)}
      </motion.div>

      <h3 className="text-white text-[20px] font-bold">{title}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </motion.div>
  );
};

const StatCard = ({ title, value, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="text-5xl font-bold text-white"
      >
        {inView ? (
          <CountUp end={value} duration={2} />
        ) : (
          <span>0</span>
        )}
        {title === "Years Experience" && "+"}
      </motion.h2>
      <p className="mt-2 text-secondary text-center">{title}</p>
    </motion.div>
  );
};

// Simple CountUp component
const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <>{count}</>;
};

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="relative w-full min-h-screen mx-auto py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-electric-cyan text-lg font-medium mb-2">INTRODUCTION</p>
          <h2 className="text-white text-4xl sm:text-5xl font-bold">Hey, I’m Rohit!</h2>
        </motion.div>

        {/* Image and Introduction Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <img
              src="./public/me.jpg" // Replace with the path to your image
              alt="Rohit Bhardwaj"
              className="rounded-2xl w-full max-w-md h-auto object-cover shadow-lg"
            />
          </motion.div>

          {/* Introduction Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-2/3"
          >
            <p className="mt-4 text-secondary text-lg max-w-3xl mx-auto">
              I’m currently pursuing my BCA from DAV Centenary College, and over time, I’ve developed a strong passion for technology. I’ve explored multiple domains, including Frontend, Backend, DBMS, DSA, and even DevOps. The process of building, optimizing, and automating systems excites me, and I’m always eager to dive deeper into new technologies. <br />  My ultimate goal is to become a DevOps Engineer, ensuring smooth workflows between development and operations through automation and efficiency. While I might not have industry experience yet, my projects speak for themselves—showcasing my technical expertise, problem-solving skills, and ability to adapt to challenges. I stay updated with the latest trends in Cloud Computing, CI/CD Pipelines, Containerization, and Infrastructure Automation to sharpen my skills further. <br />  I love learning, experimenting with new technologies, and collaborating with like-minded individuals. Whether it’s solving complex problems or bringing innovative ideas to life, I give my 100% to everything I do. One thing’s for sure—wherever I go, I’ll make an impact! 💥
            </p>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={index} index={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;