import { useState, useEffect } from "react";

const features = [
    {
        name: 'Statement 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    },
    {
        name: 'Statement 2',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    },
    {
        name: 'Statement 3',
        description: 'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    },
];

const stats = [
    { id: 1, name: 'Vermittelte Kandidaten', value: '150+' },
    { id: 2, name: 'Risiko', value: '0%' },
    { id: 3, name: 'Durchschnittliche Einstellungszeit', value: '30 Tage' },
];

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
        <div className="bg-brand-primary-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Features Section */}
                <section className="mb-24">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-8 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
                        {features.map((feature, index) => (
                            <article
                                key={feature.name}
                                className={`text-center transform transition-opacity transition-transform duration-700 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                                style={{ transitionDelay: `${200 + index * 200}ms` }} // 200ms initial + 200ms pro Index
                            >
                                <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white">
                                    {feature.name}
                                </h3>
                                <p className="mt-2 text-lg sm:text-xl lg:text-xl">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </dl>
                </section>

                {/* Stats Section */}
                <section>
                    <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.id}
                                className={`flex flex-col bg-gray-700/50 p-8 transform transition-opacity transition-transform duration-700 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                                style={{ transitionDelay: `${400 + index * 200}ms` }} // 400ms initial + 200ms pro Index
                            >
                                <dt className="text-sm font-semibold text-brand-aqua-500 pt-2">
                                    {stat.name}
                                </dt>
                                <dd className="order-first text-3xl font-bold tracking-tight text-white">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </section>

            </div>
        </div>
    );
}
