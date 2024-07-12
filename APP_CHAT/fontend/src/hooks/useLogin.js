import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContext'

const useLogin = () => {
  const { setAuthUser } = useAuthContext()

  const login = async ({ userName, password }) => {
    const isValid = validateInput({ userName, password })
  
    if (isValid) {
      try {
        // Gửi yêu cầu POST đến endpoint đăng nhập
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName,
            password,
          }),
        })

        // Xử lý kết quả từ server
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.error || 'Đăng nhập thất bại')
        }

        // Lưu thông tin người dùng vào local storage và cập nhật context
        localStorage.setItem('data-user', JSON.stringify(data))
        setAuthUser(data)

        toast.success('Đăng nhập thành công!')
        return true // Trả về true khi đăng nhập thành công
      } catch (error) {
        console.error('Lỗi khi đăng nhập:', error)
        toast.error('Tên đăng nhập hoặc mật khẩu không chính xác.')
        return false // Trả về false khi xảy ra lỗi
      }
    }

    return false // Trả về false nếu dữ liệu đầu vào không hợp lệ
  }

  const validateInput = ({ userName, password }) => {
    if (!userName || !password) {
      toast.error("Vui lòng điền đầy đủ các trường bắt buộc.")
      return false
    }

    return true
  }

  return { login }
}

export default useLogin
