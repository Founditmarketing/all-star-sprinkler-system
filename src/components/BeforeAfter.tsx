import React, { useState } from 'react';

interface BeforeAfterProps {
  before: string;
  after: string;
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      className="relative aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none border border-gray-100"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
      
      {/* Before Image */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img src={before} alt="Before" className="absolute inset-0 w-[100vw] h-full object-cover max-w-none" referrerPolicy="no-referrer" />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-xl z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center gap-1">
          <div className="w-1 h-4 bg-water-blue rounded-full" />
          <div className="w-1 h-4 bg-water-blue rounded-full" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">Before</div>
      <div className="absolute bottom-4 right-4 bg-water-blue/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">After</div>
    </div>
  );
}
