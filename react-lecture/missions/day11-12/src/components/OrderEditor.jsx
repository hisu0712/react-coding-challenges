import { useState, useRef } from "react";

// 배달 음식 주문 페이지 만들기


const OrderEditor = () => {
    // const [menu, setMenu] = useState("");
    // const [address, setAddress] = useState("");
    // const [request, setRequest] = useState("");

    const [input, setInput] = useState({
      menu : "",
      address : "",
      request : "",
    })

    const inputRef = useRef();
    
    // const onChangeMenu = (e) => {
      //     setMenu(e.target.value);
      // }
      
      // const onChangeAddress = (e) => {
        //     setAddress(e.target.value);
        // }
        
        // const onChangeRequest = (e) => {
          //     setRequest(e.target.value);
    // }
    
    const onChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        if (input.address === "") {
          inputRef.current.focus();
        } else {
          alert(`주문이 완료되었습니다 메뉴 : ${input.menu}, 주소 : ${input.address}, 요청사항 : ${input.request}`);
        }

        // 코드 리뷰
        // if 문이 만족하면 안쪽에 return을 추가해서 함수를 끝내고, alert은 if문 밖에 둬도 괜찮다.
    }

    return (
        <div
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <h2>배달의민족 주문</h2>
          <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
              메뉴 선택
            </div>
            <select name="menu" value={input.menu} onChange={onChange} style={{ width: 300, padding: 5 }}>
              <option value={"족발"}>족발</option>
              <option value={"떡볶이"}>떡볶이</option>
              <option value={"아이스크림"}>아이스크림</option>
              <option value={"샐러드"}>샐러드</option>
            </select>
          </div>
          <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
              배달 주소
            </div>
            <input
                ref={inputRef}
                name="address"
                value={input.address}
                onChange={onChange}
                style={{ width: 300, padding: 5 }}
                placeholder="주소) 서울특별시 xx동 .."
            />
          </div>
          <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
              배달 요청사항
            </div>
            <textarea
                name="request"
                value={input.request}
                onChange={onChange}
                style={{ width: 300, padding: 5 }}
                placeholder="배달 요청사항을 써 주세요..."
            />
          </div>
          <div>
            <button
              onClick={onSubmit}
              style={{ width: 300, padding: 5 }}
            >
              주문 완료
            </button>
          </div>
        </div>
    );
};

export default OrderEditor;