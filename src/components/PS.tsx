export default function Example() {
    return (
        <div className="bg-gray-900 text-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    {/* Linker Bereich: Bild mit Zitat */}
                    <div className="lg:pr-4">
                        <div
                            className="relative overflow-hidden rounded-3xl bg-brand-primary-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <img
                                alt="Inspirational"
                                src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                                className="absolute inset-0 h-full w-full object-cover brightness-110 saturate-0"
                            />
                            <div className="absolute inset-0 bg-brand-primary-900 mix-blend-multiply" />
                            <div
                                aria-hidden="true"
                                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                            >
                                <div
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-brand-coral-500 to-brand-aquamarine-500 opacity-40"
                                />
                            </div>
                            <figure className="relative isolate">
                                <blockquote className="mt-6 text-xl/8 font-semibold text-white">
                                    <p>
                                        “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu
                                        praesent at a. Ornare arcu gravida natoque erat et cursus tortor.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 text-sm/6 text-gray-300">
                                    <strong className="font-semibold text-white">Max Mustermann,</strong> CEO at Company
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    {/* Rechter Bereich: Text */}
                    <div>
                        <div className="text-base/7 text-gray-300 lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-brand-aquamarine-500">Unsere Mission</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                                Die besten Leute finden
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6">
                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                                    mauris semper sed amet vitae sed turpis id.
                                </p>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                                    blandit molestie auctor fermentum dignissim.
                                </p>
                                <p className="mt-8">
                                    Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac
                                    tempor et ut. Ac lorem vel integer orci.
                                </p>
                                <ul className="mt-10 space-y-4">
                                    <li className="flex items-center">
                                        <span className="mr-4 h-6 w-6 flex items-center justify-center rounded-full bg-brand-aquamarine-500 text-gray-900 font-semibold">1</span>
                                        <span>Step One: Clear goals and objectives</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-4 h-6 w-6 flex items-center justify-center rounded-full bg-brand-aquamarine-500 text-gray-900 font-semibold">2</span>
                                        <span>Step Two: Build a strong team</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-4 h-6 w-6 flex items-center justify-center rounded-full bg-brand-aquamarine-500 text-gray-900 font-semibold">3</span>
                                        <span>Step Three: Success through collaboration</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
