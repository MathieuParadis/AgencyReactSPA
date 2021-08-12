import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Works from '../pages/Works';
import NotFound from '../pages/NotFound';
import Project from './Project';

const Content = () => {
  return (
    <div className="content">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/works" exact component={Works} />
            <Route path="/works/:slug" exact component={Project} />
            <Route component={NotFound} />
          </Switch>
        </Router>
    </div>
  );
};

export default Content;