import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error ");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-5 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        width="200"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="logo"
      />
      {userData.user && (
        <div className="flex">
          <img
            src={userData?.user?.photoURL}
            alt="usericon"
            width="40"
            className="rounded-full"
          />
          <div className="px-2">
            <p className="font-bold">{userData?.user?.displayName}</p>
            <button className="text-red-500 font-bold" onClick={handleSignOut}>
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
