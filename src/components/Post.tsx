import React, {FC} from 'react';
import {PostType} from "models/Post";

type PostPropsType = {
    post: PostType;
}
export const Post: FC<PostPropsType> = ({post}) => {
    return (
        <div className={"post"}>
            {post.id}. {post.title}
            <button>Delete</button>
        </div>
    );
};

