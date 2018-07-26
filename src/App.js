import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css'; 
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/App1">App1</Link>
          </li>
          <li>
            <Link to="/App2">App2</Link>
          </li>
          <li>
            <Link to="/App3">App3</Link>
          </li>
          <li>
            <Link to="/App4">App4</Link>
          </li>
        </ul>
  
        <hr />
  
        <Route exact path="/App1" component={App1} />
        <Route path="/App2" component={App2} />
        <Route path="/App3" component={App3} />
        <Route path="/App4" component={App4} />
      </div>
    </Router>
  
    );
    const App1 = () => (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

export default App;
