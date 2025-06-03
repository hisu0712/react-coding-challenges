import { useState, useRef } from "react";
import "./ContactEditor.css";

export default function ContactEditor({ onCreate }) {
  const [info, setInfo] = useState({ name: "", email: "" });

  const inputNameRef = useRef();
  const inputEmailRef = useRef();

  /* 입력된 값을 보관하는 이벤트 핸들러 */
  const onChangeInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onAdd = () => {
    // 코드리뷰 : 폼 입력값이 문자열인지 확실할 때는 빈문자열인지만 검사하면됨(폼 검증에서 자주 쓰임)
    // if (info.name === "" || info.email === "")
    if (!info.name || !info.email) {
      if (!info.name) {
        inputNameRef.current.focus();
      } else {
        inputEmailRef.current.focus();
      }
      return;
    }

    onCreate(info);
    // 코드 리뷰 : 이렇게 객체 형태가 아닌 풀어진 형태로 넘겨도 된다.
    // onCrate(info.name, info.email)

    setInfo({ name: "", email: "" });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={inputNameRef}
          name="name"
          value={info.name}
          onChange={onChangeInfo}
          className="name"
          placeholder="이름 ..."
        />
        <input
          ref={inputEmailRef}
          name="email"
          value={info.email}
          onChange={onChangeInfo}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
