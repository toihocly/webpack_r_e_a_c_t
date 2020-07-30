import React from 'react';
import * as Helpers from '@/helpers';
const Dashboard = () => {
  const handleLogout = () => {
    Helpers.removeItemStorage('token');
    console.log('bi da ra ');
  };
  console.log('da vao day');
  return (
    <div>
      <h2>DASHBOARD</h2>
      <button onClick={handleLogout}>LOG OUT</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h5>navigation</h5>
      <p>ROOM BOOKING</p>
      <p>CHAT</p>
      <p>SETTINGS</p>
    </div>
  );
};

export { Dashboard };
