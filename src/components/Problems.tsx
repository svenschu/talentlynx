import { useEffect, useRef, useState } from 'react'
import {
    ExclamationCircleIcon,
    MagnifyingGlassCircleIcon,
    UserGroupIcon,
    ClockIcon
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Steigende Einstellungskosten',
        description: 'Die Kosten für die Rekrutierung steigen stetig, was die Vermeidung von Fehleinstellungen immer wichtiger macht.',
        icon: ExclamationCircleIcon,
    },
    {
        name: 'Schwierigkeit, Top-Talente anzuziehen',
        description: 'Vor allem passive Bewerber sind zunehmend schwerer zu erreichen und zu begeistern.',
        icon: MagnifyingGlassCircleIcon,
    },
    {
        name: 'Herausforderung, Talente zu halten',
        description: 'Selbst hochqualifizierte Entwickler wandern ab, wenn sie nicht entsprechend gefördert werden.',
        icon: UserGroupIcon,
    },
    {
        name: 'Projektverzögerungen',
        description: 'Offene Stellen bleiben unbesetzt, was Projekteinschränkungen und Verzögerungen nach sich zieht.',
        icon: ClockIcon,
    },
]

export default function Example() {
    const [inView, setInView] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <div ref={sectionRef} className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div
                        className={`px-6 lg:px-0 lg:pr-4 lg:pt-4 transform transition-all duration-700 ease-out
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Kennst du diese Probleme?
                            </p>
                            <p className="mt-6 text-lg text-gray-600">
                                Nach Gesprächen mit über 400 Entscheidern aus dem Technologie-Sektor zeigen sich diese zentralen Problemfelder:
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.name}
                                        className="relative pl-9 transform transition-all duration-700 ease-out"
                                        style={{
                                            transitionDelay: inView ? `${index * 150}ms` : '0ms',
                                            opacity: inView ? 1 : 0,
                                            transform: inView ? 'translateY(0)' : 'translateY(10px)',
                                        }}
                                    >
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon
                                                aria-hidden="true"
                                                className="absolute left-1 top-1 h-5 w-5 text-brand-aqua-600"
                                            />
                                            {feature.name}
                                        </dt>
                                        {' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div
                            className={`relative isolate overflow-hidden bg-brand-aqua-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none transition-all duration-700 ease-out
                            ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                        >
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
                                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                                />
                            </div>
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
