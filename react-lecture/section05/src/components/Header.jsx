// 반드시 컴포넌트 첫번째 글자는 대문자로 표기
// function Header() {    
const Header = () => {    // 화살표 함수
    return (
        <header>
            <h1>header</h1>
        </header>
    );
}

// 이렇게 함수 안에 html을 return하면 이 함수를 컴포넌트라고 부른다.

export default Header;