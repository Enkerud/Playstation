import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import cardImage from '../../assets/images/godofwar.jpg';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LocationItem = ( {id, name, game, image, desc } ) => {

    const styles = {
        cardStyle: {
            textAlign: 'center',
            margin: '1em',
            width: 'auto'
        },
        imgStyle: {
            height: "200px",
        },
        goodStyle: {
            border: '5px',
            borderColor: 'green'
        },
        badStyle: {
            border: '5px',
            borderColor: 'red'
        }        
    };

    return (
        <div>
        <Col>     
            <Card style={styles.goodStyle}>
            <Card.Img src={image} style={styles.imgStyle}></Card.Img>
                <Card.Title>{ name }</Card.Title>              
                <Card.Body style={styles.goodStyle}>
                    <Card.Text>{ game } </Card.Text>
                    <Link to={`/location/${id}`}>
                        <Button>{name}'s side</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
        </div>
    )
}

export default LocationItem;