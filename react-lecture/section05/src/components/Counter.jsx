import { useState } from "react";

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

export default Counter;