import LocationItem from './LocationItem';
import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { LocationContext } from '../../contexts/LocationContext';

const LocationList = () => {
    const { locations } = useContext( LocationContext );
    const [ locationsState, setLocations ] = locations;

    const generateLocations = () => {
        return locationsState.map( ( location, i ) => {
            return <LocationItem key={i} { ...location } />
        } );
    }

    return (
        <section>
            <Row  xs={ 1 } sm={ 1 } md={ 1 } lg={ 2 } xl={ 3 } >
                { generateLocations() }
            </Row>
        </section>
    )
}

export default LocationList;