import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "./components/Button";
import { Noto_Sans_Lao } from "next/font/google";

import RadioButton from "./components/radioButton";
import Modal from "./components/Modal";
import { AlertTriangle, CheckCircle } from "lucide-react";
import ModalCalc from "./components/ModalCalc";
import { useState } from "react";

const noto = Noto_Sans_Lao({ subsets: ["latin"] });

export default function Home() {
  const { register, handleSubmit } = useForm();

  const brands: OptionProps[] = [
    { value: "growth", label: "Growth" },
    { value: "maxtitanium", label: "Max Titanium" },
    { value: "integralMedica", label: "Integral Médica" },
  ];

  const calcSupplements = ({ weight, bodyFatPercentage }: BodyData | any) => {
    // return alert(weight + bodyFatPercentage);
    return weight + bodyFatPercentage;
  };

  const warning = (
    <AlertTriangle className="text-yellow-400 size-12 pb-2 m-auto" />
  );
  const calc = <CheckCircle className="text-emerald-500 size-12 pb-2 m-auto" />;

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <main
      className={`flex justify-center items-center min-h-screen min-w-screen bg-slate-950 ${noto.className}`}
    >
      <section className="rounded-xl min-w-screen-2xl p-5 bg-slate-900">
        <div className=" ">
          <div className="flex flex-col items-center text-center  sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              width={100}
              height={100}
              src="/birl.svg"
              alt=""
              className="max-w-[100px]"
            />
            <h2 className="mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Calculadora de suplementação
            </h2>
          </div>
        </div>
        {/* TEXTO DO PESO */}
        <div className="flex flex-col items-center text-left sm:mx-auto sm:w-full">
          <form
            className="space-y-10"
            onSubmit={handleSubmit(calcSupplements)}
            id="formSupplements"
          >
            <div>
              <label
                htmlFor="input-6"
                className="block text-lg font-medium text-gray-700 dark:text-gray-100"
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
                  {...register("weight")}
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
                className="block text-lg font-medium text-gray-700 dark:text-gray-100"
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
                  {...register("bodyFatPercentage")}
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
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-5">
              {brands.map((brand, index) => (
                <RadioButton
                  key={index}
                  value={brand.value}
                  label={brand.label}
                ></RadioButton>
              ))}
            </div>
            {/* FINAL DO RADIO */}

            {/* BTN DE CALCULAR */}
            <div className="flex h-full justify-center items-center rounded-md px-4 py-1.5">
              <Button type="submit" success onClick={() => setIsOpen(true)}>
                Calcular
              </Button>
            </div>
          </form>
        </div>
      </section>
      <div>
        {/* modal de alerta de texto (exibir ao entrar na pagina) */}
        <Modal icon={warning} title="Termos de uso" buttonText="OK">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, !6.
        </Modal>
      </div>

      <div>
        {/* modal de texto para o resultado (exibir ao clicar em calcular)*/}
        {isOpen && (
          <ModalCalc
            icon={calc}
            title="Resultado"
            buttonText="OK"
            onClose={closeModal}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
          </ModalCalc>
        )}
      </div>
    </main>
  );
}
