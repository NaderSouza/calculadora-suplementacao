const calcSuplements = {
	protein: (weight: number, bodyFatPercentage: number): number => {
		if (bodyFatPercentage > 30) {
			return parseFloat((1.3 * weight).toFixed(1));
		}

		if (bodyFatPercentage >= 20 && bodyFatPercentage <= 30) {
			return parseFloat((1.8 * weight).toFixed(1));
		}

		return parseFloat((2.1 * weight).toFixed(1));
	},
	creatine: (weight: number) => {
		return [
			parseFloat((0.21 * weight).toFixed(1)),
			parseFloat((0.07 * weight).toFixed(1)),
		];
	},
	betaAlanine: (weight: number) => {
		return parseFloat((0.07 * weight).toFixed(1));
	},
};

const calcScoops = (
	brandSupplementGram: number,
	brandEquivalentScoop: number,
	sumplementDose: number,
) => {
	const gramsPerDose = brandSupplementGram / brandEquivalentScoop;

	return parseFloat((sumplementDose / gramsPerDose).toFixed(1));
};

const calcByBrand = {
	growth: ({
		creatineSaturationGram,
		creatineMaintenanceGram,
		betaAlanineGram,
	}: SuplementsGram): SuplementScoops => {
		const brandName = "Growth Supplements";
		const creatineSaturationScoops = calcScoops(3, 2, creatineSaturationGram);
		const creatineMaintenanceScoops = calcScoops(3, 2, creatineMaintenanceGram);
		const betaAlanineScoops = calcScoops(2, 1.5, betaAlanineGram);

		return {
			brandName,
			creatineSaturation: creatineSaturationScoops,
			creatineMaintenance: creatineMaintenanceScoops,
			betaAlanine: betaAlanineScoops,
		};
	},
	maxTitanium: ({
		creatineSaturationGram,
		creatineMaintenanceGram,
		betaAlanineGram,
	}: SuplementsGram): SuplementScoops => {
		const brandName = "Max Titanium";
		const creatineSaturationScoops = calcScoops(3, 2, creatineSaturationGram);
		const creatineMaintenanceScoops = calcScoops(3, 2, creatineMaintenanceGram);
		const betaAlanineScoops = calcScoops(2, 1, betaAlanineGram);

		return {
			brandName,
			creatineSaturation: creatineSaturationScoops,
			creatineMaintenance: creatineMaintenanceScoops,
			betaAlanine: betaAlanineScoops,
		};
	},
	integralMedica: ({
		creatineSaturationGram,
		creatineMaintenanceGram,
		betaAlanineGram,
	}: SuplementsGram): SuplementScoops => {
		const brandName = "Integral Médica";
		const creatineSaturationScoops = calcScoops(3, 1, creatineSaturationGram);
		const creatineMaintenanceScoops = calcScoops(3, 1, creatineMaintenanceGram);
		const betaAlanineScoops = calcScoops(2, 1, betaAlanineGram);

		return {
			brandName,
			creatineSaturation: creatineSaturationScoops,
			creatineMaintenance: creatineMaintenanceScoops,
			betaAlanine: betaAlanineScoops,
		};
	},
};

export const calculateDosages = ({
	weight,
	bodyFatPercentage,
	brand,
}: BodyData): ResultSuplements => {
	const proteinGram = calcSuplements.protein(weight, bodyFatPercentage);

	const [creatineSaturationGram, creatineMaintenanceGram] =
		calcSuplements.creatine(weight);

	const betaAlanineGram = calcSuplements.betaAlanine(weight);

	const suplementScoops = calcByBrand[brand]({
		creatineSaturationGram,
		creatineMaintenanceGram,
		betaAlanineGram,
	});

	return {
		dosages: {
			protein: proteinGram,
			creatineMaintenance: creatineMaintenanceGram,
			creatineSaturation: creatineSaturationGram,
			betaAlanine: betaAlanineGram,
		},
		suplementScoops: suplementScoops,
	};
};
