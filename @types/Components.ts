type OptionProps = {
	value: string;
	label: string;
	register: any;
};

type ModalProps = {
	title: string;
	children: any;
	buttonText: string;
	icon: "warning" | "success";
	onClose: (value?: boolean) => any;
};

type Brand = "growth" | "maxTitanium" | "integralMedica";

type BodyData = {
	weight: string;
	bodyFatPercentage: string;
	brand?: Brand;
};

type Table = {
	title: string;
	columns: string[];
	rows: string[][];
};

type SuplementsGram = {
	creatineSaturationGram: number;
	creatineMaintenanceGram: number;
	betaAlanineGram: number;
};

type SuplementScoops = {
	brandName: string;
	creatineSaturation: number;
	creatineMaintenance: number;
	betaAlanine: number;
};

type Dosages = {
	protein: number;
	creatineSaturation: number;
	creatineMaintenance: number;
	betaAlanine: number;
};

type ResultSuplements = {
	dosages: Dosages;
	suplementScoops: SuplementScoops;
};
