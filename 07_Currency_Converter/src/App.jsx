import { useState,useEffect } from 'react'
import CurrencyInfo from './CurrencyInfo'
import './App.css'

const Base_URL='https://v6.exchangerate-api.com/v6/292a47c9fbca49be08727a43/latest/USD'

function App() {

  const [currencyOptions,setCurrencyOptions]=useState([])
  const [fromCurrency,setFromcurrency]=useState()
  const [toCurrency,setTocurrency]=useState()
  const [exchangerate,setExchangeRate]=useState()
  const [amount,setAmount]=useState(1)
  const [amountInFromCurrency,setAmountInFromCurrency]=useState(true)
  
  let toAmount,fromAmount

  if(amountInFromCurrency)
  {
    fromAmount=amount
    toAmount=amount*exchangerate
  }
  else
  {
    toAmount=amount
    fromAmount=amount/exchangerate
  }

  function handleFromAmountchange(e)
  {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountchange(e)
  {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  useEffect(()=>{
    if(fromCurrency !=null && toCurrency!=null)
    {
      fetch(`${Base_URL}?base=${fromCurrency} &symbols=${toCurrency}`)
      .then(res=>res.json())
      .then(data=>setExchangeRate(data.conversion_rates[toCurrency]))
    }
  },[fromCurrency,toCurrency])

  useEffect(()=>{
    fetch(Base_URL)
    .then(res=>res.json())
    .then(data=>{
      const firstcurrency=Object.keys(data.conversion_rates)[1]
      setCurrencyOptions([data.base_code,...Object.keys(data.conversion_rates)])
      setFromcurrency(data.base_code)
      setTocurrency(firstcurrency)
      setExchangeRate(data.conversion_rates[firstcurrency])
    })
  },[])


  return (
    <>
      <h1>Convert</h1>
      <CurrencyInfo
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e=>setFromcurrency(e.target.value)}
        amount={fromAmount}
        onAmountchange={handleFromAmountchange}
      />
      <div className='equals'>=</div>
      <CurrencyInfo
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e=>setTocurrency(e.target.value)}
        amount={toAmount}
        onAmountchange={handleToAmountchange}
      />
    </>
  )
}

export default App
