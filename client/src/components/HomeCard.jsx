import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deletePostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ post }) => {
  const token = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletePost = (id) => {
    if (!token?.token) {
      navigate("localhost:3000/Auth");
      return;
    } else {
      dispatch(deletePostAction(id));
      toast("Silme İşlemi Başarılı.", {
        position: "top-right",
        autoClose: 5000,
      });
      window.location.reload();
    }
  };
  const likePost = (id) => {
    if (!token?.token) {
      navigate("/Auth");
      return;
    } else {
      const userId = token.user._id;
      dispatch(updatePostAction(id, userId, { likeIncrement: true }));
    }
  };
  return (
    <div className="relative max-w-xl w-full sm:w-100 border p-5 rounded-md bg-white shadow-lg mx-3 hover:shadow-[0_0_15px_4px_rgba(99,102,241,0.6)] transition-shadow duration-300">
      <div className="font-bold text-xl mb-2">{post?.title}</div>
      <div className="text-gray-700 text-sm">{post?.description}</div>
      <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
        <span>{post?.user}</span>
        <span>{post?.date?.substring(0, 10)}</span>
      </div>
      <div className="absolute -top-3 -right-3 flex items-center space-x-3">
        {/* <AiOutlineDelete
      onClick={() => deletePost(post._id)}
      size={22}
      className="bg-red-500 rounded-full text-white p-1 cursor-pointer"
    /> */}
        <FcLike
          onClick={() => likePost(post._id)}
          size={22}
          className="bg-white rounded-full text-red-500 p-1 cursor-pointer"
        />
        <span className="text-gray-700 font-medium">{post?.like}</span>
      </div>
    </div>
  );
};

export default HomeCard;
