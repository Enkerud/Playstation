import { Col, Card } from 'react-bootstrap';
import cardImage from '../../assets/images/pup4.png';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import GamePage from './GamePage';


const GameItem = ( {id, name, genre, developer, image} ) => {

    
<Route  path={`/game/${id}`} render={props => <GamePage {...props} /> } />



    return (
        <Col>
            <Card>
            <Link to={`/game/${id}`}>{name}'s Page</Link>
                <Card.Title>{ name }</Card.Title>
                {/* Skjønner ikke hvorfor ikke det under ikke funker? */}
                <Card.Img src={require('../../assets/images/katt.jpg')}></Card.Img>
                <Card.Img src={cardImage}></Card.Img>
                <Card.Body>
                    <Card.Text>{ genre } </Card.Text>
                    <Card.Text>{ developer } </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default GameItem;
