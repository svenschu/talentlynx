const stats = [
    { id: 1, name: 'Vermittelte Kandidaten', value: '150+' },
    { id: 2, name: 'Risiko', value: '0%' },
    { id: 3, name: 'Durchschnittliche Einstellungszeit', value: '30 Tage' },
];

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Wir finden dein IT-Talent
                        </h2>
                        <p className="mt-4 text-lg/8 text-gray-600">
                            Mit Talentlynx läuft die Suche nach IT-Fachkräften einfach, schnell und ohne Stress.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                                <dt className="text-sm/6 font-semibold text-brand-primary-700">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-brand-aquamarine-500">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
