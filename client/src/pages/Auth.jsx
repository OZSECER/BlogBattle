import React, { useState } from "react";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

const ElegantOpenBook = ({ className, size = 100 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 8C4 8 24 2 32 2C40 2 60 8 60 8V56C60 56 40 62 32 62C24 62 4 56 4 56V8Z"
      fill="url(#paint0_linear)"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#shadow)"
    />
    <path
      d="M32 2V62"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L32 26L52 12"
      stroke="#60A5FA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 52L32 38L52 52"
      stroke="#60A5FA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="4"
        y1="2"
        x2="60"
        y2="62"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BFDBFE" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
      <filter
        id="shadow"
        x="-5"
        y="-5"
        width="74"
        height="74"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="2"
          floodColor="#2563EB"
          floodOpacity="0.3"
        />
      </filter>
    </defs>
  </svg>
);

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
      {/* Sol üst uçan kitap */}
      <ElegantOpenBook
        className="absolute top-10 left-10 animate-flap-wings-smooth opacity-80 cursor-default"
        size={120}
      />

      {/* Sağ alt uçan kitap */}
      <ElegantOpenBook
        className="absolute bottom-10 right-10 animate-flap-wings-smooth-reverse opacity-80 cursor-default"
        size={120}
      />
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
        <h1 className="text-3xl text-indigo-700 font-extrabold mb-8 text-center tracking-widest drop-shadow-md">
          {signUp ? "REGISTER" : "LOGIN"}
        </h1>
        <div className="flex flex-col space-y-5 my-5">
          {signUp && (
            <input
              value={authData.username}
              name="username"
              onChange={onChangeFunc}
              type="text"
              placeholder="Username"
              className="px-5 py-3 rounded-lg border border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-md placeholder-indigo-400 transition duration-300"
            />
          )}
          <input
            value={authData.email}
            name="email"
            onChange={onChangeFunc}
            type="email"
            placeholder="Email"
            className="px-5 py-3 rounded-lg border border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-md placeholder-indigo-400 transition duration-300"
          />
          <input
            value={authData.password}
            name="password"
            onChange={onChangeFunc}
            type="password"
            placeholder="Password"
            className="px-5 py-3 rounded-lg border border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-md placeholder-indigo-400 transition duration-300"
          />
        </div>
        <div className="text-indigo-700 text-sm cursor-pointer mb-6 text-center hover:underline select-none">
          {signUp ? (
            <span onClick={() => setSignUp(false)}>
              Daha önce giriş yaptınız mı?
            </span>
          ) : (
            <span onClick={() => setSignUp(true)}>
              Kayıt olmak için tıklayınız.
            </span>
          )}
        </div>
        <button
          onClick={authFunc}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          {signUp ? "Kayıt Ol" : "Giriş Yap"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
