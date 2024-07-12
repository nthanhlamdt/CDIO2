import Conversation from "../model/conversation.model.js";
import Account from "../model/account.model.js";
import Message from "../model/message.model.js";

import Friend from "../model/Friend.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const senderId = req.account._id;

    // Find conversations involving the sender
    const filteredConversations = await Conversation.find({
      Participants: { $in: [senderId] }
    });

    // Sort conversations by updatedAt field (most recent first)
    filteredConversations.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    // Extract other user IDs from conversations
    const otherUserIds = filteredConversations.map(conversation =>
      conversation.Participants.find(participant => participant.toString() !== senderId.toString())
    );

    // Fetch users based on otherUserIds
    const getUsers = await Promise.all(
      otherUserIds.map(otherUserId =>
        Account.findById(otherUserId).select("-password -createdAt -__v")
      )
    );

    // Prepare response with users and their last message
    const usersWithLastMessage = await Promise.all(filteredConversations.map(async (conversation, index) => {
      const lastMessageId = conversation.messages.length > 0 ? conversation.messages[conversation.messages.length - 1] : null;
      if (lastMessageId) {
        const lastMessage = await Message.findById(lastMessageId);
        return { ...getUsers[index].toObject(), lastMessage };
      } else {
        return { ...getUsers[index].toObject(), lastMessage: null };
      }
    }));

    res.status(200).json(usersWithLastMessage);

  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getSearchUser = async (req, res) => {
  try {
    const UserId = req.account._id;
    const { phoneNumber } = req.body;

    // Tìm tất cả các tài khoản với số điện thoại được cung cấp
    const user = await Account.findOne({ phoneNumber });
    console.log(UserId);
    // Kiểm tra yêu cầu kết bạn
    const friendRequest = await Friend.findOne({
      $or: [
        { UserId: user._id, AddFriendId: UserId },
        { UserId: UserId, AddFriendId: user._id }
      ]
    });



    // Trả về một đối tượng mới với thông tin cập nhật
    const updatedUser = {
      ...user._doc, // Sử dụng _doc để lấy thông tin của mô hình Account
      friendRequestId: friendRequest?._id, // Thêm _id của yêu cầu kết bạn nếu có
      friendRequestStatus: friendRequest?.Status // Thêm trạng thái của yêu cầu kết bạn nếu có
    };

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error in getSearchUser: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
