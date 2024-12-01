const testimonials = [
    {
        body: 'Mit diesem Team war die Suche nach Fachkräften ein Kinderspiel. Klare Kommunikation und schnelle Ergebnisse!',
        author: {
            name: 'Leslie Alexander',
            handle: 'lesliealexander',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'Die Zusammenarbeit war einfach großartig! Wir haben innerhalb von wenigen Wochen die perfekte Verstärkung gefunden.',
        author: {
            name: 'Michael Foster',
            handle: 'michaelfoster',
            imageUrl:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: 'Effizient, professionell und immer freundlich. Die Ergebnisse haben unsere Erwartungen übertroffen!',
        author: {
            name: 'Sarah Nguyen',
            handle: 'sarahnguyen',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
];

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-mono font-semibold text-brand-aquamarine-500">Kundenmeinungen</h2>
                    <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Was unsere Kunden über uns sagen
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                <figure className="rounded-2xl border border-gray-200 bg-white p-8 text-sm/6 shadow-sm">
                                    <blockquote className="text-gray-900">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <div className="relative">
                                            <div className="absolute inset-0 rounded-full border-4 border-brand-primary-500"></div>
                                            <img
                                                alt=""
                                                src={testimonial.author.imageUrl}
                                                className="relative size-10 rounded-full bg-gray-50"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
