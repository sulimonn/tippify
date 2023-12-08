import { useState } from 'react';
import Button from '../utils/btn/Button';

function AddAdmin({ admins, setAdmins }) {
  const handleSubmit = (e) => {
    setAdmins([...admins, admin]);
    setAdmin({
      id: (Math.random() * 100).toFixed(0),
      name: '',
      phone: '',
      password: '',
      position: 'admin',
      positiion_title: 'Админстратор',
    });
    e.preventDefault();
    const modal = document.querySelector('.modal');
    if (modal) modal.classList.remove('open');
  };
  const [admin, setAdmin] = useState({
    id: (Math.random() * 100).toFixed(0),
    position: 'admin',
    positiion_title: 'Админстратор',
  });
  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Добавьте администратора</h2>
      <div className="input-group">
        <input
          required
          type="text"
          placeholder="Имя Фамилия"
          name="name"
          value={admin.name}
          onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
        />
        <input
          required
          type="tel"
          placeholder="+7 000 000 00 00"
          name="phone"
          value={admin.phone}
          onChange={(e) => setAdmin({ ...admin, phone: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder="Пароль"
          name="password"
          value={admin.password}
          onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
        />
      </div>
      <Button>Добавить</Button>
    </form>
  );
}

export default AddAdmin;
