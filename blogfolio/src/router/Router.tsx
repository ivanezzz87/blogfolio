import {  Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import AllPosts from "../pages/AllPosts";
import { SelectedPost } from "../pages/SelectedPost";
import Success from "../pages/Success";
import NotFound from "../pages/NotFound";
import { Signup } from "../pages/Signup";
export const AppRouter = () => {
  return (
    <>
      <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/posts" element={<AllPosts />} />
              <Route path="/posts/:id" element={<SelectedPost />} />
              <Route path="/selectedpost" element={<SelectedPost />} />
              <Route path="/success" element={<Success />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};