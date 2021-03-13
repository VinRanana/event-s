import React from 'react';
import UsersApiService from '../../services/UsersApiService';
import auth from '../../utils/auth';

interface LogoutInterface {
  history: [string];
  setIsAuthenticated: Function;
}

export default function Logout (props:LogoutInterface) {
 
  const logout = () => {
    UsersApiService.logout();
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push('/'));
  };

  logout()

  return (<></>)
}
