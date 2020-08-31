import React from 'react';
import{isAlthenticated} from './auth';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
         render={props =>
        isAlthenticated() ? (
            <Component {...props} />
        ):(
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello world</h1>} />
            <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;