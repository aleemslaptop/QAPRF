import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { CaseStudy } from '../types';
import { useServices } from '../hooks/useServices';

const Portfolio: React.FC = () => {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [filteredCases, setFilteredCases] = useState<CaseStudy[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const { services } = useServices();

  useEffect(() => {
    const loadCases = async () => {
      try {
        const response = await fetch('/src/data/cases.json');
        const data = await response.json();
        setCases(data);
        setFilteredCases(data);
      } catch (error) {
        console.error('Error loading cases:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCases();
  }, []);

  const handleFilter = (serviceSlug: string) => {
    setActiveFilter(serviceSlug);
    if (serviceSlug === 'all') {
      setFilteredCases(cases);
    } else {
      setFilteredCases(cases.filter(case_ => case_.service === serviceSlug));
    }
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
            Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-lg text-dark-gray leading-relaxed"
          >
            Explore our successful digital marketing campaigns and the measurable results 
            we've delivered for clients across various industries.
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => handleFilter('all')}
              className={`px-6 py-3 rounded-lg font-poppins font-medium transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-black text-white'
                  : 'bg-light-gray text-dark-gray hover:bg-dark-gray hover:text-white'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              All Projects
            </motion.button>
            
            {services.map((service, index) => (
              <motion.button
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                onClick={() => handleFilter(service.slug)}
                className={`px-6 py-3 rounded-lg font-poppins font-medium transition-all duration-200 ${
                  activeFilter === service.slug
                    ? 'bg-black text-white'
                    : 'bg-light-gray text-dark-gray hover:bg-dark-gray hover:text-white'
                }`}
              >
                {service.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              style={{
                gridAutoRows: 'minmax(300px, auto)',
              }}
            >
              {filteredCases.map((case_, index) => (
                <motion.div
                  key={case_.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                    index % 3 === 1 ? 'md:row-span-2' : ''
                  }`}
                >
                  <div className="relative h-full min-h-[300px]">
                    <img
                      src={case_.images[0]}
                      alt={case_.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 px-6">
                        <h3 className="font-poppins text-2xl font-bold text-white mb-4">
                          {case_.title}
                        </h3>
                        <p className="font-roboto text-light-gray mb-6 text-sm leading-relaxed">
                          {case_.description.substring(0, 120)}...
                        </p>
                        <button className="inline-flex items-center bg-white text-black px-6 py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-light-gray group/btn">
                          View Case Study
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>

                    {/* Service Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-white text-black px-3 py-1 rounded-full text-xs font-poppins font-semibold">
                        {services.find(s => s.slug === case_.service)?.name || case_.service}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCases.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-roboto text-lg text-dark-gray">
                No case studies found for the selected filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;