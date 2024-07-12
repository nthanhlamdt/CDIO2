import mongoose from 'mongoose';
import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import Account from '../model/account.model.js';
import { getReceiverSocketId, io } from '../socket/socket.js';

export const sendMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const { message } = req.body;
    const senderId = req.account._id;

    // Kiểm tra và chuyển đổi senderId thành ObjectId
    if (!mongoose.Types.ObjectId.isValid(senderId)) {
      return res.status(400).json({ error: "Invalid sender ID" });
    }

    if (!senderId || !receiverId) {
      return res.status(400).json({ error: "ID không thể trống" })
    }
    if (receiverId == senderId) {
      return res.status(400).json({ error: "ID không thể trùng lặp" });
    }

    let conversation = await Conversation.findOne({
      Participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
      conversation = await Conversation.create({
        Participants: [senderId, receiverId]
      });
    }

    const newMessage = new Message({
      receiverId,
      senderId,
      message
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId)
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage)
    }

    res.status(200).json(newMessage);
  } catch (error) {
    console.error("Error in sendMessage:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.account._id;
    let conversation = await Conversation.findOne({
      Participants: { $all: [senderId, receiverId] }
    }).populate('messages');

    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }
    const messages = conversation.messages;
    res.status(200).json(messages);
  }

  catch (error) {
    console.error("Error in sendMessage:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
