import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import TypedText from './TypedText';
import { Play, ArrowRight, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const typedWords = ['SEO Domination', 'App Development', 'E-commerce Growth', 'Cold Outreach', 'Brand Strategy', 'Lead Generation'];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)',
          y: scrollY * 0.5,
        }}
      />
      
      {/* Dynamic Overlay */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(51,51,51,0.5) 50%, rgba(0,0,0,0.7) 100%)',
            'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(51,51,51,0.4) 50%, rgba(0,0,0,0.6) 100%)',
            'linear-gradient(225deg, rgba(0,0,0,0.7) 0%, rgba(51,51,51,0.5) 50%, rgba(0,0,0,0.7) 100%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 5)}%`,
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4" style={{ zIndex: 2 }}>
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Zap className="w-10 h-10 text-black" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading with Typed Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Next-Gen Digital{' '}
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-white via-light-gray to-white bg-clip-text text-transparent">
            <TypedText 
              words={typedWords}
              className="text-white"
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
            />
          </span>
          <br className="hidden md:block" />
          Solutions
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-roboto text-xl md:text-2xl text-light-gray mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Transform your business with cutting-edge digital marketing, custom development, 
          and data-driven strategies that deliver measurable results and sustainable growth.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center bg-white text-black px-10 py-5 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:bg-light-gray hover:scale-110 hover:shadow-2xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-black to-dark-gray opacity-0 group-hover:opacity-10"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Start Your Transformation</span>
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          
          <button className="group inline-flex items-center text-white px-8 py-5 rounded-full font-poppins font-semibold text-lg border-2 border-white border-opacity-30 transition-all duration-300 hover:border-opacity-100 hover:bg-white hover:bg-opacity-10">
            <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
            Watch Our Story
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Clients Transformed' },
            { number: '2.5M+', label: 'Revenue Generated' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Expert Support' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="font-poppins text-3xl md:text-4xl font-bold text-white mb-2"
                animate={{ 
                  textShadow: [
                    '0 0 0px rgba(255,255,255,0)',
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 0px rgba(255,255,255,0)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="font-roboto text-light-gray text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;