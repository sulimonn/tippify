import './modal.css';

function Modal({ children }) {
  const hideModal = (e) => {
    e.target.parentNode.parentNode.classList.remove('open');
    console.log(e.target);
  };
  return (
    <div className="modal">
      <div className="modal-card">
        <div className="modal-body">{children}</div>
        <svg
          className="close"
          onClick={hideModal}
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9999 17.9999C17.6094 18.3904 16.9762 18.3904 16.5857 17.9999L0.999925 2.41414C0.609401 2.02361 0.609401 1.39045 0.999925 0.999925C1.39045 0.6094 2.02361 0.6094 2.41414 0.999924L17.9999 16.5857C18.3905 16.9762 18.3904 17.6094 17.9999 17.9999Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.999924 17.9999C0.609399 17.6094 0.609401 16.9762 0.999926 16.5857L16.5857 0.999925C16.9762 0.609401 17.6094 0.609401 17.9999 0.999925C18.3904 1.39045 18.3904 2.02361 17.9999 2.41414L2.41414 17.9999C2.02361 18.3904 1.39045 18.3905 0.999924 17.9999Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default Modal;
