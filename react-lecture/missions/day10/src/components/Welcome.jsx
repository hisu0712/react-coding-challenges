const Welcome = ({name, isMember}) => {
    return (
        <>
            {isMember ? (
                <h1>{name}님 다시 오셨군요</h1>
            ) : (
                <h1>{name}님 가입하시겠어요</h1>
            )}
        </>

        
        // {/* 코드리뷰: 삼항연산자 h1 태그 안쪽으로 가능 */}
        // <h1>
        //     {/* 삼항연산자도 표현식이기 때문에 {} 필요*/}
        //     { isMember ? `${name}님 다시 오셨군요` : `{name}님 가입하시겠어요` }
        // </h1>
    )
}

export default Welcome;