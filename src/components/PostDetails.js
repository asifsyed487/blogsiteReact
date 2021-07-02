import React from 'react';
import Header from './Header';
import UserTable from './UserTable';
import Post from './Post';

const PostDetails = () => {


    return (
        <div className='user-details'>
            <Header/>
            <div className="container">
                <Post/>
               <UserTable/>
            </div>
        </div>
    );
};

export default PostDetails;