import {
    AcademicCapIcon,
    CheckCircleIcon,
    AdjustmentsHorizontalIcon,
    SparklesIcon,
} from '@heroicons/react/20/solid';
import Step from './Step'; // Passe den Pfad entsprechend an

const steps = [
    {
        title: "Talente entdecken",
        description: "Wir finden Entwickler auf Plattformen wie LinkedIn, GitHub, Stack Overflow, Messen und über Partnernetzwerke.",
        icon: AcademicCapIcon,
        iconColor: "text-brand-primary-500",
    },
    {
        title: "Vorauswahl mit KI",
        description: "Unsere KI analysiert Marktdaten, identifiziert Talente und erstellt datengetriebene Empfehlungen.",
        icon: SparklesIcon,
        iconColor: "text-brand-aquamarine-500",
    },
    {
        title: "15-Punkte-Filter",
        description: "Nur die Top 25 % bestehen unseren umfassenden Filter und qualifizieren sich für die nächste Phase.",
        icon: AdjustmentsHorizontalIcon,
        iconColor: "text-brand-coral-500",
    },
    {
        title: "Vorstellung",
        description: "Wir präsentieren sorgfältig ausgewählte, motivierte und vorbereitete Kandidaten für Ihre Position.",
        icon: CheckCircleIcon,
        iconColor: "text-brand-primary-500",
    },
];

export default function Example() {
    return (
        <div
            className="relative isolate overflow-hidden bg-gradient-to-br from-white to-brand-primary-50 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                {/* Überschrift und Untertitel */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Wie wir in 14 Tagen deine Position besetzen
                    </h1>
                    <p className="mt-6 text-xl text-gray-700">
                        Wir verbinden Technologie mit Erfahrung, um schnell und sicher die besten Developer zu finden.
                        Nur die Top 25 % der Kandidaten bestehen unseren Prozess – für höchste Qualität und langfristige
                        Erfolge.
                    </p>
                </div>

                {/* Vertikale Timeline mit Prozessschritten */}
                <div className="relative mt-16 flex flex-col items-center">
                    {/* Vertikale Linie */}
                    <div className="absolute top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>

                    <div className="flex flex-col space-y-12 w-full">
                        {steps.map((step, index) => (
                            <Step key={step.title} step={step} index={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
