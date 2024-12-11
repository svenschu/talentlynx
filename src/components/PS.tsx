export default function Example({ children }: any) {
    return (
        <div className="bg-brand-primary-900 text-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-16 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    {/* Linker Bereich: Bild mit Zitat */}
                    <div className="lg:pr-4 relative rounded-2xl overflow-hidden">
                        {/* Bildinhalt */}
                        {children}

                        {/* Farbverlauf-Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary-900 pointer-events-none rounded-2xl"></div>

                        {/* Zitat am unteren Rand */}
                        <figure className="absolute bottom-6 left-6 right-6">
                            <blockquote className="text-xl font-semibold text-white">
                                <p>
                                    „Erfolg entsteht, wenn Menschen zusammenkommen, um Großes zu schaffen.“
                                </p>
                            </blockquote>
                        </figure>
                    </div>

                    {/* Rechter Bereich: Text */}
                    <div>
                        <div className="text-base text-gray-300 lg:max-w-lg">
                            <p className="text-base font-semibold text-brand-aqua-500">Unsere Philosophie</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                                Gemeinsam Großes erreichen
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6">
                                    Wir glauben daran, dass die richtigen Menschen den Unterschied machen. Jedes Projekt beginnt mit einer Idee – und es sind die Talente, die sie Wirklichkeit werden lassen.
                                </p>
                                <p className="mt-8">
                                    Unser Ziel ist es, dir nicht nur Mitarbeiter zu vermitteln, sondern Partner für deine Vision zu finden. Durch sorgfältige Auswahl sorgen wir dafür, dass du nicht nur fachliche, sondern auch kulturelle Matches in deinem Team hast.
                                </p>
                                <p className="mt-8">
                                    Gemeinsam schaffen wir eine Basis für Innovation und nachhaltigen Erfolg – denn dein Erfolg ist unser Antrieb.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
