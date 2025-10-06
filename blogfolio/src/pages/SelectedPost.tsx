import React from "react";
import PostItem from "../components/Post";
import styled from "styled-components";
export const SelectedPost: React.FC = () => {
  return (
    <PostsContainer>
      <PostItem
        image="https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1"
        date="2025-09-18"
        title=" The Brave Pioneers of Space: A Tribute to Astronauts"
        description="From the deepest, most ancient parts of the human spirit comes a relentless urge to explore, to see what lies beyond the next horizon. In our modern age, this horizon has expanded from the edges of maps to the infinite expanse of the cosmos. And standing on the frontier of this vast unknown are the bravest among us: astronauts.

These are not merely scientists or pilots; they are pioneers in the truest sense of the word. They voluntarily leave the safety of our world, the embrace of gravity, and the comfort of a blue sky, to venture into a realm of profound darkness, extreme danger, and breathtaking beauty. They strap themselves to controlled explosions, trusting their lives to physics and engineering, to achieve the velocity needed to break free from Earth's hold. The title astronaut
 carries a weight far beyond the training manuals and technical checklists. It represents an unparalleled combination of courage, intellect, and composure. In the void of space, a single mistake can be catastrophic, a tiny malfunction can spell disaster. Yet, they proceed with a calm professionalism, their minds focused on mission objectives, scientific discovery, and the safety of their crew. We see them floating in their spacecraft, gazing down at our planet—a fragile, swirling marble of blue and green hanging in the blackness.
  
 This Overview Effect, described by so many, is a transformative perspective. They see a world without borders, a shared home for all humanity, and feel a profound responsibility to protect it. They return to Earth not just as heroes, but as ambassadors of a new consciousness.

 Their contributions are the bedrock of our future. Every experiment conducted in microgravity, every satellite deployed, every step on another celestial body expands our understanding of the universe and ourselves. They are the hands and eyes of humanity, building the foundations for what may one day be an interplanetary species.

This tribute is to all of them: to the legends who took those first terrifying, triumphant steps; to the crews of space stations who live for months in orbit, pushing the boundaries of human endurance; and to the visionaries preparing for the journey to Mars and beyond.

They are the brave pioneers of space. They venture into the unknown so that we may all learn, dream, and aspire to reach further. They remind us that with immense courage, unwavering curiosity, and a spirit of cooperation, there is no limit to what humanity can achieve. Their legacy is not just written in the history books, but in the very stars they strive to reach."
        isOpen={true}
      />
    </PostsContainer>
  );
};
const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;