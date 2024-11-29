import React from 'react'
import Button from "../Button/Button.tsx";

export default function Hero() {
  return (
      <div className="hero h-[100svh] relative z-[50]">
          <div className="container h-full">
              <img src="/images/a32.png" className="absolute pointer-events-none -bottom-12 left-0 w-full object-cover" alt="ZRCAR" />
                  <div className="flex flex-col items-center pt-40 h-full">
                      <span className="text-2xl">Bienvenue chez</span>
                      <h1 className="text-9xl flex items-center text-start mb-5 font-bold">
                          <span className="text-red-600">ZR</span>CAR
                      </h1>
                      <div className="justify-center">
                          <div className="max-w-2xl text-center font-medium">
                              <p className="mb-5 font-montserrat text-xl">Confiez votre véhicule à l'expertise d'un
                                  garagiste aguerri, capable d'intervenir sur toutes marques avec passion et
                                  professionnalisme.</p>
                          </div>
                      </div>
                      <div
                          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
                          <Button link="#">
                              Faire un tour
                          </Button>
                          <Button link="#" variant="secondary">
                              Nous contacter
                          </Button>
                      </div>
                  </div>
          </div>
      </div>
  )
}