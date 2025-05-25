import { useState, useEffect } from 'react';

export function IMageSlider() {
  const slides = [
    `${process.env.PUBLIC_URL}/img1.webp`,
    `${process.env.PUBLIC_URL}/img2.webp`,
    `${process.env.PUBLIC_URL}/img3.webp`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img 
              src={slide} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-slate-100' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
