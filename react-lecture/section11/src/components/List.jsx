import './List.css'
import TodoItem from './TodoItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => { // ( { todos, onUpdate, onDelete } ) 이렇게 안 받아도됌(TodoStateContext로 해결)
    const todos = useContext(TodoStateContext); // todos는 value에서 그대로 전달했기 때문에 객체의 구조분해할당이 아니다.

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

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])

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
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default List;