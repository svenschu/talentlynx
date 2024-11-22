import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Spam report',
        description:
            'Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum.',
        icon: TrashIcon,
    },
    {
        name: 'Compose in markdown',
        description:
            'Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Email commenting',
        description:
            'Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis.',
        icon: ChatBubbleOvalLeftEllipsisIcon,
    },
    {
        name: 'Customer connections',
        description:
            'Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis.',
        icon: HeartIcon,
    },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Stay on top of customer support
                    </h2>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="flex flex-col rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600">
                                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                            <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

