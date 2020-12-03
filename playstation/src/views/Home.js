import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Col, Row, Card, Button } from 'react-bootstrap';
import React from 'react';
import Banner from 'react-js-banner';
import cardImage from '../assets/images/godofwar.jpg';

const Games = () => {

    const styles = {
        cardStyle: {
            textAlign: 'center',
            fontSize: '60px',
            width: '900px',
            margin: 'auto',
            marginBottom: '15px',
            color: 'black',
            backgroundColor: 'azure'
        },
        bannerStyle: {
            marginTop: '90px',
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
            }} >PlaystationPortalen Norge</h3>

        <Row >
            <Card style={styles.cardStyle}>
            <Card.Img src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200704183430/horizon-zero-dawn-impact-poster-ps4-us-07feb17.jpg" alt="Card image" />
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

          {/* Bannere som skal lede til Playstation sine offisielle sider */}
            <a href="https://store.playstation.com/en-no/latest" target="_blank">
        <Banner style={styles.bannerStyle}
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