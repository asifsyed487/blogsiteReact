import React from 'react'
import { Link } from 'react-router-dom';
import './BlogSiteName.css';
function BlogSiteName() {
    return (
        <Link style={{textDecoration: "none", color: "white"}} to="/">
        <div className="blogsite-name">
                Technext Blogsite 
        </div>
        </Link>
    )
}

export default BlogSiteName
