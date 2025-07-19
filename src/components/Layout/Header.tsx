import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useServices } from '../../hooks/useServices';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const location = useLocation();
  const { services } = useServices();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const searchableItems = [
    ...navigation.map(item => ({ ...item, type: 'page' })),
    ...services.map(service => ({ 
      name: service.name, 
      href: `/services/${service.slug}`, 
      type: 'service' 
    }))
  ];

  const filteredResults = searchableItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleSearchFocus = () => {
    setShowSearchResults(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowSearchResults(false), 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-12 h-12 bg-black rounded-lg flex items-center justify-center"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-dark-gray ${
                    location.pathname === item.href
                      ? 'text-black border-b-2 border-black'
                      : isScrolled
                      ? 'text-dark-gray'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Search & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isScrolled ? 'text-dark-gray' : 'text-white'
                }`} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className={`pl-10 pr-4 py-2 w-48 rounded-lg text-sm transition-all duration-200 ${
                    isScrolled 
                      ? 'bg-light-gray text-black border border-gray-300 focus:border-black' 
                      : 'bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:border-white'
                  } focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20`}
                />
              </div>
              
              {/* Search Results */}
              <AnimatePresence>
                {showSearchResults && searchQuery && filteredResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                  >
                    {filteredResults.map((result, index) => (
                      <Link
                        key={index}
                        to={result.href}
                        className="block px-4 py-2 text-sm text-dark-gray hover:bg-light-gray transition-colors duration-200"
                        onClick={() => {
                          setSearchQuery('');
                          setShowSearchResults(false);
                        }}
                      >
                        <span className="font-medium">{result.name}</span>
                        <span className="ml-2 text-xs text-gray-500">
                          {result.type === 'service' ? 'Service' : 'Page'}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className="bg-white text-black px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-light-gray hover:scale-105 border-2 border-transparent hover:border-dark-gray"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-2xl font-poppins font-medium hover:text-light-gray transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200 hover:bg-light-gray"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;