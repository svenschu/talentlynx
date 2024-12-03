import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
    {
        question: "Unterstützt ihr jedes Unternehmen?",
        answer:
            "Wir konzentrieren uns auf Unternehmen im IT-Bereich, besonders auf Tech-Teams, die Softwareentwickler, Architekten, Test Engineers und mehr brauchen.",
    },
    {
        question: "Was unterscheidet euch von anderen Recruitern?",
        answer:
            "Wir sind mehr als nur ein Dienstleister – wir sind dein strategischer Partner. Wir begleiten dich von der ersten Beratung bis hin zur langfristigen Bindung der eingestellten Kandidaten.",
    },
    {
        question: "Wie lange dauert es, eine Stelle zu besetzen?",
        answer:
            "Dank unserer Inbound-Hiring-Strategie und eines Netzwerks von über 5000 IT-Fachkräften können wir dir qualifizierte Kandidaten oft innerhalb von 30 Tagen präsentieren.",
    },
    {
        question: "Wie minimiert ihr das Risiko von Fehlbesetzungen?",
        answer:
            "Mit unserer 0%-Risiko-Garantie und einem gründlichen 15-Punkte-Bewertungssystem stellen wir sicher, dass du nur die besten Kandidaten erhältst.",
    },
    {
        question: "Welche Technologien unterstützt euer Netzwerk?",
        answer:
            "Unser Netzwerk umfasst Experten in Technologien wie JavaScript, Python, AWS, React, Angular, .NET und vielen weiteren modernen Tools und Plattformen.",
    },
    {
        question: "Wie funktioniert eure Inbound-Hiring-Strategie?",
        answer:
            "Wir kombinieren Headhunting-Expertise mit modernster Technologie, KI und kontinuierlicher Marktanalyse, um die besten passiven Talente schnell und effizient für dich zu finden.",
    },
    {
        question: "Wie viel kostet es, mit euch zusammenzuarbeiten?",
        answer:
            "Unsere Preisstruktur ist transparent: Du zahlst nur, wenn wir erfolgreich die passenden Kandidaten für dich finden – ohne versteckte Kosten.",
    },
    {
        question: "Warum ist TalentLynx die beste Wahl für uns?",
        answer:
            "Wir liefern dir nicht nur schnelle Ergebnisse, sondern sorgen durch gründliche Auswahlverfahren und langfristige Bindungsstrategien für nachhaltigen Erfolg.",
    },
    // Weitere Fragen und Antworten können bei Bedarf hinzugefügt werden
];

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Häufig gestellte Fragen
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton
                                        className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MinusSmallIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
