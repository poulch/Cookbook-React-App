import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
     <div className="ui container">
        <Router>
          <Switch>
            <Route path="" component=""/>
            <Route path="" component=""/>
            <Route path="" component=""/>
          </Switch>
        </Router>
     </div>
    );
  }
}

export default App;
