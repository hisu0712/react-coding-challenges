import "./ContactItem.css";
import { memo } from "react";

function ContactItem({ id, name, email, onDelete }) {
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>

      <button onClick={onClickDelete}>🗑️ Remove</button>
      {/* 코드 리뷰 */}
      {/* 화살표 함수 가능: 위에 함수 만들 필요 없음 */}
      {/* <button onClick={() => onDelete(id)}>🗑️ Remove</button> */}
    </div>
  );
}

export default memo(ContactItem);
