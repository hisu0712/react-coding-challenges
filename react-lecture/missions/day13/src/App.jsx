import { useState } from 'react'
import './App.css'
import CurrenyInput from './components/CurrenyInput'

const EXCHANGE_RATE = 1300;

function App() {
  // const [price1, setPrice1] = useState();
  // const [price2, setPrice2] = useState();

  // const onChangeUSD = (e) => {
  //   setPrice1(Number(e.target.value))
  //   setPrice2(Number(e.target.value) / 1300)
  // }

  // const onChangeKRW = (e) => {
  //   setPrice1(Number(e.target.value) * 1300)
  //   setPrice2(Number(e.target.value))
  // }

  const [state, setState] = useState({
    krw: 0,
    usd: 0
  })
  
  const onChange = (currency, value) => {
    console.log({ currency, value });
    
    if (currency === "krw") {
      setState({
        krw: value,
        usd: value / EXCHANGE_RATE,
      });
    } else {
      setState({
        krw: value * EXCHANGE_RATE,
        usd: value,
      });
    }
  };

  return (
    // <div className='App'>
    //   <h1>환율 변환기 (KRW-USD)</h1>
    //   <section>
    //     <CurrenyInput 
    //       price1={price1} 
    //       price2={price2} 
    //       onChangeUSD={onChangeUSD} 
    //       onChangeKRW={onChangeKRW} 
    //     />
    //   </section>
    // </div>
    <div className='App'>
      <h1>환율 변환기 (KRW-USD)</h1>

      <section>
        <CurrenyInput
          currency = {"krw"}
          value={state.krw}
          onChange={onChange}

        />
        <CurrenyInput
          currency = {"usd"}
          value={state.usd}
          onChange={onChange}
        />
      </section>
    </div>
  )
}

export default App
