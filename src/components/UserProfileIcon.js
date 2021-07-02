import React from 'react'
import {Link} from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./UserProfileIcon.css"
function UserProfileIcon() {
    return (
        <Link style={{textDecoration: "none", color: "white"}} to="/user/2">
        <div className="profile-click">
            <AccountCircleIcon style={{ fontSize: 45, marginTop: "8px"}} />
            <div style={{ fontSize: 45, marginTop: "8px"}} className="profile-name"> Ervin Howell</div>
        </div>
        </Link>
    )
}

export default UserProfileIcon
