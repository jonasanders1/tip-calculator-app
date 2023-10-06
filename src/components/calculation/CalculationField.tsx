import React from 'react'
import "./calculationField.css"

interface CalculationProps{
    tipCategory: string
    tipNumber: number
}

const CalculationField: React.FC<CalculationProps> = ({tipCategory, tipNumber}) => {
  return (
    <div className='calculation__container'>
        <div className='calculation__category'>
            <p className='category-title'>{tipCategory}</p>
            <p className='person'>/ person</p>
        </div>
        <div className='calculation__amount'>
            <p className='dollar'>$</p>
            <p className='total-tip'>{ tipNumber != Number.NaN ? tipNumber : 0}</p>
        </div>
    </div>
  )
}

export default CalculationField