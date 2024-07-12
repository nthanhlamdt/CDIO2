import ContentMessage from './ContentMessage'
import InputMessage from './InputMessage'
import NavMessage from './NavMessage'

function Message() {

  return (
    <div className='flex-1 bg-slate-300 h-screen flex flex-col'>
      <NavMessage />
      <ContentMessage />
      <InputMessage />
    </div>
  )
}

export default Message
