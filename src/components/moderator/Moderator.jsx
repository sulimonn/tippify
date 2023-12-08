import Profile from '../../images/svg/Profile';
import { user } from '../admin/data/user';
import Logo from '../utils/logo/Logo';
import './style.css';
import '../admin/adminpage.css';
import { isAuth } from '../admin/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../admin/data/db';
import Button from '../utils/btn/Button';
import AddAdmin from './AddAdmin';
import Modal from '../utils/modal/Modal';

function Moderator() {
  const redirect = useNavigate();
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    if (!isAuth) {
      return redirect('/login');
    }
  }, [redirect]);

  const handleClick = (e) => {
    e.preventDefault();
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.add('open');
    }
  };

  const handleDelete = (e) => {
    setAdmins(admins.filter((item) => parseInt(item.id) !== parseInt(e.target.dataset.id)));
  };
  useEffect(() => {
    setAdmins(data.users.filter((item) => item.position === 'admin'));
  }, []);
  if (isAuth) {
    if (user.position !== 'moderator') return redirect('/' + user.position);

    return (
      <>
        <section className="adminpage moderator">
          <Logo />
          <div className="box active">
            <div className="info">
              <h2>{user.name}</h2>
              <p className="text-120">{user.position_title}</p>
            </div>
            <div className="icon">
              <Profile />
            </div>
          </div>
          {admins.length === 0 ? (
            <AddAdmin admins={admins} setAdmins={setAdmins} />
          ) : (
            <div className="list animation ">
              <h2 className="title gray">Администраторы</h2>
              {admins.map((item) => (
                <div key={item.id} className="box_white waiters">
                  <div className="info">
                    <h2>{item.name}</h2>
                    {data.restaurants
                      .filter((rest) => parseInt(rest.admin) === parseInt(item.id))
                      .map((rest) => (
                        <>
                          <p className="text-120">{rest.title}</p>
                          <p className="text-120">{rest.location}</p>
                        </>
                      ))}
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
          )}
        </section>
        <Modal>
          <AddAdmin admins={admins} setAdmins={setAdmins} />
        </Modal>
      </>
    );
  }
}

export default Moderator;
