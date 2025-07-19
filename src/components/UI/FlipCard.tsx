import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  className = '',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative w-full h-full cursor-pointer ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;