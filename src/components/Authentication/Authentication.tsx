import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AuthState } from '../../reducers/shared/auth.types';
import Dashboard from '../../pages//Dashboard/Dashboard';

export interface AuthenticationProps {}

const Authentication: React.SFC<AuthenticationProps> = () => {
  const dispatch = useDispatch();
  const auth: AuthState = useSelector(({ auth }: { auth: AuthState }) => auth);
  return auth.user ? (
    <Route path="/dashboard" component={Dashboard} />
  ) : (
    <Redirect to="/" />
  );
};

export default Authentication;