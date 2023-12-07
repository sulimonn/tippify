import { useState } from 'react';
import Button from '../../utils/btn/Button';

function AddWaiter({ waiters, setWaiters, restaurant }) {
  const [waiter, setWaiter] = useState({
    id: (Math.random() * 100).toFixed(0),
    restaurant: restaurant.id,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setWaiter({ ...waiter });
    setWaiters([...waiters, waiter]);
    console.log(waiters);
    const modal = document.querySelector('.modal');
    if (modal) modal.classList.remove('open');
  };

  return (
    <form onSubmit={handleSubmit} className="form animation hide">
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
