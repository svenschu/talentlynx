const navigation = {
    main: [
        { name: 'Impressum', href: '#' },
        { name: 'Datenschutz', href: '#' },
        { name: 'AGB', href: '#' },
    ],
    social: [
        {
            name: 'LinkedIn',
            href: '#',
            icon: (props: any) => (
                <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path
                        fill="#0A66C2"
                        d="M22.447 0H1.553C.695 0 0 .695 0 1.553v20.894C0 23.305.695 24 1.553 24h20.894C23.305 24 24 23.305 24 22.447V1.553C24 .695 23.305 0 22.447 0z"
                    />
                    <path
                        fill="#FFFFFF"
                        d="M7.12 20.452H3.98V9.084h3.14v11.368zM5.55 7.456c-1.01 0-1.83-.82-1.83-1.83S4.54 3.796 5.55 3.796s1.83.82 1.83 1.83-.82 1.83-1.83 1.83zM20.453 20.452h-3.14v-5.479c0-1.307-.027-2.99-1.821-2.99-1.823 0-2.102 1.422-2.102 2.89v5.579h-3.14V9.084h3.014v1.552h.042c.42-.8 1.447-1.64 2.98-1.64 3.187 0 3.772 2.098 3.772 4.827v6.629z"
                    />
                </svg>
            ),
        },
    ],
};

export default function Example() {
    return (
        <footer className="bg-gray-950">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                {/* LinkedIn Icon */}
                <div className="flex justify-center mb-6">
                    {navigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center hover:opacity-80"
                            aria-label={item.name}
                        >
                            <item.icon className="h-8 w-8" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                {/* Navigation Links */}
                <nav
                    aria-label="Footer"
                    className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm/6"
                >
                    {navigation.main.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-400 hover:text-brand-aquamarine-500"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
                {/* Footer Copywriting */}
                <p className="mt-10 text-center text-sm/6 text-gray-400">
                    &copy; 2024 Your Company, Inc. All rights reserved. All wrongs reversed.
                </p>
                <p className="mt-6 text-center font-mono text-sm/6 text-gray-400">
                    Mit Leidenschaft erstellt von{' '}
                    <a
                        href="https://simplexo.de"
                        target="_blank"
                        className="underline hover:text-brand-coral-500"
                    >
                        simplexo.de
                    </a>
                </p>
            </div>
        </footer>
    );
}
