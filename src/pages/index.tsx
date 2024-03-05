import { zodResolver } from "@hookform/resolvers/zod";
import { Noto_Sans_Lao } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import z from "zod";

import Button from "./components/Button";
import Modal from "./components/Modal";

import RadioButton from "./components/RadioButton";

import { calculateDosages } from "../scripts/dosages";
import Table from "./components/Table";

const noto = Noto_Sans_Lao({ subsets: ["latin"] });

const brands = ["growth", "maxTitanium", "integralMedica"] as any;

const calcSuplementsFormSchema = z.object({
	weight: z
		.string({
			errorMap: (issue, _ctx): { message: string } => ({
				message: "Preencha seu peso.",
			}),
		}).min(1)
		.transform((weight) => {
			return weight.trim().replace(/_/g, "");
		}),
	bodyFatPercentage: z
		.string({
			errorMap: (issue, _ctx): { message: string } => ({
				message: "Preencha sua porcentagem de gordura corporal.",
			}),
		}).min(1)
		.transform((bodyFatPercentage) => {
			return bodyFatPercentage.trim().replace(/%_/g, "");
		}),
	brand: z.nativeEnum(brands, {
		errorMap: (issue, _ctx): { message: string } => ({
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
			/>,
		);
		setOpenSuplementsModal(true);
	};

	const brands: OptionProps[] = [
		{ value: "growth", label: "Growth", register },
		{ value: "maxTitanium", label: "Max Titanium", register },
		{ value: "integralMedica", label: "Integral Médica", register },
	];

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
							{brands.map((brand) => (
								<RadioButton
									key={brand.value}
									value={brand.value}
									label={brand.label}
									register={brand.register}
								/>
							))}
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
