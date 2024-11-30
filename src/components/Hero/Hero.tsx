import React from 'react'
import Button from "../Button/Button.tsx";

type HeroContentTemp = {
    title: string;
    text: string;
    zr: string;
    car: string;
    description: string;
    buttons: {
        label: string;
        variant: "secondary" | "primary" | "danger" | "warning" | "success";
        link: string;
    }[]

}

const heroContent: HeroContentTemp = {
    title: "ZR CAR",
    text: "Bienvenue chez",
    zr: "ZR",
    car: "CAR",
    description: "Confiez votre véhicule à l'expertise d'un garagiste aguerri, capable d'intervenir sur toutes marques avec passion et professionnalisme.",
    buttons: [
        {
            label: "Découvrir plus",
            variant: "primary",
            link: "/about"
        },
        {
            label: "Contactez nous",
            variant: "secondary",
            link: "/contact"
        }
    ]

}

export default function Hero() {
  return (
      <div className="hero h-[70svh] relative z-[50]">
          <div className="absolute z-0 top-[50%] -left-[-50%] -translate-x-[50%] -translate-y-[50%] w-[30em] h-[30em] blur-[100px] rounded-full bg-red-600/30 bg-opacity-50"></div>
            <div className="container flex items-center justify-center h-full relative z-10">
                <div className="text-center flex flex-col items-center gap-5 text-gray-300">
                    <p className="text-white text-2xl">{heroContent.text}</p>
                    <h1 className="font-bold text-white text-8xl">
                        <span className="text-red-600">
                            {heroContent.zr}
                        </span>
                        {heroContent.car}
                    </h1>
                    <p className="text-2xl max-w-2xl">{heroContent.description}</p>
                    <div className="flex flex-col gap-3 md:flex-row">
                        {
                            heroContent.buttons.map((button, index) => (
                                <Button key={index} variant={button.variant} link={button.link}>{button.label}</Button>
                            ))
                        }
                    </div>
                </div>
            </div>
      </div>
  )
}