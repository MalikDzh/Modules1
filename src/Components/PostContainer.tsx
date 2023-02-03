import React, { useEffect, useState } from 'react';
import { IPost } from '../Models/IPost';
import { postAPI } from '../Todo/TodoPost';
import PostItem from './PostItem';

const PostContainer = () => {
    const [limit, setLimit] = useState(5)
    const {data: posts} = postAPI.useFetchAllPostsQuery(limit)
    const [editPost, {}] = postAPI.useEditPostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    

    useEffect(() => {
        setLimit(5)
    }, [])

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        editPost(post)
    }
    

    return (
        <div>
        {posts && posts.map(post => 
            <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
            )}
       </div>
    )
};

export default PostContainer;