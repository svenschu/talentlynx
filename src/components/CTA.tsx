import Steps from "./Steps";

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div
                    className="relative isolate overflow-hidden bg-brand-primary-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
                >
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Finde die Richtigen für dein Team (hier die Prozessschritte einbauen)
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300 pb-12">
                        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident
                        excepteur
                        commodo do ea.
                    </p>
                    <Steps />
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-brand-aquamarine-500 px-3.5 py-2.5 text-sm font-mono font-semibold text-gray-900 shadow-sm hover:bg-brand-aquamarine-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Get started
                        </a>
                    </div>
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#koralle-blur)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="koralle-blur">
                                <stop stopColor="#FF6F61" /> {/* Koralle (deine Markenfarbe) */}
                                <stop offset={1} stopColor="#FFC1A6" /> {/* Hellerer Verlaufston */}
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}
