import toast from 'react-hot-toast'

const useAcceptFriend = () => {
  const acceptFriend = async (phoneNumber) => {
    try {
      // Gửi yêu cầu POST đến endpoint đăng nhập
      const response = await fetch('/api/friend/accept', {
        method: 'PATCH',
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

  return { acceptFriend }
}

export default useAcceptFriend
