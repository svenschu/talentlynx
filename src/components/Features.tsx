import { useEffect, useRef, useState } from 'react'
import {
    UserIcon,
    MagnifyingGlassIcon,
    ArrowTrendingUpIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/solid'

const features = [
    {
        name: 'Dein strategischer Partner (verschiedene Farben nehmen)',
        description:
            'Wir unterstützen dich bei jedem Schritt: von der Beratung bis zur langfristigen Betreuung nach der Einstellung. Gemeinsam optimieren wir Prozesse und bauen ein starkes Tech-Team für deinen Erfolg.',
        icon: ArrowTrendingUpIcon,
        chipText: 'Strategie',
        chipBgColor: 'bg-brand-aqua-600',
        chipTextColor: 'text-brand-aqua-50',
    },
    {
        name: 'Kein Risiko, nur Erfolg',
        description:
            'Unsere 0 % Risiko-Garantie schützt dich vor teuren Fehlbesetzungen. Profitiere von IT-Fachkräften, die direkt einen Mehrwert schaffen.',
        icon: MagnifyingGlassIcon,
        chipText: '0% Risiko',
        chipBgColor: 'bg-yellow-500',
        chipTextColor: 'text-white',
    },
    {
        name: 'Vorselektierte Kandidaten',
        description:
            'Nur die besten Talente kommen in die Auswahl – nach strenger Prüfung. Spare Zeit und Ressourcen mit unserem bewährten 15-Punkte-System.',
        icon: UserIcon,
    },
    {
        name: 'Netzwerk mit persönlichem Kontakt',
        description:
            'Mit 5000+ IT-Spezialisten aus unserem Face-to-Face-Netzwerk. Wir nutzen persönliche Kontakte, um die besten Talente zu finden.',
        icon: ExclamationCircleIcon,
    },
    {
        name: 'Technologie trifft Headhunting',
        description:
            'KI-gestützte Tools und persönliches Headhunting – die perfekte Kombination. Unsere smarte Strategie zieht täglich neue Talente an und hält uns der Konkurrenz voraus.',
        icon: ExclamationCircleIcon,
        chipText: 'Tech + HH',
        chipBgColor: 'bg-blue-600',
        chipTextColor: 'text-white',
    },
    {
        name: 'Neue Box',
        description:
            'Eine zusätzliche Box mit anpassbarem Chip. Ideal, um weitere Vorteile hervorzuheben.',
        icon: ExclamationCircleIcon,
        chipText: 'Extra',
        chipBgColor: 'bg-green-600',
        chipTextColor: 'text-white',
    }
]

export default function Example() {
    const [inView, setInView] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="lg:text-6xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Nur eine weitere Personalvermittlung?
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Nach Gesprächen mit über 400 Entscheidern aus dem Technologie-Sektor haben wir<br/>
                        vier zentrale Problembereiche identifiziert, die viele Unternehmen teilen.
                    </p>
                </div>
                <div
                    ref={containerRef}
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-6
                               sm:grid-cols-2 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 items-stretch"
                >
                    {features.map((feature, index) => {
                        const {
                            name,
                            description,
                            icon: Icon,
                            chipText = 'test',
                            chipBgColor = 'bg-brand-aqua-600',
                            chipTextColor = 'text-brand-aqua-50'
                        } = feature

                        return (
                            <div
                                key={name}
                                style={{
                                    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                                    transitionDelay: inView ? `${index * 150}ms` : '0ms',
                                }}
                                className={`flex flex-col h-full border border-gray-200 rounded-2xl p-8 shadow-sm 
                                            hover:shadow-xl transform
                                            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            >
                                <div
                                    className={`mb-4 flex text-sm/4 items-center justify-center rounded-full ${chipBgColor} ${chipTextColor} w-fit px-3 py-1.5`}
                                >
                                    <span>{chipText}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                                <p className="mt-2 text-base text-gray-600">{description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
