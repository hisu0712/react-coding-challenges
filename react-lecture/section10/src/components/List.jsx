import './List.css'
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase())  
        );
    }

    const fillteredTodos = getFilteredData();

    // const getAnalyzedData = () => {
    //     console.log("getAnalyzedData 호출");
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo) => todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;

    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     }
    // };

    // const { totalCount, doneCount, notDoneCount} = getAnalyzedData();

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        console.log("getAnalyzedData 호출");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])
    // useMemo(() => {}, [])
    // 의존성배열 : deps
    // deps에 포함된 값이 변경되었을 때만 콜백함수 다시 실행
    // 첫번째 인수인 콜백함수가 반환하는 값을 그대로 반환해준다.
    // *deps을 안쓰면 처음 한번만 실행된다.


    return (
        <div className="List">
            <h4>Todo List 🎄</h4>

            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>

            <input 
                value={search}
                onChange={onChangeSearch}
                // readOnly
                placeholder="검색어를 입력하세요" 
            />
            <div className='todos_wrapper'>
                {fillteredTodos.map((todo) => { 

                    return (
                        <TodoItem 
                            key={todo.id} 
                            {...todo} 
                            onUpdate={onUpdate} 
                            onDelete={onDelete}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default List;