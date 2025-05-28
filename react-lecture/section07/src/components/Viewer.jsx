const Viewer = ( { count } ) => {  
    // const [count, setCount] = useState(0);  // 형제 관계에서는 props로 전달 불가, '부모 -> 자식'으로만 가능

    return (
        <div>
            <div>현재 카운트 : </div>
            <h1>{count}</h1>
        </div>
    );
}

export default Viewer;