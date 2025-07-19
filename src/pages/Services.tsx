import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useServices } from '../hooks/useServices';
import TiltCard from '../components/UI/TiltCard';

const Services: React.FC = () => {
  const { services, loading, error } = useServices();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-roboto text-red-600 mb-4">Error loading services: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-black text-white px-6 py-2 rounded hover:bg-dark-gray transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-5xl md:text-6xl font-bold text-black mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-lg text-dark-gray max-w-3xl mx-auto"
          >
            Comprehensive digital marketing solutions designed to accelerate your business growth 
            and maximize your online presence across all channels.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(service.slug)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <TiltCard className="h-full">
                  <div className="relative h-80 bg-black rounded-lg overflow-hidden group cursor-pointer">
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black via-dark-gray to-black"
                      animate={{
                        background: hoveredService === service.slug 
                          ? 'linear-gradient(135deg, #000000 0%, #333333 50%, #000000 100%)'
                          : 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20"
                      animate={{
                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      <div>
                        <motion.h3
                          className="font-poppins text-2xl font-bold text-white mb-4"
                          animate={{
                            scale: hoveredService === service.slug ? 1.05 : 1
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {service.name}
                        </motion.h3>
                        <p className="font-roboto text-light-gray text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="mt-6">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center font-poppins font-semibold text-white hover:text-light-gray transition-colors duration-200 group"
                        >
                          Learn More
                          <motion.span
                            className="ml-2"
                            animate={{
                              x: hoveredService === service.slug ? 5 : 0
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                      animate={{
                        x: hoveredService === service.slug ? ['0%', '100%'] : '0%',
                      }}
                      transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-lg text-light-gray mb-8"
          >
            Let's discuss how our comprehensive digital marketing solutions can accelerate your growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-300 hover:bg-light-gray hover:scale-105 hover:shadow-lg"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;