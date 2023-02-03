import React, { FC } from 'react';
import { IPost } from '../Models/IPost';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;   
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {


    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() ||""
        const body = prompt() || ""
        update({...post, title, body})
    }
    
    return (
       <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography variant='body2'>
                        {post.id}.{post.title}
                </Typography>
                <Typography variant='body2'>
                        {post.body}
                </Typography>
                <Button
                onClick={handleUpdate}
                >Edit</Button>
                <Button
                onClick={handleRemove}
                >Delete</Button>
            </CardContent>
       </Card>
    )
};

export default PostItem;