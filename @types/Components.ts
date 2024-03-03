type OptionProps = {
	value: string;
	label: string;
	register: any;
};

type ModalProps = {
	title: string;
	children: any;
	buttonText: string;
	icon: any;
	onClose?: () => void;
};

type Brand = 'growth' | 'maxTitanium' | 'integralMedica';

type BodyData = {
	weight: number;
	bodyFatPercentage: number;
	brand: Brand
};

type Table = {
	columns: string[];
	rows: string[][];
}

type Scoops = {
	protein: number;
	creatineSaturation: number;
	creatineMaintenance: number;
	betaAlanine: number;
}

type Dosages = {
	protein: number;
	creatineSaturation: number;
	creatineMaintenance: number;
	betaAlanine: number;
}

type ResultSuplements = {
	dosages: Dosages;
	scoops: Scoops;
}