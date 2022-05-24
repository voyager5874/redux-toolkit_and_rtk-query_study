import React, {FC} from 'react';
import {PostType} from "models/Post";

type PostPropsType = {
    post: PostType;
    remove: (post: PostType) => void;
    update: (post: PostType) => void;
}
export const Post: FC<PostPropsType> = ({post, remove, update}) => {
    const handleRemovePost = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        remove(post);
    }
    const handleUpdate = (event: React.MouseEvent<HTMLDivElement>) => {
        const title = prompt()
        if(!title) return
        update({...post, title})
    }
    return (
        <div className={"post"} onClick={handleUpdate}>
            {post.id}. {post.title}
            <button onClick={handleRemovePost}>Delete</button>
        </div>
    );
};

