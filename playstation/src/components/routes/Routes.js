import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Games from '../../views/Games';
import Characters from '../../views/Characters';
import Home from '../../views/Home';
import Admin from '../../views/Admin';
import GamePage from '../../components/games/GamePage';
import CharacterPage from '../../components/characters/CharacterPage';
import Headroom from 'react-headroom';

const Routes = () => {

  const styles = {
    navStyle: {
        textAlign: 'center',
        backgroundColor: 'darkSlateGray',
        opacity: '90%',
        fontSize: '45px',
        height: '80px'
    },
    linkStyle: {
      color: 'white'
    },
    linkAdminStyle: {
      color: 'white',
      position: 'absolute',
      right: "10px"
    }};


  return (
    <div className="appMain">
    <Router >
      <Headroom>
        <Navbar style={styles.navStyle}>
          <Nav >
            <Nav.Link as={Link} to="/" style={styles.linkStyle}>Hjem</Nav.Link>
            <Nav.Link as={Link} to="/games" style={styles.linkStyle}>Spill</Nav.Link>
            <Nav.Link as={Link} to="/characters" style={styles.linkStyle}>Karakterer</Nav.Link>
            <Nav.Link as={Link} to="/admin" style={styles.linkAdminStyle}>Admin</Nav.Link>

          </Nav>  
        </Navbar>
        </Headroom>

        <Container>
          <main>
            <Switch>
              <Route exact path="/" component={Home}></Route>  
              <Route path="/games" component={Games}></Route>
              <Route path="/characters" component={Characters}></Route>
              <Route path="/admin" component={Admin}></Route>
              <Route path="/game/:id" component={GamePage}></Route>
              <Route path="/character/:id" component={CharacterPage}></Route>
              
            </Switch>
          </main>
        </Container>
      </Router>
      </div>
  );
}

export default Routes;
