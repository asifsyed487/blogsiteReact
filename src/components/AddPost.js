import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { PostContext } from './State';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "./AddPost.css";

const AddPost = () => {
    const [flag, setFlag] = useState(false);
    const {addPost} = useContext(PostContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault();
        const post = {
            id: uuidv4(),
            title : title,
            body : body
        }
        addPost(post);
        history.push('/user/2')
    }
    function setExpand() {
        setFlag(true);
      }

    return (
        <div className='add-post'>
            <div className="container">

                <form onSubmit={onSubmit} className="create-note">
        {flag ? (
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
	    type="text"
            placeholder="Title"
            autoComplete="off"
            required
          />
        ) : null}

        <textarea
          name="content"
          onClick={setExpand}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post Something..."
          rows={flag ? 3 : 1}
	  required
        />
        {flag ? (
          <Zoom in={true}>
            <Fab type="submit">
              <AddIcon />
            </Fab>
          </Zoom>
        ) : null}
      </form>
                </div>
                
            </div>
       
    );
};

export default AddPost;