import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import More from './components/More/More';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Appointment from './components/Appointment/Appointment';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Newc from './components/New/Newc';
import Notfound from './components/Notfound/Notfound';
function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
          <Header/>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            
            <PrivateRoute exact path="/services/:key">
              <More />
            </PrivateRoute>
            
            <Route exact path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
