import React from 'react';
import "./Pagination.css";
const Pagination = ({postPerPage, totalPosts, paginate}) => {

    const numbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts/postPerPage); i++){
        numbers.push(i)
    }

    return (
        <div className="main">
            <div className="main-container">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                    <button className='page-item page-link disabled' tabindex="-1" aria-disabled="true">
                               Previous
                    </button>
                    </li>
                    {
                        numbers.map(number => 
                            <button key={number} onClick={() => paginate(number)} className='page-item page-link'>
                               {number}
                            </button>
                            )
                    }
                    <li className="page-item disabled">
                    <button className='page-item page-link disabled' tabindex="-1" aria-disabled="true">
                               Next
                    </button>
                    </li>
                    </ul>
                    </nav>
                </div>
            </div>

    );
};

export default Pagination;