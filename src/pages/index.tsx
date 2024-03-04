import { AlertTriangle, CheckCircle } from "lucide-react";
import { Noto_Sans_Lao } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "./components/Button";
import Modal from "./components/Modal";

import RadioButton from "./components/RadioButton";

import { calculateDosages } from "../scripts/dosages";
import Table from "./components/Table";

const noto = Noto_Sans_Lao({ subsets: ["latin"] });

export default function Home() {
	const { register, handleSubmit } = useForm<BodyData>();
	const [contentModalCalc, setContentModalCalc] = useState(<div />);
	const [openWarningModal, setOpenWarningModal] = useState(true);
  const [openSuplementsModal, setOpenSuplementsModal] = useState(false);

	const submitCalculateDosages = (bodyData: BodyData) => {
		const { dosages, scoops } = calculateDosages(bodyData);
		setContentModalCalc(
			<Table
				columns={["Suplemento", "Quantidade (g)", "Scoops", "Observação"]}
				rows={[
					[
						"Proteína",
						`${dosages.protein}g`,
						`${scoops.protein} scoops`,
						"É recomendado consumir fontes naturais de proteína em sua dieta. Use o suplemento apenas para complementar o que está faltando.",
					],
					[
						"Dose de saturação de creatina (5 a 7 dias)",
						`${dosages.creatineSaturation}g`,
						`${scoops.creatineSaturation} scoops`,
						"É recomendado o uso fracionado do suplemento durante o dia.",
					],
					[
						"Dose de manutenção de creatina",
						`${dosages.creatineMaintenance}g`,
						`${scoops.creatineMaintenance} scoops`,
						"É recomendado o uso fracionado do suplemento durante o dia.",
					],
					[
						"Dose de beta-alanina",
						`${dosages.betaAlanine}g`,
						`${scoops.betaAlanine} scoops`,
						"É recomendado o uso fracionado do suplemento durante o dia.",
					],
				]}
			/>,
		);
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
								<input
									type="number"
									id="input-size"
									className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500"
									placeholder="Digite seu peso"
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
							<p className="mt-2 text-sm text-red-600 dark:text-red-500">
								{" "}
								Username available!
							</p>
						</div>
						<div>
							<label
								htmlFor="input-size"
								className="block text-lg font-medium text-gray-700 dark:text-gray-100"
							>
								Porcentagem de gordura corporal
							</label>
							<div className="relative mt-1">
								<input
									type="number"
									id="input-bodyFatPercentage"
									className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500"
									placeholder="Digite sua % de gordura"
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
							<p className="mt-2 text-sm text-red-600 dark:text-red-500">
								{" "}
								Username available!
							</p>
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
						<div className="flex h-full justify-center items-center rounded-md px-4 py-1.5">
							<Button type="submit" success onClick={() => setOpenSuplementsModal(true)}>
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
					onClose={setOpenSuplementsModal}
				>
					{contentModalCalc}
				</Modal>
			)}
		</main>
	);
}
