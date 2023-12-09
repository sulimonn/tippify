import React, { useEffect, useState } from 'react';
import { isAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import { user } from './data/user';
import Logo from '../utils/logo/Logo';
import Profile from '../../images/svg/Profile';
import data from './data/db';
import Restaurant from './restaurant/Restaurant';
import WaiterList from './waiter/WaiterList';
import Modal from '../utils/modal/Modal';
import AddWaiter from './waiter/addWaiter';
import AddRestaurant from './restaurant/AddRestaurant';

const Admin = () => {
  const [click, setClick] = useState(false);
  const [focused, setFocused] = useState(null);
  const redirect = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [waiters, setWaiters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (!isAuth) {
      return redirect('/login');
    }
  }, [redirect]);
  useEffect(() => {
    if (isAuth) {
      setRestaurants(data.restaurants.filter((item) => parseInt(user.id) === parseInt(item.admin)));
    }
  }, []);
  useEffect(() => {
    if (restaurants.length !== 0 && !isLoaded) {
      setIsLoaded(true);

      const updatedWaiters = [];

      restaurants.forEach((targetRestaurant) => {
        const arr = data.users.filter(
          (user) => user.position === 'waiter' && user.restaurant === targetRestaurant.id,
        );

        updatedWaiters.push(...arr);
      });

      setWaiters(updatedWaiters);
    }
  }, [restaurants, isLoaded]);

  if (isAuth) {
    if (user.position !== 'admin') return redirect('/' + user.position);
    return (
      <>
        <section className="admin adminpage">
          <Logo />
          <div className="box_white">
            <div className="info">
              <h2>{user.name}</h2>
              <p className="text-120">{user.position_title}</p>
            </div>
            <div className="icon">
              <Profile />
            </div>
          </div>
          {restaurants.length === 0 ? (
            <AddRestaurant
              setFocused={setFocused}
              focused={focused}
              restaurants={restaurants}
              setRestaurants={setRestaurants}
            />
          ) : (
            <>
              <Restaurant
                click={click}
                setClick={setClick}
                setFocused={setFocused}
                focused={focused}
                restaurants={restaurants}
              />

              <WaiterList
                click={click}
                focused={focused}
                restaurants={restaurants}
                waiters={waiters}
                setWaiters={setWaiters}
              />
            </>
          )}
        </section>
        <Modal>
          <AddRestaurant
            setFocused={setFocused}
            focused={focused}
            restaurants={restaurants}
            setRestaurants={setRestaurants}
          />
          <AddWaiter focused={focused} setWaiters={setWaiters} waiters={waiters} />
        </Modal>
      </>
    );
  }
};

export default Admin;
