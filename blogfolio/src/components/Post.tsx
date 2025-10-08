import React from "react";
import styled from "styled-components";
import upIcon from "../assets/up.svg";
import downIcon from "../assets/down.svg";
import bookmarkIcon from "../assets/bookmark.svg";
import moreIcon from "../assets/more.svg";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../PostsSlice";
interface PostItemProps {
  image?: string;
  date: string;
  title: string;
  description?: string;
  isOpen?: boolean;
  search?: boolean;
  isPopup?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({
  image,
  date,
  title,
  description,
  isOpen,
  search,
  isPopup,
}) => {
  const dispatch = useDispatch();
  const handleOpenPreview = () => {
    dispatch(setSelectedPost({ image, date, title, description }));
  };

  return (
    <PostContainer
      isOpen={isOpen}
      search={search}
      isPopup={isPopup}
      onClick={handleOpenPreview}
    >
      <PostContentContainer search={search} isPopup={isPopup}>
        {isOpen ? (
          <>
            <PostDate>{date}</PostDate>
            <PostTitle isOpen={isOpen}>{title}</PostTitle>
            {image && <PostImage src={image} alt="Пост изображение" />}
            {description && <PostDescription>{description}</PostDescription>}
          </>
        ) : search ? (
          <>
            {image && (
              <PostImage search={search} src={image} alt="Пост изображение" />
            )}
            <div>
              <PostDate>{date}</PostDate>
              <PostTitle isOpen={isOpen} search={search}>
                {title}
              </PostTitle>
            </div>
          </>
        ) : isPopup ? (
          <>
            {image && (
              <PostImage search={search} src={image} alt="Пост изображение" />
            )}
          </>
        ) : (
          <>
            {image && <PostImage src={image} alt="Пост изображение" />}
            <PostDate>{date}</PostDate>
            <PostTitle isOpen={isOpen}>{title}</PostTitle>
          </>
        )}
      </PostContentContainer>
      <ActionsContainer isPopup={isPopup}>
        {isPopup ? (
          <>
          </>
        ) : (
          <>
            <UnderActionsContainer>
              <ActionButton>
                <ActionIcon src={upIcon} alt="Лайк" />
              </ActionButton>
              <ActionButton>
                <ActionIcon src={downIcon} alt="Дизлайк" />
              </ActionButton>
            </UnderActionsContainer>
            <UnderActionsContainer>
              <ActionButton>
                <ActionIcon src={bookmarkIcon} alt="В закладки" />
                {isOpen ? "Add to Bookmarks" : ""}
              </ActionButton>
              <ActionButton>
                <ActionIcon src={moreIcon} alt="Еще" />
              </ActionButton>
            </UnderActionsContainer>
          </>
        )}
      </ActionsContainer>
    </PostContainer>
  );
};
const PostContainer = styled.div<{
  isOpen?: boolean;
  search?: boolean;
  isPopup?: boolean;
}>`
  width: ${(props) => (props.isOpen || props.search ? "70%" : "350px")};
  margin: 20px auto;
  padding: 20px;
  border-radius: ${(props) => (props.search ? "0" : "8")};
  background-color: var(--bg-color);
  border-bottom: ${(props) =>
    props.search ? "1px solid var(--border-color)" : "none"};
`;

const PostContentContainer = styled.div<{
  isOpen?: boolean;
  search?: boolean;
  isPopup?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => (props.search ? "row" : "column")};
  gap: 20px;
  margin-bottom: 15px;
`;

const PostImage = styled.img<{ search?: boolean }>`
  object-fit: cover;
  max-width: ${(props) => (props.search ? "150px" : "fit-content")};
`;

const PostTitle = styled.p<{ isOpen?: boolean; search?: boolean }>`
  font-size: ${(props) =>
    props.isOpen ? "32px" : props.search ? "14px" : "18px"};
  text-align: ${(props) => (props.isOpen ? "center" : "left")};
  font-weight: ${(props) => (props.isOpen ? "bold" : "normal")};
  margin: 0 0 10px 0;
  color: var(--text-color);
  line-height: 1.3;
`;

const PostDate = styled.p`
  font-size: 0.9em;
  color: var(--text-color);
  margin: 0 0 12px 0;
  font-weight: 500;
`;

const PostDescription = styled.p`
  font-size: 1em;
  color: var(--text-color);
  margin: 0 0 0 0;
  line-height: 1.5;
`;

const ActionsContainer = styled.div<{ isPopup?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
`;
const UnderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ActionButton = styled.button<{ active?: boolean }>`
  background-color: ${(props) =>
    props.active ? "#007bff" : "var(--button-color)"};
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
