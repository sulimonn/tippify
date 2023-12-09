import Location from '../../../images/svg/Location';
import Button from '../../utils/btn/Button';

function Restaurant({ restaurants, focused, setFocused }) {
  const handleFocus = (e) => {
    const currentFocused = parseInt(e.target.dataset.restId);

    if (focused === currentFocused) {
      setFocused(null);
    } else {
      setFocused(currentFocused);
    }
    console.log(focused);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.add('open');
    }
  };
  return (
    <div className="restaurants_list">
      {restaurants.map((restaurant, i) => (
        <div
          className={
            'box_white focusable ' + (focused === parseInt(restaurant.id) ? ' focused' : '')
          }
          data-rest-id={restaurant.id}
          data-type="rest"
          onClick={handleFocus}
          autoFocus={i === 0}
          tabIndex={0}
          key={restaurant.id}
        >
          <div className="info">
            <h2>{restaurant.title}</h2>
            <p className="text-120">{restaurant.location}</p>
          </div>
          <div className="icon">
            <Location />
          </div>
        </div>
      ))}
      <span className={'openModal openWaiter' + (focused ? ' hide' : '')} onClick={handleClick}>
        <Button>Добавить</Button>
      </span>
    </div>
  );
}

export default Restaurant;
