import { Col, Card, Button } from 'react-bootstrap';
import {GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';

const GameItem = ( {id, name, genre, developer} ) => {

    const { game } = useContext( GameContext );
    const [ gameState, setGame ] = game;

    const setSelectedGame = () => {
        setGame({id: id, name: name, genre: genre, developer: developer});
    }


    return (
        <Col>
            <Card>
                <Card.Title>{ name }</Card.Title>
                <Card.Body>
                    <Card.Text>{ genre } </Card.Text>
                    <Card.Text>{ developer } </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default GameItem;
