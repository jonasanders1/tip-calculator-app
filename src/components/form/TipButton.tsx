import React from "react"
import "./tipbutton.css"

interface ButtonProps {
  label: string
  value: number
}

const TipButton: React.FC<ButtonProps> = ({label, value}) => {
  return (
    <button className="tip-button" value={value}>{label}</button>
  )
}

export default TipButton