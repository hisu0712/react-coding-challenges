import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수
        return () => {       
            // unmount
            // `useEffect`에서 반환된 함수를 클린업(cleanup) 함수
            // 컴포넌트가 사라질 때(언마운트)나 effect가 다시 실행되기 전에 이전 effect가 남긴 것을 정리
            // mount 될때 함수가 useEffect가 실행되었다가, return으로 종료될 때 정리함수 실행
            console.log("unmount");  
        };
    }, []);
    return <div>짝수</div>
}

export default Even;