import { useState, useRef, useContext } from "react";
import "./ContactEditor.css";
import { ContactDispatchContext } from "../App";

export default function ContactEditor() {
  const { onCreate } = useContext(ContactDispatchContext);

  const [info, setInfo] = useState({ name: "", email: "" });

  const inputNameRef = useRef();
  const inputEmailRef = useRef();

  const onChangeInfo = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onAdd = () => {
    if (!info.name || !info.email) {
      if (!info.name) {
        inputNameRef.current.focus();
      } else {
        inputEmailRef.current.focus();
      }
      return;
    }

    onCreate(info);
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
