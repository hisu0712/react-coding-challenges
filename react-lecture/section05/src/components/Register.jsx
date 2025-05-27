import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    return (
        <div>
            <div>
                <input 
                    value={name}  // useState의 초기값 설정 시 value값 있어야함
                    onChange={onChangeName} 
                    placeholder={"이름"} 
                />
            </div>

            <div>
                <input 
                    value={birth}
                    onChange={onChangeBirth}
                    type="date" 
                />
            </div>

            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option></option>
                    <option value="kr">한국</option>   {/* 선택지에는 친절하게 길게 설명하고, value에는 간단하게 설정하는게 일반적 */}
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea value={bio} onChange={onChangeBio} />
            </div>
        </div>
    );
}

export default Register;