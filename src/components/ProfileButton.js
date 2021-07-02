import React from 'react'
import {Link} from "react-router-dom"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import "./button.css"
function PersonButton() {
    return (
    <div className="add-post" title="Go to your profile">
        <Link to="/user/2">
            <div className="nav-button new-post-button"><PersonOutlineIcon /></div>
        </Link>
    </div>
    )
}

export default PersonButton
