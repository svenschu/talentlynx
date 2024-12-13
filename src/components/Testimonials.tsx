import {useState, useEffect} from "react";
import CTAButton from "./CTAButton";

const testimonials = [
    {
        id: 1,
        body: 'Mohamed is a trustworthy, dynamic recruiter and very reliable. When it comes to specific profiles , crucial for the development of one of our teams. Since effective recruiting is the key success factor in the tech industry, any minute spent with Mohamed adds value.',
        author: {
            name: 'Sven Scheffler COO Ströer Content Group',
            handle: 'lesliealexander1',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        body: 'Mohamed hat die von uns gestellten Herausforderungen hervorragend gelöst. Binnen kurzer Zeit stand eine sehr gute Auswahl an Kandidat:innen zur Verfügung. Der Interviewprozess wurde entschlossen und transparent gestaltet, sodass wir die für uns beste Auswahl treffen konnten. Vielen Dank und gerne wieder.',
        author: {
            name: 'Christian Fischer, Director of Engineering @Erblotse',
            handle: 'lesliealexander2',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        body: 'I had the pleasure of working with Mohamed when he placed me in my current role. Mohamed was professional, straightforward, and efficient throughout the entire process. He took the time to understand my career goals and the company’s needs, ensuring a perfect match. His pleasant demeanor and clear communication made the experience seamless and enjoyable. I highly recommend Mohamed to any professional seeking new opportunities or any organization looking for an effective recruiter.',
        author: {
            name: 'Stephan Delkus Geschäftsführer Itslearning GmbH',
            handle: 'lesliealexander3',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        body: 'I am thrilled to recommend Mohamed, who played a pivotal role in helping me secure my current job. Throughout the recruitment process, Mohamed demonstrated exceptional professionalism, technical expertise, and a genuine dedication to my career goals.\n' +
            'From our initial conversation, it was clear that Mohamed is incredibly result-oriented. He took the time to understand my skills, experiences, and career aspirations, ensuring that every opportunity he presented was a perfect fit. His insightful guidance and proactive approach kept me motivated and focused throughout the job search process.\n' +
            'Mohamed\'s standout qualities are his unwavering confidence and technical acumen. He has a deep understanding of the industry and the specific technical requirements of the roles he recruits. This expertise enabled him to provide me with invaluable advice and prepare me thoroughly for each interview stage.\n' +
            'Additionally, Mohamed was always available to offer support and answer my questions. His helpfulness and commitment to my success was evident in every interaction. He went above and beyond to ensure that I was well-prepared and confident, which ultimately led to a successful outcome.\n' +
            'I am incredibly grateful to Mohamed for His assistance and highly recommend him to anyone seeking a knowledgeable, dedicated, and result-driven recruiter. His expertise and support have profoundly impacted my career, and I am confident he will continue to excel in helping others achieve their career goals.',
        author: {
            name: 'Arman Karimi (Senior Software Engineer)ZAGENO Inc.',
            handle: 'lesliealexander3',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
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
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Überschrift und Untertitel */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2
                        className={`text-base font-semibold text-brand-aqua-600 
                        transform transition-opacity transition-transform duration-700 
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        style={{transitionDelay: "200ms"}}
                    >
                        Testimonials
                    </h2>
                    <p
                        className={`mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl 
                        transform transition-opacity transition-transform duration-700 
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        style={{transitionDelay: "400ms"}}
                    >
                        We have worked with thousands of amazing people
                    </p>
                    <CTAButton />
                </div>

                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    {/* Verwende CSS Grid statt CSS Columns */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`pt-8 transform transition-opacity transition-transform duration-700 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                                style={{transitionDelay: `${600 + index * 200}ms`}} // 600ms initial + 200ms pro Index
                            >
                                <figure className="rounded-2xl bg-gray-50 p-8 text-sm">
                                    <blockquote className="text-gray-900">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <img
                                            alt={testimonial.author.name}
                                            src={testimonial.author.imageUrl}
                                            className="h-10 w-10 rounded-full bg-gray-50"
                                        />
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
