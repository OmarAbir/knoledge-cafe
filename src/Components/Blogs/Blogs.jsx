import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { prototype } from "postcss/lib/previous-map";

const Blogs = ({ handleBookmark, handleMark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className=" w-3/4 ">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleBookmark={handleBookmark}
          handleMark={handleMark}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookmark: prototype.func,
  handleMark: prototype.func,
};
export default Blogs;
