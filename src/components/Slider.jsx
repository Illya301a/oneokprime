import { useState, useEffect } from 'react';
import vania1 from "../photos/vania1.jpg";
import vania2 from "../photos/vania2.jpg";
import vania3 from "../photos/vania3.jpg";
import vania4 from "../photos/vania4.jpg";
import vania5 from "../photos/vania5.jpg";

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            src: `${vania1}`,
            alt: "Ванек первый"
        },
        {
            id: 2,
            src: `${vania2}`,
            alt: "Ванек второй"
        },
        {
            id: 3,
            src: `${vania3}`,
            alt: "Ванек третий"
        },
        {
            id: 4,
            src: `${vania4}`,
            alt: "Ванек четвертый"
        },
        {
            id: 5,
            src: `${vania5}`,
            alt: "Ванек пятый"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto my-10">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img 
                            src={slide.src} 
                            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                            alt={slide.alt} 
                        />
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === currentSlide 
                                ? 'bg-purple-500 shadow-lg shadow-purple-500/50' 
                                : 'bg-white/50 hover:bg-purple-300/75'
                        }`}
                        aria-current={index === currentSlide ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600/80 dark:bg-purple-800/80 group-hover:bg-purple-700 dark:group-hover:bg-purple-700 group-focus:ring-4 group-focus:ring-purple-300 dark:group-focus:ring-purple-600 group-focus:outline-none transition-all duration-300">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600/80 dark:bg-purple-800/80 group-hover:bg-purple-700 dark:group-hover:bg-purple-700 group-focus:ring-4 group-focus:ring-purple-300 dark:group-focus:ring-purple-600 group-focus:outline-none transition-all duration-300">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

export default Slider;