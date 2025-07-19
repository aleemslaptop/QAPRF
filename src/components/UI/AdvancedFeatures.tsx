import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Users, TrendingUp, Zap, Shield, Rocket } from 'lucide-react';

const AdvancedFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Target,
      title: 'AI-Powered Strategy',
      description: 'Machine learning algorithms analyze your market and competition to create data-driven strategies that outperform traditional approaches.',
      stats: '300% Better ROI',
      color: 'from-black to-dark-gray',
    },
    {
      icon: Users,
      title: 'Expert Team Network',
      description: 'Access to certified professionals across all digital channels with proven track records in scaling businesses from startup to enterprise.',
      stats: '50+ Specialists',
      color: 'from-dark-gray to-black',
    },
    {
      icon: TrendingUp,
      title: 'Guaranteed Results',
      description: 'Performance-based contracts with measurable KPIs and transparent reporting ensuring your investment delivers tangible business growth.',
      stats: '98% Success Rate',
      color: 'from-black via-dark-gray to-black',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Execution',
      description: 'Rapid deployment of campaigns and strategies with real-time optimization ensuring you stay ahead of market trends and competition.',
      stats: '48hr Launch',
      color: 'from-dark-gray via-black to-dark-gray',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols protecting your data and campaigns with compliance standards exceeding industry requirements.',
      stats: '100% Secure',
      color: 'from-black to-dark-gray',
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Future-proof strategies that grow with your business, from local startups to global enterprises with seamless scaling capabilities.',
      stats: 'Infinite Scale',
      color: 'from-dark-gray to-black',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-light-gray relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-poppins text-5xl md:text-6xl font-bold text-black mb-6">
            Why Industry Leaders
            <br />
            <span className="bg-gradient-to-r from-black via-dark-gray to-black bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="font-roboto text-xl text-dark-gray max-w-3xl mx-auto leading-relaxed">
            Experience the difference that cutting-edge technology, proven expertise, 
            and unwavering commitment to your success can make.
          </p>
        </motion.div>

        {/* Interactive Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isActive = activeFeature === index;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
                whileHover={{ y: -10 }}
              >
                {/* Background with Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl`}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: isActive 
                      ? '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)'
                      : '0 10px 30px rgba(0,0,0,0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Animated Icon */}
                  <motion.div
                    className="mb-6"
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      rotateY: isActive ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-black" />
                    </div>
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2"
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      opacity: isActive ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-poppins text-white text-sm font-bold">
                      {feature.stats}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="font-poppins text-2xl font-bold text-white mb-4"
                    animate={{
                      y: isActive ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="font-roboto text-light-gray leading-relaxed flex-grow"
                    animate={{
                      opacity: isActive ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-white"
                    animate={{
                      width: isActive ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Particle Effects */}
                {isActive && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{
                          x: '50%',
                          y: '50%',
                          opacity: 0,
                        }}
                        animate={{
                          x: `${50 + (Math.cos((i * Math.PI * 2) / 6) * 30)}%`,
                          y: `${50 + (Math.sin((i * Math.PI * 2) / 6) * 30)}%`,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="font-roboto text-lg text-dark-gray mb-8">
            Ready to experience the difference? Let's discuss your project.
          </p>
          <motion.button
            className="bg-black text-white px-12 py-4 rounded-full font-poppins font-bold text-lg transition-all duration-300 hover:bg-dark-gray hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Strategy Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;