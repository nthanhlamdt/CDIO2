import useConversation from "../../zustand/useConversation";
import useNavUser from "./useNavUser"// Đảm bảo đúng đường dẫn

const useSendMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
  const { getNavUser } = useNavUser(); // Sử dụng hook để lấy phương thức getNavUser

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
      setMessages([...messages, data]);

      // Cập nhật lại danh sách người dùng sau khi gửi tin nhắn
      await getNavUser();

    } catch (error) {
      console.error(`Error: ${error.message}`);
      return false;
    }
  };

  return { sendMessage };
};

export default useSendMessage;
