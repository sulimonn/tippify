import React from 'react';
import './App.css';
import Main from './components/main/Main';
import './components/utils/btn/btn.css';
import Admin from './components/admin/Admin';
import Login from './components/admin/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didMount: true,
    };
  }
  componentDidMount() {
    this.setState({ didMount: false });
  }
  render() {
    if (this.state.didMount) {
      return <Loader />;
    }
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Routes>
              <Route index element={<Main />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
