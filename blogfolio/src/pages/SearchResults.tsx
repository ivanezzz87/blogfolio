import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostItem from "../components/Post";
import Title from "../components/Title";
import Header from "../components/Header";
import type { PostEntity } from "../services/api";
import mockPosts from "../services/api";

const SearchResultsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <PageContainer>
      <Header />
      <Title text="Search results 'Astronauts'" />
      <PostsGrid>
        {currentPosts.map((post) => (
          <PostItem
            key={post.id}
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.text}
            search={true}
          />
        ))}
      </PostsGrid>
      {posts.length > postsPerPage && (
        <PaginationContainer>
          <PaginationButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            ← Назад
          </PaginationButton>

          <PageNumbers>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <PageNumber
                  key={pageNumber}
                  active={pageNumber === currentPage}
              onClick={() => handlePageClick(pageNumber)}
                >
                  {pageNumber}
                </PageNumber>
              )
            )}
          </PageNumbers>

          <PaginationButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Вперед →
          </PaginationButton>
        </PaginationContainer>
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background-color: (var(--bg-color));
`;

const PostsGrid = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 0 auto;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  padding: 20px 0;
`;

const PaginationButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  border: 1px solid #ddd;
  background-color: white;
  color: ${(props) => (props.disabled ? "#ccc" : "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #f0f0f0;
    border-color: #999;
  }
`;

const PageNumbers = styled.div`
  display: flex;
  gap: 10px;
`;

const PageNumber = styled.button<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => (props.active ? "#007bff" : "#ddd")};
  background-color: ${(props) => (props.active ? "#007bff" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#f0f0f0")};
    border-color: ${(props) => (props.active ? "#0056b3" : "#999")};
  }
`;

export default SearchResultsPage;