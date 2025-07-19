import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useServices } from '../hooks/useServices';
import InteractiveServiceGrid from '../components/UI/InteractiveServiceGrid';

const Services: React.FC = () => {
  const { services, loading } = useServices();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black mx-auto mb-4"></div>
          <p className="font-roboto text-dark-gray">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-light-gray via-white to-light-gray relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, black 2px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-6xl md:text-7xl font-bold text-black mb-8"
          >
            Complete Digital
            <br />
            <span className="bg-gradient-to-r from-black via-dark-gray to-black bg-clip-text text-transparent">
              Solutions Suite
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed"
          >
            From SEO domination to custom software development, B2B lead generation to e-commerce optimization—
            we deliver end-to-end solutions that transform businesses and drive exponential growth.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: '10+', label: 'Service Categories' },
              { number: '40+', label: 'Specialized Solutions' },
              { number: '500+', label: 'Projects Delivered' },
              { number: '98%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="font-poppins text-3xl md:text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="font-roboto text-dark-gray text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 px-4 sm:px-6 lg:px-8"
          >
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-black mb-6">
              Interactive Service Explorer
            </h2>
            <p className="font-roboto text-lg text-dark-gray max-w-2xl mx-auto">
              Hover over each service to discover our comprehensive solutions and see how we can transform your business.
            </p>
          </motion.div>

          <InteractiveServiceGrid services={services} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-black via-dark-gray to-black relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, white 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, white 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, white 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, white 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, white 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-5xl md:text-6xl font-bold text-white mb-8"
          >
            Let's Build Something
            <br />
            Extraordinary Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-xl text-light-gray mb-12 max-w-2xl mx-auto"
          >
            Every great success story starts with a conversation. Let's discuss your vision and create a custom strategy that delivers exceptional results.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white text-black px-12 py-5 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:bg-light-gray hover:scale-105 hover:shadow-2xl"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-12 py-5 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:bg-white hover:text-black"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;