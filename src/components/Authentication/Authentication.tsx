import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { AuthState } from 'reducers/shared/auth.types';
import Dashboard from 'pages//Dashboard/Dashboard';

export interface AuthenticationProps {}

const Authentication: React.SFC<AuthenticationProps> = () => {
  const auth: AuthState = useSelector(({ auth }: { auth: AuthState }) => auth);
  return auth.user ? (
    <Route path="/dashboard" component={Dashboard} />
  ) : (
    <Redirect to="/" />
  );
};

export default Authentication;
