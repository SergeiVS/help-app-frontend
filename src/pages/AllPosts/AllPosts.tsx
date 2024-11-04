import { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

//import PostCard from "../../components/PostCard/PostCard";
import RadioButton from "../../components/RadioButton/RadioButton";
import RadioGroupComp from "../../components/radiogroup/RadioGroupComp";

import { PostsWrapper, PageWrapper } from "./styles";
import { Post, Posts } from "./types";

function AllPosts() {
  const [subject, setSubject] = useState<string | undefined>("")
  const [response, setResponse] = useState<Posts>([]);
  
  const formik = useFormik({
    initialValues: { subject: "" },
    onSubmit: async (values) => {
      fetchPosts(values.subject);  
    },
  });
  
  const fetchPosts = async (subject : string) => {
    try {
      const url = subject ? `/api/posts?subject=${subject}` : `https://stingray-app-azeoe.ondigitalocean.app/api/posts`;
      const response = await axios.get(url);
      setResponse(response.data); 
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  useEffect(() => {
    fetchPosts(formik.values.subject);
  }, [formik.values.subject]);

  return (
    <PageWrapper>
      <PostsWrapper>
        <RadioGroupComp
          row={true}
          name="subject"
          onChange={(e) => formik.setFieldValue("subject", e.target.value)}
          defaultValue=""
        >
          <RadioButton value="" label="All Posts" />
          <RadioButton value="NEED HELP" label="Need Help" />
          <RadioButton value="OFFER HELP" label="Offer Help" />
        </RadioGroupComp>
        {/*{posts.map((post) => (
          <PostCard
            key={post.id}
            subject={post.subject}
            header={post.header}
            description={post.description}
            contactInfo={`${post.contact.name}, ${post.contact.email}`}
            image={post.image}
          />
        ))}*/}
      </PostsWrapper>
    </PageWrapper>
  );
}

export default AllPosts;