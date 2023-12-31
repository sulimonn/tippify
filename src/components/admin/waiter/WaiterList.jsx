import Button from '../../utils/btn/Button';
import Profile from '../../../images/svg/Profile';
import AddWaiter from './addWaiter';
import { useEffect, useState } from 'react';
import { Animate } from '../../Animate';

function WaiterList({ click, waiters, setWaiters, focused }) {
  const [focusedWaiters, setFocusedWaiters] = useState([]);
  useEffect(() => {
    if (focused) {
      setFocusedWaiters(waiters.filter((waiter) => parseInt(waiter.restaurant) === focused));
    }
  }, [focused, waiters]);

  const handleClick = (e) => {
    e.preventDefault();

    const modal = document.querySelector('.modal');
    Animate();
    if (modal) {
      modal.classList.add('open');
    }
  };
  const handleDelete = (e) => {
    const waiter = document.querySelectorAll('.waiters');
    if (waiter) {
      waiter.forEach((item) => {
        if (item.dataset.id === e.target.dataset.id) {
          item.classList.add('hide');
        }
      });
    }
    e.target.parentNode.parentNode.classList.add('hiding');
    setTimeout(() => {
      setWaiters(waiters.filter((item) => parseInt(item.id) !== parseInt(e.target.dataset.id)));
    }, 400);
  };
  console.log(click);
  return focusedWaiters.length === 0 ? (
    <AddWaiter isModal={false} focused={focused} setWaiters={setWaiters} waiters={waiters} />
  ) : (
    <div
      className={
        'waiters_list' +
        (click ? (focused === null ? ' hiding' : ' hiding') : focused !== null ? '' : ' hide')
      }
    >
      <h2 className="title gray">Официанты</h2>
      {focusedWaiters.map((item) => (
        <div
          data-rest-id={item.restaurant}
          key={item.id}
          className={'box_white waiters ' + (focused === parseInt(item.restaurant) ? '' : ' hide')}
        >
          <div className="info">
            <h2>{item.name}</h2>
            <button onClick={handleDelete} data-id={item.id} className="delete text-140">
              Удалить
            </button>
          </div>
          <div className="icon">
            <Profile />
          </div>
        </div>
      ))}
      <span className="openModal" onClick={handleClick}>
        <Button>Добавить</Button>
      </span>
    </div>
  );
}

export default WaiterList;
