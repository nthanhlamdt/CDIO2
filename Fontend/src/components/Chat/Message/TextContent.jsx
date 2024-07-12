function TextContent({ messages, type, user }) {
  // Kiểm tra xem messages.updatedAt có phải là một đối tượng Date hợp lệ không
  const updatedAt = messages.updatedAt instanceof Date ? messages.updatedAt : new Date(messages.updatedAt);

  // Trích xuất giờ và phút từ updatedAt
  const hour = updatedAt.getHours() < 10 ? '0' + updatedAt.getHours() : updatedAt.getHours();
  const minute = updatedAt.getMinutes() < 10 ? '0' + updatedAt.getMinutes() : updatedAt.getMinutes();
  return (
    <div className={`chat ${type}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Avatar"
            src={user.profilePic}
          />
        </div>
      </div>
      <div className="chat-bubble bg-emerald-500 text-black">{messages.message}</div>
      <div className="chat-footer opacity-50">Đã gửi {`${hour}:${minute}`}</div>
    </div>
  );
}

export default TextContent;
