import User from "./User"
import useNavUser from '../../../hooks/useNavUser';

function Users() {

  const { users } = useNavUser();
  return (
    <div className="overflow-auto pb-24 h-screen w-full flex-1">
      {users && users.map((user) => (
        user &&
        <User
          key={user._id}
          user={user}
        />
      ))}

    </div>

  )
}

export default Users
