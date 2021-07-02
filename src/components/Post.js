import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Posts from './Posts';
import Comments from "./Comments";
import PostComments from './PostComments';
import "./Post.css";

const Post = () => {
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState({});
    const {postId} = useParams()

    useEffect(() => {
       const getPosts = () => {
            const selectedPost = Posts.find(selectPost => selectPost.id === parseInt(postId))
            setPost(selectedPost)
       }
       return getPosts();

    }, [postId])

    useEffect(() => {
        const getComments = () => {
            const result = Comments.filter(element => element.postId === parseInt(postId))
            setComments(result)
        }

        return getComments()

    }, [postId])


    return (
        <div className="container">
        <div className="main">
            <div class="mainu-container">
                    <div class="post-container">
                        <div id="individual-post-title">
                           {post.title}
                        </div>
                        <div id="individual-post-content">{post.body}</div>
                        <div id="individual-post-comments">Comments</div>
                <div className="row">
                    {
                        comments.map(comment => 
                            <PostComments
                                key={comment.id}
                                id={comment.id}
                                name={comment.name}
                                email={comment.email}
                                body={comment.body}
                             />
                            
                            )
                    }
                    
                </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Post;