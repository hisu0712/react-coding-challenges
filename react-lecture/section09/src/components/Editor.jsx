import './Editor.css'
import { useState, useRef } from 'react'

const Editor = ({ onCreate }) => {

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeydown = (e) => {
        if (e.keyCode === 13) {  // Enter 눌러도 제출되게
            onSubmit();
        }
    }    

    const onSubmit = () => {
        if (content === "") {  // 빈 콘텐츠면 input에 포커스하고 return
            contentRef.current.focus();
            return; 
        }
        onCreate(content);
        setContent("");  // 제출하면 input 비도록(state 초기화)
    }

    return (
        <div className="Editor">
            <input 
                ref={contentRef}
                value={content}
                onKeyDown={onKeydown}
                onChange={onChangeContent}
                placeholder="새로운 Todo..." 
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;