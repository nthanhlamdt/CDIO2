import { PiUserListFill } from "react-icons/pi";
function PhoneBookIcon() {
  return (
    <div>
      <div className="hover:bg-green-800 tooltip tooltip-bottom" data-tip="Danh bạ">
        <PiUserListFill className=" text-white size-20 cursor-pointer p-6" />
      </div>
    </div>
  )
}

export default PhoneBookIcon
