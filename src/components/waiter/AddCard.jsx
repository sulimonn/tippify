import { useState } from 'react';
import Button from '../utils/btn/Button';
import { user } from '../admin/data/user';

function AddCard({ setUpdate = null, card = null, setCard }) {
  const [card_form, setCardForm] = useState(
    card === null
      ? {
          number: '',
          valid: '',
          cvv: '',
          holder: user.id,
          id: (Math.random() * 99).toFixed(0),
        }
      : card,
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector('.animation');
    if (form) {
      form.classList.add('hide');
    }
    setTimeout(() => {
      setCard(card_form);
      if (setUpdate !== null) setUpdate(false);
    }, 190);
  };
  const handleCardValid = (e) => {
    let valid = e.target.value;
    valid = valid.replace(/[^0-9]/g, '');
    if (valid.length < 3) setCardForm({ ...card_form, valid: valid });
    else setCardForm({ ...card_form, valid: valid.slice(0, 2) + '/' + valid.slice(2, 4) });
    e.target.value = card_form.valid;
  };
  const handleCvv = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 3);
    setCardForm({ ...card_form, cvv: e.target.value });
  };
  const handleCardNumber = (e) => {
    let numericValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 16);

    numericValue = numericValue.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ');

    e.target.value = numericValue.trim();
    setCardForm({ ...card_form, number: numericValue.replace(/\s/g, '') });
  };
  console.log(card_form);
  return (
    <form onSubmit={handleSubmit} className="form animation ">
      <div className="input-group">
        <input
          required
          type="text"
          placeholder="0000 0000 0000 0000"
          name="number"
          value={setUpdate && card.number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ')}
          onChange={handleCardNumber}
        />
        <input
          required
          type="text"
          min="0"
          max="9999"
          name="valid"
          placeholder="ММ/ГГ"
          value={card_form.valid}
          onChange={handleCardValid}
        />

        <input
          required
          type="password"
          placeholder="XXX"
          name="cvv"
          value={card_form.cvv}
          onChange={handleCvv}
        />
      </div>
      <Button>{setUpdate ? 'Изменить' : 'Добавить'}</Button>
    </form>
  );
}

export default AddCard;
