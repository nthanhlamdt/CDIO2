import { useState, useEffect } from "react";

const useNavUser = () => {
  const [users, setUsers] = useState([]);
  const getNavUser = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    getNavUser();
  }, []);

  return { users, getNavUser };
}

export default useNavUser;
