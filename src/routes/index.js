import React from 'react';
import { Dashboard } from '../layout';

export const routes = [
  // {
  //   exact: true,
  //   name: 'DASHBOARD PAGE',
  //   path: '/dashboard',
  //   component: Dashboard,
  //   roles: ['ADMIN', 'USER', 'IT'],
  // },
  {
    exact: true,
    name: 'HOME ADMIN PAGE',
    path: '/homeadmin',
    component: () => <h1>Page Home Admin</h1>,
    roles: ['ADMIN', 'IT'],
  },
  {
    exact: true,
    name: 'ABOUT ADMIN PAGE',
    path: '/aboutadmin',
    component: () => <h1>Page About Admin</h1>,
    roles: ['ADMIN', 'IT'],
  },
  {
    exact: true,
    name: 'PRIVATE ADMIN PAGE',
    path: '/privateadmin',
    component: () => <h1>Page Private Admin</h1>,
    roles: ['ADMIN'],
  },
  {
    exact: true,
    name: 'HOME USER PAGE',
    path: '/homeuser',
    component: () => <h1>Page Home User</h1>,
    roles: ['USER', 'IT'],
  },
  {
    exact: true,
    name: 'ABOUT USER PAGE',
    path: '/aboutuser',
    component: () => <h1>Page About User</h1>,
    roles: ['USER', 'IT'],
  },
  {
    exact: true,
    name: 'SETTINGS PAGE',
    path: '/settings',
    component: () => <h1>Page Settings</h1>,
    roles: ['IT'],
  },
];
