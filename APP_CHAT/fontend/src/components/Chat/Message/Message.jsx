import ContentMessage from './ContentMessage'
import InputMessage from './InputMessage'
import NavMessage from './NavMessage'

function Message() {

  return (
    <div className='flex-1 bg-slate-800 h-screen overflow-y-hidden flex flex-col'>
      <NavMessage />
      <div className="w-full flex-1 overflow-auto">
        <ContentMessage />
      </div>
      <InputMessage />
    </div>
  )
}

export default Message
