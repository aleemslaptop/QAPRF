import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, TrendingUp, Users, Mail, Code, Cog, ShoppingCart, Database, Palette } from 'lucide-react';

interface Service {
  name: string;
  slug: string;
  description: string;
  sub_services: Array<{
    name: string;
    description: string;
  }>;
}

interface InteractiveServiceGridProps {
  services: Service[];
}

const serviceIcons = {
  'seo': Target,
  'ppc-advertising': TrendingUp,
  'content-marketing': Zap,
  'social-media-management': Users,
  'email-marketing': Mail,
  'web-app-development': Code,
  'software-solutions': Cog,
  'ecommerce-marketing': ShoppingCart,
  'b2b-lead-databases': Database,
  'brand-strategy-design': Palette,
};

const InteractiveServiceGrid: React.FC<InteractiveServiceGridProps> = ({ services }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 p-8"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.1), transparent 40%)`,
        }}
      />

      {services.map((service, index) => {
        const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || Zap;
        const isHovered = hoveredIndex === index;
        
        return (
          <ServiceHexagon
            key={service.slug}
            service={service}
            icon={IconComponent}
            index={index}
            isHovered={isHovered}
            onHover={setHoveredIndex}
            mousePosition={mousePosition}
          />
        );
      })}
    </div>
  );
};

interface ServiceHexagonProps {
  service: Service;
  icon: React.ComponentType<any>;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  mousePosition: { x: number; y: number };
}

const ServiceHexagon: React.FC<ServiceHexagonProps> = ({
  service,
  icon: IconComponent,
  index,
  isHovered,
  onHover,
  mousePosition,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(useTransform(x, [-100, 100], [-20, 20]), { stiffness: 300, damping: 30 });
  const mouseY = useSpring(useTransform(y, [-100, 100], [-20, 20]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onHover(null);
  };

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-pointer"
      style={{
        rotateX: mouseY,
        rotateY: mouseX,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Hexagonal Container */}
      <div className="relative h-64 w-full">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black via-dark-gray to-black rounded-2xl"
          animate={{
            background: isHovered 
              ? 'linear-gradient(135deg, #000000 0%, #333333 50%, #000000 100%)'
              : 'linear-gradient(135deg, #1a1a1a 0%, #000000 50%, #1a1a1a 100%)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered 
              ? '0 0 30px rgba(255,255,255,0.1), inset 0 0 30px rgba(255,255,255,0.05)'
              : '0 0 0px rgba(255,255,255,0)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          {/* Icon Section */}
          <motion.div
            className="flex justify-center mb-4"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotateY: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-black" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="font-poppins text-lg font-bold text-white text-center mb-3 leading-tight"
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {service.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="font-roboto text-light-gray text-sm text-center leading-relaxed mb-4"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {service.description.substring(0, 80)}...
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex justify-center"
            animate={{
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={`/services/${service.slug}`}
              className="inline-flex items-center bg-white text-black px-4 py-2 rounded-lg font-poppins font-semibold text-sm transition-all duration-200 hover:bg-light-gray group"
            >
              Explore
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Particle Effects */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: '50%',
                  y: '50%',
                  opacity: 0,
                }}
                animate={{
                  x: `${50 + (Math.cos((i * Math.PI * 2) / 8) * 40)}%`,
                  y: `${50 + (Math.sin((i * Math.PI * 2) / 8) * 40)}%`,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InteractiveServiceGrid;