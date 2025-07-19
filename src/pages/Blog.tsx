import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const postsPerPage = 5;

  useEffect(() => {
    // Generate sample blog posts
    const samplePosts: BlogPost[] = [
      {
        title: 'The Future of SEO: AI and Machine Learning Impact',
        slug: 'future-of-seo-ai-machine-learning',
        author: 'Sarah Johnson',
        date: '2025-01-15',
        excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing search engine optimization strategies and what marketers need to know.',
        content: 'Full article content here...',
        image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
        featured: true,
      },
      {
        title: 'PPC Trends to Watch in 2025',
        slug: 'ppc-trends-2025',
        author: 'Michael Chen',
        date: '2025-01-12',
        excerpt: 'Explore the latest pay-per-click advertising trends that will shape digital marketing campaigns throughout the year ahead.',
        content: 'Full article content here...',
        image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
        featured: true,
      },
      {
        title: 'Social Media Algorithm Changes: What Marketers Need to Know',
        slug: 'social-media-algorithm-changes',
        author: 'Emily Rodriguez',
        date: '2025-01-10',
        excerpt: 'Stay ahead of the curve with insights into recent social media algorithm updates and their impact on organic reach.',
        content: 'Full article content here...',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
        featured: true,
      },
      {
        title: 'Email Marketing Automation Best Practices',
        slug: 'email-marketing-automation-best-practices',
        author: 'David Thompson',
        date: '2025-01-08',
        excerpt: 'Learn how to create effective automated email campaigns that nurture leads and drive conversions for your business.',
        content: 'Full article content here...',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
        featured: false,
      },
      {
        title: 'Content Marketing ROI: Measuring Success',
        slug: 'content-marketing-roi-measuring-success',
        author: 'Sarah Johnson',
        date: '2025-01-05',
        excerpt: 'Discover the key metrics and methodologies for accurately measuring the return on investment of your content marketing efforts.',
        content: 'Full article content here...',
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
        featured: false,
      },
      {
        title: 'Local SEO Strategies for Small Businesses',
        slug: 'local-seo-strategies-small-businesses',
        author: 'Michael Chen',
        date: '2025-01-03',
        excerpt: 'Optimize your local search presence with proven strategies that help small businesses dominate their geographic markets.',
        content: 'Full article content here...',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
        featured: false,
      },
    ];

    setPosts(samplePosts);
    setFeaturedPosts(samplePosts.filter(post => post.featured));
    setLoading(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
            Blog
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-roboto text-lg text-dark-gray leading-relaxed"
          >
            Stay updated with the latest digital marketing insights, trends, and strategies 
            from our team of experts.
          </motion.p>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-black mb-8 text-center">
            Featured Articles
          </h2>
          
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPosts.map((post, index) => (
                <div key={post.slug} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-96 bg-light-gray">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-poppins font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 text-sm text-dark-gray mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                      
                      <h3 className="font-poppins text-2xl font-bold text-black mb-4">
                        {post.title}
                      </h3>
                      
                      <p className="font-roboto text-dark-gray mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <Link
                        to={`/blog/2025/01/${post.slug}`}
                        className="inline-block bg-black text-white px-6 py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-dark-gray w-fit"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins text-3xl font-bold text-black mb-12 text-center">
            Latest Articles
          </h2>
          
          <div className="space-y-8">
            {currentPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-lg text-sm font-poppins">
                      {formatDate(post.date)}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center space-x-4 text-sm text-dark-gray mb-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h3 className="font-poppins text-xl font-bold text-black mb-3">
                      <Link
                        to={`/blog/2025/01/${post.slug}`}
                        className="hover:text-dark-gray transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="font-roboto text-dark-gray leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      to={`/blog/2025/01/${post.slug}`}
                      className="inline-block font-poppins font-semibold text-black hover:text-dark-gray transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white border border-light-gray rounded-lg font-poppins font-medium text-dark-gray hover:bg-light-gray disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-poppins font-medium transition-colors duration-200 ${
                      page === currentPage
                        ? 'bg-black text-white'
                        : 'bg-white text-dark-gray hover:bg-light-gray'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white border border-light-gray rounded-lg font-poppins font-medium text-dark-gray hover:bg-light-gray disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;