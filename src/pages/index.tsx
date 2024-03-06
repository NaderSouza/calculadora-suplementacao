import { zodResolver } from "@hookform/resolvers/zod";
import { Noto_Sans_Lao } from "next/font/google";
import Image from "next/image";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import z from "zod";

import Button from "./components/Button";
import Modal from "./components/Modal";

import { calculateDosages } from "../scripts/dosages";
import Table from "./components/Table";

const noto = Noto_Sans_Lao({ subsets: ["latin"] });

const brands = ["growth", "maxTitanium", "integralMedica"] as any;

const calcSuplementsFormSchema = z.object({
  weight: z
    .string({
      errorMap: (issue: any, _ctx: any): { message: string } => ({
        message: "Preencha seu peso.",
      }),
    })
    .min(1)
    .transform((weight: string) => {
      return weight.trim().replace(/_/g, "");
    }),
  bodyFatPercentage: z
    .string({
      errorMap: (issue: any, _ctx: any): { message: string } => ({
        message: "Preencha sua porcentagem de gordura corporal.",
      }),
    })
    .min(1)
    .transform((bodyFatPercentage: string) => {
      return bodyFatPercentage.trim().replace(/%_/g, "");
    }),
  brand: z.nativeEnum(brands, {
    errorMap: (issue: any, _ctx: any): { message: string } => ({
      message: "Selecione uma marca.",
    }),
  }),
});

type CalcSuplementsFormSchema = z.infer<typeof calcSuplementsFormSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CalcSuplementsFormSchema>({
    resolver: zodResolver(calcSuplementsFormSchema),
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const [contentModalCalc, setContentModalCalc] = useState(<div />);
  const [openWarningModal, setOpenWarningModal] = useState(true);
  const [openSuplementsModal, setOpenSuplementsModal] = useState(false);

  const submitCalculateDosages = (bodyData: BodyData) => {
    const { dosages, suplementScoops } = calculateDosages(bodyData);
    setContentModalCalc(
      <Table
        title={suplementScoops.brandName}
        columns={["Suplemento", "Quantidade (g)", "Scoops", "Observação"]}
        rows={[
          [
            "Proteína",
            `${dosages.protein}g`,
            "",
            "É recomendado consumir fontes naturais de proteína em sua dieta. Use o suplemento apenas para complementar o que está faltando.",
          ],
          [
            "Dose de saturação de creatina (5 a 7 dias)",
            `${dosages.creatineSaturation}g`,
            `${suplementScoops.creatineSaturation} scoops`,
            "É recomendado o uso fracionado do suplemento durante o dia.",
          ],
          [
            "Dose de manutenção de creatina",
            `${dosages.creatineMaintenance}g`,
            `${suplementScoops.creatineMaintenance} scoops`,
            "É recomendado o uso fracionado do suplemento durante o dia.",
          ],
          [
            "Dose de beta-alanina",
            `${dosages.betaAlanine}g`,
            `${suplementScoops.betaAlanine} scoops`,
            "É recomendado o uso fracionado do suplemento durante o dia.",
          ],
        ]}
      />
    );
    setOpenSuplementsModal(true);
  };

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <main
      className={`flex justify-center items-center min-h-screen min-w-screen bg-slate-950 ${noto.className}`}
    >
      <section className="rounded-xl min-w-screen-2xl p-5 bg-slate-900">
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
        <div className="flex flex-col items-center text-left sm:mx-auto sm:w-full">
          <form
            className="space-y-2"
            onSubmit={handleSubmit(submitCalculateDosages)}
            id="formSupplements"
          >
            <div>
              <label
                htmlFor="input-size"
                className="block text-lg font-medium text-gray-700 dark:text-gray-100"
              >
                Peso
              </label>
              <div className="relative mt-1">
                <InputMask
                  type="text"
                  id="input-size"
                  className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500"
                  placeholder="Digite seu peso"
                  mask="999"
                  {...register("weight")}
                />
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
              {errors.weight && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.weight.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="input-size"
                className="block text-lg font-medium text-gray-700 dark:text-gray-100"
              >
                Porcentagem de gordura corporal
              </label>
              <div className="relative mt-1">
                <InputMask
                  type="text"
                  id="input-bodyFatPercentage"
                  className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500"
                  placeholder="Digite sua % de gordura"
                  mask="99%"
                  {...register("bodyFatPercentage")}
                />
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
              {errors.bodyFatPercentage && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.bodyFatPercentage.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-5">
              <div className="inline-flex items-center mt-3">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="radioButton-growth"
                >
                  <input
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400 checked:before:bg-gray-400 hover:before:opacity-10"
                    id={`radioButton-growth`}
                    value="growth"
                    {...register("brand")}
                  />
                  <span className="absolute text-emerald-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <title>brand</title>
                      <circle data-name="ellipse" cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px text-gray-200 cursor-pointer select-none"
                  htmlFor="radioButton-growth"
                  onClick={handleLabelClick}
                  onKeyUp={handleLabelClick}
                  onKeyDown={handleLabelClick}
                >
                  Growth
                </label>
              </div>
              <div className="inline-flex items-center mt-3">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="radioButton-maxTitanium"
                >
                  <input
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400 checked:before:bg-gray-400 hover:before:opacity-10"
                    id="radioButton-maxTitanium"
                    value="maxTitanium"
                    {...register("brand")}
                  />
                  <span className="absolute text-emerald-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <title>brand</title>
                      <circle data-name="ellipse" cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px text-gray-200 cursor-pointer select-none"
                  htmlFor="radioButton-maxTitanium"
                  onClick={handleLabelClick}
                  onKeyUp={handleLabelClick}
                  onKeyDown={handleLabelClick}
                >
                  Max Titanium
                </label>
              </div>
              <div className="inline-flex items-center mt-3">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="radioButton-integralMedica"
                >
                  <input
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400 checked:before:bg-gray-400 hover:before:opacity-10"
                    id="radioButton-integralMedica"
                    value="integralMedica"
                    {...register("brand")}
                  />
                  <span className="absolute text-emerald-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <title>brand</title>
                      <circle data-name="ellipse" cx="8" cy="8" r="8" />
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px text-gray-200 cursor-pointer select-none"
                  htmlFor="radioButton-integralMedica"
                  onClick={handleLabelClick}
                  onKeyUp={handleLabelClick}
                  onKeyDown={handleLabelClick}
                >
                  Integral Médica
                </label>
              </div>
            </div>
            {errors?.brand && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {typeof errors.brand.message === "string" &&
                  errors.brand?.message}
              </p>
            )}
            <div className="flex h-full justify-center items-center rounded-md px-4 py-1.5">
              <Button layout="approved" success>
                Calcular
              </Button>
            </div>
          </form>
        </div>
      </section>
      {openWarningModal && (
        <Modal
          icon="warning"
          title="AVISO!!!"
          buttonText="OK"
          layout="default"
          onClose={setOpenWarningModal}
        >
          Este site fornece apenas uma orientação geral para o consumo de
          suplementos. Recomendamos que consulte um nutricionista para avaliar
          suas necessidades específicas e garantir uma dieta adequada às suas
          necessidades individuais.
        </Modal>
      )}
      {openSuplementsModal && (
        <Modal
          icon="success"
          title="Tabela de suplementação"
          buttonText="OK"
          layout="large"
          onClose={setOpenSuplementsModal}
        >
          {contentModalCalc}
        </Modal>
      )}
    </main>
  );
}
