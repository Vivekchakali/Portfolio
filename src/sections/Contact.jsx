import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import SectionHeading from '../components/ui/SectionHeading';

const contactInfo = [
  { icon: <FaEnvelope className="text-accentCyan" size={20} />, label: 'Email', value: 'vivekchakali16@gmail.com', link: 'mailto:vivekchakali16@gmail.com' },
  { icon: <FaPhone className="text-accentPurple" size={20} />, label: 'Phone', value: '+91 9346251827', link: 'tel:+919346251827' },
  { icon: <FaMapMarkerAlt className="text-green-400" size={20} />, label: 'Location', value: 'Patancheru,Sangareddy,Telangana,India', link: null },
];

const socialLinks = [
  { icon: <FaGithub size={22} />, href: 'https://github.com/VivekChakali', label: 'GitHub' },
  { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/vivek-chakali/', label: 'LinkedIn' },
  { icon: <SiLeetcode size={22} />, href: 'https://leetcode.com/u/Vivek_chakali88/', label: 'LeetCode' },
  { icon: <SiHackerrank size={22} />, href: 'https://www.hackerrank.com/profile/24211A0588', label: 'HackerRank' },
];

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY' }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accentPurple/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have an opportunity or just want to say hi? My inbox is always open!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Let's Talk!</h3>
              <p className="text-textSecondary leading-7 mb-8">
                Whether you have a project in mind, a job opportunity, or just want to connect —
                I'm always happy to chat. Reach out and I'll respond as soon as possible.
              </p>

              <div className="space-y-5">
                {contactInfo.map(({ icon, label, value, link }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="glass p-3 rounded-xl border border-white/10">{icon}</div>
                    <div>
                      <p className="text-textSecondary text-xs uppercase tracking-wider">{label}</p>
                      {link ? (
                        <a href={link} className="text-white font-medium hover:text-accentCyan transition-colors">{value}</a>
                      ) : (
                        <p className="text-white font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 mt-8 pt-6">
                <p className="text-textSecondary text-sm mb-4">Find me on</p>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="glass p-3 rounded-xl border border-white/10 text-textSecondary hover:text-accentCyan hover:border-accentCyan/30 transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary/50 focus:outline-none focus:border-accentCyan/50 focus:ring-1 focus:ring-accentCyan/30 transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary/50 focus:outline-none focus:border-accentCyan/50 focus:ring-1 focus:ring-accentCyan/30 transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Vivek, I'd love to connect about..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textSecondary/50 focus:outline-none focus:border-accentCyan/50 focus:ring-1 focus:ring-accentCyan/30 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accentPurple to-accentCyan text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accentPurple/25"
              >
                <FaPaperPlane size={16} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center">
                  ❌ Something went wrong. Please try emailing me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
