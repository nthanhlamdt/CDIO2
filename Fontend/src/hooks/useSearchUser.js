const useSearchUser = () => {
  const searchUsers = async (phoneNumber) => {
    try {
      const response = await fetch(`/api/users/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      return data; // Return the data instead of true
    }
    catch (error) {
      console.log(error.message)
      return false;
    }
  }
  return { searchUsers }
}

export default useSearchUser
