import { Col, Card, Button } from 'react-bootstrap';
import {GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';

const AdminGameItem = ( {id, name, genre, desc, price, developer, characters, release, locations} ) => {

    const { game } = useContext( GameContext );
    const [ gameState, setGame ] = game;

    const setSelectedGame = () => {
        setGame({
            id: id, 
            name: name, 
            genre: genre, 
            desc: desc, 
            price: price, 
            developer: developer, 
            characters: characters, 
            release: release, 
            locations: locations
        });
    }


    return (
        <Col>
            <Card>
                <Card.Title>{ name }</Card.Title>
                <Card.Body>
                    <Card.Text>{ genre } </Card.Text>
                    <Card.Text>{ desc } </Card.Text>
                    <Card.Text>{ price } </Card.Text>
                    <Card.Text>{ developer } </Card.Text>
                    <Card.Text>{ characters } </Card.Text>
                    <Card.Text>{ release } </Card.Text>
                    <Card.Text>{ locations } </Card.Text>
                </Card.Body>
                <Button onClick={ setSelectedGame } >Oppdater Game</Button>
            </Card>
        </Col>
    )
}

export default AdminGameItem;
