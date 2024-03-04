import React, { useRef } from "react";

export default function RadioButton({ value, label, register }: OptionProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleLabelClick = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	return (
		<div className="inline-flex items-center mt-3">
			<label
				className="relative flex items-center p-3 rounded-full cursor-pointer"
				htmlFor={`radioButton-${value}`}
			>
				<input
					name="brand"
					type="radio"
					className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400 checked:before:bg-gray-400 hover:before:opacity-10"
					id={`radioButton-${value}`}
					value={value}
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
				htmlFor={`radioButton-${value}`}
				onClick={handleLabelClick}
				onKeyUp={handleLabelClick}
				onKeyDown={handleLabelClick}
			>
				{label}
			</label>
		</div>
	);
}
