import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";

const useGetMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation()

  useEffect(() => {
    const getMessage = async () => {
      try {
        if (selectedConversation) {
          const response = await fetch(`/api/message/${selectedConversation._id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const data = await response.json();

          setMessages(data)
        }
      }
      catch (error) {
        console.error(error.message)
        return false;
      }
    }
    getMessage();
  }, [selectedConversation?._id, setMessages]);

  return { messages }
}

export default useGetMessage
