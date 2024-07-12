import { useEffect, useRef } from "react";
import TextContent from "./TextContent";
import useGetMessage from "../../../hooks/useGetMessage";
import { useAuthContext } from "../../../context/authContext";
import useListenMessages from "../../../hooks/useListenMessages";
import useConversation from "../../../../zustand/useConversation";
import useNavUser from '../../../hooks/useNavUser';
function ContentMessage() {
  const { loading, getNavUser } = useNavUser();

  const { messages } = useGetMessage();
  useListenMessages();
  const { authUser } = useAuthContext();
  const messageContainerRef = useRef();
  const { selectedConversation } = useConversation()
  useEffect(() => {
    // Scroll to bottom when messages change
    const scrollToBottom = () => {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    };
    scrollToBottom();
    getNavUser();
  }, [messages], [getNavUser]);
  return (
    <div
      className="flex flex-col p-5 bg-slate-300 overflow-y-auto h-full"
      ref={messageContainerRef}
    >
      {loading ? <span className="loading loading-spinner loading-lg"></span>
        : messages.map((mess) => (
          <TextContent
            key={mess._id}
            messages={mess}
            type={mess.senderId === authUser._id ? `chat-end` : `chat-start`}
            user={mess.senderId === authUser._id ? authUser : selectedConversation}
          />
        ))}
    </div>
  );
}

export default ContentMessage;
