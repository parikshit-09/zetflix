import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateLogin } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isLoginIn, setIsLoginIn] = useState(true); //Toggle for Sign-in & Sign-up
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsLoginIn(!isLoginIn);
  };

  //handling login

  const handleButtonClick = () => {
    //console.log(email.current.value);
    //console.log(password.current.value);
    setErrorMessage(validateLogin(email.current.value, password.current.value));

    if (errorMessage) return;

    if (!isLoginIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: "user.current.value",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message); // ...
            });
          //console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_small.jpg"
          alt="login-bg"
        />
      </div>
      <div>
        <form
          className="w-3/12 absolute p-10 bg-black mx-auto right-0 left-0 my-48 rounded-2xl bg-opacity-70"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl font-bold text-white p-2 m-2">
            {isLoginIn ? "Sign-in" : "Sign-Up"}
          </h1>

          {!isLoginIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-6 m-2 w-full rounded-full bg-slate-800 text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-6 m-2 w-full rounded-full bg-slate-800 text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-6 m-2 w-full rounded-full bg-slate-800 text-white"
          />
          <p className="text-red-600 p-2 font-bold">{errorMessage}</p>
          <br />
          <button
            className="p-6 m-2 bg-red-600 w-full rounded-full text-white"
            onClick={handleButtonClick}
          >
            Sign-In
          </button>
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isLoginIn
              ? "New to Zetflix? Sign-Up now."
              : "Already a user? Sign-In now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
