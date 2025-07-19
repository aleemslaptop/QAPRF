import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin as LinkedIn } from 'lucide-react';
import FlipCard from '../components/UI/FlipCard';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      title: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in digital marketing. Former VP at Google, passionate about data-driven growth strategies.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
    },
    {
      name: 'Michael Chen',
      title: 'Head of Strategy',
      bio: 'Strategic mastermind specializing in PPC and conversion optimization. MBA from Stanford, ex-Facebook advertising lead.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: 'https://twitter.com/michaelchen',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Creative Director',
      bio: 'Award-winning designer with expertise in brand identity and user experience. Featured in Design Week, Behance top 1%.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      twitter: 'https://twitter.com/emilyrodriguez',
    },
    {
      name: 'David Thompson',
      title: 'Technical Lead',
      bio: 'Full-stack developer and SEO technical expert. Computer Science PhD, specializes in performance optimization and analytics.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
      linkedin: 'https://linkedin.com/in/davidthompson',
      twitter: 'https://twitter.com/davidthompson',
    },
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to revolutionize digital marketing' },
    { year: '2019', title: 'First 100 Clients', description: 'Reached our first major milestone with diverse client portfolio' },
    { year: '2021', title: 'Award Recognition', description: 'Named "Digital Agency of the Year" by Marketing Excellence Awards' },
    { year: '2023', title: 'Global Expansion', description: 'Opened offices in London and Singapore, serving 500+ clients' },
    { year: '2025', title: 'AI Integration', description: 'Launched proprietary AI-powered marketing optimization platform' },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Analysis',
      description: 'Comprehensive audit and strategy development',
      details: 'In-depth analysis of your current digital presence, competitor research, and market opportunity assessment.',
    },
    {
      number: 2,
      title: 'Strategy Development',
      description: 'Custom roadmap aligned with business goals',
      details: 'Data-driven strategy creation with clear KPIs, timelines, and resource allocation for maximum ROI.',
    },
    {
      number: 3,
      title: 'Implementation',
      description: 'Expert execution across all channels',
      details: 'Seamless campaign launch with dedicated team members and real-time monitoring for optimal performance.',
    },
    {
      number: 4,
      title: 'Optimization',
      description: 'Continuous improvement and performance monitoring',
      details: 'Ongoing analysis, A/B testing, and refinement to ensure sustained growth and competitive advantage.',
    },
  ];

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
            About Us
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-lg text-dark-gray leading-relaxed"
          >
            We are a full-service digital marketing agency dedicated to helping businesses thrive in the digital landscape. 
            Founded in 2018, our mission is to deliver data-driven marketing solutions that generate measurable results and 
            sustainable growth for our clients. With a team of certified experts across all digital channels, we combine 
            strategic thinking with creative execution to build brands, drive traffic, and increase conversions. Our 
            collaborative approach ensures that every campaign is tailored to your unique business objectives, target 
            audience, and industry requirements. We believe in transparency, accountability, and continuous optimization 
            to maximize your return on investment. From startups to enterprise organizations, we've helped hundreds of 
            businesses achieve their digital marketing goals through innovative strategies, cutting-edge technologies, 
            and exceptional client service. Our comprehensive services include search engine optimization, pay-per-click 
            advertising, content marketing, social media management, email marketing, and custom web development. We stay 
            ahead of industry trends and algorithm changes to ensure your marketing efforts remain effective and competitive 
            in an ever-evolving digital environment.
          </motion.p>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-black mb-4">
              Our Journey
            </h2>
            <p className="font-roboto text-lg text-dark-gray">
              Key milestones that shaped our growth and success
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-light-gray"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                <motion.div
                  className="absolute left-6 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="ml-16">
                  <motion.div
                    className="bg-light-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-2">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-poppins font-semibold">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-black mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-roboto text-dark-gray">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="font-roboto text-lg text-dark-gray max-w-2xl mx-auto">
              Our diverse team of experts brings together years of experience in digital marketing, 
              creative design, and technical development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FlipCard
                key={member.name}
                className="h-80"
                frontContent={
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center h-full bg-light-gray rounded-lg p-6 flex flex-col justify-center"
                  >
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 mx-auto rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-poppins text-xl font-semibold text-black mb-2">
                      {member.name}
                    </h3>
                    <p className="font-roboto text-dark-gray">
                      {member.title}
                    </p>
                  </motion.div>
                }
                backContent={
                  <div className="h-full bg-black text-white rounded-lg p-6 flex flex-col justify-center">
                    <div className="text-center mb-6">
                      <h3 className="font-poppins text-xl font-semibold mb-2">
                        {member.name}
                      </h3>
                      <p className="font-roboto text-light-gray text-sm mb-4">
                        {member.title}
                      </p>
                      <p className="font-roboto text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black rounded-full p-2 hover:bg-light-gray transition-colors duration-200"
                      >
                        <LinkedIn className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-black mb-4">
              Our Process
            </h2>
            <p className="font-roboto text-lg text-dark-gray max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results 
              and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="font-poppins text-2xl font-bold text-white relative z-10">
                      {step.number}
                    </span>
                    
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-dark-gray to-black"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                  
                  {index < processSteps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-dark-gray -translate-x-2"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                    >
                      <motion.div
                        className="absolute right-0 top-0 transform -translate-y-1/2 w-2 h-2 bg-dark-gray rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}
                </div>
                
                <h3 className="font-poppins text-lg font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="font-roboto text-dark-gray text-sm mb-4">
                  {step.description}
                </p>
                
                {/* Expandable details */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white p-4 rounded-lg mt-4 shadow-md">
                    <p className="font-roboto text-xs text-dark-gray leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;