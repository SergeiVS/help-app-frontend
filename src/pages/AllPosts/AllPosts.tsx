import { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

import PostCard from "../../components/PostCard/PostCard";
import RadioButton from "../../components/RadioButton/RadioButton";
import RadioGroupComp from "../../components/radiogroup/RadioGroupComp";

import { PostsWrapper, PageWrapper } from "./styles";

function AllPosts() {
  // Состояние для хранения постов, полученных с сервера
  const [posts, setPosts] = useState([]);
  
  // Используем Formik для обработки значения RadioButtonGroup
  const formik = useFormik({
    initialValues: { subject: "" },
    onSubmit: async (values) => {
      fetchPosts(values.subject);  // Загружаем посты при изменении значения
    },
  });
  
  // Функция для отправки GET-запроса на сервер
  const fetchPosts = async (subject : string) => {
    try {
      const response = await axios.get(`https://stingray-app-azeoe.ondigitalocean.app/api/posts?subject=${subject}`);
      setPosts(response.data);  // Сохраняем данные с сервера в состоянии posts
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  // Отправляем запрос при первом рендере и каждый раз при изменении subject
  useEffect(() => {
    fetchPosts(formik.values.subject);
  }, [formik.values.subject]);

  return (
    <PageWrapper>
      <PostsWrapper>
        {/* Компонент для выбора subject с использованием RadioButtonGroup */}
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

        {/* Отображение PostCard для каждого поста из состояния posts */}
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