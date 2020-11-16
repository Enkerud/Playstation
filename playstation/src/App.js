import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Games from './views/Games';
import Characters from './views/Characters';

function App() {
  return (
    

      

      <Router>

        <Navbar bg="dark" variant="dark" className="mb-5">
          <Navbar.Brand>Playstation</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">Hjem</Nav.Link>
            <Nav.Link as={Link} to="/games">Spill</Nav.Link>
            <Nav.Link as={Link} to="/characters">Karakterer</Nav.Link>

          </Nav>  
        </Navbar>

        <Container>
          <main>
            <Switch>
              <Route exact path="/" component={Games}></Route>  
              <Route path="/games" component={Games}></Route>
              <Route path="/characters" component={Characters}></Route>
            </Switch>
          </main>
        </Container>
      </Router>
    
  );
}

export default App;
