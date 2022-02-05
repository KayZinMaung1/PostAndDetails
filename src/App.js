import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import PostDetails from './components/PostDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/:post_id' component={PostDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
