
import React from 'react';

interface SectionSeparatorProps {
  imageUrl?: string;
  alt?: string;
}

export const SectionSeparator: React.FC<SectionSeparatorProps> = ({ 
  imageUrl = "/lovable-uploads/4bf92c05-a0b0-4286-8ca7-ef46866c5d38.png", 
  alt = "Bitaxe Bitcoin miners circuit boards" 
}) => {
  return (
    <div className="relative h-64 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};
