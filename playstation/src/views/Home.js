import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Col, Row, Card, Button } from 'react-bootstrap';
import React from 'react';
import Banner from 'react-js-banner';
import cardImage from '../assets/images/godofwar.jpg';

//TODO: Fikse bilde i card

const Games = () => {

    const styles = {
        cardStyle: {
            fontSize: '60px',
            width: '15em',
            height: '',
            margin: '15px',
            color: 'black',
            bot: '0%',
            backgroundColor: 'azure'
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

        <Row style={{
                margin: 'auto',
            }}>
            <Card style={styles.cardStyle}>
            <Card.Img src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200704183430/horizon-zero-dawn-impact-poster-ps4-us-07feb17.jpg" alt="Card image" variant="bottom"/>
                        <Card.Text>Oppdag nye spill</Card.Text>
            </Card>


            <Card style={styles.cardStyle}>
                <Card.Img src="https://image-cdn.essentiallysports.com/wp-content/uploads/20201015170515/jKyZh7AmtzFheyg3GWUn3k.jpg"></Card.Img>
                <Card.Body>
                    <Card.Text>Lær mer om karakterene du liker best!</Card.Text>
                </Card.Body>
            </Card>

            <Card style={styles.cardStyle}>
                
                <Card.Img src="https://images6.alphacoders.com/983/983639.png"></Card.Img>
                    <Card.Body>
                    <Card.Text>Drøm deg bort i utrolige spillverdener!</Card.Text>
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