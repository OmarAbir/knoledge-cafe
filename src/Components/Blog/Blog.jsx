
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark}) => {
    const {cover,author_img,author,reading_time
,title,hashtags,posted_date}=blog;
    return (
        <div className="mt-20 w-[600px] ">
            <img className="rounded-md" src={cover} alt="" />

            <div className="flex items-center justify-between">
           <div className="flex gap-4 mt-2">
           <img className="w-12" src={author_img} alt="" />
            <div>
                <h3 className="font-semibold">{author}</h3>
                <p>{posted_date}</p>
            </div>
           </div>
            <div className="flex gap-2">
            <p>{reading_time} min read</p>
            <button onClick={()=>handleBookmark(blog)} className='text-amber-400 text-xl'><FaBookmark></FaBookmark></button>
            </div>
            </div>
            <h1 className="text-2xl font-semibold my-4">{title}</h1>
            <p className="text-[#3386F4] my-2">#{hashtags[0]} #{hashtags[1] }</p>
            <p className="text-[#745EEE] font-medium underline">Mark as read</p>
           <div className="mt-10">
            <hr />
           </div>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object,
    handleBookmark: PropTypes.func
}

export default Blog;