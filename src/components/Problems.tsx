import {
    UserIcon,
    MagnifyingGlassIcon,
    ArrowTrendingUpIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/solid'

const features = [
    {
        name: 'Steigende Einstellungskosten',
        description:
            'Hohe Kosten machen es wichtiger, Fehlbesetzungen zu vermeiden.',
        icon: ArrowTrendingUpIcon,
    },
    {
        name: 'Top-Entwickler finden',
        description:
            'Die besten Entwickler sind schwer erreichbar, vor allem passive Kandidaten.',
        icon: MagnifyingGlassIcon,
    },
    {
        name: 'Talente halten',
        description:
            'Es wird immer schwieriger, gute Entwickler langfristig im Team zu halten.',
        icon: UserIcon,
    },
    {
        name: 'Verzögerte Projekte',
        description:
            'Unbesetzte Stellen bremsen Projekte und gefährden den Erfolg.',
        icon: ExclamationCircleIcon,
    },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Kennst du diese Probleme?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Nach Gesprächen mit über 400 Entscheidern aus dem Technologie-Sektor haben wir
                        vier zentrale Problembereiche identifiziert, die viele Unternehmen teilen.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="flex flex-col rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            {/* Icon mit Brand-Farben */}
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-aquamarine-500">
                                <feature.icon
                                    aria-hidden="true"
                                    className="h-6 w-6 text-white"
                                />
                            </div>
                            {/* Titel */}
                            <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                            {/* Beschreibung */}
                            <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
