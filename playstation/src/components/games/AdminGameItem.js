import { Col, Card, Button } from 'react-bootstrap';
import {GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';
import GameDelete from './GameDelete';

const AdminGameItem = ( {id, name, image, genre, desc, price, developer, characters, release, locations} ) => {

    const { game, i } = useContext( GameContext );
    const [ setGame ] = game;

    const setSelectedGame = () => {
        setGame({
            id: id, 
            name: name, 
            image: image,
            genre: genre, 
            desc: desc, 
            price: price, 
            developer: developer, 
            characters: characters, 
            release: release, 
            locations: locations
        });
    }

    // Styling
    const styles = {
        imgStyle: {
            height: '120px'
        },
        cardStyle: {
            height: '700px',
            margin: '20px'
        }
    }

    //Her lager jeg et card som skal fungere for adminsiden, med oppdaterings- og deleteknapp.
    return (
        <Col>
            <Card style={styles.cardStyle}>
                <Card.Title>{ name }</Card.Title>
                <Card.Body>
                    <Card.Img src={image} style={styles.imgStyle}></Card.Img>
                    <Card.Text>{ genre } </Card.Text>
                    <Card.Text>{ desc } </Card.Text>
                    <Card.Text>{ price } </Card.Text>
                    <Card.Text>{ developer } </Card.Text>
                    <Card.Text>{ characters } </Card.Text>
                    <Card.Text>{ release } </Card.Text>
                    <Card.Text>{ locations } </Card.Text>
                </Card.Body>
                <Button onClick={ setSelectedGame } >Oppdater spill</Button>
                <GameDelete 
                key={ i }
                id={ id }></GameDelete>
            </Card>
        </Col>
    )
}

export default AdminGameItem;