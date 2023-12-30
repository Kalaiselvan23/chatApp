import React, { useContext } from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import {
  arrayUnion,
  doc,
  getDocs,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { ChatContext } from "../context/ChatContext";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../context/AuthContext";
import { storage, db } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, query, where,} from "firebase/firestore";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [Error, setError] = useState(false);
  const { CurrentUser } = useContext(AuthContext);
  const [img, setImg] = useState(null);
  const { chatUser } = useContext(ChatContext);
  const handleSend = async () => {
    if (img) {
      //check if there is image attachment or not
      const storageRef = ref(storage, uuid);
      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(storageRef, {
              messages: arrayUnion({
                id: uuid,
                message,
                senderId: CurrentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          } catch (err) {
            console.log(err);
            setError(true);
          }
        });
      });
    } else {
      const chatRef = doc(db, "chats", chatUser.chatId);
      await updateDoc(chatRef, {
        messages: arrayUnion({
          id: uuid(),
          message,
          senderId: CurrentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", CurrentUser.uid), {
      [chatUser.chatId + ".lastMessage"]: {
        message,
      },
      [chatUser.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", chatUser.user.uid), {
      [chatUser.chatId + ".lastMessage"]: {
        message,
      },
      [chatUser.chatId + ".date"]: serverTimestamp(),
    });
    setMessage("");
  };
  return (
    <div className="absolute h-16 gap-2 bottom-0 w-full flex p-3 bg-black border-t-gray-400">
      <input
        className="w-full text-white bg-black border-gray-500 p-2 rounded-md focus:outline-none outline-1 border-2 border-black"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="file" id="attachment" className="hidden" />
      <label htmlFor="attachment" className="flex gap-4 justify-center">
        <button className="text-2xl text-gray-600">
          <GrAttachment />
        </button>
      {message ? (
        <button className="text-2xl text-white" onClick={() => handleSend()}>
          <IoMdSend className="text-white" />
        </button>
      ) : (
        <button>
          <FaMicrophone className="text-2xl text-white" />
        </button>
      )}
      </label>
    </div>
  );
};

export default MessageInput;
