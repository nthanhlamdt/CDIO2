import ListFriend from "./ListFriend/ListFriend.jsx"
import NavPhoneBook from "./NavPhoneBook/NavPhoneBook.jsx"

function PhoneBook() {
  return (
    <div className="flex w-full">
      <NavPhoneBook />
      <ListFriend />
    </div>
  )
}

export default PhoneBook
