import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  scale?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  tiltMaxAngle = 15,
  scale = 1.05,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateXValue = ((e.clientY - centerY) / (rect.height / 2)) * -tiltMaxAngle;
    const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * tiltMaxAngle;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center',
      }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;