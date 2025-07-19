import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = '',
  showPercentage = false,
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-black via-dark-gray to-black rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: '50%' }}
          />
        </motion.div>
      </div>
      
      {showPercentage && (
        <motion.div
          className="absolute -top-8 text-sm font-medium text-dark-gray"
          style={{ left: `${progress}%` }}
          animate={{ left: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {Math.round(progress)}%
        </motion.div>
      )}
    </div>
  );
};

export default ProgressBar;