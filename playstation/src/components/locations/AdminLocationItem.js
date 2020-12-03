import { Col, Card, Button, Jumbotron } from 'react-bootstrap';
import {LocationContext } from '../../contexts/LocationContext';
import { useContext } from 'react';
import LocationDelete from './LocationDelete';




const AdminLocationItem = ( {id, name, image, desc, game, enemies} ) => {

    const { location, locations, i } = useContext( LocationContext );
    const [ locationState, setLocation ] = location;

    const setSelectedLocation = () => {
        setLocation({
            id: id, 
            name: name, 
            image: image,
            desc: desc,  
            game: game,
            enemies: enemies

        });

        
    }


    return (
        <Col>
            <Card>
                <Card.Title>{ name }</Card.Title>
                <Card.Body>
                    <Card.Img src={image} style={{height: 120}}></Card.Img>
                    <Card.Text>{ desc } </Card.Text>
                    <Card.Text>{ game } </Card.Text>
                    <Card.Text>{ enemies } </Card.Text>

                </Card.Body>
                <Button onClick={ setSelectedLocation } >Oppdater spill</Button>
                <LocationDelete 
                key={ i }
                id={ id }></LocationDelete>
            </Card>
        </Col>
    )
}


export default AdminLocationItem;