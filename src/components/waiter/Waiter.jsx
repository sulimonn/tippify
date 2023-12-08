import { useNavigate } from 'react-router-dom';
import { isAuth } from '../admin/auth';
import { user } from '../admin/data/user';
import data from '../admin/data/db';
import Logo from '../utils/logo/Logo';
import Profile from '../../images/svg/Profile';
import '../admin/adminpage.css';
import CardSvg from '../../images/svg/Card';
import AddCard from './AddCard';
import { useEffect, useState } from 'react';

function Waiter() {
  const [loaded, setLoaded] = useState(false);
  const redirect = useNavigate();
  const [card, setCard] = useState(null);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setLoaded(true);
    if (isAuth && !loaded) {
      const isCard = data.cards.find((item) => parseInt(item.holder) === parseInt(user.id));
      if (isCard) setCard(isCard);
    }
  }, [card, loaded]);

  useEffect(() => {
    if (!isAuth) {
      return redirect('/login');
    }
  }, [redirect]);

  const updateCard = (e) => {
    setUpdate(!update);
  };

  if (isAuth) {
    if (user.position !== 'waiter') return redirect('/' + user.position);
    console.log(card);
    return (
      <>
        <section className="waiter_page adminpage">
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
          <div className="waiter_card">
            <h2>Моя карта</h2>
            {card ? (
              update ? (
                <AddCard setUpdate={setUpdate} card={card} setCard={setCard} />
              ) : (
                <div className="box_white">
                  <div className="info">
                    <h3 className="card_number">
                      {card.number
                        .replace(/(\d{4})\d{8}(\d{4})/, '$1 **** **** $2')
                        .replace(/(\d{4})/g, '$1 ')}
                    </h3>
                    <button type="button" onClick={updateCard} className="delete">
                      Изменить
                    </button>
                  </div>
                  <div className="icon">
                    <CardSvg />
                  </div>
                </div>
              )
            ) : (
              <AddCard setCard={setCard} />
            )}
          </div>
        </section>
      </>
    );
  }
}

export default Waiter;
