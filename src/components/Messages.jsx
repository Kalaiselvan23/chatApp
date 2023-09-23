import React, { useContext, useState } from "react";
import { BiPhoneCall, BiVideo } from "react-icons/bi";
import { ChatContext } from "../context/ChatContext";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

const Messages = () => {
  const {chatUser:{user}}=useContext(ChatContext)
  
  return user.uid ? (
    <div className="relative">
      <div className="flex h-16 justify-between p-3 bg-blue-500">
        <div>
          <p className="text-lg font-medium">{user.displayName}</p>
          <span>Active</span>
        </div>
        <ul className="w-28 text-[#435F73] font-thin text-3xl flex items-center justify-between">
          <li className="bg-[#F0F4F8] p-2 rounded-full ">
            <BiVideo />
          </li>
          <li className="bg-[#F0F4F8] rounded-full p-2">
            <BiPhoneCall />
          </li>
        </ul>
      </div>
      <ChatMessages />
      <MessageInput/>
    </div>
  ) : (
    <div className=" flex justify-center items-center">
      <span className="text-2xl font-semibold text-gray-400">
        click user to chat
      </span>
    </div>
  );
};

export default Messages;
