const stats = [
    { id: 1, name: 'Lorem ipsum', value: '8,000+' },
    { id: 2, name: 'Lorem ipsum', value: '3%' },
    { id: 4, name: 'Lorem ipsum', value: '$70M' },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Lorem ispum dolor sit amet
                        </h2>
                        <p className="mt-4 text-lg/8 text-gray-600">
                            Lorem ipsum dolor sit amet consect adipisicing possimus.
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
