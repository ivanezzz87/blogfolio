import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store.ts";
import { clearSelectedPost } from "../PostsSlice";
import PostItem from "./Post";

const PostPopup: React.FC = () => {
  const selectedPost = useSelector((state: RootState) => state.posts.selectedPost);
  const dispatch = useDispatch();
  const popupRef = useRef<HTMLDivElement>(null);

  if (!selectedPost) return null;

  return (
    <PopupOverlay>
      <PopupContent ref={popupRef}>
        <CloseButton onClick={() => dispatch(clearSelectedPost())}>Закрыть</CloseButton>
        <PostItem {...selectedPost} isPopup={true} />
      </PopupContent>
    </PopupOverlay>
  );
};

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: var(--bg-color);
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: var(--text-color);
`;

export default PostPopup;