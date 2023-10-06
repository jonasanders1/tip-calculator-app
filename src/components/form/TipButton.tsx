import React from "react"
import "./tipbutton.css"

interface ButtonProps {
  label: string
  value: number
  setSelected: React.Dispatch<React.SetStateAction<number>>
}



const TipButton: React.FC<ButtonProps> = ({label, value, setSelected}) => {
  return (
    <button className="tip-button" value={value} onClick={() => setSelected(value)}>{label}</button>
  )
}

export default TipButton