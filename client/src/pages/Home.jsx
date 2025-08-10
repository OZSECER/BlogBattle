// import React from 'react'
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import { useDispatch } from "react-redux";
import { getPostsAction } from "../redux/actions/post";
import React, { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <div className="flex items-top gap-5 m-5 flex-wrap">
      {posts.length > 0 &&
        posts?.map((post, i) => <HomeCard key={i} post={post} />)}
    </div>
  );
};

export default Home;
