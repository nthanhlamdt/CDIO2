import { useState } from 'react';
import { FaUserPlus } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import useSearchUser from "../../../hooks/useSearchUser";
import HiddenUser from './hiddenUser'; // Ensure the import matches the component name

function Search() {
  const { searchUsers } = useSearchUser();
  const [userData, setUserData] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  async function handleSearchUser(event) {
    const phoneNumber = event.target.value;
    if (phoneNumber) {
      const data = await searchUsers(phoneNumber);
      setUserData(data);
      setDropdownVisible(data.length > 0);
      console.log(data);
    } else {
      setUserData([]);
      setDropdownVisible(false);
    }
  }

  return (
    <div className='p-6 flex items-center w-full z-20 h-20 bg-emerald-500 dropdown dropdown-bottom'>
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="input input-bordered h-10 w-2/3 min-w-32"
        onChange={handleSearchUser}
      />
      <div className="relative flex flex-1">
        <FaUserPlus className="text-2xl text-white cursor-pointer ml-5 tooltip tooltip-top" data-tip="Thêm bạn" />
        <MdGroupAdd className="text-2xl text-white cursor-pointer ml-5 tooltip tooltip-bottom" data-tip="Tạo nhóm chat" />
      </div>

      {dropdownVisible && (
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-30 w-52 shadow p-0">
          {userData.map(user => (
            <li key={user._id}>
              <HiddenUser
                lastName={user.lastName}
                firstName={user.firstName}
                profilePic={user.profilePic}
                phoneNumber={user.phoneNumber}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
