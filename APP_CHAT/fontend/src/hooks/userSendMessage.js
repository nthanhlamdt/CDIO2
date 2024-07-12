import useConversation from "../../zustand/useConversation";

const useSendMessage = () => {
  const { selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    try {

      const response = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to send message: ${errorData.message}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return false;
    }
  };

  return { sendMessage };
};

export default useSendMessage;
