import './App.css'

import HookExam from './components/HookExam';

function App() {
  // console.log(state);
  // state 값이 변경됐을 때만 리렌더링 되기 때문에 일반 변수로 상태변화는 의미없음

  return (
    <>
      <HookExam />
    </>
  );
}

export default App;

