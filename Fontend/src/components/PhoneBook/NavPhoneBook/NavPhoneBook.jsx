import Search from "../../Chat/UserChat/Search"
import SelectListAddFriend from "./SelectListAddFriend"
import SelectListFriend from "./SelectListFriend"
import SelectListGroup from "./SelectListGroup"
function NavPhoneBook({ setSelectPhoneBook }) {
  return (
    <div className="h-screen bg-white relative min-w-64 max-w-96 w-1/3 border-r border-l">
      <Search />
      <SelectListFriend setSelectPhoneBook={setSelectPhoneBook} />
      <SelectListGroup setSelectPhoneBook={setSelectPhoneBook} />
      <SelectListAddFriend setSelectPhoneBook={setSelectPhoneBook} />
    </div>
  )
}

export default NavPhoneBook
