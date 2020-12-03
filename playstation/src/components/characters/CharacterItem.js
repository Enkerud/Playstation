import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterItem = ( {id, name, alias, game, image, morale} ) => {

    const styles = {
        cardStyle: {
            textAlign: 'center',
            margin: '1em',
            width: 'auto'
        },
        imgStyle: {
            height: "200px",
        }   
    };

    return (
        <div>
        <Col>
            <Card style={styles.goodStyle}>
            <Card.Img src={image} style={styles.imgStyle}></Card.Img>
                <Card.Title>{ name }</Card.Title>                
                <Card.Body style={styles.goodStyle}>
                    <Card.Text>{ alias } </Card.Text>
                    <Card.Text>{ game } </Card.Text>
                    <Link to={`/character/${id}`}>
                        <Button>{name}'s side</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
        </div>
    )
}

export default CharacterItem;