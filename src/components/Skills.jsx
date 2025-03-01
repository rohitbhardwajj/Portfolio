import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, skillCategories } from '../constants';

const SkillBar = ({ name, percentage, index, inView }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-secondary">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-tertiary rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="skill-bar h-2.5 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

const CircularProgress = ({ percentage, name, index, inView }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="circular-progress flex flex-col items-center mb-8"
    >
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          className="bg"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="8"
          stroke="rgba(200, 200, 200, 0.2)"
        />
        <motion.circle
          className="progress"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="8"
          stroke="url(#gradient)"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.5, delay: index * 0.2 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00bcd4" />
            <stop offset="100%" stopColor="#9c27b0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text absolute text-white">{percentage}%</div>
      <p className="mt-4 text-white text-center">{name}</p>
    </motion.div>
  );
};

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="mt-16">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {skillCategories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === index
                ? 'bg-gradient-to-r from-electric-cyan to-neon-purple text-white'
                : 'bg-tertiary text-secondary'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.title}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="glass p-6 rounded-xl"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-2 bg-tertiary/50 p-3 rounded-lg"
            >
              <div className="w-2 h-2 rounded-full bg-electric-cyan"></div>
              <span className="text-white">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const [displayType, setDisplayType] = useState('bars');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="relative w-full min-h-screen mx-auto py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-electric-cyan text-lg font-medium mb-2">MY EXPERTISE</p>
          <h2 className="text-white text-4xl sm:text-5xl font-bold">Skills.</h2>
          <p className="mt-4 text-secondary text-lg max-w-3xl mx-auto">
            I've worked with a range of technologies in the web development world.
            From front-end design to back-end systems, I've developed expertise in
            creating responsive and efficient applications.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            onClick={() => setDisplayType('bars')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              displayType === 'bars'
                ? 'bg-gradient-to-r from-electric-cyan to-neon-purple text-white'
                : 'bg-tertiary text-secondary'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skill Bars
          </motion.button>
         
          <motion.button
            onClick={() => setDisplayType('categories')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              displayType === 'categories'
                ? 'bg-gradient-to-r from-electric-cyan to-neon-purple text-white'
                : 'bg-tertiary text-secondary'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Categories
          </motion.button>
        </div>

        <div ref={skillsRef} className="mt-12">
          {displayType === 'bars' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.slice(0, 8).map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  index={index}
                  inView={skillsInView}
                />
              ))}
            </div>
          )}

       

          {displayType === 'categories' && <SkillTabs />}
        </div>
      </div>
    </section>
  );
};

export default Skills;