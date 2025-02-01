import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const handleGptSearchView = () => dispatch(toggleGptSearchView());
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-screen flex items-center justify-between">
      <img className="w-48" src="Zetflix.svg" alt="logo" />

      <div>
        {user && (
          <>
            <button
              className="p-4 mx-2 bg-purple-500 text-white rounded-full"
              onClick={handleGptSearchView}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
            <button
              className="p-4 bg-red-600 text-white font-bold rounded-full"
              onClick={handleSignOut}
            >
              Sign-Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
