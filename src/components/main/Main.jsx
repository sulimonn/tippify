import './main.css';
import Profile from '../../images/svg/Profile';
import Logo from '../../images/logo/Logo_main2.png';
import Tips from '../tips/Tips';
import Feedback from '../feedback/Feedback';

function Main() {
  return (
    <div className="main">
      <section className="main__logo_account">
        <div className="main_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="account">
          <div className="account_info">
            <h2 className="name">Николай</h2>
            <p className="text-120">Официант</p>
          </div>
          <div className="account_logo">
            <Profile />
          </div>
        </div>
      </section>
      <Tips />
      <Feedback />
    </div>
  );
}

export default Main;
