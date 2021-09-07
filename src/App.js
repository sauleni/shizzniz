import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom'

import './App.css';
import EditProfile from './components/authentication/editProfile';
import Home from './components/home';
import Places from './components/places';
import Login from './components/authentication/login'
import FriendsProfile from './components/friendProfile';
import RestorePassword from './components/authentication/recoverPassword';
// import RegistrationForm from './components/Registration/RegistrationForm';
import Register from './components/authentication/register';
import Place from './components/places/place';
import MailBox from './components/mailbox';
import Menu from './components/menu';
import AddFriends from './components/addFriends';
import GeneralInfo from './components/generalInfo';
import Specials from './components/specials';
import Event from './components/Event';


function App() {
  const history = useHistory()

  // useEffect(() => {
  //   history.push('/authentication/login')
  // }, [])
  return (
    
    <div className="App">
      {/* <FrindsProfile /> */}
      {/* <EditProfile /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Main /> */}
      <Router>
        <Switch >

          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/edit">
            <EditProfile />
          </Route>
          
          <Route exact path="/recover" >
            <RestorePassword />
          </Route>

          <Route exact path="/friends" >
            <FriendsProfile />
          </Route>

          <Route path="/places">
            <Places />
          </Route>
          
          <Route path="/place">
            <Place />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/mail">
            <MailBox />
          </Route>
          
          <Route path="/menu">
            <Menu />
          </Route>
          
          <Route path="/addfriends">
            <AddFriends />
          </Route>
          
          <Route path="/specials">
            <Specials />
          </Route>
          
          <Route path="/events">
            <Event />
          </Route>

        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
