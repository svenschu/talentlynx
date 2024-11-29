import React, { useState, useEffect, useRef } from "react";

const FlyingBoxWithImage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const boxRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.5, // Box muss zu 50% sichtbar sein
            }
        );

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }

        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex items-center space-x-8">
                {/* Platzhalterbild */}
                <img
                    src="https://via.placeholder.com/150"
                    alt="Platzhalterbild"
                    className="w-40 h-40 object-cover rounded shadow-lg"
                />
                {/* Animierte Box */}
                <div
                    ref={boxRef}
                    className={`transform transition-transform duration-700 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    } bg-blue-500 w-40 h-40 rounded shadow-lg`}
                ></div>
            </div>
        </div>
    );
};

export default FlyingBoxWithImage;
