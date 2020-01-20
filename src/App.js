import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

//routes
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, i) => {
            return <Route key={i} path={route.path} exact component={route.component} />
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
