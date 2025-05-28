import { useState } from "react";

function useInput() {  // use 라는 접두사를 쓰면 커스텀 훅 생성 가능
    const [input, setInput] = useState("");
  
    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}
  
export default useInput;