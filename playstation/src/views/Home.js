import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Col, Row, Card, Button } from 'react-bootstrap';
import React from 'react';
import Banner from 'react-js-banner';

//TODO: Fikse bilde i card

const Games = () => {

    const styles = {
        cardStyle: {
            margin: '20px',
            textAlign: 'center',
        }
    };
 return (
        <section>
            <h3
            style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '80px',
                margin: '40px'
            }} >Playstation</h3>

        <Row>
            <Card style={styles.cardStyle}>
                <Card.Img src={require("../assets/images/katt.jpg")}></Card.Img>
                <Card.Title>Oppdag nye spill</Card.Title>
                <Card.Body>
                    <Card.Text>Se hvilke spill som kan passe for deg! </Card.Text>
                </Card.Body>
            </Card>
            <Card style={styles.cardStyle}>
                <Card.Title>Se på dine favorittkarakterer</Card.Title>
                <Card.Img src={require("../assets/images/katt.jpg")}></Card.Img>
                <Card.Body>
                    <Card.Text>Lær mer om karakterene du liker best!</Card.Text>
                </Card.Body>
            </Card>
            <Card style={styles.cardStyle}>
                <Card.Title>Utforsk verdener!</Card.Title>
                <Card.Body>
                <Card.Img src={require("../assets/images/katt.jpg")}></Card.Img>
                    <Card.Text>Drøm deg bort i utrolige spillverdener</Card.Text>
                </Card.Body>
            </Card>
        </Row>    

            <a href="https://store.playstation.com/en-no/latest" target="_blank">
        <Banner 
            title="Kjøp spill hos Playstation Store" 
        />
        </a>
        <a href="https://blog.playstation.com/" target="_blank">

            <Banner
            title="Les nyheter på Playstations offisielle blogg" 
        />
        </a>
        

        </section>
        
    )
}

export default Games;