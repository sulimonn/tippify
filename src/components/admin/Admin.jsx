import React, { useEffect } from 'react';
import { isAuth } from './auth';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const redirect = useNavigate();

  useEffect(() => {
    if (isAuth === false);
    return redirect('/login', 1);
  }, [redirect]);
  if (isAuth) {
    return <section className="admin"></section>;
  }
};

export default Admin;
