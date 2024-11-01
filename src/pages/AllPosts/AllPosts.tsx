import { useFormik } from "formik"
import { useEffect, useState } from 'react';
import axios from "axios"
import PostCard from "../../components/PostCard/PostCard";

import RadioButton from "../../components/RadioButton/RadioButton";
import RadioGroupComp from "../../components/radiogroup/RadioGroupComp";

import { PostsWrapper, PageWrapper } from "./styles";


function AllPosts() {
    const [posts, setPosts] = useState([]);
  
    const formik = useFormik({
      initialValues: {
        subject: "",
      },
      onSubmit: async (values) => {
        await fetchPosts(values.subject);
      },
    });
  
    const fetchPosts = async (subject : string) => {
      try {
        const response = await axios.get('/api/posts', {
          params: { subject: subject || undefined },
        });
        setPosts(response.data); 
      } catch (error) {
        console.error('Ошибка загрузки карточек:', error);
      }
    };
  
    useEffect(() => {
      fetchPosts(""); 
    }, []);
  
    const handleRadioChange = (event : any) => {
      const { value } = event.target;
      formik.setFieldValue("subject", value);
      fetchPosts(value); // Загружаем карточки по выбранному subject
    };
  
    return (
      <PageWrapper>
        <PostsWrapper>
          <RadioGroupComp row={true} name="subject" onChange={handleRadioChange} defaultValue="">
            <RadioButton value="" lable="All Posts" />
            <RadioButton value="NEED HELP" lable="Need Help" />
            <RadioButton value="OFFER HELP" lable="Offer Help" />
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