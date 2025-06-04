import { useState, useRef, useReducer, useCallback, createContext, useMemo } from "react";
// useContext와 createContext는 같이 쓰이지만 역할이 다르다.
// createContext 는 Context 생성하고, useContext는 Context를 사용한다.
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

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId); 
    default:
      return state;
  }
};

/* 
1. Context 객체 생성
  - ContactStateContext : contacts State를 보관하고 공급함
  - ContactDispatchContext : onCreateContact, onRemoveContact 등의 contacts State를 변경시키는 함수들을 보관하고 공급함
*/
export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
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
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

   /* 2. useMemo를 사용해 onCreateContact와 onRemoveContact 함수를 묶은 객체가 다시 생성되지 않도록 설정함 */
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete }
  }, []);
  
  // useCallback은 함수를 메모이제이션, useMemo는 값을 메모이제이션
  // App 컴포넌트 안에 선언해야함

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={ contacts }>
        <ContactDispatchContext value={memoizedDispatch}>
          {/* 이제는 Context를 통해 데이터를 공급받을 것 이므로 Props는 제거 */}
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
