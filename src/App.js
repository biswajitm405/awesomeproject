import logo from './logo.svg';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Screens/Navbar';
import Home from './Screens/Home';
import About from './Screens/About';
import Services from './Screens/Services';
import Help from './Screens/Help';
function App() {
  return (
    <>
     <Navbar />
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route path  ="/about" component={About}/>
      <Route path  ="/services" component={Services}/>
      <Route path  ="/help" component={Help}/>
    </Switch>
    </>
  );
}

export default App;
