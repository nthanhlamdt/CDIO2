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
      await sendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
      setMessage("");
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
