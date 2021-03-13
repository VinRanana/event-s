import React from 'react';
import UsersApiService from '../../services/UsersApiService';
import auth from '../../utils/auth';

interface LogoutInterface {
  history: [string];
  setIsAuthenticated: Function;
}

export const Logout: React.FC<LogoutInterface> = (props) => {
 
  const logout = () => {
    UsersApiService.logout();
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push('/'));
  };

  logout()

  return (<></>)
}
