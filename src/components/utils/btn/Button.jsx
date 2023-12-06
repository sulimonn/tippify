function Button({ children }) {
  return (
    <button type="submit" className="btn">
      <h3>{children}</h3>
    </button>
  );
}

export default Button;
