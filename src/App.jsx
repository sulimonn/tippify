import { useEffect, useState } from 'react';
import Logo from './images/logo/Logo_main2.png';
import './App.css';
import Main from './components/main/Main';
import './components/utils/btn/btn.css';

function App() {
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);
  }, []);

  if (!didMount) {
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
  return (
    <div className="App">
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
