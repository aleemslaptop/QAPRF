import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin as LinkedIn, Instagram, Mail, Zap, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && gdprConsent) {
      // Handle newsletter signup
      console.log('Newsletter signup:', { email, gdprConsent });
      setEmail('');
      setGdprConsent(false);
      alert('Thank you for subscribing!');
    }
  };

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'SEO', href: '/services/seo' },
    { name: 'PPC Advertising', href: '/services/ppc-advertising' },
    { name: 'Content Marketing', href: '/services/content-marketing' },
    { name: 'Social Media', href: '/services/social-media-management' },
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Resources', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: LinkedIn, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <>
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-dark-gray transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-light-gray hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-light-gray hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-light-gray hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Social</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-light-gray hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-dark-gray text-white rounded-l-lg border border-dark-gray focus:outline-none focus:border-white"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black rounded-r-lg hover:bg-light-gray transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              <label className="flex items-start space-x-2 text-xs">
                <input
                  type="checkbox"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="mt-1"
                  required
                />
                <span className="text-light-gray">
                  I consent to receive marketing emails and agree to the privacy policy.
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="border-t border-dark-gray mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="font-poppins font-semibold">Digital Marketing Agency</span>
          </div>
          <p className="text-light-gray text-sm">
            © {new Date().getFullYear()} Digital Marketing Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;