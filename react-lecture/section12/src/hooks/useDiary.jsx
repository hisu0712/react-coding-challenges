import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => { // 접두사 use가 붙으면 커스텀 훅이 된다.
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true }); // navigate는 컴포넌트 마운트 이후에만 가능(따라서 useEffect 사용)
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id]); // 의존성 배열에 data 삭제해야함. navigate가 비동기식으로 변경되어  페이지 이동중에도 useEffect가 data 변화를 감지하면 동작함
   
    
    return curDiaryItem;
}

export default useDiary;