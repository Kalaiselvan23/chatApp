import React, { useContext, useState } from "react";
import Chats from "./Chats.jsx";
import { BiSearch } from "react-icons/bi";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext.js";
import { db } from "../firebase.js";

const ChatLists = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(null);
  const { CurrentUser } = useContext(AuthContext);

  const handleSubmit = async () => {
    const citiesRef = collection(db, "users");
    const q = query(citiesRef, where("displayName", "==", search));

    const querySnapshot = await getDocs(q);
    // setSearchData(querySnapshot);
    querySnapshot.forEach((doc) => {
      setSearchData(doc.data());
    });

    setSearch("");
  };
  const handleSelect = async () => {
    //check whether the group is exister or not ..if it doesnt exist create new usersChat
    //create usersChat for two users
    // const combinedId =
    //   CurrentUser.uid > searchData.uid
    //     ? CurrentUser.uid + searchData.uid
    //     : searchData.uid + CurrentUser.uid;
    const combinedId=[CurrentUser.uid,searchData.uid].sort().join("")
    console.log("CombinedID",combinedId)
    // const combinedId=CurrentUser.uid+searchData.uid
    // const combinedId=searchData.uid+CurrentUser.uid
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db,"chats", combinedId), { messages: [] });
        //create user chats
        await updateDoc(doc(db, "userChats", CurrentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: searchData.uid,
            displayName: searchData.displayName,
            photoURL: searchData.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", searchData.uid), {
          [combinedId + ".userInfo"]: {
            uid: CurrentUser.uid,
            displayName: CurrentUser.displayName,
            photoURL: CurrentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log(err);
    }
    setSearchData(null);
  };

  return (
    <div className="col-start-2 p-4 bg-[#EBF4FB]">
      <div>
        <div className=" flex items-center border-[2px] rounded-2xl border-black">
          <input
            className="border-none outline-none h-10 p-2  w-full mr-4 rounded-2xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : null)}
            placeholder="Search User here"
          />
          <BiSearch className="text-2xl mr-3" />
        </div>
        {searchData ? (
          <button
            className="chatGrid border-b-2 border-gray-200 p-1"
            onClick={handleSelect}
          >
            <div className="pic-div">
              <img src={searchData?.photoURL} className=" profile-pic" />
            </div>
            <h1 className="font-semibold  text-base">
              {searchData?.displayName}
            </h1>
          </button>
        ) : null}
        <div>
          <Chats />
        </div>
      </div>
    </div>
  );
};

export default ChatLists;
