import { useEffect, useState } from "react";
import axios from "axios";

import { PageWrapper } from "../../styles/CommonCss";
import { PostsWrapper } from "../AllPosts/styles";
import type { Post, Posts } from "../../pages/AllPosts/types";
import UserPostCard from "../../components/UserCardComp/UserPostCard";
import { useAppSelector } from "../../store/hooks";
import { signInSelectors } from "../../store/redux/SignInFormSlice/SignInFormSlice";
import { useNavigate } from "react-router-dom";

function MyPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
const isLogged = useAppSelector(signInSelectors.isLoggedOn);
  const navigate = useNavigate();
  

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
    if (!isLogged) {
      navigate("/singin");
    }
  }, []);


  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <PageWrapper>
        <PostsWrapper>
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
        </PostsWrapper>
      </PageWrapper>
    </>
  );
}

export default MyPosts;
