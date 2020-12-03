import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Games from './views/Games';
import Characters from './views/Characters';
import Home from './views/Home';
import Admin from './views/Admin';
import GamePage from './components/games/GamePage';
import Routes from './components/routes/Routes';

// I denne oppgaven fant jeg ut at det har blitt gjort endringer i webpack-config slik at bilder ikke fungerte som i vår opplæring.
// Har da brukt bildeadresser/url istedenfor å hente inn og laste opp bilder til wwwroot-mappen.

function App() {
  return (
    <div className="appMain">
    <Routes></Routes>
      </div>
  );
}

export default App;