import { Col, Card } from 'react-bootstrap';
import {GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';
import cardImage from '../../assets/images/pup4.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GamePage from './GamePage';


const GameItem = ( {id, name, genre, developer, image} ) => {

    const { game } = useContext( GameContext );
    
<Route path={`/game/${id}`} component={GamePage} />

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
