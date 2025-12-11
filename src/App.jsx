import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>

        <div className="main-container flex text-center">
          <div className="left-container w-[70%]">
            <Blogs></Blogs>
          </div>
          <div className="right-container w-[30%] border-2">
            <h1>Reading Time: 0</h1>
            <h1>Bookmarked: 0</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
