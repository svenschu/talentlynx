const navigation = {
    main: [
        {name: 'Impressum', href: '#'},
        {name: 'Datenschutz', href: '#'},
        {name: 'AGB', href: '#'},
    ],
    social: [
        {
            name: 'LinkedIn',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22.447 0H1.553C.695 0 0 .695 0 1.553v20.894C0 23.305.695 24 1.553 24h20.894C23.305 24 24 23.305 24 22.447V1.553C24 .695 23.305 0 22.447 0zM7.12 20.452H3.98V9.084h3.14v11.368zm-1.57-12.996c-1.01 0-1.83-.82-1.83-1.83S4.54 3.796 5.55 3.796s1.83.82 1.83 1.83-.82 1.83-1.83 1.83zM20.453 20.452h-3.14v-5.479c0-1.307-.027-2.99-1.821-2.99-1.823 0-2.102 1.422-2.102 2.89v5.579h-3.14V9.084h3.014v1.552h.042c.42-.8 1.447-1.64 2.98-1.64 3.187 0 3.772 2.098 3.772 4.827v6.629z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function Example() {
    return (
        <footer className="bg-black">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
                    {navigation.main.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="mt-16 flex justify-center gap-x-10">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="size-6"/>
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-sm/6 text-gray-400">&copy; 2024 Your Company, Inc. All rights
                    reserved. All wrongs reversed.</p>
                <p className="mt-10 text-center font-mono text-sm/6 text-gray-400">
                    Mit Leidenschaft erstellt von <a href="https://simplexo.de" target="_blank" className="underline" >simplexo.de</a>
                </p>
            </div>
        </footer>
    )
}
