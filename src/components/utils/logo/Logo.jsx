import './logo.css';
import LogoPic from '../../../images/logo/Logo_main2.png';

function Logo() {
  return (
    <div className="logo">
      <img src={LogoPic} alt="" />
      <p className="text-140">Административный доступ</p>
    </div>
  );
}

export default Logo;
