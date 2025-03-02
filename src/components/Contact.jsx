import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Simulate email sending (replace with actual EmailJS implementation)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, 2000);

    // Uncomment to use EmailJS
    /*
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          to_name: 'John Doe',
          from_email: form.email,
          to_email: 'contact@johndoe.com',
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
    */
  };

  return (
    <section id="contact" className="relative w-full py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-electric-cyan text-lg font-medium mb-2">GET IN TOUCH</p>
        <h2 className="text-white text-4xl sm:text-5xl font-bold">Contact.</h2>
        <p className="mt-4 text-secondary text-lg max-w-3xl mx-auto">
          Feel free to reach out to me for any questions or opportunities. I'm always open
          to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-white text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                <FiMail className="text-electric-cyan text-xl" />
              </div>
              <div>
                <p className="text-secondary text-sm">Email</p>
                <p className="text-white">rohitbhardwaj121001@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                <FiPhone className="text-electric-cyan text-xl" />
              </div>
              <div>
                <p className="text-secondary text-sm">Phone</p>
                <p className="text-white">+91 7290080590</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                <FiMapPin className="text-electric-cyan text-xl" />
              </div>
              <div>
                <p className="text-secondary text-sm">Location</p>
                <p className="text-white">Faridabad</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h4 className="text-white text-lg font-medium mb-4">Connect with me</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/rohitbhardwajj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white hover:text-electric-cyan transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rohit-bhardwaj-a00ab930b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white hover:text-electric-cyan transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="input-field">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="text-white"
              />
              <label>Your Name</label>
            </div>
            
            <div className="input-field">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="text-white"
              />
              <label>Your Email</label>
            </div>
            
            <div className="input-field">
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="text-white"
              ></textarea>
              <label>Your Message</label>
            </div>
            
            <motion.button
              type="submit"
              className="animated-btn w-full py-3 px-8 rounded-xl bg-gradient-to-r from-electric-cyan to-neon-purple text-white font-bold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-500 text-center"
              >
                Your message has been sent successfully!
              </motion.div>
            )}
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-center"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Contact;