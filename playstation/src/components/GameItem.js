import { Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';

const GameItem = ( {id, name, type} ) => {

    const { game } = useContext( GameContext );
    const [ gameState, setGame ] = game;

    const setSelectedGame = () => {
        setGame({id: id, name: name, type: type});
    }


    return (
        <Col>
            <Card>
                <Card.Title>{ name }</Card.Title>
                <Card.Body>
                    <Card.Text>Type: { type } </Card.Text>
                </Card.Body>
                <Button onClick={ setSelectedGame } >Oppdater Game</Button>
            </Card>
        </Col>
    )
}

export default GameItem