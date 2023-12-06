import './tips.css';

function TipBtn({ children, selected, setSelected, value }) {
  return (
    <button
      type="button"
      className={'box' + (value.id === selected ? ' active' : '')}
      onClick={() => setSelected(value.id)}
    >
      <input checked={value.id === selected} name="tip" type="radio" onChange={() => {}} />
      <p className="price-large">
        {children}
        <span className="price-rub">₽</span>
      </p>
    </button>
  );
}

export default TipBtn;
