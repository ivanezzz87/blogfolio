import React from "react";
import styled from "styled-components";
import upIcon from "../assets/up.svg";
import downIcon from "../assets/down.svg";
import bookmarkIcon from "../assets/bookmark.svg";
import moreIcon from "../assets/more.svg";
interface PostItemProps {
  image?: string;
  date: string;
  title: string;
  description?: string;
  isOpen?: boolean;
}
const PostItem: React.FC<PostItemProps> = ({
  image,
  date,
  title,
  description,
  isOpen,
}) => {
  return (
    <PostContainer isOpen={isOpen}>
      <PostContentContainer>
        {isOpen ? (
          <>
            <PostDate>{date}</PostDate>
            <PostTitle isOpen={isOpen}>{title}</PostTitle>
            {image && <PostImage src={image} alt="Пост изображение" />}
            {description && <PostDescription>{description}</PostDescription>}
          </>
        ) : (
          <>
            {image && <PostImage src={image} alt="Пост изображение" />}
            <PostDate>{date}</PostDate>
            <PostTitle isOpen={isOpen}>{title}</PostTitle>
          </>
        )}
      </PostContentContainer>
      <ActionsContainer>
        <ActionButton>
          <ActionIcon src={upIcon} alt="Лайк" />
        </ActionButton>
        <ActionButton>
          <ActionIcon src={downIcon} alt="Дизлайк" />
        </ActionButton>
        <ActionButton>
          <ActionIcon src={bookmarkIcon} alt="В закладки" />
          Add to Bookmark
        </ActionButton>
        <ActionButton>
          <ActionIcon src={moreIcon} alt="Еще" />
        </ActionButton>
      </ActionsContainer>
    </PostContainer>
  );
};
const PostContainer = styled.div<{ isOpen?: boolean }>`
  max-width: ${(props) => (props.isOpen ? "70%" : "350px")};
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
`;

const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 15px;
`;

const PostImage = styled.img<{ isOpen?: boolean }>`
  object-fit: cover;
`;

const PostTitle = styled.p<{ isOpen?: boolean }>`
  font-size: ${(props) => (props.isOpen ? "32px" : "18px")};
  text-align: ${(props) => (props.isOpen ? "center" : "left")};
  font-weight: ${(props) => (props.isOpen ? "bold" : "normal")};
  margin: 0 0 10px 0;
  color: #333;
  line-height: 1.3;
`;

const PostDate = styled.p`
  font-size: 0.9em;
  color: #888;
  margin: 0 0 12px 0;
  font-weight: 500;
`;

const PostDescription = styled.p`
  font-size: 1em;
  color: #555;
  margin: 0 0 0 0;
  line-height: 1.5;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
`;

const ActionButton = styled.button<{ active?: boolean }>`
  background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#007bff")};
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#f8f9fa")};
    border-color: ${(props) => (props.active ? "#0056b3" : "#007bff")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

const ActionIcon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`;

export default PostItem;
