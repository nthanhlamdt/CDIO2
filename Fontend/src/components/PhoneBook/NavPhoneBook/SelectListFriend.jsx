import { PiUserList } from "react-icons/pi";
function SelectListFriend({ setSelectPhoneBook }) {
  return (
    <div
      onClick={() => { setSelectPhoneBook('ListFriend') }}
      className="flex items-center py-2 pl-6 cursor-pointer w-full hover:bg-slate-300 border border-color-white h-20"
    >
      <PiUserList className="text-4xl font-bold mr-4" />
      <span className="text-xl font-medium">Danh sách bạn bè</span>
    </div>
  )
}

export default SelectListFriend
