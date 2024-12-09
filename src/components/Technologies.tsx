import { useState, useEffect } from "react";
import CTAButton from "./CTAButton.tsx";

export default function Example() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verzögere das Einblenden leicht, um sicherzustellen, dass die Animation startet
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // 100ms Verzögerung

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    {/* Linke Seite */}
                    <div
                        className={`px-6 lg:px-0 lg:pr-4 lg:pt-4 transform transition-all duration-700 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2
                                className={`mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl transform transition-all duration-700 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                                style={{ transitionDelay: "200ms" }}
                            >
                                Finde Talente, wo immer sie sind.
                            </h2>
                            <p
                                className={`my-6 text-lg/8 text-gray-600 transform transition-all duration-700 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                                style={{ transitionDelay: "400ms" }}
                            >
                                Mit unserem Multichannel-Ansatz findest du schneller und präziser die
                                besten Talente – klar und umfassend analysiert.
                            </p>
                            {/* CTAButton kann ohne Animation verwendet werden oder optional animiert werden */}
                            <CTAButton />
                        </div>
                    </div>
                    {/* Rechte Seite */}
                    <div
                        className={`sm:px-6 lg:px-0 transform transition-all duration-700 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-4"
                        }`}
                        style={{ transitionDelay: "400ms" }}
                    >
                        <div className="relative isolate overflow-hidden bg-brand-aqua-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                            <div
                                aria-hidden="true"
                                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-brand-aqua-100 opacity-20 ring-1 ring-inset ring-white"
                            />
                            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                <img
                                    alt="Product screenshot"
                                    src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
                                    width={2432}
                                    height={1442}
                                    className={`-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10 transform transition-all duration-700 ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4"
                                    }`}
                                    style={{ transitionDelay: "600ms" }}
                                />
                            </div>
                            <div
                                aria-hidden="true"
                                className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl transform transition-all duration-700 ${
                                    isVisible
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                style={{ transitionDelay: "600ms" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
