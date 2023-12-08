import Button from '../../utils/btn/Button';
import Profile from '../../../images/svg/Profile';
import AddWaiter from './addWaiter';

function Waiter({ restaurant, waiters, setWaiters }) {
  const handleClick = (e) => {
    e.preventDefault();
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.add('open');
    }
  };
  const handleDelete = (e) => {
    console.log(e.target.dataset.id);
    setWaiters(waiters.filter((item) => parseInt(item.id) !== parseInt(e.target.dataset.id)));
  };

  return waiters.length === 0 ? (
    <AddWaiter restaurant={restaurant} setWaiters={setWaiters} waiters={waiters} />
  ) : (
    <div className="list animation ">
      <h2 className="title gray">Официанты</h2>
      {waiters.map((item) => (
        <div key={item.id} className="box_white waiters">
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

export default Waiter;
