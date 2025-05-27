import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다. 단, 빈 태그 가능

const Main = () => {
    // const number = 9;
    // const obj = { a: "객체" };

    // return (
    //     <main>
    //         <h1>main</h1>
    //         <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
    //         {10}
    //         {number}
    //         {/* {if() {}} 이런 조건식이나 반복문 등은 넣을 수 없다.*/} 

    //         {[1, 2, 3]}
    //         {/* {true} {undefined} {null} 렌더링 안된다. 오류는 안남*/}

    //         {obj.a} {/* 객체 그대로는 안되고, 값은 불러올 수 있다. */}
    //     </main>
    // );

    const user = {
        name: "신희수",
        isLogin: true,
    };

    // 조건문
    if (user.isLogin) {
        return <div className="logout">로그아웃</div>
        // <div style={{
        //     backgroundColor: "red",          // 카멜표기법
        //     borderBottom: "5px solid blue",
            
        // }}>로그아웃</div>;
    } else {
        return <div>로그인</div>;   
    }

    // return (
    //     <>
    //         {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ) : (
    //             <div>로그인</div>
    //         )}
    //     </>
    // );

    // 두 가지 방법 중 편한 방법 사용
}

export default Main;