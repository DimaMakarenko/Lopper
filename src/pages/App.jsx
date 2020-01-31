import React from 'react';
// routing
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
// components
import Home from './Home/Home';
import About from './About/About';
import Team from './Team/Team';
import Services from './Services/Services';
import NotFound from './NotFound/NotFound';
import Work from './Work/Work';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/Lopper/home" component={Home} />
      <Route exact path="/Lopper/about" component={About} />
      <Route exact path="/Lopper/team" component={Team} />
      <Route exact path="/Lopper/work" component={Work} />
      <Route exact path="/Lopper/services" component={Services} />
      <Route path="/Lopper" exact>
        <Redirect to="/Lopper/home" />
      </Route>
      <Route to="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
