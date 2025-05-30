import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';

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
            // todo.content.includes(search)
            todo.content.toLowerCase().includes(search.toLowerCase())  // 대소문자 구분하지 않고 검색 가능
        );
    }

    const fillteredTodos = getFilteredData();

    return (
        <div className="List">
            <h4>Todo List 🎄</h4>
            <input 
                value={search}
                onChange={onChangeSearch}
                readOnly
                placeholder="검색어를 입력하세요" 
            />
            <div className='todos_wrapper'>
                {/* {todos.map((todo) => { */}
                {fillteredTodos.map((todo) => {  // 전체 todos 말고 필터된 todos 반환

                    // 각각의 요소를 key라는 값으로 반드시 고유한 값을 가져야함
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