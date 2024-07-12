import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import PhoneBook from "../../components/PhoneBook/PhoneBook"
import ManagementProject from "../../components/ManagementProject/ManagementProject";
import Chat from "../../components/Chat/Chat";
function Home() {
  const [activeComponent, setActiveComponent] = useState("chat");

  return (
    <div className='block w-screen h-screen overflow-hidden'>
      <div className="flex">
        <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        {activeComponent === "chat" && (
          <>
            <Chat />
          </>
        )}
        {activeComponent === "phonebook" && <PhoneBook />}
        {activeComponent === "ManagementProject" && <ManagementProject />}

      </div>
    </div>
  )
}

export default Home
