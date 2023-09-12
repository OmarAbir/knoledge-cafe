import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { prototype } from "postcss/lib/previous-map";

const Blogs = ({handleBookmark}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className=" w-2/3 ">
            {
                blogs.map(blog=><Blog 
                     key={blog.id} 
                     handleBookmark={handleBookmark}
                     blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBookmark: prototype.func
}
export default Blogs;