import React from 'react';
import Logo from '../images/logo/Logo_main2.png';

class Loader extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="loading">
            <img className="logo" src={Logo} alt="logo" />
            <h3 className="h3">Чаевые онлайн</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
