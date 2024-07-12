

import Users from "./Users"
import Search from "./Search"
function UserChat() {
  return (
    <div className='w-1/3 h-screen bg-white relative min-w-80 max-w-96 border-r border-l'>
      <Search />
      <Users />
    </div>
  )
}

export default UserChat
