import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoginIn, setIsLoginIn] = useState(true); //Toggle for Sign-in & Sign-up
  const toggleSignInForm = () => {
    setIsLoginIn(!isLoginIn);
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
        <form className="w-3/12 absolute p-10 bg-black mx-auto right-0 left-0 my-48 rounded-2xl bg-opacity-70">
          <h1 className="text-3xl font-bold text-white p-2 m-2">
            {isLoginIn ? "Sign-in" : "Sign-Up"}
          </h1>

          {!isLoginIn && (
            <input
              type="text"
              placeholder="Name"
              className="p-6 m-2 w-full rounded-full bg-slate-800 text-white"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-6 m-2 w-full rounded-full bg-slate-800 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-6 m-2 w-full rounded-full bg-slate-800 text-white"
          />
          <br />
          <button className="p-6 m-2 bg-red-600 w-full rounded-full text-white">
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
