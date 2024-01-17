import React from 'react'

function CurrencyInfo(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onAmountchange,
    amount
  }=props
  
  return (
    <div>
      <input type='number' className='input' value={amount} onChange={onAmountchange}/>
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions.map(option=>(
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
    </div>
  )
}

export default CurrencyInfo;