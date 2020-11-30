import { Col, Card, Button } from 'react-bootstrap';
import {GameContext } from '../contexts/GameContext';
import { useContext } from 'react';
import cardImage from '../assets/images/katt.jpg';

const FullGame = ( {id, name, genre, developer, image} ) => {

    const { game } = useContext( GameContext );

 


    return (
        <Col>
            <Card>
                <Card.Title>{ name }</Card.Title>
                <Card.Img src={require('../assets/images/katt.jpg')}></Card.Img>
                <Card.Img src={cardImage}></Card.Img>
                <Card.Body>
                    <Card.Text>{ genre } </Card.Text>
                    <Card.Text>{ developer } </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default FullGame;
