import React from 'react'
import {Link} from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import "./button.css"
function HomeButton() {
    return (
    <div className="add-post" title="Go to Homepage">
        <Link to="/">
            <div className="nav-button new-post-button"><HomeIcon /></div>
        </Link>
    </div>
    )
}

export default HomeButton
