import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Headroom from 'react-headroom';

import Games from '../../views/Games';
import Characters from '../../views/Characters';
import Locations from '../../views/Locations';
import Home from '../../views/Home';
import Admin from '../../views/Admin';
import GamePage from '../../components/games/GamePage';
import CharacterPage from '../../components/characters/CharacterPage';
import LocationPage from '../../components/locations/LocationPage';

import pslogo from '../../assets/images/pslogo.png'

const Routes = () => {

  //I denne komponenten styrer jeg routingen for hele appen. 
  
  // Styling
  const styles = {
    navStyle: {
        textAlign: 'center',
        backgroundColor: 'darkSlateGray',
        opacity: '90%',
        fontSize: '45px',
        height: '80px',
        
    },
    linkStyle: {
      color: 'white'
    },
    linkAdminStyle: {
      color: 'white',
      position: 'absolute',
      right: "10px"
    },
    logoStyle: {
      width: '100px',
      height: '80px',
      margin: '5px'
    }};

  return (
    <div className="appMain">
    <Router>
      {/* Bruker Headroom som gir en pen scrolleeffekt på header. Rekker dessverre ikke å gjøre denne så mobilvennlig som jeg ønsket */}
      <Headroom>
        <Navbar style={styles.navStyle}>
          <Nav>
            <img src={pslogo} style={styles.logoStyle} ></img>
            <Nav.Link as={Link} to="/" style={styles.linkStyle}>Hjem |</Nav.Link>
            <Nav.Link as={Link} to="/games" style={styles.linkStyle}>Spill |</Nav.Link>
            <Nav.Link as={Link} to="/characters" style={styles.linkStyle}>Karakterer |</Nav.Link>
            <Nav.Link as={Link} to="/locations" style={styles.linkStyle}>Verdener</Nav.Link>
            <Nav.Link as={Link} to="/admin" style={styles.linkAdminStyle}>Admin</Nav.Link>
          </Nav>  
        </Navbar>
        </Headroom>

        <Container>
          <main>
            <Switch>
              <Route exact path="/"        component={Home}></Route>  
              <Route path="/games"         component={Games}></Route>
              <Route path="/characters"    component={Characters}></Route>
              <Route path="/locations"     component={Locations}></Route>
              <Route path="/admin"         component={Admin}></Route>

              {/* Her bruker param id for å finne riktig objekt i databasen. Mer om det i GamePage*/}
              <Route path="/game/:id"      component={GamePage}></Route>
              <Route path="/character/:id" component={CharacterPage}></Route>
              <Route path="/location/:id"  component={LocationPage}></Route>
              
            </Switch>
          </main>
        </Container>
      </Router>
      </div>
  );
}

export default Routes;
