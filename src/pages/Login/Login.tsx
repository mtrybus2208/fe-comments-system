import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './components/LoginForm/LoginForm';
import { FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
import { LoginFormValues } from './Login.types';
import { AuthState } from '../../reducers/shared/auth.types';
import * as fromActions from '../../actions/shared/auth';

export interface LoginProps {}

const Login: React.SFC<LoginProps> = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth: AuthState = useSelector(({ auth }: { auth: AuthState }) => auth);

  useEffect(() => {
    auth.user && history.push('/dashboard');
  }, [auth]);

  const handleSubmit = (
    values: LoginFormValues,
    formikActions: FormikHelpers<LoginFormValues>,
  ): void => {
    dispatch(fromActions.login(values));
  };

  return <LoginForm {...props} onSubmit={handleSubmit} />;
};

export default Login;
