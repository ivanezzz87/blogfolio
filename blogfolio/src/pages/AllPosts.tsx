import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostItem from "../components/Post";
import Title from "../components/Title";
import TabsComponent from "../components/Tabs";
import type { Tab } from "../components/Tabs";
import type { PostEntity } from "../services/api";
import mockPosts from "../services/api";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  
  const favorites = useSelector((state: RootState) => state.posts.favorites);

  const tabs: Tab[] = [
    { label: "All", value: "all" },
    { label: "My favorites", value: "favorites" },
    { label: "Popular", value: "popular" },
  ];

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
    setCurrentPage(1);
  };

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <PageContainer>
        <LoadingSpinner>Загрузка...</LoadingSpinner>
      </PageContainer>
    );
  }

  const filteredPosts = activeTab === "favorites" 
    ? favorites 
    : activeTab === "popular" 
    ? posts.filter(post => post.lesson_num && post.lesson_num > 105)
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

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
      <Title text="Blogs" />
      <TabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      {activeTab === "favorites" && favorites.length === 0 && (
        <EmptyState>
          <EmptyStateText>No favorite posts yet</EmptyStateText>
          <EmptyStateSubtext>Add posts to favorites by clicking the bookmark icon</EmptyStateSubtext>
        </EmptyState>
      )}
      
      <PostsGrid>
        {currentPosts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.description}
            lesson_num={post.lesson_num}
            author={post.author}
          />
        ))}
      </PostsGrid>
      
      {filteredPosts.length > postsPerPage && (
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
  background-color: var(--bg-color);
`;

const PostsGrid = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
  justify-items: center;
  margin: 0 auto;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2em;
  color: #666;
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

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
`;

const EmptyStateText = styled.p`
  font-size: 1.5em;
  color: #666;
  margin-bottom: 10px;
`;

const EmptyStateSubtext = styled.p`
  font-size: 1em;
  color: #999;
`;

export default PostsPage;