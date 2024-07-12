import { useAuthContext } from '../context/authContext';
import toast from 'react-hot-toast'
const useLogout = () => {
  const { setAuthUser } = useAuthContext()

  const logout = async () => {
    try {
      // Gửi yêu cầu POST đến endpoint đăng nhập
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      // Xử lý kết quả từ server
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Đăng xuất thất bại')
      }

      localStorage.removeItem('data-user');
      setAuthUser(null);
      toast.success('Đăng xuất thành công!')
      return true
    } catch (error) {
      console.error(error.message)
      toast.error(error.message)
      return false
    }
  }
  return { logout }
};


export default useLogout;
