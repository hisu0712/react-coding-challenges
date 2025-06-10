import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav('/new');
  };
 
  return (
    <>
      <div>
        {/* 클라이언트 사이드 렌더링: 필요한 컴포넌트만 교체(새로고침X) */}
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <button onClick={onClickButton}>New 페이지로 이동</button>
      </div>
      <Routes>
        {/* 경로에 따라 렌더링될 컴포넌트가 달라짐 */}
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        {/* 나머지 경로 설정 */}
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
