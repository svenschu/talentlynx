import React, { useState } from "react";

export default function Example() {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: ((event.clientX - left) / width) * 100,
            y: ((event.clientY - top) / height) * 100,
        });
    };

    return (
        <button
            type="button"
            onMouseMove={handleMouseMove}
            className="relative group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
            style={{
                borderWidth: "4px", // Dickere Border
                borderStyle: "solid",
                borderRadius: "0.5rem", // Gleiche Abrundung wie Button (Tailwind: rounded-lg)
                borderImageSource: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.6), transparent 70%)`,
                borderImageSlice: 1,
            }}
        >
            <span className="relative z-10">Get started</span>
        </button>
    );
}
