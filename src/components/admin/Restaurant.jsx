import { useState } from 'react';
import Button from '../utils/btn/Button';
import { user } from './data/user';
import Location from '../../images/svg/Location';

function Restaurant({ data, rest, setRest }) {
  const [restaurant, setRestaurant] = useState({ admin: user.id });
  const [focus, setFocus] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    data.restaurants.push({ ...restaurant });
    setRest(restaurant);
  };
  const handleFocus = (e) => {
    const waiters = document.querySelectorAll('.animation');
    if (focus) {
      e.target.blur();
      setFocus(false);
      if (waiters) waiters.forEach((item) => item.classList.remove('hide'));
    } else {
      e.target.focus();
      setFocus(true);
      if (waiters) waiters.forEach((item) => item.classList.remove('hide'));
    }
  };
  return rest === undefined ? (
    <form onSubmit={handleSubmit} className="form">
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
      </div>
      <Button>Добавить</Button>
    </form>
  ) : (
    <div
      className="box_white focusable"
      data-rest-id={rest.id}
      data-type="rest"
      onClick={handleFocus}
      tabIndex={0}
    >
      <div className="info">
        <h2>{rest.title}</h2>
        <p className="text-120">{rest.location}</p>
      </div>
      <div className="icon">
        <Location />
      </div>
    </div>
  );
}

export default Restaurant;
