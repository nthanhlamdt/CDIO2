import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';

const useSignup = () => {
  const { setAuthUser } = useAuthContext();

  const signup = async ({ firstName, lastName, phoneNumber, userName, password, confirmPassword, gender }) => {
    const isValid = validateInput({ firstName, lastName, phoneNumber, userName, password, confirmPassword, gender });
    if (isValid) {

      try {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phoneNumber,
            userName,
            password,

            confirmPassword,
            gender,
          }),
        });

        // Xử lý kết quả trả về từ server
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Đăng ký thất bại');
        }

        localStorage.setItem('data-user', JSON.stringify(data));
        setAuthUser(data);

        toast.success('Đăng ký thành công!');
        return true;
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
        return false;
      }
    }
    return false;
  };

  return { signup };
};

function validateInput({ firstName, lastName, phoneNumber, userName, password, confirmPassword, gender }) {
  if (!firstName || !lastName || !phoneNumber || !userName || !password || !confirmPassword || !gender) {
    toast.error("Vui lòng điền đầy đủ các trường bắt buộc.");

    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Mật khẩu không trùng khớp.");
    return false;
  }

  if (password.length < 8) {
    toast.error("Mật khẩu quá ngắn, vui lòng chọn mật khẩu dài hơn.");
    return false;
  }

  return true;
}

export default useSignup;
