import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeSwitch } from "../theme/ThemeSwitch";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <ThemeSwitch />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
