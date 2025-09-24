// components/Hero.jsx
import React, { useState, useEffect } from "react";
// At the top of your file, import your images:
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

// Then update the carouselImages array:
const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);



  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Fashion background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-[90vh]">
        <div className="max-w-2xl text-center mx-auto">
          {/* Subtle Top Line */}
          <div className="w-20 h-px bg-orange-400 mx-auto mb-8"></div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
            Elevate Your
            <span className="block text-orange-300 font-medium">
              Everyday Style
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/90 mb-12 text-lg leading-relaxed max-w-md mx-auto">
            Curated collections that blend timeless elegance with modern comfort
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-light tracking-wide transition-colors duration-300 text-sm rounded-sm">
              Discover Collections
            </button>
            <button className="px-8 py-3 border border-white/50 hover:border-orange-300 text-white hover:text-orange-300 font-light tracking-wide transition-all duration-300 text-sm rounded-sm">
              Explore Lookbook
            </button>
          </div>

          {/* Bottom Line */}
          <div className="w-12 h-px bg-white/50 mx-auto mt-12"></div>
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
