import PropTypes from 'prop-types';
const Bookmarks = ({ bookmarks }) => {


  return (
    <div className="md:1/3 mt-20 text-center mx-auto">
      <div>
        <h1 className="text-center text-[#6047EC] text-xl font-semibold bg-[#F3F3F3] rounded-lg p-6">Spent time read:</h1>
      </div>
      <div className="bg-[#F3F3F3] p-6 mt-5">
<h3 className='text-xl font-bold my-4'>Bookmarked Blogs : {bookmarks.length}</h3>
        {
            bookmarks.map(bookmark=> <h2 key={bookmark.id} className='bg-white rounded-lg mb-3 p-4 font-semibold'>{bookmark.title}</h2>)
            
        }
        
      </div>
    </div>
  );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array
}
export default Bookmarks;
