import React, { useState } from "react";
import { MdAccountBox, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { auth, storage, db } from "../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, addDoc,setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [error, setError] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    file: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const storage2 = storage;
    try {

      const res = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);

      const date = new Date().getTime();
      const storageRef = ref(storage2, `${userInfo.username + date}`);

      await uploadBytesResumable(storageRef,userInfo.file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName:userInfo.username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName:userInfo.username,
              email:userInfo.email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setError(true);
          }
        });
      });
      navigate("/")
    } catch (err) {
      setError(true);
      
    }
  };
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col p-5 h-fit w-[25rem] login-form border-2 border-black rounded-lg"
      >
        <h1 className="text-2xl font-semibold text-center">Register</h1>
        <div className="input-div">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setUserInfo((prev) => {
                prev.username = e.target.value;
                return { ...prev };
              })
            }
          />
          <MdAccountBox className="text-3xl mx-4" />
        </div>
        <div className="input-div">
          <input
            type="mail"
            placeholder="Email"
            onChange={(e) =>
              setUserInfo((prev) => {
                prev.email = e.target.value;
                return { ...prev };
              })
            }
          />
          <MdAccountBox className="text-3xl mx-4" />
        </div>
        <div className="input-div">
          <input
            type={hide ? "password" : "text"}
            placeholder="Password"
            required
            onChange={(e) => {
              setUserInfo((prev) => {
                prev.password = e.target.value;
                return { ...prev };
              });
            }}
          />
          <div onClick={() => setHide((prev) => !prev)}>
            {!hide ? (
              <MdVisibility className="text-3xl mx-4" />
            ) : (
              <MdVisibilityOff className="text-3xl mx-4" />
            )}
          </div>
        </div>
        <label htmlFor="file">Choose a File</label>
        <input
          type="file"
          id="file"
          className="mb-4 inputFile"
          required
          onChange={(e) =>
            setUserInfo((prev) => {
              prev.file = e.target.files[0];
              return { ...prev };
            })
          }
        />
        <button className="bg-blue-500 h-10 rounded-md text-white my-auto">
          Submit
        </button>
        <span className="text-center">
          Already a User?<NavLink to="/login">Login</NavLink>
        </span>
        {error ? <p>Something went wrong</p> : null}
      </form>
    </div>
  );
};
export default Register;
