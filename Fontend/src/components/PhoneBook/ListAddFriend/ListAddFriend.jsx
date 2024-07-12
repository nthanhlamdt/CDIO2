import useGetAddFriend from "../../../hooks/useGetAddFriend"
import AddFriend from "./AddFriend"
import NavListAddFriend from "./NavListAddFriend"

function ListAddFriend() {
  const { getAddFriend } = useGetAddFriend()
  return (
    <div className="flex-1 bg-slate-300 h-screen overflow-y-hidden flex flex-col">
      <NavListAddFriend />
      {getAddFriend && getAddFriend.map(user =>
        (<AddFriend key={user._id} users={user} />))}
    </div>
  )
}

export default ListAddFriend
