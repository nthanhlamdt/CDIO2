import { BsChatDots } from "react-icons/bs";
import PhoneBookIcon from "./PhoneBookIcon";
import PropTypes from 'prop-types';
import ManagementProjectIcon from "./ManagementProjectIcon";

function ChatNavbar({ setActiveComponent, activeComponent }) {
  return (
    <div>
      <div
        className={`hover:bg-green-800 tooltip tooltip-bottom ${activeComponent === "chat" ? " bg-green-800" : ""}`}
        data-tip="Tin nhắn"
        onClick={() => setActiveComponent("chat")}
      >
        <BsChatDots className=" text-white size-20 cursor-pointer p-6" />
      </div>
      <div
        className={`hover:bg-green-800 ${activeComponent === "phonebook" ? " bg-green-800" : ""}`}
        onClick={() => setActiveComponent("phonebook")}
      >
        <PhoneBookIcon />

      </div>

      <div
        className={`hover:bg-green-800 ${activeComponent === "ManagementProject" ? " bg-green-800" : ""}`}
        onClick={() => setActiveComponent("ManagementProject")}
      >
        <ManagementProjectIcon />
      </div>
    </div>
  )
}

ChatNavbar.propTypes = {
  setActiveComponent: PropTypes.func.isRequired,
  activeComponent: PropTypes.string.isRequired,
};

export default ChatNavbar
