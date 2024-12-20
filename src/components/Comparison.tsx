// Example.tsx
import React, { useState, useEffect } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import CTAButton from "./CTAButton.tsx";

const tiers = [
    {
        name: 'Typische Konkurrenz',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: 'Andere Recruiter',
        description: "Einmalbesetzung, CV-Spamming und hohe Kosten. Risiko und mangelnde Transparenz gehören zum Standard.",
        features: [
            { text: 'Keine Risikominimierung & Fehlbesetzung', success: false },
            { text: 'Einmalbesetzung und kein langfristiges Engagement', success: false },
            { text: 'CV-Spamming & unpassende Kandidaten', success: false },
            { text: 'Schlecht vorbereitete Kandidaten', success: false },
            { text: 'Intransparente Preise und Black Box', success: false },
            { text: 'Abhängig von LinkedIn & InMails', success: false },
        ],
        featured: false,
    },
    {
        name: 'Unsere Lösung: TalentLynx (Hintergrund bei Icons + andere Farbe)',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: 'TalentLinx (Gradient einbauen)',
        description: "Langfristige Bindung, Präzision und Transparenz. Wir finden nicht nur Kandidaten, sondern die richtigen Talente. (Description entfernen)",
        features: [
            { text: '0 % Risiko Garantie & langfristige Bindung (darunter noch einen TExt einbauen)', success: true },
            { text: 'Precision Hiring: Nur Profile mit über 75 % Bewertung', success: true },
            { text: 'Kandidaten sind motiviert und vorbereitet', success: true },
            { text: '100 % Transparenz mit Einblick in unsere Prozesse', success: true },
            { text: 'Faire und transparente Preise mit Garantie', success: true },
            { text: 'Multichannel-Ansatz und KI-gestütztes Recruiting', success: true },
        ],
        featured: true,
    },
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

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
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
            <div className="mx-auto max-w-4xl text-center">
                <h2
                    className={`mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl 
                    transform transition-opacity transition-transform duration-700 
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: "200ms" }} // Verzögerung für die Überschrift
                >
                    Was wir bei TalentLinx anders machen
                </h2>
                <CTAButton />
            </div>
            <div
                className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured
                                ? 'relative bg-brand-primary-600 text-white shadow-2xl'
                                : 'bg-gray-100 text-gray-900 ring-1 ring-gray-200',
                            'rounded-3xl p-8 sm:p-10 transform transition-opacity transition-transform duration-700'
                        )}
                        style={{ transitionDelay: `${400 + tierIdx * 200}ms` }} // Verzögerung pro Karte
                    >
                        <h3 className="mt-4 flex items-baseline gap-x-2">
                            <span
                                className={classNames(
                                    tier.featured ? 'text-white' : 'text-gray-900',
                                    'text-5xl font-semibold tracking-tight'
                                )}
                            >
                                {tier.priceMonthly}
                            </span>
                        </h3>
                        <p
                            className={classNames(
                                tier.featured ? 'text-gray-300' : 'text-gray-700',
                                'mt-6 text-base/7'
                            )}
                        >
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured ? 'text-gray-300' : 'text-gray-700',
                                'mt-8 space-y-3 text-sm/6 sm:mt-10'
                            )}
                        >
                            {tier.features.map(({ text, success }) => (
                                <li key={text} className="flex gap-x-3">
                                    {success ? (
                                        <span
                                            className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-aqua-600">
                                            <CheckIcon
                                                aria-hidden="true"
                                                className="h-5 w-5 text-white"
                                            />
                                        </span>
                                    ) : (
                                        <span
                                            className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                                            <XMarkIcon
                                                aria-hidden="true"
                                                className="h-5 w-5 text-white"
                                            />
                                        </span>
                                    )}
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
