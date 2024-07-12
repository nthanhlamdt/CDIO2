import { useAuthContext } from '../../context/authContext.jsx'
import { MdCelebration } from "react-icons/md";

function NullUser() {
  const { authUser } = useAuthContext()
  return (
    <div className='bg-slate-300 text-black h-screen w-full flex flex-col items-center justify-center text-3xl p-20 text-center'>
      <p>Chào mừng<span className='font-bold'>{authUser.firstName} {authUser.lastName}</span> trở lại! Hãy bắt đầu tạo nhóm, lên lịch họp và theo dõi tiến độ dự án ngay bây giờ.</p>
      <div className='flex'>
        <MdCelebration className='text-5xl text-red-700' />
        <MdCelebration className='text-5xl text-red-700' />
        <MdCelebration className='text-5xl text-red-700' />
      </div>
    </div>
  )
}

export default NullUser
