import axios from 'axios';
import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import {LocationContext } from '../../contexts/LocationContext';

const LocationDelete = (props) => {

    const { location } = useContext( LocationContext );
    const [ setLocation ] = location;

    const deleteLocation = () => {
        const url ="https://localhost:5001/Locations";
        axios.delete(`${url}/${props.id}`, setLocation)
            .then(response => {
                console.log(response);
            });   
    }

    return (
        <Button variant="danger"
            onClick={ deleteLocation}>Slett
        </Button>
    )
}

export default LocationDelete;