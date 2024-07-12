/* eslint-disable no-unused-vars */
import Model from "./Model.jsx";
import { IoSettingsOutline } from "react-icons/io5";
import useLogout from "../../hooks/useLogout";
// eslint-disable-next-line react/prop-types
function SettingNavbar({ firstName, lastName, gender, profilePic, dateOfBirth, email, phoneNumber }) {
  const { logout } = useLogout()

  return (

    <div className="dropdown dropdown-top tooltip tooltip-right " data-tip="Cài đặt">
      <IoSettingsOutline tabIndex={0} role="button" className="btn btn-ghost text-white size-20 cursor-pointer p-5 hover:bg-green-800 rounded-none" />
      <ul tabIndex={0} className="mt-5 dropdown-content menu bg-base-100 z-[30] w-52 p-2 shadow">
        <li className="font-bold text-xl"><a>{firstName} {lastName}</a></li>
        <li onClick={() => document.getElementById('my_modal_3').showModal()}><a>Hồ sơ của bạn</a></li>
        <li><a>Cài đặt</a></li>
        <li onClick={logout}><a>Đăng xuất</a></li>
      </ul>
      <Model
        firstName={firstName}
        lastName={lastName}
        gender={gender}
        profilePic={profilePic}
        dateOfBirth={dateOfBirth}
        email={email}
        phoneNumber={phoneNumber}
      />
    </div>
  )
}

export default SettingNavbar
