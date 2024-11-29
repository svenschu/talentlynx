import CTAButton from "./CTAButton.tsx";

export default function Example() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    {/* Textbereich */}
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Besuchte Messen und Konferenzen
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
                    <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                        <img
                            alt="Tuple"
                            src="https://tailwindui.com/plus/img/logos/tuple-logo-white.svg"
                            width={105}
                            height={48}
                            className="max-h-12 w-full object-contain object-left"
                        />
                        <img
                            alt="Reform"
                            src="https://tailwindui.com/plus/img/logos/reform-logo-white.svg"
                            width={104}
                            height={48}
                            className="max-h-12 w-full object-contain object-left"
                        />
                        <img
                            alt="SavvyCal"
                            src="https://tailwindui.com/plus/img/logos/savvycal-logo-white.svg"
                            width={140}
                            height={48}
                            className="max-h-12 w-full object-contain object-left"
                        />
                        <img
                            alt="Laravel"
                            src="https://tailwindui.com/plus/img/logos/laravel-logo-white.svg"
                            width={136}
                            height={48}
                            className="max-h-12 w-full object-contain object-left"
                        />
                        <img
                            alt="Transistor"
                            src="https://tailwindui.com/plus/img/logos/transistor-logo-white.svg"
                            width={158}
                            height={48}
                            className="max-h-12 w-full object-contain object-left"
                        />
                        <img
                            alt="Statamic"
                            src="https://tailwindui.com/plus/img/logos/statamic-logo-white.svg"
                            width={147}
                            height={48}
                            className="max-h-12 w-full object-contain object-left"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
