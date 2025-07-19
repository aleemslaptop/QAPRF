import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Download } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { ContactForm, QuoteData } from '../types';
import { useServices } from '../hooks/useServices';
import ProgressBar from '../components/UI/ProgressBar';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'quote'>('contact');
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteData, setQuoteData] = useState<Partial<QuoteData>>({
    services: [],
    budget: 5000,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const { services } = useServices();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const handleContactSubmit = (data: ContactForm) => {
    console.log('Contact form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleServiceToggle = (serviceSlug: string) => {
    const currentServices = quoteData.services || [];
    const updatedServices = currentServices.includes(serviceSlug)
      ? currentServices.filter(s => s !== serviceSlug)
      : [...currentServices, serviceSlug];
    
    setQuoteData({ ...quoteData, services: updatedServices });
  };

  const handleQuoteNext = () => {
    if (quoteStep < 3) {
      setQuoteStep(quoteStep + 1);
    }
  };

  const handleQuoteBack = () => {
    if (quoteStep > 1) {
      setQuoteStep(quoteStep - 1);
    }
  };

  const generatePDF = async () => {
    // Simple PDF generation simulation
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Digital Marketing Proposal', 20, 30);
    
    doc.setFontSize(12);
    doc.text('Selected Services:', 20, 50);
    
    let yPosition = 60;
    (quoteData.services || []).forEach(serviceSlug => {
      const service = services.find(s => s.slug === serviceSlug);
      if (service) {
        doc.text(`• ${service.name}`, 25, yPosition);
        yPosition += 10;
      }
    });
    
    doc.text(`Budget Range: $${quoteData.budget?.toLocaleString()} per month`, 20, yPosition + 10);
    
    if (quoteData.contact) {
      doc.text('Contact Information:', 20, yPosition + 30);
      doc.text(`Name: ${quoteData.contact.name}`, 25, yPosition + 40);
      doc.text(`Email: ${quoteData.contact.email}`, 25, yPosition + 50);
      doc.text(`Company: ${quoteData.contact.company}`, 25, yPosition + 60);
    }
    
    doc.save('marketing-proposal.pdf');
    
    // Show confetti animation
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const getStepProgress = () => {
    return (quoteStep / 3) * 100;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@digitalagency.com',
      link: 'mailto:hello@digitalagency.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Marketing Street, Digital City, DC 12345',
      link: '#',
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
            Contact Us
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-lg text-dark-gray leading-relaxed"
          >
            Ready to grow your business? Get in touch with our team or use our quote calculator 
            to get a customized proposal for your digital marketing needs.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information & Map */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="font-poppins text-3xl font-bold text-black mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-poppins text-lg font-semibold text-black mb-1">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="font-roboto text-dark-gray hover:text-black transition-colors duration-200"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Google Maps Iframe */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-64 bg-light-gray rounded-lg overflow-hidden relative"
              >
                {/* Animated Map Marker */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500"></div>
                </motion.div>
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlNDInNDYuMSJOIDc0wrAwMCczNi4wIlc!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </motion.div>
            </div>

            {/* Contact Form & Quote Calculator */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Tab Navigation */}
                <div className="flex mb-8 bg-light-gray rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`flex-1 py-3 px-6 rounded-lg font-poppins font-semibold transition-all duration-200 ${
                      activeTab === 'contact'
                        ? 'bg-white text-black shadow-md'
                        : 'text-dark-gray hover:text-black'
                    }`}
                  >
                    Contact Form
                  </button>
                  <button
                    onClick={() => setActiveTab('quote')}
                    className={`flex-1 py-3 px-6 rounded-lg font-poppins font-semibold transition-all duration-200 ${
                      activeTab === 'quote'
                        ? 'bg-white text-black shadow-md'
                        : 'text-dark-gray hover:text-black'
                    }`}
                  >
                    Quote Calculator
                  </button>
                </div>

                {/* Contact Form */}
                {activeTab === 'contact' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="font-poppins text-2xl font-bold text-black mb-2">
                          Message Sent!
                        </h3>
                        <p className="font-roboto text-dark-gray">
                          Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <motion.form 
                        onSubmit={handleSubmit(handleContactSubmit)} 
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1 }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <label className="block font-poppins font-medium text-black mb-2">
                              Name *
                            </label>
                            <input
                              {...register('name', { required: 'Name is required' })}
                              className="w-full px-4 py-3 border border-light-gray rounded-lg font-roboto focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                            />
                            {errors.name && (
                              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            <label className="block font-poppins font-medium text-black mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              {...register('email', { 
                                required: 'Email is required',
                                pattern: {
                                  value: /^\S+@\S+$/i,
                                  message: 'Invalid email address'
                                }
                              })}
                              className="w-full px-4 py-3 border border-light-gray rounded-lg font-roboto focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <label className="block font-poppins font-medium text-black mb-2">
                            Company
                          </label>
                          <input
                            {...register('company')}
                            className="w-full px-4 py-3 border border-light-gray rounded-lg font-roboto focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <label className="block font-poppins font-medium text-black mb-2">
                            Service Interest
                          </label>
                          <select
                            {...register('service')}
                            className="w-full px-4 py-3 border border-light-gray rounded-lg font-roboto focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select a service</option>
                            {services.map(service => (
                              <option key={service.slug} value={service.slug}>
                                {service.name}
                              </option>
                            ))}
                          </select>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <label className="block font-poppins font-medium text-black mb-2">
                            Message
                          </label>
                          <textarea
                            {...register('message')}
                            rows={4}
                            className="w-full px-4 py-3 border border-light-gray rounded-lg font-roboto focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-vertical transition-all duration-200"
                          />
                        </motion.div>

                        <motion.div 
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <input
                            type="checkbox"
                            {...register('gdprConsent', { required: 'You must agree to the privacy policy' })}
                            className="mt-1"
                          />
                          <label className="font-roboto text-sm text-dark-gray">
                            I consent to receive marketing communications and agree to the privacy policy. *
                          </label>
                        </motion.div>
                        {errors.gdprConsent && (
                          <p className="text-red-500 text-sm">{errors.gdprConsent.message}</p>
                        )}

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-black text-white py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-dark-gray hover:scale-105"
                        >
                          Send Message
                        </motion.button>
                      </motion.form>
                    )}
                  </motion.div>
                )}

                {/* Quote Calculator */}
                {activeTab === 'quote' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-poppins text-sm font-medium text-dark-gray">
                          Step {quoteStep} of 3
                        </span>
                        <span className="font-poppins text-sm font-medium text-dark-gray">
                          {Math.round(getStepProgress())}% Complete
                        </span>
                      </div>
                      <ProgressBar progress={getStepProgress()} showPercentage={false} />
                    </div>

                    {quoteStep === 1 && (
                      <div>
                        <h3 className="font-poppins text-2xl font-bold text-black mb-6">
                          Step 1: Select Services
                        </h3>
                        <div className="space-y-4 mb-8">
                          {services.map(service => (
                            <motion.label
                              key={service.slug}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex items-start space-x-3 p-4 border border-light-gray rounded-lg cursor-pointer hover:bg-light-gray transition-colors duration-200"
                            >
                              <input
                                type="checkbox"
                                checked={(quoteData.services || []).includes(service.slug)}
                                onChange={() => handleServiceToggle(service.slug)}
                                className="mt-1"
                              />
                              <div>
                                <h4 className="font-poppins font-semibold text-black">
                                  {service.name}
                                </h4>
                                <p className="font-roboto text-sm text-dark-gray">
                                  {service.description}
                                </p>
                              </div>
                            </motion.label>
                          ))}
                        </div>
                        <motion.button
                          onClick={handleQuoteNext}
                          disabled={(quoteData.services || []).length === 0}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-black text-white py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-dark-gray disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next Step
                        </motion.button>
                      </div>
                    )}

                    {quoteStep === 2 && (
                      <div>
                        <h3 className="font-poppins text-2xl font-bold text-black mb-6">
                          Step 2: Budget Range
                        </h3>
                        <div className="mb-8">
                          <label className="block font-poppins font-medium text-black mb-4">
                            Monthly Budget: ${quoteData.budget?.toLocaleString()}
                          </label>
                          <input
                            type="range"
                            min="1000"
                            max="50000"
                            step="1000"
                            value={quoteData.budget || 5000}
                            onChange={(e) => setQuoteData({
                              ...quoteData,
                              budget: parseInt(e.target.value)
                            })}
                            className="w-full h-2 bg-light-gray rounded-lg appearance-none slider"
                          />
                          <div className="flex justify-between text-sm text-dark-gray mt-2">
                            <span>$1,000</span>
                            <span>$50,000+</span>
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <motion.button
                            onClick={handleQuoteBack}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 bg-light-gray text-black py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-gray-300"
                          >
                            Back
                          </motion.button>
                          <motion.button
                            onClick={handleQuoteNext}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 bg-black text-white py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-dark-gray"
                          >
                            Next Step
                          </motion.button>
                        </div>
                      </div>
                    )}

                    {quoteStep === 3 && (
                      <div>
                        <h3 className="font-poppins text-2xl font-bold text-black mb-6">
                          Step 3: Contact Information
                        </h3>
                        <div className="space-y-4 mb-8">
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={quoteData.contact?.name || ''}
                            onChange={(e) => setQuoteData({
                              ...quoteData,
                              contact: { ...quoteData.contact, name: e.target.value } as any
                            })}
                            className="w-full px-4 py-3 border border-light-gray rounded-lg font-roboto focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                          />
                          <input
                            type="email"
                            placeholder="Your Email"
                            value={quoteData.contact?.email || ''}
                            onChange={(e) => setQuoteData({
                              ...quoteData,
                              contact: { ...quoteData.contact, email: e.target.value } as any
                            })}
                            className="w-full px-4 py-3 border border-light-gray rounded-lg font-roboto focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={quoteData.contact?.company || ''}
                            onChange={(e) => setQuoteData({
                              ...quoteData,
                              contact: { ...quoteData.contact, company: e.target.value } as any
                            })}
                            className="w-full px-4 py-3 border border-light-gray rounded-lg font-roboto focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                          />
                          <textarea
                            placeholder="Additional Requirements"
                            value={quoteData.contact?.message || ''}
                            onChange={(e) => setQuoteData({
                              ...quoteData,
                              contact: { ...quoteData.contact, message: e.target.value } as any
                            })}
                            rows={3}
                            className="w-full px-4 py-3 border border-light-gray rounded-lg font-roboto focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-vertical"
                          />
                        </div>

                        {/* Review */}
                        <div className="bg-light-gray p-6 rounded-lg mb-6">
                          <h4 className="font-poppins font-semibold text-black mb-4">
                            Quote Summary
                          </h4>
                          <div className="space-y-2 text-sm">
                            <p><strong>Services:</strong> {(quoteData.services || []).map(slug => 
                              services.find(s => s.slug === slug)?.name
                            ).join(', ')}</p>
                            <p><strong>Budget:</strong> ${quoteData.budget?.toLocaleString()}/month</p>
                            <p><strong>Contact:</strong> {quoteData.contact?.name} ({quoteData.contact?.email})</p>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <motion.button
                            onClick={handleQuoteBack}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 bg-light-gray text-black py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-gray-300"
                          >
                            Back
                          </motion.button>
                          <motion.button
                            onClick={generatePDF}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 bg-black text-white py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-dark-gray inline-flex items-center justify-center"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Proposal
                          </motion.button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-black"
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                opacity: 1,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                opacity: 0,
                rotate: 360,
              }}
              transition={{
                duration: 3,
                ease: "easeOut",
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Contact;