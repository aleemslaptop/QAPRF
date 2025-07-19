import React, { useState, useEffect } from 'react';

interface TypedTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypedText: React.FC<TypedTextProps> = ({
  words,
  className = '',
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      } else {
        if (currentText === currentWord) {
          setIsPaused(true);
        } else {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypedText;