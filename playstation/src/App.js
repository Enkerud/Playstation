import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Games from './views/Games';
import Characters from './views/Characters';
import Home from './views/Home';
import Admin from './views/Admin';
import FullGame from './views/FullGame';

function App() {
  return (
    <div className="appMain">
    <Router >

        <Navbar>
          <Nav style={{margin: 'auto', color: 'red', fontSize: '35px'}} >
            <Nav.Link as={Link} to="/">Hjem</Nav.Link>
            <Nav.Link as={Link} to="/games">Spill</Nav.Link>
            <Nav.Link as={Link} to="/characters">Karakterer</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>

          </Nav>  
        </Navbar>

        <Container>
          <main>
            <Switch>
              <Route exact path="/" component={Home}></Route>  
              <Route path="/games" component={Games}></Route>
              <Route path="/characters" component={Characters}></Route>
              <Route path="/admin" component={Admin}></Route>
              <Route path="/full-game" component={FullGame}></Route>
              
            </Switch>
          </main>
        </Container>
      </Router>
      </div>
  );
}

export default App;
