import { useState } from 'react';
import { user } from '../data/user';
import Button from '../../utils/btn/Button';

function AddRestaurant({ restaurants, setRestaurants, focused, setFocused }) {
  const [restaurant, setRestaurant] = useState({
    admin: user.id,
    id: (Math.random() * 100).toFixed(0),
  });
  const handleSubmit = (e) => {
    setFocused(parseInt(restaurant.id));
    e.preventDefault();

    const modal = document.querySelector('.modal');
    if (modal) modal.classList.remove('open');
    setRestaurants([...restaurants, restaurant]);
    setRestaurant({
      admin: user.id,
      id: (Math.random() * 100).toFixed(0),
    });
  };
  return (
    <form onSubmit={handleSubmit} className={'form' + (focused !== null ? ' hidden' : '')}>
      <h2>Добавьте ресторан</h2>

      <div className="input-group">
        <input
          required
          type="text"
          placeholder="Название ресторана"
          name="title"
          value={restaurant.title}
          onChange={(e) => setRestaurant({ ...restaurant, title: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="Адрес ресторана"
          name="location"
          value={restaurant.location}
          onChange={(e) => setRestaurant({ ...restaurant, location: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="Логин"
          name="login"
          value={restaurant.login}
          onChange={(e) => setRestaurant({ ...restaurant, login: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder="Пароль"
          name="password"
          value={restaurant.password}
          onChange={(e) => setRestaurant({ ...restaurant, password: e.target.value })}
        />
      </div>
      <Button>Добавить</Button>
    </form>
  );
}

export default AddRestaurant;
