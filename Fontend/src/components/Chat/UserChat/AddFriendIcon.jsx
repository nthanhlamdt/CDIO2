import React, { useState, useEffect } from 'react';
import { FaUserPlus } from "react-icons/fa";
import useSearchUser from "../../../hooks/useSearchUser";
import HiddenUser from './hiddenUser'; // Ensure the import matches the component name
import useAddFriend from '../../../hooks/useAddFriend';
import useCancelAddFriend from '../../../hooks/useCancelAddFriend';
import { useAuthContext } from "../../../context/authContext";
import useAcceptFriend from '../../../hooks/useAcceptFriend';

function AddFriendIcon() {
  const { addFriend } = useAddFriend();
  const { cancelAddFriend } = useCancelAddFriend();
  const { searchUsers, dataSearchUser } = useSearchUser();
  const [userData, setUserData] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showAddFriend, setShowAddFriend] = useState('addfriend');
  const [phoneNumber, setPhoneNumber] = useState("");
  const { authUser } = useAuthContext();
  const { acceptFriend } = useAcceptFriend();

  useEffect(() => {
    if (userData) {
      if (phoneNumber === authUser.phoneNumber) {
        setShowAddFriend('');
      } else if (userData.friendRequestStatus === "pending" && userData.friendRequestId === authUser._id) {
        setShowAddFriend('accept');
      } else if (userData.friendRequestStatus === "pending" && userData.friendRequestId !== authUser._id) {
        setShowAddFriend('cancel');
      } else if (userData.friendRequestStatus === 'accepted') {
        setShowAddFriend('');
      } else {
        setShowAddFriend('addfriend');
      }
    }
  }, [userData, authUser._id, phoneNumber]);

  async function searchUser() {
    if (phoneNumber) {
      const data = await searchUsers(phoneNumber);
      setUserData(data);
      setDropdownVisible(!!data);
      console.log(data);
    } else {
      setUserData(null);
      setDropdownVisible(false);
    }
  }

  function handleSearchUser(event) {
    setPhoneNumber(event.target.value);
  }

  // Function to toggle between "Kết bạn" and "Hủy yêu cầu"
  const onClickShow = (buttonType) => {
    if (buttonType === 'addfriend') {
      addFriend(phoneNumber);
      setShowAddFriend('cancel');
    } else if (buttonType === 'cancel') {
      cancelAddFriend(phoneNumber);
      setShowAddFriend('addfriend');
    } else if (buttonType === 'accept') {
      acceptFriend(phoneNumber);
      setShowAddFriend('');
    }
  };

  return (
    <div className="tooltip tooltip-bottom" data-tip="Thêm bạn">
      {/* Button to open the add friend modal */}
      <button onClick={() => document.getElementById('Modal_Addfriend').showModal()}>
        <FaUserPlus className="text-2xl text-white cursor-pointer ml-5 tooltip tooltip-top" data-tip="Thêm bạn" />
      </button>

      {/* Add friend modal dialog */}
      <dialog id="Modal_Addfriend" className="modal">
        <div className="modal-box max-w-96">
          <form method="dialog">
            {/* Button to clear input and close modal */}
            <button
              onClick={() => {
                setPhoneNumber("")
                setUserData(null)
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>

          {/* Modal title */}
          <h1 className='font-bold'>Thêm bạn</h1>

          <div className='flex flex-col justify-center mt-5'>
            {/* Input for phone number search */}
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              className="input input-bordered input-accent w-full inputNumberPhone"
              value={phoneNumber}
              onChange={handleSearchUser}
            />
            {/* Display dropdown list of users if there are search results */}
            {dropdownVisible && userData && (
              <ul className="bg-base-100 w-full shadow p-0 mt-1">
                <li className='flex items-center hover:bg-slate-200 px-2' key={userData._id}>
                  {/* Render HiddenUser component to display user information */}
                  <HiddenUser
                    lastName={userData.lastName}
                    firstName={userData.firstName}
                    profilePic={userData.profilePic}
                    phoneNumber={userData.phoneNumber}
                  />

                  {showAddFriend === 'addfriend' ? (
                    <button onClick={() => onClickShow('addfriend')} className="btn btn-primary addfriend">Kết bạn</button>
                  ) : showAddFriend === 'cancel' ? (
                    <button onClick={() => onClickShow('cancel')} className="btn btn-active cancel">Hủy yêu cầu</button>
                  ) : showAddFriend === 'accept' ? (
                    <button onClick={() => onClickShow('accept')} className="btn btn-primary accept">Chấp nhận</button>
                  ) : null}
                </li>
              </ul>
            )}

            {/* Button to perform search */}
            <button
              className="btn btn-primary mt-5"
              onClick={() => searchUser()}
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default AddFriendIcon;