import React from 'react'
import "./PostComments.css";
function PostComments({id,name, email,body}) {
    return (
        <div className="comment" key = {id}>
        <div className="comment-content">
            <div className="comment-name"><h4>{name}</h4></div>
            <div className="comment-email">{email}</div>
            <div className="comment-text">{body}</div>
        </div>
    </div>
    )
}

export default PostComments
