type OptionProps = {
    value: string;
    label: string;
}

type ModalProps = {
    title: string;
    children: any;
    buttonText: string;
    icon: any;
    onClose?: () => void;
}

type BodyData = {
    weight: number;
    bodyFatPercentage: number;
}