/* eslint-disable react/prop-types */
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import useConversation from "../../../../zustand/useConversation";
// eslint-disable-next-line no-unused-vars
function NavMessage() {
  const { selectedConversation } = useConversation();
  return (
    <div className=" bg-emerald-500 px-5 py-3 flex items-center justify-between h-20">
      <div className="flex items-center">
        <div className="avatar bg-stone-300 rounded-full online mr-3">
          <div className="w-16 rounded-full">
            <img src={selectedConversation.profilePic} />
          </div>
        </div>
        <div className="text-white font-bold size-4 w-full">{selectedConversation.firstName} {selectedConversation.lastName}</div>
      </div>
      <div className="flex items-center">
        <FaPhoneAlt className="text-white size-5 mr-5 cursor-pointer" />
        <FaVideo className="text-white size-6 mr-2 cursor-pointer" />
      </div>
    </div>
  )
}

export default NavMessage
