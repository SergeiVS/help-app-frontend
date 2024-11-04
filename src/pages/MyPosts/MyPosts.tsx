import { useEffect, useState } from "react"
import {PageWrapper}from "../../styles/CommonCss"
import axios, { Axios } from "axios"
import { useAppDispatch } from "../../store/hooks"
import {alertActions} from "../../store/redux/AlertSlice/AlertSlice"
import { PostCardProps } from "../../components/PostCard/types"

// import PostCard from "../../components/PostCard/PostCard";

function MyPosts () {
//  const dispatch = useAppDispatch()
// const [cards, setCards]= useState<PostCardProps[]>([])

// const getCards = async()=>{
//         try{
//         const response = await axios.get("/api/posts/user", {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           })

//           const getCardsProps = ()=>{
//             if(response.data.responses.length!==0){
//                 const cards:PostCardProps[]=[]

//                 response.data.responses.forEach(post:ResponseCard=> {
//                     const card:PostCardProps={
//                         image:post.postId,
//                         subject:post.subject.name,
// header:post.header,
// description:post.description,
// firstName: post.firstName,
// lastName:post.user.lastName,
// email:post.user.lastName,
// phoneNumber:post.user.phoneNumber,
//                     }
//                 });
//             }

//           }
//         }
//         catch(e: any){
//             const error = e.response.data;

//             dispatch(
//               alertActions.setAlertStateOpen({
//                 isOpen: true,
//                 severity: "error",
//                 children: error.errorMessage,
//         }))


//     }

//     useEffect(()=>{
//         getCards()
//     })


    return(
        <>
        <PageWrapper>

        </PageWrapper>
        </>
    )
}

export default MyPosts