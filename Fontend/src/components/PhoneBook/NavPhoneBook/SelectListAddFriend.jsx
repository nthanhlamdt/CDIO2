
import { RiUserSharedLine } from "react-icons/ri";

function SelectListAddFriend({ setSelectPhoneBook }) {
  return (
    <div
      onClick={() => { setSelectPhoneBook('ListAddFriend') }}
      className="flex items-center py-2 pl-6 cursor-pointer w-full hover:bg-slate-300 border border-color-white h-20"
    >
      <RiUserSharedLine className="text-3xl font-bold mr-4" />
      <span className="text-xl font-medium">Danh sách lời mời kết bạn</span>
    </div>
  )
}

export default SelectListAddFriend
