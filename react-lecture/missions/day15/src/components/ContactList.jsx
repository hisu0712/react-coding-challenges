import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>

      {contacts.map((contact) => {
        return (
          <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
        );
      })}

      {/* 코드 리뷰 */}
      {/* (중괄호 + return) vs (소괄호만) */}
      {/* 화살표 함수 문법 */}
      {/* {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
      ))} */}
    </div>
  );
}
