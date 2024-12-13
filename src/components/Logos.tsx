// Example.tsx
import React, {useState, useEffect} from 'react';
import CTAButton from "./CTAButton.tsx";
import awsSummitLogo from "../assets/aws-summit-logo.png";
import googleCloudSummitLogo from "../assets/google-cloud-summit-logo.png";
import webSummitLogo from "../assets/websummit-logo.png";
import greenTechFestivalLogo from "../assets/green-tech-festival-logo.png";
import itsaLogo from "../assets/itsa-logo.png";

// Swiper-Stile importieren
import 'swiper/css';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper/modules';

export default function Example() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verzögere das Einblenden leicht, um sicherzustellen, dass die Animation startet
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // 100ms Verzögerung

        return () => clearTimeout(timer);
    }, []);

    // Original Slides
    const slides = [
        {
            alt: "AWS Summit",
            src: awsSummitLogo.src,
        },
        {
            alt: "Google Cloud Summit",
            src: googleCloudSummitLogo.src,
        },
        {
            alt: "Web Summit",
            src: webSummitLogo.src,
        },
        {
            alt: "Green Tech Festival",
            src: greenTechFestivalLogo.src,
        },
        {
            alt: "ITSA",
            src: itsaLogo.src,
        },
    ];
    // DMX co Bits und Bretzels

    // Duplizierte Slides für nahtloses Looping
    const duplicatedSlides = [...slides, ...slides, ...slides];

    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Flex-Container für das Layout: flex-col auf kleineren Bildschirmen, flex-row auf größeren */}
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Linker Bereich: Text und CTA Button */}
                    <div
                        className={`w-full lg:w-1/2 transform transition-opacity transition-transform duration-700 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                        style={{transitionDelay: "200ms"}} // Verzögerung für den Textbereich
                    >
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Besuchte Messen und Konferenzen
                            </h2>
                            <p className="mt-6 text-lg text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus auch
                                sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
                            </p>
                        </div>
                    </div>

                    {/* Rechter Bereich: Logo Slider */}
                    <div
                        className={`w-full lg:w-1/2 transform transition-opacity transition-transform duration-700 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                        style={{transitionDelay: "400ms"}} // Verzögerung für den Slider
                    >
                        <Swiper
                            modules={[Autoplay]} // Nur Autoplay-Modul verwenden
                            spaceBetween={30}
                            slidesPerView={3} // Standardmäßig 3 Slides anzeigen
                            loop={true}
                            autoplay={{
                                delay: 0, // Kein Delay zwischen den Slides
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            speed={5000} // Geschwindigkeit für kontinuierliches Scrollen (in ms)
                            freeMode={true} // Ermöglicht kontinuierliches Scrollen
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 2, // Immer maximal 2 Slides anzeigen
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            {duplicatedSlides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex justify-center">
                                        <img
                                            alt={slide.alt}
                                            src={slide.src}
                                            className="h-auto max-h-16 sm:max-h-20 border border-gray-700 rounded-lg shadow-md shadow-gray-800"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
