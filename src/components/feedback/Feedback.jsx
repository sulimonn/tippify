import './feedback.css';
import ThumbsDown from '../utils/svg/ThumbsDown';
import ThumbsUp from '../utils/svg/ThumbsUp';
import Like from '../utils/svg/Like';
import { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const feedbacks = [
    {
      id: 1,
      desc: 'bad',
      text: 'Плохо',
    },
    {
      id: 2,
      desc: 'good',
      text: 'Хорошо',
    },
    {
      id: 3,
      desc: 'like',
      text: 'Отлично',
    },
  ];
  const handleFeedback = (item) => {
    const main = document.querySelector('.main__logo_account');
    if (item.id === feedback) {
      main.classList.remove('commenting');
      setFeedback('');
    } else {
      setFeedback(item.id);
      main.classList.add('commenting');
    }
  };
  return (
    <section className="feedback">
      <h1>Оцените место</h1>
      <div className="feedback_btns">
        {feedbacks.map((item) => (
          <div
            key={item.id}
            className={'feed_btn_item box' + (item.id === feedback ? ' active' : '')}
            onClick={() => handleFeedback(item)}
          >
            <input
              onChange={() => {}}
              checked={item.id === feedback}
              type="radio"
              name="feedback"
              id={item.id}
            />
            {item.desc === 'bad' && <ThumbsDown />}
            {item.desc === 'good' && <ThumbsUp />}
            {item.desc === 'like' && <Like />}
            <div className="text-140">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="feed_btn_item box comment" onClick={() => {}}>
        <Like />
        <h2>Написать отзыв</h2>
      </div>
    </section>
  );
}

export default Feedback;
