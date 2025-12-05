'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
    images: string[];
    autoPlayInterval?: number;
}

export default function ImageSlider({ images, autoPlayInterval = 5000 }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [images.length, autoPlayInterval]);

    // Handle image load
    const handleImageLoad = (index: number) => {
        setLoadedImages((prev) => new Set(prev).add(index));
        if (index === 0) {
            setIsLoading(false);
        }
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden bg-gray-900">
            {/* Loading Skeleton */}
            {isLoading && (
                <div className="absolute inset-0 z-20 animate-pulse">
                    <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-shimmer"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-white text-lg font-medium">Loading amazing images...</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Slider Images */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            onLoad={() => handleImageLoad(index)}
                        />
                        {/* Overlay gradient for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 ${index === currentIndex
                                ? 'w-12 h-3 bg-white'
                                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Content Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="text-center text-white px-6 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                        Welcome to MyWebsite
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
                        Discover amazing content and explore our beautiful, modern website
                    </p>
                    <div className="flex justify-center gap-4 pointer-events-auto animate-fade-in-up animation-delay-400">
                        <a
                            href="/about"
                            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Learn More
                        </a>
                        <a
                            href="/contact"
                            className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border-2 border-white rounded-lg font-semibold hover:bg-white/20 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
