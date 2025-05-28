import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    // setCount 을 Controller에 넘겨줄 수도 있지만 함수를 생성 후 넘겨주면 더 간단한다.
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
