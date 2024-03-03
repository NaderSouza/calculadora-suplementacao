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
			parseFloat((0.3 * weight).toFixed(1)),
			parseFloat((0.1 * weight).toFixed(1)),
		];
	},
	betaAlanine: (weight: number) => {
		return parseFloat((0.1 * weight).toFixed(1));
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
	growth: (
		proteinGram: number,
		creatineSaturationGram: number,
		creatineMaintenanceGram: number,
		betaAlanineGram: number,
	): Scoops => {
		const brandName = "Growth Supplements";
		const proteinScoops = calcScoops(30, 2.5, proteinGram);
		const creatineSaturationScoops = calcScoops(3, 2, creatineSaturationGram);
		const creatineMaintenanceScoops = calcScoops(3, 2, creatineMaintenanceGram);
		const betaAlanineScoops = calcScoops(2, 1.5, betaAlanineGram);

		return {
			protein: proteinScoops,
			creatineSaturation: creatineSaturationScoops,
			creatineMaintenance: creatineMaintenanceScoops,
			betaAlanine: betaAlanineScoops,
		};
	},
	maxtitanium: (
		proteinGram: number,
		creatineSaturationGram: number,
		creatineMaintenanceGram: number,
		betaAlanineGram: number,
	): Scoops => {
		const brandName = "Max Titanium";
		const proteinScoops = calcScoops(21, 3, proteinGram);
		const creatineSaturationScoops = calcScoops(3, 2, creatineSaturationGram);
		const creatineMaintenanceScoops = calcScoops(3, 2, creatineMaintenanceGram);
		const betaAlanineScoops = calcScoops(2, 1, betaAlanineGram);

		return {
			protein: proteinScoops,
			creatineSaturation: creatineSaturationScoops,
			creatineMaintenance: creatineMaintenanceScoops,
			betaAlanine: betaAlanineScoops,
		};
	},
	integralmedica: (
		proteinGram: number,
		creatineSaturationGram: number,
		creatineMaintenanceGram: number,
		betaAlanineGram: number,
	): Scoops => {
		const brandName = "Integral Médica";
		const proteinScoops = calcScoops(21, 2, proteinGram);
		const creatineSaturationScoops = calcScoops(3, 1, creatineSaturationGram);
		const creatineMaintenanceScoops = calcScoops(3, 1, creatineMaintenanceGram);
		const betaAlanineScoops = calcScoops(2, 1, betaAlanineGram);

		return {
			protein: proteinScoops,
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
	const proteinDose = calcSuplements.protein(weight, bodyFatPercentage);

	const [creatineSaturationDose, creatineMaintenanceDose] =
		calcSuplements.creatine(weight);

	const betaAlanineDose = calcSuplements.betaAlanine(weight);

	const scoopsByBrand = calcByBrand[brand](
		proteinDose,
		creatineSaturationDose,
		creatineMaintenanceDose,
		betaAlanineDose,
	);

	return {
		dosages: {
			protein: proteinDose,
			creatineMaintenance: creatineMaintenanceDose,
			creatineSaturation: creatineSaturationDose,
			betaAlanine: betaAlanineDose,
		},
		scoops: scoopsByBrand,
	};
};

const gorduraCorporal = 21;
const peso = 82;
calculateDosages({
	weight: peso,
	bodyFatPercentage: gorduraCorporal,
	brand: "maxtitanium",
});
