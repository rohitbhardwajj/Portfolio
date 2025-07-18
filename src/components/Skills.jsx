import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../constants';

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
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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

        <SkillTabs />
      </div>
    </section>
  );
};

export default Skills;
