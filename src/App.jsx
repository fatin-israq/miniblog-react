import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [marked, setMarked] = useState([]);

  function handleBookmark(blog) {
    const newBookMarked = [...bookmarked, blog];
    setBookmarked(newBookMarked);
  }

  const handleMark = (blog) => {
    const newMarked = [...marked, blog];
    setMarked(newMarked);
    handleRemoveBookMark(blog.id);
  };

  const handleRemoveBookMark = (id) => {
    const remainingBookmarked = bookmarked.filter((blog) => blog.id !== id);
    setBookmarked(remainingBookmarked);
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="main-container flex text-center pt-20">
          <div className="left-container w-[70%]">
            <Blogs
              handleBookmark={handleBookmark}
              handleMark={handleMark}
            ></Blogs>
          </div>
          <div className="right-container w-[30%] p-6 bg-linear-to-br from-base-200 to-base-300">
            <div className="sticky top-6 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="stat bg-base-100 rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                  <div className="stat-title text-xs">Bookmarked</div>
                  <div className="stat-value text-3xl text-secondary">
                    {bookmarked.length}
                  </div>
                </div>
                <div className="stat bg-base-100 rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                  <div className="stat-title text-xs">Total Read</div>
                  <div className="stat-value text-3xl text-primary">
                    {marked.length}
                  </div>
                </div>
              </div>

              {/* Bookmarked List */}
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body p-5">
                  <h2 className="card-title text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
                    🔖 Bookmarked
                  </h2>
                  {bookmarked.length === 0 ? (
                    <p className="text-gray-500 italic text-sm text-center py-4">
                      No bookmarks saved
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {bookmarked.map((item, index) => (
                        <li
                          key={index}
                          className="p-3 bg-base-200 rounded-lg hover:bg-base-300 transition-colors duration-200 text-sm font-medium"
                        >
                          <span className="text-secondary mr-2">★</span>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Read List */}
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body p-5">
                  <h2 className="card-title text-xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    📖 Read List
                  </h2>
                  {marked.length === 0 ? (
                    <p className="text-gray-500 italic text-sm text-center py-4">
                      No articles read yet
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {marked.map((item, index) => (
                        <li
                          key={index}
                          className="p-3 bg-base-200 rounded-lg hover:bg-base-300 transition-colors duration-200 text-sm font-medium"
                        >
                          <span className="text-primary mr-2">✓</span>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
