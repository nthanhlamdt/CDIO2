import ListFriends from "../model/ListFriends.model.js";
import Account from "../model/account.model.js";
import generateToken from "../util/generateToken.js"

export const Login = async (req, res) => {
  try {

    const { userName, password } = req.body

    const checkUserName = await Account.findOne({ userName })

    const isPassword = checkUserName?.password === password || ""
    if (!checkUserName || !isPassword) {

      return res.status(400).json({ error: "Mật khẩu hoặc tài khoản không hợp lệ" })
    }
    generateToken(checkUserName._id, res)
    res.status(200).json({

      _id: checkUserName._id,
      firstName: checkUserName.firstName,
      lastName: checkUserName.lastName,
      phoneNumber: checkUserName.phoneNumber,
      userName: checkUserName.userName,
      gender: checkUserName.gender,
      profilePic: checkUserName.profilePic
    })

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const SignUp = async (req, res) => {
  try {
    const { lastName, firstName, phoneNumber, userName, password, confirmPassword, gender, email, dateOfBirth } = req.body;

    if (password !== confirmPassword) {

      return res.status(400).json({ error: "Mật khẩu không trùng khớp" });
    }

    const checkUsername = await Account.findOne({ userName });
    if (checkUsername) {
      return res.status(400).json({ error: "Tên người dùng đã tồn tại" });
    }

    if (phoneNumber.length < 10 || phoneNumber.length > 11 || phoneNumber[0] !== '0' || phoneNumber[1] == '0') {
      return res.status(400).json({ error: "Số điện thoại không hợp lệ" })
    }


    const checkPhoneNumber = await Account.findOne({ phoneNumber })

    if (checkPhoneNumber) {
      return res.status(400).json({ error: "Số điện thoại đã tồn tại" })
    }

    const URL_ProfilePic = `https://robohash.org/${userName}`;

    const newAccount = new Account({
      lastName,
      firstName,
      phoneNumber,
      userName,
      password,
      gender,
      email,
      dateOfBirth,
      profilePic: URL_ProfilePic
    });


    if (newAccount) {
      generateToken(newAccount._id, res)
      await newAccount.save();
      const newListFriends = new ListFriends({
        UserId: newAccount._id
      })

      await newListFriends.save()
      res.status(201).json({
        _id: newAccount._id,
        firstName: newAccount.firstName,
        lastName: newAccount.lastName,
        phoneNumber: newAccount.phoneNumber,
        userName: newAccount.userName,
        gender: newAccount.gender,
        email: newAccount.email,
        dateOfBirth: newAccount.dateOfBirth,
        profilePic: newAccount.profilePic
      })

    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const LogOut = (req, res) => {
  try {
    res.status(201).json({ message: "Đăng xuất thành công" })
  }
  catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
