const Button = ({children, text, color = "black"}) => {  // defaultProps 기능 사라져서 구조분해할당 이용, color 기본값 설정

    // 이벤트 객체 e
    const onClickButton = (e) => { // 함수 따로 빼도 된다.
        console.log(e);
        console.log(text);
    };

    return (
        <button 
            // onClick={() => {
            //     console.log(text);
            // }}
            onClick={onClickButton}  // 함수의 이름만 이벤트 헨들러로 설정 
            onMouseEnter={onClickButton}
            style={{ color: color }}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}

export default Button;