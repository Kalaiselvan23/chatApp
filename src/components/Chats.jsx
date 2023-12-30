import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [Chats, setChats] = useState([]);
  const { CurrentUser, setCurrentUser } = useContext(AuthContext);
  const {chatUser, setchatUser}=useContext(ChatContext)
  console.log("currentUser:" + CurrentUser.uid);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", CurrentUser.uid), (doc) => {
        doc && setChats(doc.data());
      });
      return () => unsub();
    };
    CurrentUser.uid && getChats()
  }, [CurrentUser.uid]);

  const handleSelect=(userInfo)=>{
   setchatUser((prev)=>{
    prev.user=userInfo
    prev.chatId=CurrentUser.uid>userInfo.uid.uid?CurrentUser.uid+userInfo.uid : userInfo.uid+CurrentUser.uid
    return {...prev}
   })
  }

  return  (Chats && Object.entries(Chats).map((chat)=><div className="chatGrid border-b-2 border-gray-500 p-2 " key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
  <div className="pic-div" >
    <img
    src={chat[1]?.userInfo?.photoURL}
      className="profile-pic w-20 h-20"
    />
  </div>
  <h1 className="font-semibold text-white text-base">{chat[1]?.userInfo?.displayName}</h1>
  <span className="text-gray-500">{chat[1]?.lastMessage?.message}</span>
</div>))
};
 

export default Chats;
