import { useEffect, useState } from "react";
import { PageWrapper } from "../../styles/CommonCss";
import axios from "axios";
import { useAppDispatch } from "../../store/hooks";
import { alertActions } from "../../store/redux/AlertSlice/AlertSlice";
import type { Post, Posts } from "../../pages/AllPosts/types";

import PostCard from "../../components/PostCard/PostCard";
import exampleImage from "../../assets/logo.png";

function MyPosts() {
  const [posts, setPosts] = useState<Posts>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch();

  const url: string = "/api/posts/user";

  const getPosts = async () => {
    try {
        setError(undefined)
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data.responses)
      setPosts(response.data.responses);
      console.log(posts)

    } catch (e: any) {
        console.log(e)
      setError(e.response.data.errorMessage);
      dispatch(
        alertActions.setAlertStateOpen({
          isOpen: true,
          severity: "error",
          children: error,
        })
      );
    }
  };
  const renderedPosts =
    posts.length > 0 ? (
      posts.map((post: Post) => (
        <PostCard
          key={post.postId}
          subject={post.subject.name}
          header={post.header}
          description={post.description}
          contactInfo={`${post.user.firstName} ${post.user.lastName}, ${post.user.email}`}
          image={post.photoLink || exampleImage}
        />
      ))
    ) : (
      <p>No posts added yet</p>
    );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <PageWrapper>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {renderedPosts}
      </PageWrapper>
    </>
  );
}

export default MyPosts;
