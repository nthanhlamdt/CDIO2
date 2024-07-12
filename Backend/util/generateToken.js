import jwt from "jsonwebtoken";
const generateToken = (userId, res) => {
  // Tạo token với payload chứa userId và secret key từ biến môi trường
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d", // Token sẽ hết hạn sau 15 ngày
  });

  // Thiết lập cookie với tên 'jwt' chứa token vừa tạo
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // Thời gian sống của cookie là 15 ngày
    httpOnly: true, // Cookie chỉ có thể được truy cập bởi server, giúp ngăn chặn XSS attacks
    sameSite: "strict", // Cookie sẽ không được gửi cùng các yêu cầu cross-site, giúp ngăn chặn CSRF attacks
    secure: process.env.NODE_ENV !== "development", // Cookie chỉ được gửi qua HTTPS nếu không ở môi trường development
  });
};

export default generateToken