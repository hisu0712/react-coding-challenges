import { useState, useRef, useReducer, useCallback } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockContact = [
  {
    id: 0,
    name: "신희수",
    email: "shs@tigensoft.co.kr",
  },
  {
    id: 1,
    name: "신도일",
    email: "vbnm0712@naver.com",
  },
];

/* 실제로 State의 값을 변경시키는 reducer 함수 */
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId); // 코드 리뷰 : data라는 변수로 굳이 다 받아올 필요 없다.
    default:
      return state;
  }
};

function App() {
  // const [contacts, setContacts] = useState(mockContact);
  const [contacts, dispatch] = useReducer(reducer, mockContact);

  const idref = useRef(2);

  const onCreate = useCallback((info) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idref.current++,
        name: info.name,
        email: info.email,
      },
    });
    // const newContact = {
    //   id: idref.current,
    //   name: info.name,
    //   email: info.email,
    // };
    // setContacts([newContact, ...contacts]);
    // idref.current += 1;
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      // data: targetId,
      targetId, // 코드 리뷰 : 넘겨줄 데이터가 한개이므로, data : {} 이렇게 쓸 필요 없다.
    });
    // setContacts(contacts.filter((item) => item.id !== targetId));
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
