import React, { useState } from 'react';
import Button from '../../utils/btn/Button';
import './login.css';
import data from '../data/db';
import { setUser, user } from '../data/user';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../auth';
import Logo from '../../utils/logo/Logo';

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
  const submit = (v) => {
    switch (v) {
      case 'w':
        setPhone('+996 770 180 302');
        setPassword('1234');
        break;
      case 'a':
        setPhone('+1234567890');
        setPassword('5678');
        break;
      case 'm':
        setPhone('+996 770 190 302');
        setPassword('1234');
        break;

      default:
        break;
    }
  };
  return (
    <form onSubmit={handleLogin} className="login">
      <Logo />
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
      <div className="logging">
        <div className="box" onClick={() => submit('w')}>
          <h3>Официант</h3>
        </div>
        <div className="box" onClick={() => submit('a')}>
          <h3>Админстратор</h3>
        </div>
        <div className="box" onClick={() => submit('m')}>
          <h3>Модератор</h3>
        </div>
      </div>
    </form>
  );
}

export default Login;
