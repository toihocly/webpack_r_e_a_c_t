import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { logout } from '@/utils';
// import { routes } from '../../routes';
import { userRole } from '../../utils';
import { routes } from '../../routes';

const Dashboard = () => {
  const history = useHistory();
  const handleLogout = () => {
    logout();
    console.log('bi da ra ');
    history.push('/login');
  };

  console.log('s : ', routes);

  return (
    <div>
      <h2>DASHBOARD</h2>
      <button onClick={handleLogout}>LOG OUT</button>
      <br />
      <br />
      <br />
      <br />
      <br />

      {routes.map((i, idx) => {
        if (i.roles.some((j) => j === userRole()))
          return (
            <div key={idx}>
              <Link to={i.path}>{i.name}</Link>
            </div>
          );
      })}
    </div>
  );
};

export { Dashboard };
