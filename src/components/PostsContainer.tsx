import {postAPI} from "services/postService";
import {Post} from "components/Post";
import {loremIpsum} from "react-lorem-ipsum";
import {PostType} from "models/Post";

export const PostsContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(50)
    const [createPost, {error: createPostError, isLoading: isPostCreating}] = postAPI.useCreatePostMutation()
    const [updatePost, {error: updatePostError, isLoading: isPostUpdating}] = postAPI.useUpdatePostMutation()
    const [deletePost, {error: deletePostError, isLoading: isPostdelete}] = postAPI.useDeletePostMutation()
    const handleCreatePost = async () => {
        const title = prompt()
        //@ts-ignore
        await createPost({title, body: loremIpsum({random: true, avgWordsPerSentence: 4})})
    }
    const handleRemove = (post: PostType) => {
        deletePost(post)
    }
    const handleUpdate = (post: PostType) => {
        updatePost(post)
    }
    return (
        <div className={"post__list"}>
            <>
                <button onClick={handleCreatePost}>add new post</button>
                {isLoading && <h2>"Loading posts..."</h2>}
                {error && error}
                {posts && posts.map(post => <Post key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>)}
            </>
        </div>
    );
};
