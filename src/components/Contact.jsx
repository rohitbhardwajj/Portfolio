import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin
} from 'react-icons/fi';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!form.email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    setLoading(true);

    // Replace with your actual EmailJS info
    emailjs
      .send(
        'service_apdrzmo',
        'template_dn38s8i',
        {
          from_name: form.name,
          to_name: 'Rohit Bhardwaj',
          from_email: form.email,
          to_email: 'rohitbhardwaj121001@gmail.com',
          message: form.message,
        },
        'NwgFs3Kfi6PXQrB8w'

      )
      .then(() => {
        setLoading(false);
        toast.success('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        toast.error('Something went wrong. Please try again.');
        console.error(error);
      });
  };

  const isFormValid = form.name && form.email && form.message;

  return (
    <section id="contact" className="relative w-full py-20 overflow-hidden">
      <ToastContainer />
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
            Feel free to reach out for any queries or opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
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

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="text-white text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/rohitbhardwajj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white hover:text-electric-cyan"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rohit-bhardwaj-a00ab930b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white hover:text-electric-cyan"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiLinkedin />
                </motion.a>
              </div>
            </div>

            {/* Google Map */}
            <iframe
              src="https://maps.google.com/maps?q=Faridabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              className="rounded-xl mt-6 border-none"
              allowFullScreen=""
              loading="lazy"
            />
          </motion.div>

          {/* Contact Form */}
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
                  className="text-white w-full p-3 bg-tertiary rounded-lg"
                  placeholder="Your Name"
                />
              </div>

              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="text-white w-full p-3 bg-tertiary rounded-lg"
                  placeholder="Your Email"
                />
              </div>

              <div className="input-field">
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="text-white w-full p-3 bg-tertiary rounded-lg"
                  placeholder="Your Message"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-8 rounded-xl bg-gradient-to-r from-electric-cyan to-neon-purple text-white font-bold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading || !isFormValid}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
