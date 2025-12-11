import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmark, handleMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  console.log(blogs);

  return (
    <>
      <div className="all-blogs grid sm:grid-cols-1 lg:grid-cols-3 justify-items-center">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            handleMark={handleMark}
          ></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
