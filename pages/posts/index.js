import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../utils/post-utils";

function AllPostsPage({posts}) {
  return <AllPosts posts={posts} />;
}

export async function getStaticProps(context) {
    const allPosts = getAllPosts();
    return {
        props:{
            posts: allPosts
        }
    }
}

export default AllPostsPage;
