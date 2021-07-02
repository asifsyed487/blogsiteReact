import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from './Header';
import Paginationa from './Paginationa';
import Posts from './Posts';
import Users from './Users';
import "./DynamicUser.css";
import HomeButton from './HomeButton';
import IndividualUser from './IndividualUser';

const DynamicUser = () => {
    const [selectUser, setSelectUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(3)
    const {userId} = useParams()
 

    useEffect(() => {
        //fetch for find specific user
        const getUsers = () => {
            const result = Users.find(user => {
                return user.id === parseInt(userId)
            })
            setSelectUser(result)
           
        }

        return getUsers()

    }, [userId])

    useEffect(() => {
        const getPosts = () => {
                const result = Posts.filter(posts => {
                    return posts.userId === parseInt(userId)
                })
                setPosts(result)
               
            }
            return getPosts()
    }, [userId])



    const lastPost = currentPage * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPost = posts.slice(firstPost, lastPost);

    const paginate = (number) => {
        setCurrentPage(number)
    }
    
    return (
        <div className='dynamic-user'>
        <HomeButton />
            <Header/>
            <div className="container">
                <IndividualUser name={selectUser.name}  email={selectUser.email}/>
                <div className="main">
                <div className="main-container">
                        {
                            currentPost.map(post =>
                                <div key={post.id} className="post">
                                    <div className="post-content">
                                        <div className="post-title"><h4>{post.title}</h4></div>
                                        <div className="post-text">{post.body}</div>
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
                <Paginationa postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>
        </div>
    );
};

export default DynamicUser;