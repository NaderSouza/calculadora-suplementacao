import React, { useState } from "react";
import { ComponentProps } from "react";

interface Option {
  value: string;
  label: string;
}

interface RadioButtonProps {
  options: Option[];
  selectedOption: string;
  onChange: (value: string) => void;
}

function RadioButton({ options, selectedOption, onChange }: RadioButtonProps) {
  return (
    <div>
      {options.map((option: Option) => (
        <label key={option.value} className="radio">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default function Example() {
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <RadioButton
        options={options}
        selectedOption={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
}
