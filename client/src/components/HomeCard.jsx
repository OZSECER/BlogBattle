import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deletePostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";
import useToken from "C:/Users/senan/OneDrive/Masaüstü/Tarvina Projem/client/src/hooks/useToken";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ post }) => {
  const [token] = useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletePost = (id) => {
    if (!token?.token) {
      navigate("localhost:3000/Auth"); // login sayfasına yönlendir
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
  // Like işlemi
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
    <div className="relative w-1/4 border p-3 rounded-md bg-gray-50 mx-5">
      <div className="font-bold text-xl">{post?.title}</div>
      <div className="text-gray-700 text-sm">{post?.description}</div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-500">{post?.user}</span>
        <span className="text-xs text-gray-500">
          {post?.date?.substring(0, 10)}
        </span>
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
          className="bg-white-500 rounded-full text-white p-1 cursor-pointer"
        />
        <span className="text-gray-700 font-medium">{post?.like}</span>
      </div>
    </div>
  );
};

export default HomeCard;
