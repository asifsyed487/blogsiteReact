import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { PostContext } from './State';
import Posts from './Posts';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import Fab from "@material-ui/core/Fab";
import VisibilityIcon from '@material-ui/icons/Visibility';
import HomeButton from './HomeButton';
import "./Home.css"
import AddPost from './AddPost';
const User = () => {
    const [posts, setPosts] = useState([])
    const {newPosts, deletePost} = useContext(PostContext);
 
    const styleButton = {
        marginTop: "12px"
    }

    useEffect(() => {
        const getPosts = async() => {
            const postFromServer = await fetchData()
            const filteredData = postFromServer.filter((post) => post.userId === 2)
            setPosts(filteredData)
        }

        getPosts()
       
    }, [])

    const fetchData = () => {
        return Posts;
    }


    return (
            <div className='user'>
                <HomeButton />
                <Header/>
                <AddPost />
                <div className="main">
        <div className="main-container">
                        {
                            newPosts.length > 0 &&
                            <div className="row">
                            {
                                newPosts.map(newPost => 
                                    <div key={newPost?.id} className="post">
                                    <div className="post-content">
                                        <div className="post-title"><h4>{newPost?.title}</h4></div>
                                        <div className="post-text">{newPost?.body}</div>
                                        <Link to={`/editPost/${newPost.id}`}>
                                        <Fab style={styleButton}>
                                            <EditIcon />
                                        </Fab>
                                        </Link>
                                        <Fab style={styleButton} onClick={() => deletePost(newPost.id)} >
                                        <DeleteIcon />
                                        </Fab>
                                        {/* {props.userid?
                                <Fab style={styleButton} onClick={handleDelete}>
                                <DeleteIcon />
                             </Fab>
                            :null} */}
                                        {/* {props.userid?<Fab style={styleButton} onClick={handleDelete}>
                                <EditIcon />
                                </Fab>:null} */}
                                {/* <Fab style={styleButton} onClick={handleDelete}>
                                <VisibilityIcon />
                                </Fab> */}

                                    </div>
                            </div>
                                    )
                            }
                            </div>
                        }

                            <div className="row">
                            {
                                posts.map(post => 
                                    <div key={post.id} className="post">
                                    <div className="post-content">
                                        <div className="post-title"><h4>{post.title}</h4></div>
                                        <div className="post-text">{post.body}</div>
                                        <Link to={`/post/details/${post.id}`}>
                                        <Fab style={styleButton}>
                                        <VisibilityIcon />
                                        </Fab>
                                        </Link>
                                        {/* {props.userid?
                                <Fab style={styleButton} onClick={handleDelete}>
                                <DeleteIcon />
                             </Fab>
                            :null} */}
                                        {/* {props.userid?<Fab style={styleButton} onClick={handleDelete}>
                                <EditIcon />
                                </Fab>:null} */}
                                {/* <Fab style={styleButton} onClick={handleDelete}>
                                <VisibilityIcon />
                                </Fab> */}

                                    </div>
                            </div>
                                
                                )
                            }
                        </div>
                </div>
            </div>
            </div>
            
    );
};

export default User;