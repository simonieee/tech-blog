import BlogLayout from "Components/Layout/BlogLayout/BlogLayout";
import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BlogMain } from "./pages";

const BlogPresenter = () => {
  return (
    <BlogLayout>
      <Switch>
        <Route path="/" component={BlogMain} />
      </Switch>
    </BlogLayout>
  );
};

export default BlogPresenter;
