import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Admin from './components/admin/Admin';
import Login from './components/admin/login/Login';
import Loader from './components/Loader';
import './components/admin/adminpage.css';
import './components/utils/btn/btn.css';
import './App.css';
import Moderator from './components/moderator/Moderator';
import Waiter from './components/waiter/Waiter';
import PageNotFound from './components/pagenotfound/PageNotFound';

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
              <Route path="/moderator" element={<Moderator />} />
              <Route path="/waiter" element={<Waiter />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
