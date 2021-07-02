import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {PostProvider} from "./components/State";
import Home from "./components/Home";
import User from "./components/User";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import DynamicUser from "./components/DynamicUser";
import PostDetails from "./components/PostDetails";
import './App.css';

function App() {
  return (
    <div className="App">
      <PostProvider>
      <Router>
      <Switch>
      <Route path='/' exact>
          <Home/>
      </Route>
      <Route path='/user/2'>
          <User/>
      </Route>
      <Route path='/addPost'>
          <AddPost/>
      </Route>
      <Route path='/editPost/:id'>
        <EditPost/>
      </Route>
      <Route path='/user/:userId'>
          <DynamicUser/>
      </Route>
      <Route path='/post/details/:postId'>
        <PostDetails/>
      </Route>
      </Switch>
      </Router>
      </PostProvider>
    </div>
  );
}

export default App;
