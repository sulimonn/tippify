import './card.css';
import Button from '../utils/btn/Button';
import { useState } from 'react';

function Card() {
  const [checked, setChecked] = useState(false);
  function handleChenge(e) {
    setChecked(e.target.checked);
  }
  return (
    <section className="card">
      <Button>Оплатить картой</Button>
      <div className="confidentiality">
        <span className="checkbox">
          <input required type="checkbox" onChange={handleChenge} />
          <svg
            width="8"
            height="7"
            viewBox="0 0 8 7"
            fill="none"
            className={checked ? '' : 'hide'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 3.23386L2.81653 6.03418L7.33135 1.03418"
              stroke="#343434"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-140">
          Согласен с условиями Пользовательского соглашения и Политики обработки персональных данных
        </p>
      </div>
    </section>
  );
}

export default Card;
