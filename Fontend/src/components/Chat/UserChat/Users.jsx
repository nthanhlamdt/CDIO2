import User from "./User";
import useNavUser from '../../../hooks/useNavUser';
import { useEffect } from "react";

function Users() {
  const { users, getNavUser, loading, error } = useNavUser();

  useEffect(() => {
    getNavUser(); // Fetch users when the component mounts
  }, [getNavUser]); // Dependency array includes getNavUser

  return (
    <div className="overflow-auto pb-24 h-screen w-full flex-1">
      {loading && <span className="loading loading-spinner loading-lg"></span>}
      {error && <div>Error: {error}</div>}
      {users && users.map((user) => (
        user && (
          <User
            key={user._id}
            user={user}
          />
        )
      ))}
    </div>
  );
}

export default Users;
