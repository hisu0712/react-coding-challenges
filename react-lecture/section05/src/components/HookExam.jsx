import useInput from "../hooks/useInput";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스컴 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다

const HookExam = () => {
    // const [input, setInput] = useState("");

    // const onChange = (e) => {
    //     setInput(e.target.value);
    // }

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    console.log(input)

    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>
    );
}

export default HookExam;