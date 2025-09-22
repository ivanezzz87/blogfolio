import React from "react";
import "./App.css";
import "./components/Button";
import PostsPage from "./pages/AllPosts";
function App() {
  return (
    <div className="root-container">
      <PostsPage />
    </div>
  );
}

export default App;
