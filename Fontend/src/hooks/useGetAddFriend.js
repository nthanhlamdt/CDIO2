import { useEffect, useState } from "react";

const useGetAddFriend = () => {
  const [getAddFriend, setGetAddFriend] = useState([])
  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await fetch('/api/friend/getaddfriend', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setGetAddFriend(data)
      }

      catch (error) {
        console.error(error.message)
        return false;
      }
    }
    getMessage();
  })
  return { getAddFriend }
}

export default useGetAddFriend
