const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '37' },
    { label: 'Countries', value: '12' },
    { label: 'Raised', value: '$25M' },
];

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Bild auf der linken Seite */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl lg:max-w-lg">
                        <img
                            alt="Company related visual"
                            src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Inhalt auf der rechten Seite */}
                    <div>
                        <div className="text-base/7 text-gray-700 lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-indigo-600">Company values</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                On a mission to empower remote teams
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6">
                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                    erat velit.
                                </p>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                                    auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                                    hac adipiscing egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
