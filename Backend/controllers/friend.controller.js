import Account from "../model/account.model.js";
import Conversation from "../model/conversation.model.js";
import Friend from "../model/Friend.model.js"
import ListFriends from "../model/ListFriends.model.js";
import Message from "../model/message.model.js";

export const AddFriend = async (req, res) => {
  try {

    const { phoneNumber } = req.body;
    const senderId = req.account._id;
    const AddFriendId = await Account.findOne({ phoneNumber: phoneNumber })

    const currentUser = await Account.findById(senderId);
    const friendUser = await Account.findById(AddFriendId._id);

    if (currentUser === friendUser) {
      return res.status(404).json({ message: 'User trùng nhau' });
    }
    if (!currentUser || !friendUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isFriend = await Friend.findOne({
      $or: [
        { UserId: AddFriendId, AddFriendId: senderId },
        { UserId: senderId, AddFriendId: AddFriendId }
      ]
    });

    if (isFriend) {
      return res.status(200).json(isFriend);
    }

    const newFriend = new Friend({
      UserId: senderId,
      AddFriendId,
      Status: "pending"
    });

    await newFriend.save();

    res.status(200).json(newFriend);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAddFriend = async (req, res) => {
  try {
    const userId = req.account._id;
    const findUserAddFriend = await Friend.find({
      AddFriendId: userId,
      Status: "pending"
    });

    // Sử dụng Promise.all để đảm bảo tất cả các lời gọi findOne được hoàn thành
    const getUserAddFriend = await Promise.all(
      findUserAddFriend.map(async (fr) => {
        // Giả sử bạn muốn trả về một đối tượng với một số thông tin cụ thể từ Account
        const userAccount = await Account.findOne({ _id: fr.UserId });
        return {
          userAccount
        };
      })
    );

    res.status(200).json(getUserAddFriend);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export const cancelFriend = async (req, res) => {
  try {

    const { phoneNumber } = req.body;
    const senderId = req.account._id;

    const AddFriendId = await Account.findOne({ phoneNumber: phoneNumber })

    console.log(AddFriendId)
    const currentUser = await Account.findById(senderId);
    const friendUser = await Account.findById(AddFriendId._id);

    if (currentUser === friendUser) {
      return res.status(404).json({ message: 'User trùng nhau' });
    }
    if (!currentUser || !friendUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isFriend = await Friend.findOneAndDelete({
      $or: [
        { UserId: AddFriendId, AddFriendId: senderId },
        { UserId: senderId, AddFriendId: AddFriendId }
      ]
    });

    if (isFriend) {
      console.log('Deleted friend:', isFriend);
      // Xử lý sau khi xóa thành công, ví dụ: gửi phản hồi cho client
    } else {
      console.log('No friend relationship found to delete.');
      // Xử lý khi không tìm thấy mối quan hệ bạn bè để xóa
    }


    res.status(200).json({ message: 'Đã xóa thành công' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const acceptFriend = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const senderId = req.account._id;
    const AddFriendId = await Account.findOne({ phoneNumber: phoneNumber })

    const currentUser = await Account.findById(senderId);
    const friendUser = await Account.findById(AddFriendId);

    if (currentUser._id.equals(friendUser._id)) {
      return res.status(400).json({ message: 'User trùng nhau' });
    }

    if (!currentUser || !friendUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isFriend = await Friend.findOneAndUpdate(
      {
        $or: [
          { UserId: AddFriendId, AddFriendId: senderId },
          { UserId: senderId, AddFriendId: AddFriendId }
        ]
      },
      { $set: { Status: "accepted" } },
      { new: true } // Trả về tài liệu đã được cập nhật
    );

    if (!isFriend) {
      return res.status(400).json({ message: 'Không có trang danh sách kết bạn' });
    }

    const findFriendUser = await ListFriends.findOne({ UserId: senderId });
    const findFriendAdd = await ListFriends.findOne({ UserId: AddFriendId });

    if (findFriendUser) {
      findFriendUser.ListFriend.push(AddFriendId);
      await findFriendUser.save();
    }

    const conversation = await Conversation.create({
      Participants: [senderId, AddFriendId]
    });

    conversation.save()

    if (findFriendAdd) {
      findFriendAdd.ListFriend.push(senderId);
      await findFriendAdd.save();
    }

    res.status(200).json({ message: 'Friend request accepted successfully', isFriend });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getFriend = async (req, res) => {
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
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

