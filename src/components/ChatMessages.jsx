import React, { useContext, useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const ChatMessages = () => {
  const [messages, setMessages] = useState([]);
  const { chatUser, setChatUser } = useContext(ChatContext);
  useEffect(() => { 
    const unSub = onSnapshot(doc(db, "chats", chatUser.chatId), (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages);
      }
      return () => {
        unSub();
      };
    });
  }, [chatUser.chatId]);
  return (
    <div className="messages h-[40rem] overflow-y-auto flex flex-col bg-black">
      {
        messages && messages.map((message) =>{
          return <ChatMessage message={message} key={message.id} /> 
        })
      }
    </div>
  );
};

export default ChatMessages;
