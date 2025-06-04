import './App.css'
import { useRef, useReducer, useCallback, createContext, useMemo } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "노래 연습하기",
    date : new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE' : 
      return [action.data, ...state]
    case 'UPDATE' : 
      return state.map((item) => 
        item.id === action.targetId 
          ? {...item, isDone: !item.isDone}
          : item
      );
    case 'DELETE' : 
      return state.filter(
        (item) => item.id != action.targetId
      );
    default : 
      return state;
  }
}

// App 컴포넌트 외부에 선언: 리렌더링 될때마다 다시 생성될 필요 없음
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData); 
  const idRef = useRef(3)

  const onCreate = useCallback((content) => {
    dispatch({
      type : 'CREATE',
      data : {
        id : idRef.current++,
        isDone : false,
        content : content,
        date: new Date().getDate()
      }
    })
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type : 'UPDATE',
      targetId : targetId
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type : 'DELETE',
      targetId : targetId
    });
  }, []);

  const memoizedDispatch = useMemo(() => { // 컴포넌트가 리렌러딩되면 함수 다시 생성되서 useMemo로 감싸주고 컴포넌트 value에 전달
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <>
     <div className="App">
       <Header />
       <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
       </TodoStateContext.Provider>
     </div>
    </>
  )
}

export default App
