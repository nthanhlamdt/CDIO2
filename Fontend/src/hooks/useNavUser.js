import { useState, useEffect, useCallback } from "react";

const useNavUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNavUser = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/friend/getfriend', {
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getNavUser();
  }, [getNavUser]);

  return { users, getNavUser, loading, error };
}

export default useNavUser;
