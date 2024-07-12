import TextReceive from "./TextReceive"
import TextSend from "./TextSend"
import useGetMessage from "../../../hooks/useGetMessage"
import { useAuthContext } from "../../../context/authContext"
// import useListenMessages from "../../../hooks/useListenMessages"
function ContentMessage() {
  const { messages } = useGetMessage()
  // useListenMessages()
  const { authUser } = useAuthContext()
  return (
    <div className="flex flex-col p-5 bg-slate-300 w-full h-full overflow-y-auto ">
      {messages.map((mess) => (
        mess.senderId === authUser._id ?
          <TextSend
            key={mess._id}
            messages={mess}
          /> :
          <TextReceive
            key={mess._id}
            messages={mess}
          />
      ))}
    </div>
  )
}

export default ContentMessage
