import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import ParticleBackground from '../components/UI/ParticleBackground';
import TypedText from '../components/UI/TypedText';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    features: false,
    whyUs: false,
    caseStudy: false,
    logos: false,
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target.getAttribute('data-section');
          if (target) {
            setIsVisible((prev) => ({ ...prev, [target]: true }));
          }
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Data-driven strategies tailored to your business goals and target audience for maximum ROI.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience across all digital marketing channels.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of delivering measurable growth and exceeding client expectations consistently.',
    },
  ];

  const whyUsPoints = [
    'Transparent reporting with real-time performance dashboards',
    'Dedicated account manager for personalized service and support',
    'Industry-leading tools and cutting-edge marketing technologies',
  ];

  const typedWords = ['SEO', 'App Dev', 'E-commerce', 'Cold Outreach'];

  const clientLogos = [
    'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1',
    'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1',
    'https://images.pexels.com/photos/374720/pexels-photo-374720.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1',
    'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1',
    'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1',
    'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&dpr=1',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4" style={{ zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Full-Stack{' '}
            <TypedText 
              words={typedWords}
              className="text-white"
            />{' '}
            Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-roboto text-lg md:text-xl text-light-gray mb-8 max-w-2xl mx-auto"
          >
            Drive growth and maximize ROI with our comprehensive digital marketing services. 
            From SEO to PPC, we deliver results that matter to your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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

      {/* Features Section */}
      <section data-section="features" className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.features ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-32 h-32 bg-black rounded-lg mb-6 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <feature.icon className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="font-roboto text-dark-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section data-section="whyUs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-4xl font-bold text-black mb-4">
              Why Choose Us
            </h2>
            <p className="font-roboto text-lg text-dark-gray max-w-2xl mx-auto">
              We combine industry expertise with innovative strategies to deliver exceptional results for your business.
            </p>
          </div>
          
          {/* Value Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -100 * whyUsPoints.length],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...whyUsPoints, ...whyUsPoints].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 flex items-start space-x-4 bg-light-gray p-6 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <p className="font-roboto text-dark-gray">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section data-section="caseStudy" className="py-20 bg-light-gray overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible.caseStudy ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <motion.img
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
                  alt="E-commerce SEO Success Story"
                  className="w-full h-96 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible.caseStudy ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h2 className="font-poppins text-3xl font-bold text-black mb-4">
                E-commerce SEO Transformation
              </h2>
              <p className="font-roboto text-dark-gray mb-6 leading-relaxed">
                How we helped TechGear Pro achieve 185% organic traffic growth and 230% revenue increase 
                through comprehensive SEO optimization and strategic content marketing initiatives.
              </p>
              <Link
                to="/portfolio/ecommerce-seo-transformation"
                className="inline-flex items-center font-poppins font-semibold text-black hover:text-dark-gray transition-colors duration-200 group"
              >
                Read Case Study
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section data-section="logos" className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins text-2xl font-semibold text-center text-black mb-8">
            Trusted by Leading Brands
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible.logos ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex space-x-8 animate-marquee">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 bg-light-gray rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 relative group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    Client {(index % clientLogos.length) + 1}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                  </div>
                  
                  {/* Spotlight effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;