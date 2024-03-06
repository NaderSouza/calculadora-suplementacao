import { AlertTriangle, CheckCircle } from "lucide-react";

interface IconProps {
	type: "warning" | "success";
}

export default function Icon({ type }: IconProps) {
	const icons = {
		warning: <AlertTriangle className="text-yellow-400 size-12 pb-2 m-auto" />,
		success: <CheckCircle className="text-emerald-500 size-12 pb-2 m-auto" />,
	};

	return icons[type];
}
