import React from 'react'
import "./IndividualUser.css"
function IndividualUser({name, email}) {
    return (
        <div>
            <div class="user-name"><span>Author: </span> { name }</div>
        </div>
    )
}

export default IndividualUser
