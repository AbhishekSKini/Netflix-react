import React from "react";
import { BrowserRouter as Router , Switch } from "react-router-dom";

import * as ROUTES from './constants/routes.js';
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import {useAuthListener} from './hooks';
import { Home, Browse, Signin, Signup } from "./pages";




export default function  App() {

  const {user} = useAuthListener();

  return (

    <Router>
    <Switch>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
        <Home />
      </IsUserRedirect>
    </Switch>
  </Router>

);
}