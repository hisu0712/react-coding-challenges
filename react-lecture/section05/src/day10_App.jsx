import './App.css'
import Header from './components/Header';  // Vite를 사용하는 리액트에서는 확장자 안써도됨
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {

  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식 요소</div> {/* children props로 자동 전달 */}
        <Header />           {/* 컴포넌트도 전달 가능 */}
      </Button>
    </>
  )
}
// App은 부모, Header는 자식 컴포넌트이다.
// 모든 컴포넌트는 App 컴포넌트를 조상으로 둔다. 즉, App 컴포넌트는 루트 컴포넌트이다. 

export default App;

