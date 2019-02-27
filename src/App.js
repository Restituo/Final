import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Containers/Home/Home';
import NavBar from './Containers/NavBar/NavBar';
import SignUp from './Containers/Users/SignUp/SignUp';
import Login from './Containers/Users/Login/Login';
import AddArticle from './Containers/Articles/AddArticle';
import EditArticle from './Containers/Articles/EditArticle';
import FullArticle from './Containers/Articles/FullArticle';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/article/add" component={AddArticle} />
          <Route exact path="/article/edit/:id" component={EditArticle} />
          <Route exact path="/articles/:id" component={FullArticle} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
        
      </Router>
    );
  }
}

export default App;