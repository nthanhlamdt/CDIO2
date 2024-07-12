import PropTypes from 'prop-types';
import useConversation from '../../../../zustand/useConversation.js';
// import { useSocketContext } from '../../../context/SocketContext.jsx';

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isConversation = selectedConversation?._id === user._id ? selectedConversation : null;
  // const { onlineUsers } = useSocketContext();
  // const isOnline = onlineUsers.includes(user._id);
  // console.log(isOnline)
  return (
    <div
      className={`flex items-center py-2 pl-6 cursor-pointer w-full h-24 hover:bg-slate-300 border border-color-white 
      ${isConversation ? "bg-slate-300" : ""}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className='avatar online'>
        <div className="w-16 rounded-full bg-stone-400">
          <img src={user.profilePic} alt={`${user.firstName} ${user.lastName}`} />
        </div>
      </div>
      <div className="flex flex-col ml-3">
        <div className="font-bold mb-1 text-black">{user.firstName} {user.lastName}</div>
        <div className="text-slate-400">Hello anh bạn</div>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
