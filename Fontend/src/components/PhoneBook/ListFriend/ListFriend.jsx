import NavListFriend from "./NavListFriend";
import useNavUser from "../../../hooks/useNavUser";
import Friend from "./Friend";

function ListFriend() {
  const { users, getNavUser, loading, error } = useNavUser();

  // Ensure users are available before rendering
  return (
    <div className="flex-1 bg-slate-300 h-screen overflow-y-hidden flex flex-col">
      <NavListFriend />
      {users && users.map(user => (
        <Friend key={user._id} user={user} />
      ))}
    </div>
  );
}

export default ListFriend;
