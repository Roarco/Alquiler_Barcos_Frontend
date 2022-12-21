import logo from '../logo.svg';
import '../App.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Layout from '../layout/layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Boats from '../pages/Boats';



function App() {
  return (
    <AppContext.Provider>
      <BrowserRouter>
        <Layout>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/boats' component={Boats} />
            {/*<Route exact path='/password-recovery' component={PasswordRecovery} />
            <Route exact path='/send-email' component={SendEmail} />
            <Route exact path='/new-password' component={NewPassword} />
            <Route exact path='/account' component={MyAccount} />
            <Route exact path='/signup' component={CreateAccount} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/orders' component={Orders} />
            <Route component={NotFound} /> */}

          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
