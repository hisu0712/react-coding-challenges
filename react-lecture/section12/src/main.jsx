import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // 라우터로 app 컴포넌트 감싸줌
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
