import React, { useState } from 'react';
import Logo from '../../../images/logo/Logo_main2.png';
import Button from '../../utils/btn/Button';
import './login.css';
import data from '../data/db';
import { setUser, user } from '../data/user';
import { useNavigate } from 'react-router-dom';
import { setAuth, isAuth } from '../auth';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const redirect = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const isCorrect = data.users.find((item) => item.password === password && item.phone === phone);
    if (isCorrect) {
      setUser(isCorrect);
      setAuth(true);
      redirect('/' + user.position);
    }
  };
  console.log(isAuth);
  return (
    <form onSubmit={handleLogin} className="login">
      <div className="logo">
        <img src={Logo} alt="" />
        <p className="text-140">Административный доступ</p>
      </div>
      <div className="input-group">
        <input
          required
          type="tel"
          placeholder="+7 000 000 00 00"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Пароль"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button>Войти</Button>
    </form>
  );
}

export default Login;