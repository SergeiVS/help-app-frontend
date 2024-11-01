import PostCard from "../../components/PostCard/PostCard";


import { PostsWrapper, PageWrapper } from "./styles";

const testCard = {
    
        "postId": 1,
        "subject": "Нужна помощь",
        "header": "Требуется помощь с покупкой продуктов",
        "user": {"name": "Иван Иванов", "email": "ivanov@example.com"},
        "description": "Помогите купить продукты для пожилого человека",
        "photoLink": "link_to_photo"
    
}

function AllPosts () {
    

    return(
        <>
        <PageWrapper>
        <PostsWrapper>
            <PostCard headline={testCard.header} description={testCard.description} contactInfo={testCard.user.name} image={testCard.photoLink} />
        </PostsWrapper>
        </PageWrapper>
        </>
    )
}

export default AllPosts