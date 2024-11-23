import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
];

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <div
            className="relative isolate overflow-hidden bg-brand-primary-500"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamischer Hintergrund-Effekt */}
            <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(3, 155, 229, 0.5), transparent 80%)`,
                }}
            />

            {/* Gitter-Hintergrund */}
            <svg
                aria-hidden="true"
                className="absolute inset-0 -z-20 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="grid-pattern"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect fill="url(#grid-pattern)" width="100%" height="100%" />
            </svg>

            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    aria-label="Global"
                    className="flex items-center justify-between p-6 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=aquamarine&shade=500"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold text-white hover:text-brand-aquamarine-400"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </header>

            <div className="relative isolate pt-14">
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            {/* Titel mit sauberem Leuchteffekt */}
                            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                                Data to enrich your{" "}
                                <span className="relative text-brand-aquamarine-400">
                                    <span
                                        className="absolute inset-0 blur-md opacity-50 -z-10"
                                        aria-hidden="true"
                                    />
                                    online business
                                </span>
                            </h1>

                            {/* Beschreibung */}
                            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                commodo. Elit sunt amet fugiat veniam occaecat.
                            </p>

                            {/* Call-to-Actions */}
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-brand-coral-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-brand-coral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral-400 transition-all hover:scale-105"
                                >
                                    Get started
                                </a>
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-white hover:text-brand-aquamarine-300 underline-offset-4 hover:underline"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
