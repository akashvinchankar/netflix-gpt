import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleSearch } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error ");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribes when component unmounts
    return () => unsubscribe();
  }, []);

  const toggleGptSearch = () => {
    dispatch(toggleSearch());
  };

  return (
    <div className="absolute w-screen px-8 py-5 bg-gradient-to-b from-black z-10 flex justify-between">
      <img width="200" src={LOGO} alt="logo" />
      {userData.user && (
        <div className="flex">
          <button
            className="mr-2 bg-purple-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-900"
            onClick={toggleGptSearch}
          >
            GPT Search
          </button>
          <img
            src={userData?.user?.photoURL}
            alt="usericon"
            width="40"
            className="rounded-full"
          />
          <div className="px-2 text-white">
            <p>{userData?.user?.displayName}</p>
            <button onClick={handleSignOut}>(Sign Out)</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
