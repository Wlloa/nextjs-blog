import React from "react";
import PostItem from "./post-item";
import classes from "./post-grid.module.css";

function PostGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts && posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
