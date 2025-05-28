import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useEffect, useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect(() => {}, []); 구조, 두번째 인수인 배열 안의 값이 바뀔 때만다 첫번째 인수인 콜백 함수 실행
    
  // useEffect(() => {
  //   console.log(`${count} ${input}`);
  // }, [count, input]);
  // 의존성 배열
  // dependency array 
  // deps (축약)

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {     // 처음 mount될때는 콘솔에 찍히지 않음
      isMount.current = true;
      return;
    }
    console.log("update");
  });  // deps 생략

  // 3. 언마운트 : 죽음



  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input 
          value={input} 
          onChange={(e) => {
            setInput(e.target.value)
          }} />
      </section>
      <section>
        <Viewer count={count} />
        { count % 2 === 0 ? <Even /> : null }
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
