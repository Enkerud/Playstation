import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Games from './views/Games';
import Characters from './views/Characters';

function App() {
  return (
    <div>
      <h3>PLAYSTATION</h3>
      <label>
        <input type="text" ></input>
      </label>

      <BrowserRouter>
      <ul>
        <li><Link to="/" >Hjem</Link></li>
        <li><Link to="/games" >Spill</Link></li>
        <li><Link to="/characters" >Karakterer</Link></li>
      </ul>
        <Switch>
          <Route exact path ="/" component={ Games } ></Route>
          <Route path="/characters" component={ Characters } ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
