import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import cardImage from '../../assets/images/godofwar.jpg';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const GameItem = ( {id, name, genre, developer, image} ) => {

    const styles = {
        cardStyle: {
            textAlign: 'center',
            margin: '1em',
            width: 'auto'
        },
        imgStyle: {
            height: "180px",
        }};

    return (
        <div>

        <Col>
        
            <Card class="card bg-dark text-white" style={styles.cardStyle}>
            <Card.Img src={image} style={styles.imgStyle}></Card.Img>
                <Card.Title>{ name }</Card.Title>

                {/*         <img src={require(`../../assets/images/${image}`)}></img>
                Her skulle dette fungert, slik at jeg kunne dynamisk ha inn forskjellige bilder i de forskjellige card'ene. 
                Etter å ha rådført meg med foreleser fant vi ut at det har blitt endringer i en webpack.config - file-loader 
                konfigurasjon, som gjør det jeg har lært vanskelig og gir meg ikke tid til å sette meg inn i det før innleveringsfrist.
                 */}

                <Card.Body>
                    <Card.Text>{ genre } </Card.Text>
                    <Card.Text>{ developer } </Card.Text>
                    <Link to={`/game/${id}`}>
                        <Button>Les mer om "{name}"</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
        </div>
    )
}

export default GameItem;
