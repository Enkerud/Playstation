import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import cardImage from '../../assets/images/godofwar.jpg';
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

    // const moraleStyle = {
    //     if (morale = true){
    //         return {styles.goodStyle}
    //     } else {
    //        return {styles.badStyle}
    //     }
    // };

    // {morale ? styles.goodStyle : styles.badStyle}



            
        


    return (
        <div>
        <Col>
        
            <Card class="card bg-dark text-white" style={styles.goodStyle}>
            <Card.Img src={image} style={styles.imgStyle}></Card.Img>
                <Card.Title>{ name }</Card.Title>
                {/* Skjønner ikke hvorfor ikke det under ikke funker? */}
                
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
