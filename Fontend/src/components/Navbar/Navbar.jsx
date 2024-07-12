import AvataNavbar from "./AvataNavbar"
import ChatNavbar from "./ChatNavbar"
import SettingNavbar from "./SettingNavbar"
import { useAuthContext } from "../../context/authContext"
import PropTypes from 'prop-types';

function Navbar({ setActiveComponent, activeComponent }) {
  const { authUser } = useAuthContext()

  return (
    <div className=" w-20 bg-emerald-700 h-screen flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-between">
        <AvataNavbar
          firstName={authUser.firstName}
          lastName={authUser.lastName}
          gender={authUser.gender}
          profilePic={authUser.profilePic}
          dateOfBirth={authUser.dateOfBirth}
          email={authUser.email}
          phoneNumber={authUser.phoneNumber}
        />
        <ChatNavbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      </div>
      <div className="flex flex-col items-center justify-between">
        <SettingNavbar
          firstName={authUser.firstName}
          lastName={authUser.lastName}
          gender={authUser.gender}
          profilePic={authUser.profilePic}
          dateOfBirth={authUser.dateOfBirth}
          email={authUser.email}
          phoneNumber={authUser.phoneNumber}
        />
      </div>
    </div>
  )
}

Navbar.propTypes = {
  setActiveComponent: PropTypes.func.isRequired,
  activeComponent: PropTypes.string.isRequired,
};

export default Navbar
