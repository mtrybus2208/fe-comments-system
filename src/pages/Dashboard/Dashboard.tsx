import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import * as fromActions from '../../actions/shared/auth';

export interface DashboardProps {}

const Dashboard: React.FunctionComponent<DashboardProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fnn = async () => {
      try {
        const res: any = await axios({
          method: 'post',
          url: `http://localhost:3000/api/v1/comments/filtered`,
          data: {
            pagination: {
              limit: 22,
              pagses: '1',
            },
            filters: {},
          },
        });
        console.log(res);
      } catch (err) {
        const { msg }: any = err.response.data;
      }
    };
    fnn();
  }, []);

  const handlerLogout = () => {
    dispatch(fromActions.logoutAction());
  };

  return (
    <div>
      <p>Dashboard</p>
      <button onClick={handlerLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
