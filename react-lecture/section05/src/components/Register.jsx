import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    const [input, setInput] = useState({
        name : "",
        birth : "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;

        setInput({
            ...input,
            [e.target.name]: e.target.value  // e.target.name 프로퍼티의 키 설정, 이벤트가 발생한 태그의 name 속성
        })
    }

    const onsubmit = () => {
        if (input.name === "") {  // 이름 입력하지 않고 제출하려고 하면
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    }

    // const onChangeName = (e) => {
    //     // setName(e.target.value);
    //     setInput({
    //         ...input,
    //         name : e.target.value
    //     })
    // };

    return (
        <div>
            <div>
                <input 
                    ref={inputRef}      // input 요소에 접근하기 위해서
                    name="name"
                    value={input.name}  // useState의 초기값 설정 시 value값 있어야함
                    onChange={onChange} 
                    placeholder={"이름"} 
                />
            </div>

            <div>
                <input 
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date" 
                />
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>   {/* 선택지에는 친절하게 길게 설명하고, value에는 간단하게 설정하는게 일반적 */}
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} />
            </div>

            <button onClick={onsubmit}>제출</button>
        </div>
    );
}

export default Register;