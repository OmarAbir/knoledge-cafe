import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const [readtime , setReadtime]=useState([0])
  const handleMark=(time)=>{
  const totalTime = parseFloat(readtime)+parseFloat(time);
  setReadtime(totalTime)
  
  }
  return (
    <>
      <Header></Header>
      <main className="md:flex  max-w-7xl mx-auto">
        <Blogs handleMark={handleMark} handleBookmark={handleBookmark}></Blogs>
        <Bookmarks readtime={readtime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
