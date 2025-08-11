import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();

  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/auth";
  };

  const openModal = () => {
    if (!token?.token) {
      window.location = "/auth";
      return;
    } else {
      dispatch({ type: "MODAL", payload: true });
    }
  };

  return (
    <div className="h-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-between px-5 shadow-lg">
      <div
        onClick={() => (window.location = "/")}
        className="
      bg-clip-text text-transparent 
      bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400
      font-extrabold text-3xl tracking-widest
      cursor-pointer
      hover:scale-110 hover:brightness-110
      transition-transform duration-300 ease-in-out
      drop-shadow-lg
    "
        style={{ userSelect: "none" }}
      >
        BLOG BATTLE
      </div>
      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Ara..."
          className="p-2 outline-none rounded-md focus:ring-2 focus:ring-pink-300 transition"
        />
        <div
          onClick={openModal}
          className="w-36 border border-indigo-900 p-2 rounded-md text-center text-white cursor-pointer bg-indigo-700 hover:bg-pink-500 hover:scale-105 transform transition duration-300 shadow-md"
        >
          🚀 Blog Oluştur
        </div>
        {token?.token && (
          <BiLogOut
            onClick={logoutFunc}
            size={28}
            className="text-white cursor-pointer hover:rotate-12 transform transition duration-200 hover:text-red-300"
            title="Çıkış Yap"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
