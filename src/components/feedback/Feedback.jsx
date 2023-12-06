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
      label: 'Что можно улучшить?',
    },
    {
      id: 2,
      desc: 'good',
      text: 'Хорошо',
      label: 'Что вам понравилось?',
    },
    {
      id: 3,
      desc: 'like',
      text: 'Отлично',
      label: 'Что вам понравилось?',
    },
  ];
  const handleFeedback = (item) => {
    const main = document.querySelector('.main');
    if (item.id === feedback.id) {
      main.classList.remove('commenting');
      setFeedback('');
    } else {
      setFeedback(item);
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
            className={'feed_btn_item box' + (item.id === feedback.id ? ' active' : '')}
            onClick={() => handleFeedback(item)}
          >
            <input
              onChange={() => {}}
              checked={item.id === feedback.id}
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
      <h1 className="comment_label">{feedback.label}</h1>
      <div
        className={'feed_btn_item box comment' + (feedback === '' ? '' : ' active')}
        onClick={() => {}}
      >
        <span className="comment_label">
          <Like />
          <h2>Написать отзыв</h2>
        </span>
        <textarea
          className="comment_input"
          type="text"
          name="feedbackText"
          id=""
          placeholder="Напишите отзыв"
        />
      </div>
    </section>
  );
}

export default Feedback;
