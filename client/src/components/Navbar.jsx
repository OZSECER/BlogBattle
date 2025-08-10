import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import useToken from "C:/Users/senan/OneDrive/Masaüstü/Tarvina Projem/client/src/hooks/useToken";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const [token] = useToken();
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
    <div className="h-20 bg-indigo-600 flex items-center justify-between px-5">
      <div className="text-white font-bold text 2xl cursor-pointer">
        BLOG BATTLE
      </div>
      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Ara"
          className="p-2 outline-none rounded-md"
        />
        <div
          onClick={openModal}
          className="w-36 border border-indigo-900 p-2 rounded-md text-center text-white cursor-pointer hover:bg-indigo-800"
        >
          Post Oluştur
        </div>
        {token?.token && (
          <BiLogOut
            onClick={logoutFunc}
            size={25}
            className="text-white cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
