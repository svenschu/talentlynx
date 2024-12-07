import { useRef, useState, useEffect } from 'react';
import {
    AcademicCapIcon,
    CheckCircleIcon,
    AdjustmentsHorizontalIcon,
    SparklesIcon,
} from '@heroicons/react/20/solid';
import CTAButton from "./CTAButton.tsx"; // Stelle sicher, dass dieser Pfad korrekt ist oder entferne ihn, wenn nicht benötigt.

const steps = [
    {
        title: "Talente entdecken",
        description: "Wir finden Entwickler auf Plattformen wie LinkedIn, GitHub, Stack Overflow, Messen und über Partnernetzwerke.",
        icon: AcademicCapIcon,
        iconColor: "text-brand-primary-500",
    },
    {
        title: "Vorauswahl mit KI",
        description: "Unsere KI analysiert Marktdaten, identifiziert Talente und erstellt datengetriebene Empfehlungen.",
        icon: SparklesIcon,
        iconColor: "text-brand-aquamarine-500",
    },
    {
        title: "15-Punkte-Filter",
        description: "Nur die Top 25 % bestehen unseren umfassenden Filter und qualifizieren sich für die nächste Phase.",
        icon: AdjustmentsHorizontalIcon,
        iconColor: "text-brand-coral-500",
    },
    {
        title: "Vorstellung",
        description: "Wir präsentieren sorgfältig ausgewählte, motivierte und vorbereitete Kandidaten für Ihre Position.",
        icon: CheckCircleIcon,
        iconColor: "text-brand-primary-500",
    },
];

export default function Example() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative isolate overflow-hidden bg-gradient-to-br from-white to-brand-aquamarine-50 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            {/* Hintergrund wie im Original beibehalten */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-aquamarine-200 to-brand-aquamarine-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                {/* Überschrift und Untertitel */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Wie wir in 14 Tagen deine Position besetzen
                    </h1>
                    <p className="mt-6 text-xl text-gray-700">
                        Wir verbinden Technologie mit Erfahrung, um schnell und sicher die besten Developer zu finden.
                        Nur die Top 25 % der Kandidaten bestehen unseren Prozess – für höchste Qualität und langfristige
                        Erfolge.
                    </p>
                </div>

                {/* Vertikale Timeline mit Prozessschritten */}
                <div className="relative mt-16 flex flex-col items-center">
                    {/* Vertikale Linie */}
                    <div className="absolute top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>

                    <div className="flex flex-col space-y-12">
                        {steps.map((step, index) => (
                            <div
                                key={step.title}
                                className={`relative flex flex-col items-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow w-full max-w-xl
                                transform transition-all duration-700 ease-out
                                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{
                                    transitionDelay: inView ? `${index * 150}ms` : '0ms',
                                }}
                            >
                                {/* Nummerierung */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-aqua-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className="mt-6">
                                    <step.icon className={`h-10 w-10 ${step.iconColor} mx-auto`} />
                                </div>

                                {/* Titel */}
                                <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">{step.title}</h3>

                                {/* Beschreibung */}
                                <p className="mt-2 text-base text-gray-700 text-center">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
