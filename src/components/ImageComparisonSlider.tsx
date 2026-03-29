import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;

    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-ew-resize select-none rounded-sm border border-white/5 shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Before Image (Bottom) */}
      <img 
        src={beforeImage} 
        alt="Before" 
        className="absolute inset-0 w-full h-full object-contain"
        draggable={false}
      />

      {/* After Image (Top, Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />
      </div>

      {/* Gold Swipe Line */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-gold z-10 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-anthracite/80 backdrop-blur-md border border-gold shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="flex gap-1.5">
            <div className="w-[1px] h-4 bg-gold/50 rounded-full" />
            <div className="w-[1px] h-4 bg-gold rounded-full" />
            <div className="w-[1px] h-4 bg-gold/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Original
      </div>
      <div className="absolute bottom-4 right-4 z-20 bg-gold/80 backdrop-blur-md text-anthracite px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Edited
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
