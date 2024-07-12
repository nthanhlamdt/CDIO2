import { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../../hooks/userSendMessage.js";

function InputMessage() {
  const { sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      const result = await sendMessage(message);
      if (result) {
        setMessage(""); // Clear the input field after sending the message
      } else {
        // Handle the error case (optional)
        console.error('Failed to send message');
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="relative flex items-center">
      <div className="h-12 w-full">
        <input
          type="text"
          className="h-12 w-full outline-none p-4"
          placeholder="Nhập tin nhắn"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <IoIosSend
        className="absolute right-6 size-7 text-emerald-500 cursor-pointer"
        onClick={handleSendMessage}
      />
    </div>
  );
}

export default InputMessage;
