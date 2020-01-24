import React from 'react';
// routing
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
// component
import Home from './Home/Home';
import About from './About/About';
import Team from './Team/Team';
import Services from './Services/Services';
import NotFound from './NotFound/NotFound';
import Work from './Work/Work';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/services" component={Services} />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route to="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
