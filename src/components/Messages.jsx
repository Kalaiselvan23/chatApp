import React, { useContext, useState } from "react";
import { BiPhoneCall, BiVideo } from "react-icons/bi";
import { ChatContext } from "../context/ChatContext";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

const Messages = () => {
  const {chatUser:{user}}=useContext(ChatContext)
  
  return user.uid ? (
    <div className="relative">
      <div className="flex h-16 justify-between p-2 text-white font-semibold bg-black border-b-2">
        <div className="font-semibold">
          <p className="text-lg font-semibold">{user.displayName}</p>
          <span>Active</span>
        </div>
        <ul className="w-28 text-white font-thin text-3xl flex items-center gap-4">
          <li className="rounded-full ">
            <BiVideo />
          </li>
          <li className="rounded-full p-1">
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
