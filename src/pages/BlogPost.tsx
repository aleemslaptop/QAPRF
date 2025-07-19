import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { year, month, slug } = useParams();

  // Sample blog post data
  const post = {
    title: 'The Future of SEO: AI and Machine Learning Impact',
    author: 'Sarah Johnson',
    date: 'July 19, 2025',
    content: `
      <p>The digital marketing landscape is evolving at an unprecedented pace, with artificial intelligence and machine learning leading the charge in transforming search engine optimization strategies. As we move into 2025, understanding these technological shifts is crucial for marketers who want to stay competitive.</p>

      <h2>The Rise of AI-Powered Search</h2>
      
      <p>Search engines are becoming increasingly sophisticated in understanding user intent and delivering personalized results. Google's AI algorithms now process queries with a level of contextual understanding that was unimaginable just a few years ago.</p>
      
      <h3>Key Changes in Search Behavior</h3>
      
      <p>Users are adopting more conversational search patterns, asking complete questions rather than typing fragmented keywords. This shift requires SEO professionals to rethink their content strategies and focus on natural language optimization.</p>
      
      <blockquote>
        "The future of SEO isn't about gaming algorithms—it's about creating genuinely valuable content that serves user needs." - Search Engine Expert
      </blockquote>
      
      <h2>Machine Learning and Content Optimization</h2>
      
      <p>Machine learning algorithms are revolutionizing how we approach content creation and optimization. These systems can analyze vast amounts of data to identify patterns and predict what content will resonate with specific audiences.</p>
      
      <h3>Practical Applications</h3>
      
      <p>Forward-thinking marketers are leveraging AI tools to optimize their content strategies, from keyword research to content gap analysis. These technologies enable more precise targeting and better resource allocation.</p>
      
      <h2>Preparing for the Future</h2>
      
      <p>Success in the AI-driven SEO landscape requires a fundamental shift in mindset. Marketers must focus on creating comprehensive, authoritative content that demonstrates expertise and builds trust with both users and search engines.</p>
    `,
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
  };

  const relatedPosts = [
    {
      title: 'PPC Trends to Watch in 2025',
      slug: 'ppc-trends-2025',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    },
    {
      title: 'Social Media Algorithm Changes',
      slug: 'social-media-algorithm-changes',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    },
    {
      title: 'Email Marketing Automation',
      slug: 'email-marketing-automation-best-practices',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center font-poppins font-medium text-dark-gray hover:text-black transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-dark-gray mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span className="font-roboto">By {post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="font-roboto">on {post.date}</span>
            </div>
          </div>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div
            className="font-roboto text-dark-gray leading-relaxed"
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
            }}
            dangerouslySetInnerHTML={{
              __html: post.content.replace(
                /<h2>/g,
                '<h2 class="font-poppins text-2xl font-bold text-black mt-12 mb-6">'
              ).replace(
                /<h3>/g,
                '<h3 class="font-poppins text-xl font-semibold text-black mt-8 mb-4">'
              ).replace(
                /<blockquote>/g,
                '<blockquote class="border-l-4 border-dark-gray pl-6 my-8 italic text-lg">'
              ).replace(
                /<p>/g,
                '<p class="mb-6">'
              )
            }}
          />
        </motion.div>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-light-gray"
        >
          <h2 className="font-poppins text-3xl font-bold text-black mb-8">
            Related Posts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/2025/01/${relatedPost.slug}`}>
                  <div className="bg-light-gray rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-poppins text-lg font-semibold text-black group-hover:text-dark-gray transition-colors duration-200">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </article>
    </div>
  );
};

export default BlogPost;