import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./theme/ThemeContext";
import Layout from "./components/Layout";
import { SignIn } from "./pages/SignIn";
import AllPosts from "./pages/AllPosts";
import { SelectedPost } from "./pages/SelectedPost";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="root-container">
          <Layout>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/posts" element={<AllPosts />} />
              <Route path="/posts/:id" element={<SelectedPost />} />
              <Route path="/selectedpost" element={<SelectedPost />} />
              <Route path="/success" element={<Success />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
