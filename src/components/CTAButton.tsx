import { PhoneIcon } from '@heroicons/react/20/solid'

export default function CTAButton() {
    return (
        <button
            className="relative w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 text-base font-mono font-bold text-white rounded-md bg-gradient-to-r from-brand-primary-500 to-brand-aquamarine-500 transition-transform duration-300 hover:scale-105 focus:outline-none"
        >
            {/* Telefon-Icon */}
            <PhoneIcon className="w-5 h-5 text-white" />

            {/* Text */}
            <span>Beratungstermin vereinbaren</span>
        </button>
    )
}
