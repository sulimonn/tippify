import React, { useEffect, useState } from 'react';
import { isAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import { user } from './data/user';
import Logo from '../utils/logo/Logo';
import Profile from '../../images/svg/Profile';
import data from './data/db';
import Restaurant from './Restaurant';
import Waiter from './waiter/Waiter';
import Modal from '../utils/modal/Modal';
import AddWaiter from './waiter/addWaiter';

const Admin = () => {
  const redirect = useNavigate();
  const [restaurant, setRestaurant] = useState(undefined);
  const [waiters, setWaiters] = useState([]);
  useEffect(() => {
    if (!isAuth) {
      return redirect('/login');
    }
  }, [redirect]);
  useEffect(() => {
    setRestaurant(data.restaurants.find((item) => parseInt(user.id) === parseInt(item.admin)));
    if (restaurant !== undefined) {
      setWaiters(
        data.users.filter((item) => parseInt(restaurant.id) === parseInt(item.restaurant)),
      );
    }
  }, [restaurant]);
  if (isAuth) {
    if (user.position !== 'admin') return redirect('/' + user.position);
    return (
      <>
        <section className="admin adminpage">
          <Logo />
          <div className="box_white">
            <div className="info">
              <h2>{user.name}</h2>
              <p className="text-120">{user.position}</p>
            </div>
            <div className="icon">
              <Profile />
            </div>
          </div>
          <Restaurant data={data} rest={restaurant} setRest={setRestaurant} />
          {restaurant !== undefined && (
            <Waiter restaurant={restaurant} waiters={waiters} setWaiters={setWaiters} />
          )}
        </section>
        {restaurant !== undefined && (
          <Modal>
            <AddWaiter restaurant={restaurant} setWaiters={setWaiters} waiters={waiters} />
          </Modal>
        )}
      </>
    );
  }
};

export default Admin;
