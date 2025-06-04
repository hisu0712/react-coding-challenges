import './TodoItem.css'
import { memo } from 'react';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}


// export default memo(TodoItem);
// onUpdate 등의 함수는 객체 타입이기 때문에 호출될 때마다 새롭게 다시 생성된다.
// 즉, 다른 참조값을 가진다. 따라서 memo(TodoItem) 이렇게 하면 Props 변경된 것으로 판단하기 때문에 모든 아이템이 다시 리렌더링

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (preProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단(memo 비교 커스텀)
//     // T -> Props 바뀌지 않음 -> 리렌디링 X
//     // F -> Props 바뀜 -> 리렌디링 O

//     // 객체 타입 빼고 바뀌었는지 판단
//     if (preProps.id != nextProps.id) return false;
//     if (preProps.isDone != nextProps.isDone) return false;
//     if (preProps.content != nextProps.content) return false;
//     if (preProps.date != nextProps.date) return false;
    
//     return true;
// });

// useCallback 사용시 이렇게만 써도됨(함수는 useCallback이 해결)
export default memo(TodoItem); 

