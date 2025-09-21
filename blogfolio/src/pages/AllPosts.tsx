import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostItem from "../components/Post";
import Title from "../components/Title";
import Header from "../components/Header";
import TabsComponent from "../components/Tabs";
import type { Tab } from "../components/Tabs";

export interface PostEntity {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const mockPosts: PostEntity[] = [
    {
      id: 1,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 101,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 1,
    },
    {
      id: 2,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 102,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 2,
    },
    {
      id: 3,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 103,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 1,
    },
    {
      id: 4,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 104,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 3,
    },
    {
      id: 5,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 105,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 2,
    },
    {
      id: 6,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 106,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 4,
    },
    {
      id: 7,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 107,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 1,
    },
    {
      id: 8,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 108,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 3,
    },
    {
      id: 9,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 109,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 2,
    },
    {
      id: 10,
      image:
        "https://twt-thumbs.washtimes.com/media/image/2020/04/01/space_new_astronauts_53787_c0-0-4000-2332_s885x516.jpg?c1b9c89c00ce1ca84a8208a5a661db823be13ce1",
      text: "Astronauts are often seen as the modern-day explorers of our time, venturing into the vast unknown of space to expand our understanding of the universe. These brave individuals undergo rigorous training and face numerous challenges, all in the name of science and discovery.",
      date: "2025-09-18",
      lesson_num: 110,
      title: "The Brave Pioneers of Space: A Tribute to Astronauts",
      author: 4,
    },
  ];

  const tabs: Tab[] = [
    { label: "All", value: "all" },
    { label: "My favorites", value: "favorites" },
    { label: "Popular", value: "popular" },
  ];

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
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
      <Header></Header>
      <Title text="Blogs" />
      <TabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <PostsGrid>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.text}
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
  background-color: #fff;
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

export default PostsPage;
