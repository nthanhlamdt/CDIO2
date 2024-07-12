import Search from "../../Chat/UserChat/Search"
import SelectListAddFriend from "./SelectListAddFriend"
import SelectListFriend from "./SelectListFriend"
import SelectListGroup from "./SelectListGroup"
function NavPhoneBook() {
  return (
    <div className="h-screen bg-white relative min-w-44 max-w-96 w-1/3 border-r border-l">
      <Search />
      <SelectListFriend />
      <SelectListGroup />
      <SelectListAddFriend />
    </div>
  )
}

export default NavPhoneBook
