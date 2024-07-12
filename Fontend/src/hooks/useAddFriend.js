import toast from 'react-hot-toast'

const useAddFriend = () => {
  const addFriend = async (phoneNumber) => {
    try {
      // Gửi yêu cầu POST đến endpoint đăng nhập
      const response = await fetch('/api/friend', {
        method: 'POST',
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

  return { addFriend }
}

export default useAddFriend
