import { useState } from 'react';
import TipBtn from './TipBtn';

function Tips() {
  const [amount, setAmount] = useState(null);
  const [inputOpen, setInputOpen] = useState(true);
  const updateInputOpen = () => {
    setInputOpen(!inputOpen);

    updateBtn(inputOpen && !amount);
  };
  const updateRubValue = (e) => {
    let enteredValue = e.target.value;
    updateBtn(enteredValue === null || enteredValue === '');
    if (enteredValue === '') enteredValue = null;
    setAmount(enteredValue);
  };
  const updateBtn = (val) => {
    const btn = document.querySelector('button.btn');
    if (val) {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  };
  const [selected, setSelected] = useState(1);
  const tips = [
    {
      id: 1,
      tip: 100,
    },
    {
      id: 2,
      tip: 200,
    },
    {
      id: 3,
      tip: 500,
    },
    {
      id: 4,
      tip: 1000,
    },
  ];
  return (
    <div className="tips">
      <h1>Чаевые</h1>
      <div className={'tips_btn' + (inputOpen ? ' show' : ' hide')}>
        {tips.map((item) => (
          <TipBtn key={item.id} value={item} setSelected={setSelected} selected={selected}>
            {item.tip}
          </TipBtn>
        ))}
        <button type="button" onClick={updateInputOpen} className="box mytip_target">
          <p className="text-140">
            Ввести свою сумму
            <svg
              width="13"
              height="6"
              viewBox="0 0 13 6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4819 0.634827C10.3326 0.500956 10.0905 0.500956 9.94118 0.634828C9.79187 0.768699 9.79187 0.985748 9.94118 1.11962L11.6945 2.6916H0.382352C0.171185 2.6916 0 2.84508 0 3.0344C0 3.22372 0.171185 3.3772 0.382352 3.3772H11.6946L9.94118 4.94923C9.79187 5.0831 9.79187 5.30015 9.94118 5.43402C10.0905 5.56789 10.3326 5.56789 10.4819 5.43402L12.888 3.27682C13.0373 3.14295 13.0373 2.9259 12.888 2.79203L10.4819 0.634827Z"
                fill="currentColor"
              />
            </svg>
          </p>
        </button>
      </div>
      <div className={'mytip_btn' + (inputOpen ? ' hide' : ' show')}>
        <button type="button" onClick={updateInputOpen} className="box back">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2997 12.7734C6.67326 13.1214 7.27892 13.1214 7.65248 12.7734C8.02604 12.4253 8.02604 11.861 7.65248 11.5129L3.26597 7.42577L19.0434 7.42513C19.5717 7.42513 20 7.02609 20 6.53385C20 6.04161 19.5717 5.64257 19.0434 5.64257L3.26583 5.64321L7.65248 1.55593C8.02604 1.20786 8.02604 0.643537 7.65248 0.295472C7.27892 -0.0525934 6.67326 -0.0525934 6.2997 0.295472L0.280167 5.90419C-0.0933889 6.25226 -0.0933909 6.81659 0.280171 7.16465L6.2997 12.7734Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <label htmlFor="mytip" className="mytip_label">
          {amount === null ? (
            <p className="price-large empty">
              0<span className="price-rub">₽</span>
            </p>
          ) : (
            <p className="price-large">
              {amount}
              <span className="price-rub">₽</span>
            </p>
          )}
          <svg
            onClick={() => {
              setAmount(null);
              updateBtn(true);
            }}
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="#b5b8ff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9999 17.5343C17.6094 17.9249 16.9762 17.9249 16.5857 17.5343L0.999925 1.94856C0.609401 1.55804 0.609401 0.924873 0.999925 0.534348C1.39045 0.143824 2.02361 0.143824 2.41414 0.534348L17.9999 16.1201C18.3905 16.5107 18.3904 17.1438 17.9999 17.5343Z"
              fill="#b5b8ff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.999924 17.5343C0.609399 17.1438 0.609401 16.5107 0.999926 16.1201L16.5857 0.534349C16.9762 0.143824 17.6094 0.143824 17.9999 0.534349C18.3904 0.924873 18.3904 1.55804 17.9999 1.94856L2.41414 17.5343C2.02361 17.9249 1.39045 17.9249 0.999924 17.5343Z"
              fill="#b5b8ff"
            />
          </svg>

          <input
            required={!inputOpen && amount === 0}
            value={parseInt(amount)}
            onChange={updateRubValue}
            autoFocus
            name="tip"
            id="mytip"
            type="number"
            min={0}
          />
        </label>
      </div>
    </div>
  );
}

export default Tips;
