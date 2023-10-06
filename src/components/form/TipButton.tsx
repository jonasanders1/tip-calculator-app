import React, { useState } from "react";
import "./tipbutton.css";

interface ButtonProps {
  label: string;
  value: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const TipButton: React.FC<ButtonProps> = ({ label, value, setSelected }) => {
  const [buttonSelected, setButtonSelected] = useState(false);

  const handleButtonClick = (val: number) => {
    setSelected(val);
    setButtonSelected(true); 
  };

  return (
    <button
      className={`tip-button ${buttonSelected ? "selected-button" : ""}`}
      value={value}
      onClick={() => handleButtonClick(value)}
    >
      {label}
    </button>
  );
};

export default TipButton;
