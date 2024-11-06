import { useEffect, useState } from "react";
import axios from "axios";

import { PageWrapper } from "../../styles/CommonCss";
import type { Post, Posts } from "../../pages/AllPosts/types";
import UserPostCard from "../../components/UserCardComp/UserPostCard";

function MyPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const url: string = "/api/posts/user";

  const getPosts = async () => {
    try {
      setError(undefined);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPosts(response.data.responses);
    } catch (e: any) {
      setError(e.response.data.errorMessage);
    }
  };

  const onDelete = async (id: number) => {
    try {
      await axios.delete(`/api/posts/${id}`, {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const newPosts: Posts = posts.filter((post) => post.postId !== id);
      setPosts(newPosts);
    } catch (e: any) {
      setError(e.response.data.errorMessage);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <PageWrapper>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {posts.length > 0 ? (
          posts.map((p) => (
            <UserPostCard
              post={p}
              onDelete={onDelete}
              key={"card-" + p.postId}
            />
          ))
        ) : (
          <p>No posts added yet</p>
        )}
      </PageWrapper>
    </>
  );
}

export default MyPosts;
