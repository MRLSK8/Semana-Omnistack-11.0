import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewIncident from './pages/NewIncident';
import Register from './pages/Register';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LogIn} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/incidents/new' component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
