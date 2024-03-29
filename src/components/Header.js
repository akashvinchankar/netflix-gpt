import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLanguage } from "../utils/configSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { setGptSearchedMovies, toggleSearch } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";
import { searchLanguageConstants } from "../utils/languageConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const selectedLanguage = useSelector((store) => store.config.language);
  const showGptSearch = useSelector((store) => store.gpt.toggleSearch);

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
    dispatch(setGptSearchedMovies({ movieNames: null, movieResults: null }));
  };

  return (
    <div className="absolute w-screen px-8 py-5 bg-gradient-to-b from-black z-10 flex justify-between">
      <img width="200" src={LOGO} alt="logo" />
      {userData.user && (
        <div className="flex">
          <select
            className="mr-2 flex-2 text-white bg-gray-700 hover:bg-slate-800 px-4 py-2 rounded-lg shadow-lg"
            onChange={(e) => dispatch(setLanguage(e.target.value))}
            value={selectedLanguage}
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option value={language.identifier} key={language.identifier}>
                {language.displayName}
              </option>
            ))}
          </select>
          <button
            className="mr-2 flex-2 bg-purple-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-900"
            onClick={toggleGptSearch}
          >
            {!showGptSearch
              ? searchLanguageConstants[selectedLanguage].GPTSearch
              : "Home"}
          </button>
          <div className="flex flex-2">
            <img
              src={userData?.user?.photoURL}
              alt="usericon"
              width="40"
              className="rounded-full"
            />
            <div className="px-2 text-white">
              <p>{userData?.user?.displayName}</p>
              <button onClick={handleSignOut}>
                ({searchLanguageConstants[selectedLanguage].signOut})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
