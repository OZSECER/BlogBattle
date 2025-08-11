import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const Modal = () => {
  const token = JSON.parse(localStorage.getItem("auth"));
  const [postData, setPostData] = useState({
    userId: token.user._id,
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);

  const onChangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const postCreate = () => {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData));
    } else {
      dispatch(createPostAction(postData));
    }

    dispatch({ type: "MODAL", payload: false });
    toast("Ekleme İşlemi Başarılı.", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  return (
    <div
      className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center
  bg-black bg-opacity-40 backdrop-blur-sm"
    >
      <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 w-1/3 p-6 rounded-xl shadow-2xl text-white">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="flex items-center justify-between cursor-pointer mb-4"
        >
          <h1
            className="font-extrabold text-3xl bg-clip-text text-transparent
        bg-gradient-to-r from-yellow-300 via-red-400 to-pink-500"
          >
            {modal?.updateId ? "BLOG GÜNCELLE" : "BLOG PAYLAŞ"}
          </h1>
          <AiOutlineClose
            size={28}
            className="text-white hover:text-yellow-300 transition-transform duration-300 hover:rotate-90"
          />
        </div>
        <div className="my-6 flex flex-col space-y-5">
          <input
            value={postData.title}
            name="title"
            onChange={onChangeFunc}
            className="bg-white text-gray-800 rounded-md p-3 border-2 border-transparent
          focus:outline-none focus:ring-4 focus:ring-pink-400 focus:border-pink-500
          placeholder-gray-400 transition"
            type="text"
            placeholder="Başlık giriniz"
          />
          <input
            value={postData.description}
            name="description"
            onChange={onChangeFunc}
            className="bg-white text-gray-800 rounded-md p-3 border-2 border-transparent
          focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500
          placeholder-gray-400 transition"
            type="text"
            placeholder="Açıklama giriniz"
          />
        </div>
        <div
          onClick={postCreate}
          className="w-full p-3 text-center bg-yellow-400 text-indigo-900 font-bold rounded-md
        cursor-pointer hover:bg-yellow-300 shadow-lg hover:shadow-yellow-500/60
        transition duration-300 select-none"
        >
          {modal?.updateId ? "Güncelle" : "Paylaş"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
