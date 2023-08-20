import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPosts from './Pages/Post/ListPosts';
import CreatePost from './Pages/Post/CreatePost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ListPosts} />
        </Switch>
        <Switch>
        <Route path="/add" exact component={CreatePost} />
      </Switch>
    </Router>
  );
}

export default App;
