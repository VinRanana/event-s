import React from 'react';
import { AuthInterface } from '../../interfaces/user.interfaces';
import UsersApiService from '../../services/UsersApiService';
import auth from '../../utils/auth';

export default function Logout (props:AuthInterface) {
 
  const logout = () => {
    UsersApiService.logout();
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push('/'));
  };

  logout()

  return (<></>)
}
