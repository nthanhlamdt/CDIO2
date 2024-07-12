
const useCancelAddFriend = () => {
  const cancelAddFriend = async (phoneNumber) => {
    try {
      const response = await fetch('/api/friend/cancelfriend', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber
        }),
      })

      // Xử lý kết quả từ server
      const data = await response.json()
      console.log(data) // Trả về true khi đăng nhập thành công
    } catch (error) {
      console.error({ error: error.message })
    }
  }

  return { cancelAddFriend }
}

export default useCancelAddFriend
