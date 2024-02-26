import Image from "next/image";
import { Button } from "./components/Button";
import { Radio } from "@material-tailwind/react";

import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
import Link from "next/link";

import { Select, Option } from "@material-tailwind/react";
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
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="html"
                >
                  <input
                    name="type"
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400 checked:before:bg-gray-400 hover:before:opacity-10"
                    id="html"
                  />
                  <span className="absolute text-gray-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px font-light text-gray-200 cursor-pointer select-none"
                  htmlFor="html"
                >
                  HTML 2
                </label>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="react"
                >
                  <input
                    name="type"
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400 checked:before:bg-gray-400 hover:before:opacity-10"
                    id="react"
                    checked
                  />
                  <span className="absolute text-gray-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px font-light text-gray-200 cursor-pointer select-none"
                  htmlFor="react"
                >
                  React
                </label>
              </div>
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
      <div>{/* modal de texto */}</div>
    </main>
  );
}
