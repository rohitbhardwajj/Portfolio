import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../constants';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link, category, setSelectedProject }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const imageUrl = image || `https://picsum.photos/600/400?random=${index}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.05,
          speed: 450,
        }}
        className="project-card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]" onClick={() => setSelectedProject({ name, description, tags, image: imageUrl, source_code_link, live_demo_link })}>
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-2xl cursor-pointer"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x400"; // Fallback image
            }}
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-2">
            {/* GitHub Button */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FiGithub className="w-1/2 h-1/2 text-white" />
            </div>

            {/* Live Demo Button */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(live_demo_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FiExternalLink className="w-1/2 h-1/2 text-white" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-tertiary rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">{project.name}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-electric-cyan transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        <img
          src={project.image}
          alt={project.name}
          className="w-full h-[300px] object-cover rounded-xl mb-4"
        />

        <p className="text-secondary mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-3 py-1 rounded-full text-sm ${tag.color} bg-black/20`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-electric-cyan to-neon-purple text-white px-4 py-2 rounded-lg"
          >
            <FiGithub /> View Code
          </a>
          <a
            href={project.live_demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = ['All', 'Web Dev', 'UI/UX', 'JavaScript'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="relative w-full min-h-screen mx-auto py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-electric-cyan text-lg font-medium mb-2">MY WORK</p>
          <h2 className="text-white text-4xl sm:text-5xl font-bold">Projects.</h2>
          <p className="mt-4 text-secondary text-lg max-w-3xl mx-auto">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-electric-cyan to-neon-purple text-white'
                  : 'bg-tertiary text-secondary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;