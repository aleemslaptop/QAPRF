import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../types';

const FAQs: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFaqs = async () => {
      try {
        const response = await fetch('/src/data/faqs.json');
        const data = await response.json();
        setFaqs(data);
        setFilteredFaqs(data);
      } catch (error) {
        console.error('Error loading FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFaqs();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === '') {
        setFilteredFaqs(faqs);
      } else {
        const filtered = faqs.filter(
          faq =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFaqs(filtered);
      }
      setOpenIndex(null); // Close all panels when searching
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, faqs]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-5xl font-bold text-black mb-8"
          >
            Frequently Asked Questions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-lg text-dark-gray leading-relaxed mb-8"
          >
            Find answers to common questions about our digital marketing services, 
            processes, and how we can help grow your business.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-gray" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-light-gray rounded-lg font-roboto text-dark-gray focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="font-roboto text-lg text-dark-gray">
                No FAQs found matching your search term.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="border border-light-gray rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left bg-light-gray hover:bg-gray-200 transition-colors duration-200 flex items-center justify-between group"
                  >
                    <h3 className="font-poppins text-lg font-semibold text-black pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-dark-gray group-hover:text-black transition-colors duration-200" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-dark-gray group-hover:text-black transition-colors duration-200" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-white">
                          <p className="font-roboto text-dark-gray leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16 p-8 bg-light-gray rounded-lg"
          >
            <h2 className="font-poppins text-2xl font-bold text-black mb-4">
              Still Have Questions?
            </h2>
            <p className="font-roboto text-dark-gray mb-6">
              Can't find what you're looking for? Our team is here to help with any questions 
              about our services or how we can support your marketing goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-dark-gray hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;