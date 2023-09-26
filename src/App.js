// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreateBlog from './components/CreateBlog';
import './App.css';
import EditBlog from './components/EditBlog';


function App() {
  return (
    <Router>
      <div className='mainRoot'>
        <Switch>
          <Route path="/" exact component={BlogList} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/create" component={CreateBlog} />
          <Route path="/edit/:id" component={EditBlog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
