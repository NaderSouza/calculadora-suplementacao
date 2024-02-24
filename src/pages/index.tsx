import Image from "next/image";
import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
import { Select, Option } from "@material-tailwind/react";
import Link from "next/link";
import { TESelect } from "tw-elements-react";

import React from "react";

const inter = Inter({ subsets: ["latin"] });
const Selector = () => {
  return (
    <div className=" w-72 font-medium h-80">
      <div className="bg-white w-full"></div>
    </div>
  );
};
export default function Home() {
  return (
    //  TELA TODA

    <main
      className={`min-h-screen min-w-screen w-screen h-screen bg-slate-950 ${inter.className}`}
    >
      {/* CONTAINER DO FORM */}
      <section className="max-w-screen-xl  m-auto pt-20 bg-slate-950">
        <div className="">
          {/* IMG FORM */}
          <div className="flex flex-col items-center text-center sm:mx-auto sm:w-full sm:max-w-sm">
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

                  {/* Ainda testar esse SVG ---
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-blue-400 pointer-events-none"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg> */}
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
            {/* BTN DROPDOWN */}

            {/* FINAL DO DROPDOWN */}

            {/* BTN DE CALCULAR */}
            <div>
              <Link rel="stylesheet" href="/src/pages/teste.tsx" />
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-fuchsia-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Calcular
              </button>
            </div>
          </form>
        </div>
        <div>{/* texto resultado */}</div>
      </section>
      <div>{/* modal de texto */}</div>
    </main>
  );
}
