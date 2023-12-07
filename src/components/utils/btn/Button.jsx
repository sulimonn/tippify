function Button({ children }) {
  return (
    <button onSubmit={(e) => e.preventDefault()} type="submit" className="btn">
      <h3>{children}</h3>
    </button>
  );
}

export default Button;
