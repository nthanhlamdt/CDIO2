import UserChat from './UserChat/UserChat.jsx';
import Message from './Message/Message.jsx';
import useConversation from '../../../zustand/useConversation.js';
import NullUser from './NullUser';

function Chat() {
  const { selectedConversation } = useConversation();

  console.log('Selected Conversation:', selectedConversation); // Debug log

  return (
    <div className='flex w-screen h-screen bg-black'>
      <UserChat />
      {!selectedConversation ? (
        < NullUser />

      ) : (
        <Message />
      )}
    </div>
  );
}

export default Chat;
