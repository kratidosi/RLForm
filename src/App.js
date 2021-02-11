import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import './App.css';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import Navbar from './Navbar';


function App() {
  const currentURL = window.location.href; 

const pathname = window.location.pathname; 
  if(pathname === '/'){
  var x = "Login";
  }
  if(pathname === '/login'){
    var x = "Signup";
    }
  return (
    <>
  
    <Navbar name = {x} />
    <Router>
      <switch>
      <Route exact path ='/' component ={RegForm}></Route>
      <Route exact path = '/login' component = {LoginForm}></Route>
      </switch>
    </Router>
    </>
  );
}

export default App;
