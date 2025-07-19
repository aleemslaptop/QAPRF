import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { useServices } from '../hooks/useServices';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { services, loading } = useServices();

  const service = services.find(s => s.slug === slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-poppins text-4xl font-bold text-black mb-4">Service Not Found</h1>
          <Link to="/services" className="text-dark-gray hover:text-black">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-poppins text-5xl font-bold text-black mb-8">
                {service.name}
              </h1>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p className="font-roboto text-lg text-dark-gray leading-relaxed">
                  {service.description} Our comprehensive approach combines industry best practices 
                  with innovative strategies tailored to your specific business goals. We leverage 
                  cutting-edge tools and technologies to deliver measurable results that drive growth 
                  and maximize your return on investment. Our team of certified experts stays ahead 
                  of industry trends to ensure your campaigns remain competitive and effective in 
                  an ever-evolving digital landscape.
                </p>
              </div>

              {/* Sub-services */}
              <div className="mb-12">
                <h2 className="font-poppins text-3xl font-bold text-black mb-8">
                  What's Included
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.sub_services.map((subService, index) => (
                    <motion.div
                      key={subService.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-6 bg-light-gray rounded-lg"
                    >
                      <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-poppins text-lg font-semibold text-black mb-2">
                          {subService.name}
                        </h3>
                        <p className="font-roboto text-dark-gray">
                          {subService.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Related Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-light-gray rounded-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="Related Case Study"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="font-poppins text-2xl font-bold text-white text-center px-4">
                        Success Story
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-poppins text-xl font-bold text-black mb-4">
                      E-commerce SEO Transformation
                    </h3>
                    <p className="font-roboto text-dark-gray mb-6 leading-relaxed">
                      Discover how we helped TechGear Pro achieve 185% organic traffic growth 
                      and 230% revenue increase through our comprehensive {service.name.toLowerCase()} strategy.
                    </p>
                    <Link
                      to="/portfolio/ecommerce-seo-transformation"
                      className="inline-flex items-center font-poppins font-semibold text-black hover:text-dark-gray transition-colors duration-200 group"
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="font-poppins text-xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="font-roboto text-light-gray mb-6">
                  Let's discuss how our {service.name.toLowerCase()} services can help 
                  achieve your business goals.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center w-full bg-white text-black px-6 py-3 rounded-lg font-poppins font-semibold text-center justify-center transition-all duration-200 hover:bg-light-gray group"
                >
                  <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;