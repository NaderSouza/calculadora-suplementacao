import { ButtonModalCalc } from "./Button";

export default function ModalCalc({
	title,
	children,
	buttonText,
	icon,
	onClose,
}: ModalProps) {
	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative my-6 mx-auto w-2/6">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
						<div className=" items-start justify-between p-3 border-b border-solid border-slate-500 rounded-t">
							<h3 className="text-3xl font-semibold text-center">
								{icon}
								{title}
							</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => {}}
							></button>
						</div>
						<div className="relative p-6 flex-auto">{children}</div>
						<div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
							<ButtonModalCalc onClick={onClose}>{buttonText}</ButtonModalCalc>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
}
