import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const rate = 1.95583

  const [billEuroToggle, setBillEuroToggle] = useState(true)
  const [paidEuroToggle, setPaidEuroToggle] = useState(false)

  const [bill, setBill] = useState(undefined)
  const [paid, setPaid] = useState(undefined)
  const [change, setChange] = useState(0)
  const [changeEuro, setChangeEuro] = useState(0)

  useEffect(() => {
    let currentBillEuro = billEuroToggle ? bill : bill / rate
    let currentPaidEuro = paidEuroToggle ? paid : paid / rate
    let changeEuro = currentPaidEuro - currentBillEuro
    setChangeEuro(changeEuro.toFixed(2))
    setChange((changeEuro * rate).toFixed(2))
  }, [paid, bill, paidEuroToggle, billEuroToggle])

  return (
    <>
      <div>Курс евро за лев: {rate}</div>
      <div className="bill-wrapper">
        Сума:
        <input type="number" value={bill} onChange={e => setBill(Number(e.target.value))}/>
        <label className="switch">
          <input
            type="checkbox"
            checked={billEuroToggle}
            onChange={e => setBillEuroToggle(e.target.checked)}
          />
          <span className="slider"></span>
        </label>
        <span className="postfix">{billEuroToggle === true ? "€" : "лева"}</span>
      </div>
      <div className="paid-wrapper">
        Платено:
        <input type="number" value={paid} onChange={e => setPaid(Number(e.target.value))}/>
        <label className="switch">
          <input
            type="checkbox"
            checked={paidEuroToggle}
            onChange={e => setPaidEuroToggle(e.target.checked)}
          />
          <span className="slider"></span>
        </label>
        <span className="postfix">{paidEuroToggle === true ? "€" : "лева"}</span>
      </div>
      <div>Ресто: {changeEuro}€</div>
      <div>Ресто: {change}лева</div>
    </>
  )
}

export default App
