import './App.css'
import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  
  // console.log(light);
  return (
    <div>
      { light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button onClick={() => { setLight(light === "ON" ? "OFF" : "ON"); }} >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
}

const Counter = ( ) => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>{count}</h1>           {/* 리렌더링으로 인해 state 값이 변경 업데이트 되서 표시됨 */}
        <button onClick={() => {
            setCount(count + 1);
          }}
        >+
        </button>
    </div>
  );
}

function App() {
  // console.log(state);
  // state 값이 변경됐을 때만 리렌더링 되기 때문에 일반 변수로 상태변화는 의미없음

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;

