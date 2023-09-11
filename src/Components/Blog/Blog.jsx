

const Blog = ({blog}) => {
    const {cover,author_img,author,reading_time
,title,hashtags,posted_date}=blog;
    return (
        <div className="mt-20 w-[600px] ">
            <img  src={cover} alt="" />

            <div className="flex items-center justify-between">
           <div className="flex gap-4 mt-2">
           <img className="w-12" src={author_img} alt="" />
            <div>
                <h3 className="font-semibold">{author}</h3>
                <p>{posted_date}</p>
            </div>
           </div>
            <div className="">
            <p>{reading_time} min read</p>
            </div>
            </div>
           <div className="mt-10">
            <hr />
           </div>
        </div>
    );
};

export default Blog;