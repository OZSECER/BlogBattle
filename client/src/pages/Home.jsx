import { useSelector, useDispatch } from "react-redux";
import HomeCard from "../components/HomeCard";
import { getPostsAction } from "../redux/actions/post";
import React, { useEffect } from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"
  rel="stylesheet"
/>;

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-50 px-6 py-10">
      <section className="relative h-96 overflow-hidden flex flex-col items-center justify-center text-center py-20 px-6 mb-16 overflow-hidden rounded-lg shadow-xl">
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-gradient bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400"
          style={{ backgroundSize: "400% 400%" }}
        ></div>

        <h1
          className="relative text-6xl sm:text-7xl tracking-wide"
          style={{
            fontFamily: "'Permanent Marker', cursive",
            color: "#3ce2ffff",
            textShadow: `
      -2px -2px 0 #000,
      2px 2px 0 #fff,
      4px 4px 10px rgba(63, 60, 255, 0.66),
      -4px 4px 5px rgba(2, 56, 250, 0.6)
    `,
            transform: "rotate(-2deg)",
            userSelect: "none",
          }}
        >
          ✨ Hoş Geldin, Blog Dünyasına!
        </h1>

        <p
          className="relative mt-4 max-w-xl text-lg sm:text-xl font-semibold"
          style={{
            fontFamily: "'Rock Salt', cursive",
            color: "#ff005dff",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            userSelect: "none",
          }}
        >
          En popüler ve en yeni yazılar burada. Okurken ilham al, kahveni
          yudumla ve yaratıcılığına yol ver ☕.
        </p>
      </section>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {posts.map((post, i) => (
            <HomeCard key={i} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="no posts"
            className="w-40 mb-4 opacity-80 drop-shadow-lg"
          />
          <p className="text-2xl font-semibold">Henüz hiç blog yazısı yok.</p>
          <p className="text-md mt-1 text-gray-400">
            İlk yazını paylaşmak ister misin?
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
