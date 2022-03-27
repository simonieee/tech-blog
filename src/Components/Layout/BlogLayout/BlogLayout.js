import React from "react";
import { Footer, Header } from "./Components";
import "./BlogLayout.css";

const BlogLayout = ({ children }) => {
  return (
    <div className="blog-layout-area">
      <Header />
      <div className="blog-content-area">{children}</div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
