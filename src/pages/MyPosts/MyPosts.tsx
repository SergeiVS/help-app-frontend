import { useEffect, useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

import UserCardComp from "../../components/UserCardComp/UserCardComp";

import { PageWrapper } from "../../styles/CommonCss";
import { useAppDispatch } from "../../store/hooks";
import { alertActions } from "../../store/redux/AlertSlice/AlertSlice";
import type { Post, Posts } from "../../pages/AllPosts/types";

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
      setPosts(response.data.responses);
    } catch (e: any) {
  
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
      posts.map(
        ({ postId, user, header, description, photoLink, subject }: Post) => (
          <UserCardComp
            key={v4()}
            postId={postId}
            user={user}
            subject={subject}
            header={header}
            description={description}
            photoLink={photoLink}
          />
        )
      )
    ) : (
      <p>No posts added yet</p>
    );

  useEffect(() => {
    getPosts();
    console.log(posts)
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
