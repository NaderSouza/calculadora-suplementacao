import Image from "next/image";
import { Button } from "./components/Button";

import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
import Link from "next/link";

import React from "react";
import RadioButton from "./components/radioButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const brands: Option[] = [
    { value: "growth", label: "Growth" },
    { value: "maxtitanium", label: "Max Titanium" },
    { value: "integralMedica", label: "Integral Médica" },
  ];

  return (
    <main
      className={`flex justify-center items-center min-h-screen min-w-screen bg-slate-950 ${inter.className}`}
    >
      {/* CONTAINER FORM */}
      <section className="rounded-xl max-w-screen-sm p-5 bg-slate-900">
        {/* CONTAINER IMG */}
        <div className=" ">
          {/* IMG FORM */}
          <div className="flex flex-col items-center text-center  sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              width={100}
              height={100}
              src="/birl.svg"
              alt=""
              className="max-w-[100px]"
            />

            {/* TEXTO DA CALCULADORA */}
            <h2 className="mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Calculadora de suplementação
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center text-center sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              {/* TEXTO DO PESO */}
              <label
                htmlFor="input-6"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100"
              >
                Peso
              </label>

              {/* INPUT DO PESO */}
              <div className="relative mt-1">
                <input
                  type="number"
                  id="input-6"
                  className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500"
                  placeholder="Digite seu peso"
                />

                {/* ICON DO INPUT */}
                <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <Image
                    width={100}
                    height={100}
                    src="/peso.svg"
                    alt=""
                    className="w-4 h-4 text-blue-400 pointer-events-none"
                  />
                </span>
              </div>
            </div>
            <div>
              {/* TEXTO DA GORDURA */}
              <label
                htmlFor="input-6"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100"
              >
                Porcentagem de gordura corporal
              </label>
              {/* INPUT DA GORDURA */}
              <div className="relative mt-1">
                <input
                  type="number"
                  id="input-6"
                  className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500"
                  placeholder="Digite sua % de gordura"
                />

                {/* ICON DA GORDURA */}
                <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <Image
                    width={100}
                    height={100}
                    src="/gordura.svg"
                    alt=""
                    className="w-4 h-4 text-blue-400 pointer-events-none"
                  />
                </span>
              </div>
            </div>
            {/* RADIO BUTTON */}
            <div className="flex gap-10">
              {brands.map((brand) => (
                <RadioButton
                  value={brand.value}
                  label={brand.label}
                ></RadioButton>
              ))}
            </div>
            {/* FINAL DO RADIO */}

            <div className="flex h-full justify-center items-center rounded-md px-4 py-1.5"></div>

            {/* BTN DE CALCULAR */}
            <div className="flex h-full justify-center items-center rounded-md px-4 py-1.5">
              <Button success>Calcular</Button>
            </div>
          </form>
        </div>
        <div>{/* texto resultado */}</div>
      </section>
      <div>{/* modal de alerta de texto (exibir ao entrar na pagina) */}</div>
      <div>
        {/* modal de texto para o resultado (exibir ao clicar em calcular)*/}
      </div>
    </main>
  );
}
