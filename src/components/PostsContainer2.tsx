import {postAPI} from "services/postService";
import {Post} from "components/Post";

export const PostsContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10)
    return (
        <div className={"post__list"}>
            <>
                {isLoading && <h2>"Loading posts..."</h2>}
                {error && error}
                {posts && posts.map(post => <Post key={post.id} post={post} update={()=>{}} remove={()=>{}}/>)}
            </>
        </div>
    );
};
