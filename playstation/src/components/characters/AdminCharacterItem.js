import { Col, Card, Button, Jumbotron } from 'react-bootstrap';
import {CharacterContext } from '../../contexts/CharacterContext';
import { useContext } from 'react';
import CharacterDelete from './CharacterDelete';

const AdminCharacterItem = ( {id, name, image, alias, desc, age, game, weapon, enemy} ) => {
    const { character, characters, i } = useContext( CharacterContext );
    const [ characterState, setCharacter ] = character;

    const setSelectedCharacter = () => {
        setCharacter({
            id: id, 
            name: name, 
            image: image,
            alias: alias, 
            desc: desc, 
            age: age, 
            game: game,
            weapon: weapon,
            enemy: enemy

        });        
    }

    return (
        <Col>
            <Card>
                <Card.Title>{ name }</Card.Title>
                <Card.Body>
                    <Card.Img src={image} style={{height: 120}}></Card.Img>
                    <Card.Text>{ alias } </Card.Text>
                    <Card.Text>{ desc } </Card.Text>
                    <Card.Text>{ age } </Card.Text>
                    <Card.Text>{ game } </Card.Text>
                    <Card.Text>{ weapon } </Card.Text>
                    <Card.Text>{ enemy } </Card.Text>

                </Card.Body>
                <Button onClick={ setSelectedCharacter } >Oppdater spill</Button>
                <CharacterDelete 
                key={ i }
                id={ id }></CharacterDelete>
            </Card>
        </Col>
    )
}

export default AdminCharacterItem;