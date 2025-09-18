import React from "react";
import styled from "styled-components";

interface PostItemProps {
  image?: string;
  date: string;
  title: string;
  description?: string;
}

const PostItem: React.FC<PostItemProps> = ({
  image,
  date,
  title,
  description,
}) => {
  return (
    <PostContainer>
      <PostContentContainer>
        <PostTextContainer>
          <PostDate>{date}</PostDate>
          <PostTitle>{title}</PostTitle>
          {description && <PostDescription>{description}</PostDescription>}
        </PostTextContainer>
        {image && <PostImage src={image} alt="Пост изображение" />}
      </PostContentContainer>
      <ActionsContainer>
        <ActionButton>👍</ActionButton>
        <ActionButton>👎</ActionButton>
        <ActionButton>☆</ActionButton>
      </ActionsContainer>
    </PostContainer>
  );
};
const PostContainer = styled.div`
  max-width: fit-content;
  margin: 20px auto;
  padding: 15px;
`;
const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PostContentContainer = styled.div`
  display: flex;
  column-gap: 10px;
    @media (max-width: 780px) {
    flex-direction: column-reverse;
  }
`;
const PostImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
  @media (max-width: 380px) {
    display: none;
  }
}
`;

const PostTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 5px;
  color: #333;
`;

const PostDate = styled.p`
  font-size: 0.9em;
  color: #888;
  margin-bottom: 10px;
`;

const PostDescription = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 15px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionButton = styled.button<{ active?: boolean }>`
  background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#007bff")};
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s, color 0.3s;
  &:focus {
    outline: none;
  }
`;
export default PostItem;
