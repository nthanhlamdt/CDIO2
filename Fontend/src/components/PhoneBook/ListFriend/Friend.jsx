import React from 'react'

function Friend({ user }) {
  return (
    <div className='flex items-center justify-between py-2 p-6 cursor-pointer w-full h-24 bg-white hover:bg-slate-300 border border-color-white'>

      <div className='flex items-center'>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-16 rounded-full bg-slate-400">
            <img src={user.profilePic} alt={user.lastName} />
          </div>
        </div>
        <div className="flex flex-col ml-3">
          <div className="font-bold mb-1 text-black">{user.firstName} {user.lastName}</div>
        </div>
      </div>
      <button className="btn btn-primary">Xóa</button>
    </div>
  )
}

export default Friend
