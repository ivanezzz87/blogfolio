import React from "react";
import Header from "../components/Header";
import PostItem from "../components/Post";
export const SelectedPost: React.FC = () => {
  return (
    <div>
      <Header />
      <PostItem
        image="https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1"
        date="2025-09-18"
        title=" The Brave Pioneers of Space: A Tribute to Astronauts"
        description="Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery."
        isOpen={true}
      />
    </div>
  );
};
