import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PostItem from "../components/Post";
import type { RootState, AppDispatch } from "../store";
import { fetchPostById, clearError } from "../PostsSlice";

export const SelectedPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  const { postDetail, postDetailLoading, postDetailError } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    if (id) {
      const postId = parseInt(id);
      if (!isNaN(postId)) {
        dispatch(fetchPostById(postId));
      }
    }
  }, [id, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (postDetailLoading) {
    return (
      <PostsContainer>
        <LoadingMessage>Загрузка поста...</LoadingMessage>
      </PostsContainer>
    );
  }

  if (postDetailError) {
    return (
      <PostsContainer>
        <ErrorMessage>
          Ошибка загрузки: {postDetailError}
          <BackButton onClick={handleBackClick}>Вернуться назад</BackButton>
        </ErrorMessage>
      </PostsContainer>
    );
  }

  if (!postDetail) {
    return (
      <PostsContainer>
        <ErrorMessage>
          Пост не найден
          <BackButton onClick={handleBackClick}>Вернуться назад</BackButton>
        </ErrorMessage>
      </PostsContainer>
    );
  }

  return (
    <PostsContainer>
      <BackButton onClick={handleBackClick}>← Назад к списку</BackButton>
      <PostItem
        id={postDetail.id}
        image={postDetail.image || "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1"}
        date={postDetail.date}
        title={postDetail.title}
        description={postDetail.description}
        lesson_num={postDetail.lesson_num}
        author={postDetail.author}
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
  background-color: var(--bg-color);
  min-height: 100vh;
`;

const BackButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f8f9fa;
    text-decoration: underline;
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2em;
  color: #666;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2em;
  color: #d32f2f;
  text-align: center;
  gap: 20px;
`;