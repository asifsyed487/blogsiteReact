import React from 'react'
import BlogSiteName from './BlogSiteName';
import UserProfileIcon from './UserProfileIcon';
import './Header.css';
function Header() {
    return (
        <div>
         <header>
            <BlogSiteName />
            <UserProfileIcon />
        </header> 
        </div>
    )
}

export default Header
