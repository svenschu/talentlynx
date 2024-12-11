import {useState, useEffect} from "react";

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
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    {/* Bild auf der linken Seite */}
                    <div
                        className={`relative overflow-hidden rounded-3xl shadow-2xl lg:max-w-lg transform transition-opacity transition-transform duration-700 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-4"
                        }`}
                        style={{transitionDelay: "200ms"}} // Verzögerung für das Bild
                    >
                        <img
                            alt="Company related visual"
                            src="/src/assets/tech-stack.jpg"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Inhalt auf der rechten Seite */}
                    <div
                        className={`transform transition-opacity transition-transform duration-700 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-4"
                        }`}
                        style={{transitionDelay: "400ms"}} // Verzögerung für den Inhalt
                    >
                        <div className="text-base/7 text-gray-700 lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-brand-aqua-500">Technologische Exzellenz</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Entwickler, die Innovation vorantreiben
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6 text-gray-600">
                                    TalentLynx vermittelt Entwickler, die mit modernsten Technologien arbeiten. Egal ob
                                    Frontend, Backend oder Fullstack – unsere Kandidaten beherrschen die Werkzeuge, um
                                    innovative und skalierbare Softwarelösungen zu schaffen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
