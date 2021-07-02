import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { PostContext } from './State';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Header from './Header';
const EditPost = () => {
    const {newPosts, editPost} = useContext(PostContext);
    const {id} = useParams()
    const [selectPost, setSelectPost] = useState({
        title : '',
        body : ''
    })
   
    useEffect(() => {
        const currentId = id;
       const selectPost = newPosts.find(element => element.id === currentId)
       setSelectPost(selectPost)
    }, [id, newPosts])
    
    const history = useHistory()

    const onSubmit = () => {
        editPost(selectPost)
        history.push('/user/2')
    }
    const ChangePost = (e) =>{
        setSelectPost({
            ...selectPost, [e.target.name] : e.target.value
        })
    }

    return (
        <div>
        <Header />
        <div className='add-post'>
            <div className="container">
                <div className="card p-5 my-5 bg-light">

                <form onSubmit={onSubmit} className="create-note">
          <input
            name="title"
	    value={selectPost.title}
            onChange={ChangePost}
	    type="text"
            placeholder="Title"
            autoComplete="off"
            required
          />


        <textarea
          name="content"
	  value={selectPost.body}
          oonChange={ChangePost}
          placeholder="Post Something..."
          rows={3}
	  required
        />
        
          <Zoom in={true}>
            <Fab type="submit">
              <AddIcon />
            </Fab>
          </Zoom>

      </form>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default EditPost;