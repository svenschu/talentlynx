import CTAButton from "./CTAButton.tsx";

export default function Example() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    {/* Textbereich */}
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Besuchte Messen und Konferenzen, Text mittig, darunter logo slider
                        </h2>
                        <p className="mt-6 text-lg text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                            sed. Quam a
                            scelerisque amet ullamcorper eu enim et fermentum, augue.
                        </p>
                        <div className="mt-8 flex items-center gap-x-6">
                            <CTAButton/>
                        </div>
                    </div>
                    {/* Logos */}
                    <div
                        className="mx-auto grid w-full max-w-xl grid-cols-2 gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                        <div className="flex justify-center">
                            <img
                                alt="Tuple"
                                src="/src/assets/aws-summit-logo.png"
                                className="h-auto max-h-16 border border-gray-700 rounded-lg shadow-md shadow-gray-800"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                alt="Reform"
                                src="/src/assets/google-cloud-summit-logo.png"
                                className="h-auto max-h-16 border border-gray-700 rounded-lg shadow-md shadow-gray-800"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                alt="SavvyCal"
                                src="/src/assets/websummit-logo.png"
                                className="h-auto max-h-16 border border-gray-700 rounded-lg shadow-md shadow-gray-800"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                alt="Laravel"
                                src="/src/assets/green-tech-festival-logo.png"
                                className="h-auto max-h-16 border border-gray-700 rounded-lg shadow-md shadow-gray-800"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                alt="Transistor"
                                src="/src/assets/itsa-logo.png"
                                className="h-auto max-h-16 border border-gray-700 rounded-lg shadow-md shadow-gray-800"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
