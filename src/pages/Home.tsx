import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Award, Users, TrendingUp, Zap, Target, Code, Database, Palette, Mail, ShoppingCart } from 'lucide-react';
import HeroSection from '../components/UI/HeroSection';
import AdvancedFeatures from '../components/UI/AdvancedFeatures';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    caseStudy: false,
    logos: false,
    testimonials: false,
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

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CEO, TechFlow Solutions',
      content: 'This team transformed our digital presence completely. Our revenue increased by 340% in just 8 months.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Founder, EcoVenture',
      content: 'Incredible results! Their B2B lead generation strategy brought us 500+ qualified leads in the first quarter.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    },
    {
      name: 'Jennifer Walsh',
      title: 'CMO, RetailMax',
      content: 'The e-commerce optimization they provided doubled our conversion rates. Absolutely phenomenal work.',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    },
  ];

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

  const serviceHighlights = [
    {
      icon: Target,
      title: 'SEO & SEM Mastery',
      description: 'Dominate search rankings with AI-powered optimization strategies that drive qualified organic traffic and sustainable growth.',
      stats: '300% Traffic Growth',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Custom web applications, mobile apps, and software solutions built with cutting-edge technologies and scalable architecture.',
      stats: '500+ Projects Delivered',
    },
    {
      icon: Database,
      title: 'B2B Lead Generation',
      description: 'Comprehensive database solutions and cold outreach automation that convert prospects into qualified opportunities.',
      stats: '10M+ Leads Generated',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Excellence',
      description: 'Complete online retail strategies including marketplace optimization, conversion rate improvement, and sales automation.',
      stats: '250% Revenue Increase',
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Sophisticated drip campaigns and personalized automation sequences that nurture leads and maximize customer lifetime value.',
      stats: '45% Open Rate Average',
    },
    {
      icon: Palette,
      title: 'Brand Strategy & Design',
      description: 'Complete brand identity development and strategic positioning that resonates with target audiences and drives engagement.',
      stats: '98% Client Satisfaction',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Service Highlights Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-poppins text-5xl md:text-6xl font-bold text-black mb-6">
              Complete Digital Solutions
              <br />
              <span className="bg-gradient-to-r from-black via-dark-gray to-black bg-clip-text text-transparent">
                Under One Roof
              </span>
            </h2>
            <p className="font-roboto text-xl text-dark-gray max-w-3xl mx-auto leading-relaxed">
              From SEO domination to custom software development, B2B lead generation to e-commerce optimization—
              we deliver end-to-end solutions that transform businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-full bg-light-gray rounded-3xl p-8 overflow-hidden">
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black to-dark-gray opacity-0 group-hover:opacity-5 rounded-3xl"
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Stats Badge */}
                    <div className="absolute top-6 right-6 bg-black text-white px-3 py-1 rounded-full text-sm font-poppins font-semibold">
                      {service.stats}
                    </div>

                    {/* Content */}
                    <h3 className="font-poppins text-xl font-bold text-black mb-4">
                      {service.title}
                    </h3>
                    <p className="font-roboto text-dark-gray leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover Effect Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-black"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <AdvancedFeatures />

      {/* Testimonials Section */}
      <section data-section="testimonials" className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage: 'linear-gradient(45deg, transparent 40%, black 50%, transparent 60%)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.testimonials ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-poppins text-5xl md:text-6xl font-bold text-black mb-6">
              Client Success Stories
            </h2>
            <p className="font-roboto text-xl text-dark-gray max-w-3xl mx-auto">
              Discover how we've transformed businesses across industries with our innovative strategies and proven results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible.testimonials ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
                whileHover={{ y: -10 }}
              >
                <div className="bg-light-gray p-8 rounded-3xl relative overflow-hidden">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-6xl text-black opacity-10 font-serif">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                      >
                        <Star className="w-5 h-5 text-black fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="font-roboto text-dark-gray leading-relaxed mb-6 text-lg">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-poppins font-semibold text-black">
                        {testimonial.name}
                      </h4>
                      <p className="font-roboto text-dark-gray text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black to-dark-gray opacity-0 group-hover:opacity-5 rounded-3xl"
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
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
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <motion.img
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
                  alt="E-commerce SEO Success Story"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50" />
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute top-8 left-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-white">
                    <div className="font-poppins text-2xl font-bold">185%</div>
                    <div className="font-roboto text-sm">Traffic Growth</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="text-white">
                    <div className="font-poppins text-2xl font-bold">230%</div>
                    <div className="font-roboto text-sm">Revenue Increase</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible.caseStudy ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h2 className="font-poppins text-4xl font-bold text-black mb-6">
                TechGear Pro Success Story
              </h2>
              <p className="font-roboto text-dark-gray mb-6 leading-relaxed">
                How we helped TechGear Pro achieve 185% organic traffic growth and 230% revenue increase 
                through comprehensive SEO optimization and strategic content marketing initiatives.
              </p>
              <Link
                to="/portfolio/ecommerce-seo-transformation"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-poppins font-semibold transition-all duration-300 hover:bg-dark-gray hover:scale-105 group"
              >
                Read Case Study
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Achievement Badges */}
              <div className="mt-8 flex space-x-4">
                <div className="flex items-center bg-light-gray rounded-full px-4 py-2">
                  <Award className="w-5 h-5 text-black mr-2" />
                  <span className="font-roboto text-sm font-medium">Award Winner</span>
                </div>
                <div className="flex items-center bg-light-gray rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-black mr-2" />
                  <span className="font-roboto text-sm font-medium">Top Performer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section data-section="logos" className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-center text-black mb-12">
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
                  className="flex-shrink-0 w-40 h-20 bg-light-gray rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 relative group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
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

      {/* Final CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, white 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Transform
              <br />
              Your Business?
            </h2>
            <p className="font-roboto text-xl text-light-gray mb-12 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have accelerated their growth with our proven strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-black px-12 py-5 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:bg-light-gray hover:scale-105 hover:shadow-2xl"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-12 py-5 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:bg-white hover:text-black"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;