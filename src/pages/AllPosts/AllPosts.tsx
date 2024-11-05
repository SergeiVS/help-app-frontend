import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import PostCard from "../../components/PostCard/PostCard";
import RadioButton from "../../components/RadioButton/RadioButton";
import RadioGroupComp from "../../components/RadioGroupComp/RadioGroupComp";
import exampleImage from "../../assets/logo.png";

import { PageWrapper } from "../../styles/CommonCss";
import { PostsWrapper } from "./styles";
import { Post, Posts } from "./types";

function AllPosts() {
  const [subject, setSubject] = useState<string | undefined>("");
  const [result, setResult] = useState<Posts>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const url = subject ? `/api/posts/${subject}` : `/api/posts`;

  const subjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const getPosts = async () => {
    try {
      setError(undefined);
      const response = await axios.get<{ responses: Posts }>(url);
      setResult(response.data.responses);
    } catch (error) {
      setError("Ошибка при загрузке данных");
    }
  };

  useEffect(() => {
    getPosts();
  }, [subject]);

  const renderedPosts =
    result.length > 0 ? (
      result.map((post: Post) => (
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
      <p>Нет доступных постов</p>
    );

  return (
    <PageWrapper>
      <PostsWrapper>
        <RadioGroupComp
          row={true}
          name="subject"
          onChange={subjectChange}
          defaultValue=""
        >
          <RadioButton value="" label="All Posts" />
          <RadioButton value="NEED HELP" label="Need Help" />
          <RadioButton value="OFFER HELP" label="Offer Help" />
        </RadioGroupComp>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {renderedPosts}
      </PostsWrapper>
    </PageWrapper>
  );
}

export default AllPosts;
