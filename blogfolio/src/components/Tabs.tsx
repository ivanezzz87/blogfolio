import React, { useState } from "react";
import styled from "styled-components";

const TabsComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: "All", content: "" },
    { label: "My favorites", content: "" },
    { label: "Popular", content: "" },
  ];

  return (
    <TabsContainer>
      <TabHeaders>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabHeaders>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </TabsContainer>
  );
};
const TabsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  margin-top: 20px;
`;

const TabHeaders = styled.div`
  display: flex;
  background-color: #fff;
`;

const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 10px;
  color: "black";
  border: none;
  background-color: #fff;
  border-bottom: 2px solid ${(props) => (props.active ? "#000" : "#fff")};
  cursor: pointer;
  transition: background-color 0.3s;

  &:last-child {
    border-right: none;
  }

  &:hover {
    color: blue;
  }
`;

const TabContent = styled.div`
  padding: 20px;
  background-color: white;
`;
export default TabsComponent;
