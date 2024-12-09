import {useRef, useState, useEffect} from 'react';

function Step({step, index}: any) {
    const [inView, setInView] = useState(false);
    const stepRef = useRef(null);

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
                rootMargin: '-50% 0px -50% 0px', // Trigger in the middle of the viewport
                threshold: 0,
            }
        );

        if (stepRef.current) {
            observer.observe(stepRef.current);
        }

        return () => {
            if (stepRef.current) {
                observer.unobserve(stepRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={stepRef}
            className={`relative flex flex-col items-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-opacity transition-transform max-w-md mx-auto ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '700ms',
                transitionTimingFunction: 'ease-out',
                transitionDelay: inView ? `${index * 150}ms` : '0ms',
            }}
        >
            {/* Nummerierung */}
            <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-aqua-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                {index + 1}
            </div>

            {/* Icon */}
            <div className="mt-6">
                <step.icon className={`h-10 w-10 ${step.iconColor} mx-auto`}/>
            </div>

            {/* Titel */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
                {step.title}
            </h3>

            {/* Beschreibung */}
            <p className="mt-2 text-base text-gray-700 text-center">
                {step.description}
            </p>
        </div>
    );
}

export default Step;
