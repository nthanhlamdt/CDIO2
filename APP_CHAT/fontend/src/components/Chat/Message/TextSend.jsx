function TextSend({ messages }) {
  return (
    <div className="chat chat-end ">
      <div className="chat-image avatar ">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble bg-emerald-500 text-black">{messages.message}</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  )
}

export default TextSend
