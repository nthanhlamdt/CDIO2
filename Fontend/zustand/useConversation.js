import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  lastMessage: null,
  setLastMessage: (lastMessage) => set({ lastMessage }),
}));

export default useConversation;