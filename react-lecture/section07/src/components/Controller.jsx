const Controller = ( { onClickButton } ) => {
    return (
        <div>
            {/* onClick={onClickButton} 이렇게 쓰면 인수를 넣을 방법이 없다. */}
            <button onClick={() => {
                onClickButton(-1);
            }}>-1</button>
            <button onClick={() => {
                onClickButton(-10);
            }}>-10</button>
            <button onClick={() => {
                onClickButton(-10);
            }}>-100</button>
            <button onClick={() => {
                onClickButton(+100);
            }}>+100</button>
            <button onClick={() => {
                onClickButton(+10);
            }}>+10</button>
            <button onClick={() => {
                onClickButton(+1);
            }}>+1</button>
        </div>
    );
}

export default Controller;
