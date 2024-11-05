
import {Post}from "../../../pages/AllPosts/types"

export interface PostsSliceState{
isPending:boolean,
posts:Post[],
error:string|undefined
}