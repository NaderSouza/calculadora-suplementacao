import Image from "next/image";
import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen min-w-screen bg-slate-950 ${inter.className}`}
    >
      <section className="max-w-screen-xl m-auto pt-20 bg-slate-950">
        <div className="">
          <div className="flex flex-col items-center text-center sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              width={100}
              height={100}
              src="/birl.svg"
              alt=""
              className="max-w-[100px]"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Calculadora de suplementação
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center text-center sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-300"
                id="texto-peso"
              >
                Peso
              </label>
              <div className="mt-2">
                <input
                  id="input-peso"
                  name="peso"
                  type="number"
                  autoComplete="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  className="block text-sm font-medium leading-6 text-gray-300"
                  id="texto-gordura"
                >
                  Porcentagem de gordura corporal
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  ></a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="input-gordura"
                  name="gordura"
                  type="number"
                  autoComplete="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
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
