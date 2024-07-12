import { useState } from "react";
import ListFriend from "./ListFriend/ListFriend.jsx";
import NavPhoneBook from "./NavPhoneBook/NavPhoneBook.jsx";
import ListAddFriend from "./ListAddFriend/ListAddFriend.jsx";
import ListGroup from "./ListGroup/ListGroup.jsx";

function PhoneBook() {
  const [selectPhoneBook, setSelectPhoneBook] = useState('ListFriend');

  return (
    <div className="flex w-full">
      <NavPhoneBook setSelectPhoneBook={setSelectPhoneBook} />
      {
        selectPhoneBook === 'ListFriend' ?
          <ListFriend />
          : selectPhoneBook === 'ListAddFriend' ?
            <ListAddFriend />
            : selectPhoneBook === 'ListGroup' ?
              <ListGroup />
              : null // Đảm bảo rằng luôn có giá trị hợp lệ để trả về
      }
    </div>
  );
}

export default PhoneBook;
