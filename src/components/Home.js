import React, { useEffect, useState } from 'react';
import PersonButton from './ProfileButton';
import Header from './Header';
import Posts from './Posts';
import Fab from "@material-ui/core/Fab";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const [posts, setPosts] = useState([])
    const [visiblePost, setVisiblePost] = useState(10)
    const styleButton = {
        marginTop: "12px"
    }

    useEffect(() => {
        setPosts(Posts)
    }, [])


    return (
        <div>
        <PersonButton />
        <Header />
        <div className="main">
        <div className="main-container">

            
                <div className="row">
                        {
                            posts.slice(0, visiblePost).map(post => 
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
                                    <div className="text-center mt-4">
                                    <button onClick={() => setVisiblePost(previous => previous + 10)} >Load More</button>
                                    </div>
       
                            </div>
                            </div>
                            </div>
    );
};

export default Home;