import { useEffect, useState } from 'react';
import Logo from './images/logo/Logo_main2.png';
import './App.css';
import Main from './components/main/Main';
import './components/utils/btn/btn.css';
import Admin from './components/admin/Admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);
  }, []);
  if (didMount === false) {
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
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route index element={<Main />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
