import React from "react";
import classes from "./all-posts.module.css";
import PostGrid from "./post-grid";

function AllPosts({ posts }) {
  return (
    <section>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
