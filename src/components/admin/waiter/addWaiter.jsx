import { useState } from 'react';
import Button from '../../utils/btn/Button';

function AddWaiter({ focused, waiters, setWaiters, isModal = true }) {
  const [waiter, setWaiter] = useState({
    id: (Math.random() * 100).toFixed(0),
    positiion_title: 'Официант',
    position: 'waiter',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setWaiters([...waiters, { ...waiter, restaurant: focused }]);
    setWaiter({
      id: (Math.random() * 100).toFixed(0),
      restaurant: focused,
      positiion_title: 'Официант',
      position: 'waiter',
      name: '',
      phone: '',
      password: '',
    });
    const modal = document.querySelector('.modal');
    if (modal) modal.classList.remove('open');
  };

  return (
    <form onSubmit={handleSubmit} className={'form ' + (focused ? ' ' : ' hidden')}>
      <h2>Добавьте официанта</h2>
      <div className="input-group">
        <input
          required
          type="text"
          placeholder="Имя Фамилия"
          name="name"
          value={waiter.name}
          onChange={(e) => setWaiter({ ...waiter, name: e.target.value })}
        />
        <input
          required
          type="tel"
          placeholder="+7 000 000 00 00"
          name="phone"
          value={waiter.phone}
          onChange={(e) => setWaiter({ ...waiter, phone: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder="Пароль"
          name="password"
          value={waiter.password}
          onChange={(e) => setWaiter({ ...waiter, password: e.target.value })}
        />
      </div>
      <Button>Добавить</Button>
    </form>
  );
}

export default AddWaiter;
