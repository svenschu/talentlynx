import { useState, useEffect } from "react";

export default function Example() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // 100ms Verzögerung

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="-mb-1 -mx-1 pt-48 sm:pt-64 flex items-end"
            style={{
                backgroundImage: "url('src/assets/section-curve.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-left">
                        <h2
                            className={`text-balance lg:text-6xl text-4xl font-semibold tracking-tight text-white 
                            transform transition-opacity transition-transform duration-700 
                            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            style={{ transitionDelay: "200ms" }}
                        >
                            Statement
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
